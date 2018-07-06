import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(vuex)
const store = new vuex.Store({
	state,
	mutations,
})
export default store
