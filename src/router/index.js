import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/login';
import index from '../pages/index/index';
import home from '../pages/index/components/home';
import classify from '../pages/index/components/classify';
import shopcar from '../pages/index/components/shopcar';
import mine from '../pages/index/components/mine';
import cateDetail from '../pages/classify/detail'
import homeDetail from '../pages/home/detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index,
      children:[
        {
          path: 'home',
          component: home,
        },
        {
          path:'',
          redirect:'home'
        },
        {
          path: 'classify',
          component: classify,
        },
        {
          path: 'shopcar',
          component: shopcar,
        },
        {
          path: 'mine',
          component: mine,
        },
      ]
    },
    {
      path: '/cateDetail',
      component: cateDetail
    },
    {
      path: '/homeDetail',
      component: homeDetail
    },
  ]
})
