<template>
<!-- 最外侧 -->
<el-container>
  <!-- 左侧 -->
  <el-aside style="width:200px">
    <left-aside></left-aside>
  </el-aside>
  <!-- 右侧 -->
  <el-container>
    <!-- 顶栏 -->
  <el-header>
    <layout-header></layout-header>
  </el-header>
  <!-- 中间 -->
  <el-main>
    中间
  </el-main>
  </el-container>
</el-container>
</template>

<script>
import leftAside from '../../compnents/home/leftaside.vue'
import layoutHeader from '../../compnents/home/layout-heder.vue'
export default {
  components: {
    'left-aside': leftAside,
    'layout-header': layoutHeader
  }
}
</script>

<style>

</style>
