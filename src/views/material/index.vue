<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-tabs type="card" @tab-click="changeTab">
      <el-tab-pane label="全部素材" name="first">
        <!-- 全部素材 -->
      </el-tab-pane>
      <el-tab-pane label="收藏内容" name="second">
        <!-- 收藏内容 -->
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      list: []
    }
  },
  methods: {
    changeTab () {

    },
    getMaterial () {
      this.$http({
        url: '/articles',
        prama
      })
    }
  }
}
</script>

<style>
</style>
