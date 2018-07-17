// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible/flexible'
import 'mint-ui/lib/style.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import { InfiniteScroll, Indicator, MessageBox } from 'mint-ui'

Vue.use(InfiniteScroll)
Vue.config.productionTip = false
Vue.prototype.$loading = Indicator
Vue.prototype.$MessageBox = MessageBox

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
