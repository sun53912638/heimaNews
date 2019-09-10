import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'// 简写,会识别到这个文件夹下的index.vue
import Main from './views/home/main.vue'
import NotFount from './views/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', // 匹配找不到页面的路由
      component: NotFount
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '', // 默认的二级路由  的地址 path为空串
        component: Main
      }, {
        path: 'comment',
        component: () => import('./views/comment')
      }, {
        path: 'material',
        component: () => import('./views/material')
      }, {
        path: 'articles', // 内容管理
        component: () => import('./views/artices')
      }, {
        path: 'publish/:articleId', // 定义动态路由参数
        component: () => import('./views/publish')
      }, {
        path: 'publish',
        component: () => import('./views/publish')
      }, {
        path: 'account',
        component: () => import('./views/account')
      }]
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
