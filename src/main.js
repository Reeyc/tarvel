import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图
import fastClick from 'fastClick' //解决移动端点击300ms问题

import 'styles/reset.css' //初始化样式
import 'swiper/dist/css/swiper.css' //轮播图
import 'styles/border.css' //解决移动端1pxborder问题
import 'styles/iconfont.css' //字体图标

Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
