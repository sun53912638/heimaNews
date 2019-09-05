<template>
  <el-card class="material">
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- 上传组件 -->
    <el-upload class="upload-img" :show-file-list="false" action="" :http-request="uploadImg" >
        <el-button type="primary" size="small">上传图片</el-button>
    </el-upload>
    <el-tabs type="card" v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部素材" name="all">
        <!-- 全部素材 -->
        <div class="card-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <el-row class="operate" type="flex" align="middle" justify="space-around">
              <i
                @click="collectOrCancal(item)"
                :style="{color: item.is_collected ? 'yellow' : '#266'}"
                class="el-icon-star-on"
              ></i>
              <i @click="delImg(item.id)" class="el-icon-delete-solid"></i>
            </el-row>

          </el-card>
        </div>
        <el-row type="flex" justify="center">
          <el-pagination
            @current-change="changePage"
            :page-size="page.pageSize"
            :current-page="page.page"
            background
            layout="prev, pager, next"
            :total="page.total"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏内容" name="collect">
        <!-- 收藏内容 -->
        <div class="card-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
          </el-card>
        </div>
        <el-row type="flex" justify="center">
          <el-pagination
            @current-change="changePage"
            :page-size="page.pageSize"
            :current-page="page.page"
            background
            layout="prev, pager, next"
            :total="page.total"
          ></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 100
      }
    }
  },
  methods: {
    uploadImg (params) { // 选择完图片之后执行
      let obj = new FormData()
      obj.append('image', params.file)
      console.log(params)
      this.$http({
        url: '/user/images',
        method: 'post',
        data: obj
      }).then(res => {
        this.getMaterial()
      })
    },
    collectOrCancal (item) {
      let mess = item.is_collected ? '取消' : ''
      this.$confirm(`您确认要${mess}收藏么`, '悄悄话').then(() => {
        this.$http({
          url: `/user/images/${item.id}`, // 参数前面的/一定要写
          method: 'put',
          data: {
            collect: !item.is_collected
          }
        }).then(res => {
          this.getMaterial()
        })
      })
    },
    delImg (id) {
      this.$confirm('您确定不要它了哦', '叮铃铃').then(() => {
        this.$http({
          method: 'delete',
          url: `/user/images/${id}`
        }).then(res => {
          this.getMaterial()
        })
      })
    },
    changePage (newPage) {
      this.page.page = newPage
      this.getMaterial()
    },
    changeTab () {
      this.page.page = 1
      this.getMaterial()
    },
    getMaterial () {
      this.$http({
        url: '/user/images',
        params: {
          page: this.page.page,
          per_page: this.page.pageSize,
          collect: this.activeName === 'collect' // 为true查询全部数据,为false查询收藏数据
        }
      }).then(res => {
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
.material {
    .upload-img {
        position: absolute;
        right: 10px;
        margin-top: -4px;
    }
  .card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .img-card {
      width: 180px;
      height: 180px;
      margin: 20px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .operate {
        position: absolute;
        width: 100%;
        height: 30px;
        left: 0;
        bottom: 0;
        font-size: 18px;
        color: #266;
        i {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
