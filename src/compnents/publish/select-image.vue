<template>
  <el-tabs v-model="activeName" class="select-image">
    <el-tab-pane label="全部素材" name="all">
      <!-- 全部素材部分 -->
      <div class="all-materail">
        <el-card class="all-img" v-for="item in list" :key="item.id">
          <img @click="selectImage(item)" :src="item.url" alt />
        </el-card>
      </div>
      <el-row type="flex" justify="center">
        <el-pagination
          @current-change="changePage"
          :current-page="page.page"
          :page-size="page.pageSize"
          background
          layout="prev, pager, next"
          :total="page.total"
        ></el-pagination>
      </el-row>
    </el-tab-pane>

    <el-tab-pane label="上传图片" name="upload">
      <!-- 上传图片部分 -->
      <el-upload :http-request="uploadImg" class="avatar-uploader" action="" :show-file-list="false">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        page: 1,
        pageSize: 8,
        total: 100
      }
    }
  },
  methods: {
    uploadImg (params) {
      let formData = new FormData()
      formData.append('image', params.file)
      this.$http({
        url: '/user/images',
        method: 'post',
        data: formData
      }).then(res => {
        this.$emit('onSelectImg', res.data.url)
      })
    },
    selectImage (img) {
      // 获取一张图片
      // 获取到点击图片的地址
      this.$emit('onSelectImg', img.url)
    },
    changePage (newPage) {
      this.page.page = newPage
      this.getMaterial()
    },
    getMaterial () {
      this.$http({
        url: '/user/images',
        params: {
          collect: false,
          page: this.page.page,
          per_page: this.page.pageSize
        }
      }).then(res => {
        this.list = res.data.results
        this.page.total = res.data.total_count
        console.log(this.list)
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
.select-image {
  .all-materail {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .all-img {
      margin: 20px 10px;
      width: 120px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
