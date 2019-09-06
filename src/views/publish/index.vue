<template>
  <el-card>
      <bread-crumb slot="header">
    <template slot="title">发布文章</template>
  </bread-crumb>
  <!-- 发布文章结构 -->
  <el-form style="margin-left:10px" label-width="100px">
      <el-form-item label="标题">
          <el-input style="width:400px" placeholder="文章标题"></el-input>
      </el-form-item>
      <el-form-item label="内容">
          <el-input type="textarea" :rows="4"></el-input>
      </el-form-item>
      <el-form-item label="封面">
          <el-radio-group>
              <el-radio>单图</el-radio>
              <el-radio>三图</el-radio>
              <el-radio>无图</el-radio>
              <el-radio>自动</el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label="频道">
          <el-select v-model="formData.channel_id">
              <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item>
          <el-button type="primary">发表文章</el-button>
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
        channel_id: null

      }
    }
  },
  methods: {
    getChannels () {
      this.$http({
        url: '/channels'
      }).then(res => {
        console.log(res.data.channels)
        this.channels = res.data.channels
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style>

</style>
