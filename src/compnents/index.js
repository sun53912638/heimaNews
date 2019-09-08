// 所有自定义组件的插件
import leftAside from './home/leftaside.vue'
import layoutHeader from './home/layout-header.vue'
import breadCrumb from './common/breadCrumb.vue'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  install: function (Vue) {
    Vue.component('left-aside', leftAside) // 注册左侧导航组件
    Vue.component('layout-header', layoutHeader)
    Vue.component('bread-crumb', breadCrumb)
    Vue.component('quill-editor', quillEditor)
  }
}
