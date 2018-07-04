// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible/flexible'
import 'mint-ui/lib/style.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import { infiniteScroll } from 'mint-ui'
import store from '@/store'

// Vue.use(infiniteScroll)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
