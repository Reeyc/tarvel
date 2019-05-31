import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick' //解决移动端点击300ms问题

import 'styles/reset.css' //初始化样式
import 'styles/border.css' //解决移动端1pxborder问题
import 'styles/iconfont.css' //字体图标


fastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
