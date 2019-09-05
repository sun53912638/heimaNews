<template>
  <!-- 最外层用el-card卡面 -->
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table
      :data="list"
      stripe
      v-loading="loading"
      element-loading-text="玩命奔跑中,小主请稍后...................................................."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(1, 1, 1, 0.8)"
    >
      <el-table-column width="600" prop="title" label="标题"></el-table-column>
      <el-table-column align="center" :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column align="center" prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column align="center" prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column width="200" align="center" prop label="操作">
        <template slot-scope="obj">
          <!-- 这是作用域插槽,elementUI提供的,通过slot-scope属性可以取到一个对象,通过这个对象可以取到行数据,然后可以取到行数据里面的值-->
          <el-button size="mini" round type="primary" icon="el-icon-view">修改</el-button>
          <el-button
            @click="getConment(obj.row)"
            size="mini"
            :type="obj.row.comment_status ? 'success' : 'warning'"
            round
          >{{obj.row.comment_status ? '关闭' : '打开'}}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center" style="margin : 10px 0">
      <el-pagination
        @current-change="changePage"
        highlight-current-row
        :current-change="page.page"
        :page-size="page.pageSize"
        :total="page.total"
        background
        layout="prev, pager, next"
      ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      loading: true
    }
  },
  methods: {
    changePage (newPage) {
      // 给当前页更新最新值
      this.page.page = newPage
      this.getVomments()
    },
    getConment (row) {
      // 打开或关闭评论
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`嘿,你要${mess}评论嘛`, '悄悄话', {
        confirmButtonText: '嗯呢',
        cancelButtonText: '再考虑一下',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$http({
            method: 'put',
            url: '/comments/status',
            params: { article_id: row.id.toString() },
            data: { allow_comment: !row.comment_status }
          }).then(res => {
            this.getVomments()
          })
          console.log(row.id.toString())
          this.$message({
            type: 'success',
            message: `已经${mess}了哦!`
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '别人可以评论你喽'
          })
        })
    },
    formatter (row) {
      // formatter是el-column的属性可以根据布尔值显示数据
      return row.comment_status ? '正常' : '关闭'
    },
    getVomments () { // 请求文章列表
      this.loading = true// 请求数据之前把进度条打开
      this.$http({
        url: '/articles',
        params: {
          response_type: 'comment',
          page: this.page.page,
          per_page: this.page.pageSize
        }
      }).then(res => {
        this.loading = false// 响应数据之后把进度条关闭
        this.list = res.data.results
        this.page.total = res.data.total_count
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
