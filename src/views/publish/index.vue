<template>
  <el-card>
      <bread-crumb slot="header">
    <template slot="title">发布文章</template>
  </bread-crumb>
  <!-- 发布文章结构 -->
  <el-form ref="publishForm" :model="formData" :rules="publishRules" style="margin-left:10px" label-width="100px">
      <el-form-item label="标题" prop="title">
          <el-input v-model="formData.title" style="width:400px" placeholder="文章标题"></el-input>
      </el-form-item>
      <el-form-item  label="内容" prop="content">
          <el-input v-model="formData.content" type="textarea" :rows="4"></el-input>
      </el-form-item>
      <el-form-item label="封面" >
          <el-radio-group v-model="formData.cover.type">
              <el-radio :label="1">单图</el-radio>
              <el-radio :label="2">三图</el-radio>
              <el-radio :label="0">无图</el-radio>
              <el-radio :label="-1">自动</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="频道" prop="channel_id">
          <el-select v-model="formData.channel_id">
              <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item>
          <el-button @click="publish" type="primary">发表文章</el-button>
          <el-button>存入草稿</el-button>
      </el-form-item>
  </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [],
      formData: {
        title: '',
        content: '',
        cover: {
          type: 0,
          images: []
        },
        channel_id: null

      },
      publishRules: {
        title: [{
          required: true,
          message: '标题要填哦'
        }],
        content: [{
          required: true,
          message: '内容要填哦'
        }],
        channel_id: [{
          required: true,
          message: '频道不能为空'
        }]
      }
    }
  },
  methods: {
    publish () {
      this.$refs.publishForm.validate((isOk) => {
        if (isOk) {
          this.$http({
            url: '/articles',
            method: 'post',
            data: this.formData,
            params: { draft: false }

          }).then(res => {
            this.$router.push('/home/articles')
          })
        }
      })
    },
    getChannels () {
      this.$http({
        url: '/channels'
      }).then(res => {
        // console.log(res.data.channels)
        this.channels = res.data.channels
      })
    },
    getArticleByid (articleId) {
      this.$http({
        url: `/articles/${articleId}`
      }).then(res => {
        this.formData = res.data
        console.log(res.data)
      })
    }
  },
  created () {
    this.getChannels()
    let { articleId } = this.$route.params // 获取id
    if (articleId) {
      // 如果id存在修改文章通过id获取当前的文章数据
      this.getArticleByid(articleId)
    }
  }
}
</script>

<style>

</style>
