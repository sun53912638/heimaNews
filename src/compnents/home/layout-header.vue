<template>
  <el-row class="layout-header" type="flex" justify="space-between">
    <el-col :span="7" class="left">
      <i @click="openOrClose" :class="{'el-icon-s-unfold':close,'el-icon-s-fold':!close}" class="icon"></i>
      <span>北京市英杰网络科技有限公司</span>
    </el-col>
    <el-col :span="3" class="right">
      <img class="head-img" :src="userInfo.photo ? userInfo.photo : defaultImg" alt />
      <el-dropdown trigger="click" @command="handleMenuItem">
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="accout">个人信息</el-dropdown-item>
          <el-dropdown-item command="git">git地址</el-dropdown-item>
          <el-dropdown-item command="login">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      close: false, // 默认是展开
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')// 转成base64字符串,因为三元表达式不会将路径转成字符串,vue不认识,所以这么操作
    }
  },
  methods: {
    openOrClose () { // 展开或者折叠导航栏
      this.close = !this.close
      eventBus.$emit('openOrClose', this.close)// 拨号携带参数布尔值
    },
    getUserInfo () {
      this.$http({
        url: '/user/profile'
      }).then(res => {
        this.userInfo = res.data
        // console.log(this.userInfo)
      })
    },
    handleMenuItem (command) { // command属性是element的
      if (command === 'account') {

      } else if (command === 'git') {
        window.location.href = 'https://github.com/sun53912638/heimaNews'
      } else {
        window.localStorage.clear()
        this.$router.push('/login')// 跳转到登录页
      }
    }

  },
  created () {
    eventBus.$on('updateUserInfo', () => {
      this.getUserInfo()
    })// 一开始一直监听电话信息,听电话=> 做动作,那边用户信息保存成功,这边立刻从新拉取数据信息
    this.getUserInfo()
  }
}
</script>

<style lang='less' scoped>
.layout-header {
  padding: 10px 0;
  .left {
    display: flex;
    align-items: center;
    .icon {
      font-size: 22px;
      margin-right: 2px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    .head-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 4px;
    }
  }
}
</style>
