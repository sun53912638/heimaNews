import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less'
Vue.config.productionTip = false
Vue.use(ElementUi)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.proyotype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
