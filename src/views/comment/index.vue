<template>
  <!-- 最外层用el-card卡面 -->
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table :data="tableData">
      <el-table-column width="700" prop="date" label="标题">标题</el-table-column>
      <el-table-column prop="name" label="评论状态">评论状态</el-table-column>
      <el-table-column prop="address" label="总评论数">总评论数</el-table-column>
      <el-table-column prop="address" label="粉丝评论数">粉丝评论数</el-table-column>
      <el-table-column prop="address" label="操作">操作</el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
