import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'// 框架组件
import Component from './compnents'// 自定义组件
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 赋值基础地址
Vue.prototype.$http = axios// Vue对象的原型赋值,所有Vue实例自动拥有$http属性

Vue.use(ElementUi)// 全局注册框架组件
Vue.use(Component)// 全局注册全局组件

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
