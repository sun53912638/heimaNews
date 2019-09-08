// 所有自定义组件的插件
import leftAside from './home/leftaside.vue'
import layoutHeader from './home/layout-header.vue'
import breadCrumb from './common/breadCrumb.vue'
import coverImage from '../compnents/publish/cover-image.vue'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  install: function (Vue) {
    Vue.component('left-aside', leftAside) // 注册左侧导航组件
    Vue.component('layout-header', layoutHeader)// 左侧导航
    Vue.component('bread-crumb', breadCrumb)// 面包屑
    Vue.component('quill-editor', quillEditor)// 富文本
    Vue.component('cover-image', coverImage)// 注册文章封面组件
  }
}
