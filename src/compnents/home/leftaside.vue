<template>
  <div class="leftaside">
    <div class="top">
      <img :src="collapse ? smallImg : bigImg" alt />
    </div>
    <el-menu
      background-color="#3db89b"
      text-color="#fef"
      active-text-color="#ffd04b"
      :style="{width:collapse ? '61px' : '201px'}"
      router
      :collapse="collapse"
      style="border:none"
    >
      <el-menu-item index="/">
        <i class="el-icon-reading"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index= "1">
        <template slot="title">
          <i class="el-icon-notebook-2"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/publish">发布文章</el-menu-item>
          <el-menu-item index="/home/articles">内容列表</el-menu-item>
          <el-menu-item index="/home/comment">评论列表</el-menu-item>
          <el-menu-item index="/home/material">素材管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index= "2">
        <template slot="title">
          <i class="el-icon-ice-tea"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/home/fansdata">图文数据</el-menu-item>
          <el-menu-item index="/home/fans2">粉丝概况</el-menu-item>
          <el-menu-item index="/home/fans">粉丝画像</el-menu-item>
          <el-menu-item index="/home/fans">粉丝列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/home/account">
        <i class="el-icon-chat-line-round"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collapse: false,
      smallImg: require('../../assets/img/toutiao.png'),
      bigImg: require('../../assets/img/logo_admin.png')
    }
  },
  created () {
    eventBus.$on('openOrClose', (status) => { // 听电话接收参数
      this.collapse = status
    })
  }
}
</script>

<style lang='less' scoped>
.leftaside {
  height: 100vh;
  background: #3db89b;
  i {
    color: #668;
  }
  .top {
    height: 50px;
    background-color:rgb(195, 213, 219);
    text-align: center;
    padding-top: 6px;
    img {
      height: 30px;
    }
  }
}
</style>
