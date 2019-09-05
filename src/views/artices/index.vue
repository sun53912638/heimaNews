<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">内容管理</template>
    </bread-crumb>
    <el-form style="margin-left:40px" class="artices">
      <el-form-item label="文章状态:">
        <el-radio-group>
          <el-radio>全部</el-radio>
          <el-radio>草稿</el-radio>
          <el-radio>待审核</el-radio>
          <el-radio>审核通过</el-radio>
          <el-radio>审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频道列表:">
        <!-- <el-select></el-select> -->
      </el-form-item>
      <el-form-item label="时间选择:">
        <el-date-picker
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <!-- 内容的页面结构 -->
      <div class="total-info">共找到190938条结果</div>
    </el-form>
    <div class="article-list">
      <!-- 循环项 -->
      <div class="article-item" v-for="(item,index) in list" :key="index">
        <!--左侧内容  -->
        <div class="left">
          <img :src="item.cover.images.length ? item.cover.images[0] :iconImg" alt />
          <div class="info">
            <span class="title">{{item.title}}</span>
            <el-tag type="success" style="width:60px">{{item.status | statusText}}</el-tag>
            <span class="date">{{item.pubdate}}</span>
          </div>
        </div>
        <!-- 右侧内容 -->
        <div class="right">
          <span>
            <i class="el-icon-edit">修改</i>
          </span>
          <span>
            <i class="el-icon-delete">删除</i>
          </span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      iconImg: require('../../assets/img/404.png')
    }
  },
  methods: {
    getArticles () {
      this.$http({
        url: '/articles'
      }).then(res => {
        this.list = res.data.results
      })
      console.log(this.list)
    }
  },
  created () {
    this.getArticles()
  },
  filters: {
    statusText (val) {
      switch (val) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.total-info {
  color: #323745;
  border-bottom: 1px dashed #ccc;
  padding: 15px 0;
  font-size: 14px;
}
.article-list {
  font-size: 14px;
  .article-item {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #f2f3f5;
    .left {
      display: flex;
      img {
        width: 180px;
        height: 100px;
        border-radius: 4px;
      }
      .info {
        height: 100px;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        justify-content: space-around;
        color: #336;
        .date {
          color: #999;
          font-size: 12px;
        }
      }
    }
    .right {
      font-size: 12px;
      span {
        margin-right: 8px;
        cursor: pointer;
        color: #333;
      }
    }
  }
}
</style>
