<template>
<!-- 最外侧 -->
<el-container>
  <!-- 左侧 -->
  <el-aside>
    <left-aside></left-aside>
  </el-aside>
  <!-- 右侧 -->
  <el-container>
    <!-- 顶栏 -->
  <el-header>
    顶部
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
export default {
  components: {
    'left-aside': leftAside
  }
}
</script>

<style>

</style>
