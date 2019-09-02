<template>
<div class="leftaside">
    <div class="top">
        <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <el-menu
      background-color="#353b4e"
      text-color="#adafb5"
      active-text-color="#ffd04b"  class="menu">
      <el-menu-item index="1">
        <i class="el-icon-reading"></i>
        <span slot="title">首页</span>
      </el-menu-item>
       <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-notebook-2"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">发布文章</el-menu-item>
          <el-menu-item index="1-2">内容列表</el-menu-item>
          <el-menu-item index="1-3">评论列表</el-menu-item>
          <el-menu-item index="1-4">素材管理</el-menu-item>
        </el-menu-item-group>
       </el-submenu>
       <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-ice-tea"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-5">图文数据</el-menu-item>
          <el-menu-item index="1-6">粉丝概况</el-menu-item>
          <el-menu-item index="1-7">粉丝画像</el-menu-item>
          <el-menu-item index="1-8">粉丝列表</el-menu-item>
        </el-menu-item-group>
       </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-chat-line-round"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.leftaside {
    width: 200px;
    height: 100vh;
    background-color: #353b4e;
   .top {
    height: 50px;
    background-color: #2e2f32;
    text-align: center;
    padding-top: 6px;
    img {
        height: 30px;
    }
    .menu {
        border-right: 1px solid #353b4e;
    }

}
}
</style>
