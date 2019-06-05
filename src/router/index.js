import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import City from '@/pages/City/City'
import Detail from '@/pages/Detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/city',
      name: 'city',
      meta: {
        keepAlive: true
      },
      component: City
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
