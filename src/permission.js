import router from './router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
router.beforeEach(function (to, from, next) { // 导航守卫全局解析守卫
  nprogress.start()// 开启进度条
  // 如果以/home为起始就说明需要加判断
  if (to.path.startsWith('./home')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
router.afterEach(function () { // 导航守卫全局后置钩子
  nprogress.done()// 关闭进度条
})
export default router
