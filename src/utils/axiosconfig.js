// 处理axios拦截器,请求拦截器和响应拦截器

import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 赋值基础地址
// 请求拦截器
axios.interceptors.request.use(function (config) {
  // config是axios的默认请求配置和传入的配置结合出来的
//   必须return
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}`// 同意注入token
  return config
}, function () {})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}// 里面是请求的返回结果
}, function () {})

export default {
  install (Vue) {
    Vue.prototype.$http = axios// Vue对象的原型赋值,所有Vue实例自动拥有$http属性
  }
}
