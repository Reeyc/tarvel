import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播图
import fastClick from 'fastClick' //解决移动端点击300ms问题
import 'babel-polyfill'

import 'styles/reset.css' //初始化样式
import 'swiper/dist/css/swiper.css' //轮播图
import 'styles/border.css' //解决移动端1px-border问题
import 'styles/iconfont.css' //字体图标

Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    fastClick.attach(document.body);
  }, false);
}
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
