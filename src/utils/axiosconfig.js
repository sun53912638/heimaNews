// 处理axios拦截器,请求拦截器和响应拦截器

import axios from 'axios'
import router from '../router'
import JsonBig from 'json-bigint' // 处理js数据精度
import {
  Message
} from 'element-ui' // elementui提供的方法,

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值基础地址
axios.defaults.transformResponse = [function (data) {
  // debugger
  return JsonBig.parse(data)
}]

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // config是axios的默认请求配置和传入的配置结合出来的
  //   必须return
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}` // 同意注入token
  return config
}, function () {})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {} // 里面是请求的返回结果
}, function (err) {
  let status = err.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证用户,无权限登录'
      break
    case 507:
      message = '服务器或数据异常'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401:
      window.localStorage.clear() // 因为token有可能过期,清除垃圾token
      router.push('/login') // 变成式导航,上面已经拿到router
      break
    default:
      message = '未知错误'
      break
  }
  Message({
    type: 'warning',
    message
  })
  return new Promise(function () {}) // 直接返回一个promise表示错误已经处理掉,相当于强行截止错误
})

export default {
  install (Vue) {
    Vue.prototype.$http = axios // Vue对象的原型赋值,所有Vue实例自动拥有$http属性
  }
}
