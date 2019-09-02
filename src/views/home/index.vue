<template>
<!-- 最外侧 -->
<el-container>
  <!-- 左侧 -->
  <el-aside style="width:200px;background-color: #353b4e">
    <left-aside></left-aside>
  </el-aside>
  <!-- 右侧 -->
  <el-container>
    <!-- 顶栏 -->
  <el-header>
    <layout-header></layout-header>
  </el-header>
  <!-- 中间 -->
  <el-main style="margin:0;padding:0">
    <router-view></router-view>
  </el-main>
  </el-container>
</el-container>
</template>

<script>

export default {
}
</script>

<style>

</style>
