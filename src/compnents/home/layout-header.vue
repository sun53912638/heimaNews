<template>
  <el-row class="layout-header" type="flex" justify="space-between">
    <el-col :span="7" class="left">
      <i class="el-icon-s-unfold"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
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
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')// 转成base64字符串,因为三元表达式不会将路径转成字符串,vue不认识,所以这么操作
    }
  },
  methods: {
    getUserInfo () {
      let token = window.localStorage.getItem('user-token')// 获取token
      this.$http({
        url: '/user/profile',
        headers: { 'Authorization': `Bearer ${token}` }// 注意Bearer后面要有空格!!!
      }).then(res => {
        this.userInfo = res.data.data
        console.log(this.userInfo)
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
    .el-icon-s-unfold {
      font-size: 22px;
      margin-right: 2px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    .head-img {
      border-radius: 50%;
      padding-right: 6px;
      width: 40px;
    }
  }
}
</style>
