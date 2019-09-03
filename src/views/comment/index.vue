<template>
  <!-- 最外层用el-card卡面 -->
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table :data="list">
      <el-table-column width="600" prop="title" label="标题"></el-table-column>
      <el-table-column align="center" :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column align="center" prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column align="center" prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column width="200" align="center" prop label="操作">
        <template slot-scope="obj"><!-- 这是作用域插槽,elementUI提供的,通过slot-scope属性可以取到一个对象,通过这个对象可以取到行数据,然后可以取到行数据里面的值-->
          <el-button size="mini" round type="primary" icon="el-icon-view">修改</el-button>
          <el-button size="mini" :type="obj.row.comment_status ? 'success' : 'warning'" round >{{obj.row.comment_status ? '关闭' : '打开'}}评论</el-button>
        </template>
      </el-table-column>
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
    formatter (row) {
      // formatter是el-column的属性可以根据布尔值显示数据
      return row.comment_status ? '正常' : '关闭'
    },
    getVomments () {
      this.$http({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(res => {
        this.list = res.data.results
        console.log(res.data.results)
      })
    }
  },
  created () {
    this.getVomments()
  }
}
</script>

<style>
</style>
