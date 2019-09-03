<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
         <!-- 定义一个插槽 -->
         <slot name="title">评论列表</slot>
    </el-breadcrumb-item>

  </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
