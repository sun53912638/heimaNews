<template>
  <div class="cover-image">
    <!-- 注册图片点击事件弹出弹层 获取所点图片索引值-->
    <div class="show-img" @click="showDialog(index)" v-for="(item,index) in images" :key="index">
      <img :src="item ? item :defautImg" alt />
    </div>
    <el-dialog class="cover-card" @close="dialogVisbile=false" :visible="dialogVisbile">
      <!-- 素材选择/上传图片 -->
      <select-image @onSelectImg="receiveImg"></select-image>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['images'], // 不能修改
  data () {
    return {
      defautImg: require('../../assets/img/pic_bg.png'), // 定义一个变量base64字符串
      dialogVisbile: false,
      selectIndex: -1
    }
  },
  methods: {
    receiveImg (url) {
      this.$emit('onselectImg', url, this.selectIndex)// 定义变量接收index,把index一起传给父组件a
      this.dialogVisbile = false
    },
    showDialog (index) {
      this.selectIndex = index
      this.dialogVisbile = true
    }
  }
}
</script>

<style lang="less" scoped>
.cover-image {
  display: flex;
  .show-img {
    margin-right: 10px;
    border: 1px solid #ccc;
    padding: 6px;
    width: 240px;
    height: 240px;
    img {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

  }
}
</style>
