import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/styles/reset.css' //初始化样式
import '@/assets/styles/border.css' //解决移动端1pxborder样式
import fastClick from 'fastClick'

fastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
