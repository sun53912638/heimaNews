<template>
<el-card>
    <bread-crumb slot="header">
        <template slot="title">个人信息</template>
    </bread-crumb>
      <el-upload  v-loading="loading" action="" :http-request="uploadHeadImg" :show-file-list="false">
        <img class="photo" :src="userInfo.photo || dafaultImg" alt="">
      </el-upload>
    <el-form ref="userForm" :model="userInfo" :rules="userRules" label-width="100px" style="margin-left:40px">
        <el-form-item label="用户名" prop="name">
            <el-input v-model="userInfo.name" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="intro">
            <el-input v-model="userInfo.intro" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="userInfo.email" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
            <el-input disabled v-model="userInfo.mobile" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="saveUserInfo" type="primary">保存</el-button>
        </el-form-item>
    </el-form>
</el-card>
</template>

<script>
import eventBus from '../../utils/eventBus'// 公共的vue实例
export default {
  data () {
    return {
      dafaultImg: require('../../assets/img/pic_bg.png'),
      loading: '',
      userInfo: {
        name: '',
        intro: '',
        photo: '',
        email: '',
        mobile: ''
      },
      userRules: {
        name: [{
          required: true,
          message: '用户名不能为空'
        }, {
          min: 2,
          max: 10,
          message: '用户名只能在2到10位之间'
        }],
        intro: [{
          required: true,
          message: '简介不能为空'
        }],
        email: [{
          pattern: /\w+@[a-z0-9]+\.[a-z]{2,4}/,
          message: '请输入正确的邮箱格式'
        }]

      }
    }
  },
  methods: {
    uploadHeadImg (params) {
      this.loading = true// 显示进度条
      let image = new FormData()
      image.append('photo', params.file)
      this.$http({
        url: '/user/photo',
        method: 'patch',
        data: image
      }).then(() => {
        eventBus.$emit('updateUserInfo')
        this.loading = false
        this.getUserInfo()
      })
    },
    saveUserInfo () {
      this.$refs.userForm.validate((isOk) => {
        if (isOk) {
          this.$http({
            url: '/user/profile',
            method: 'patch',
            data: this.userInfo
          }).then(() => {
            this.$message({ type: 'success', message: '恭喜保存用户信息成功' })
            // 成功之后要通知头部去更新数据
            eventBus.$emit('updateUserInfo')// 相当于打出了一个电话,电话号是updateUserInfo
          })
        }
      })
    },
    getUserInfo () {
      this.$http({
        url: '/user/profile'
      }).then(res => {
        this.userInfo = res.data
        console.log(this.userInfo)
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
   .photo {
     width: 220px;
    height: 220px;
    position: absolute;
    left: 860px;
    border-radius: 50%;
    border:2px solid #655
  }

</style>
