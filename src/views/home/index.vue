<template>
<!-- 最外侧 -->
<el-container>
  <!-- 左侧 -->
  <el-aside :style="{width:collapse ? '60px' : '200px'}" style="background: #3db89b">
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
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collapse: false
    }
  },
  created () {
    eventBus.$on('openOrClose', (status) => { // 听电话接收参数
      this.collapse = status
    })
  }
}
</script>

<style>

</style>
