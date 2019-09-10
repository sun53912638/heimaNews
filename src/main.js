import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUi from 'element-ui'// 框架组件
import Component from './compnents'// 自定义组件
import axios from './utils/axiosconfig'
import nprogress from 'nprogress'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less'

Vue.config.productionTip = false

Vue.use(ElementUi)// 全局注册框架组件
Vue.use(Component)// 全局注册全局组件
Vue.use(axios)// 已在axiosconfig中处理

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
