// 所有自定义组件的插件
import leftAside from './home/leftaside.vue'
import layoutHeader from './home/layout-header.vue'

export default {
  install: function (Vue) {
    Vue.component('left-aside', leftAside) // 注册左侧导航组件
    Vue.component('layout-header', layoutHeader)
  }
}
