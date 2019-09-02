import router from './router'
router.beforeEach(function (to, from, next) {
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
export default router
