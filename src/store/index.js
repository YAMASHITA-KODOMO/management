import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(vuex)

export default new vuex.Store({
	state,
	getters,
	mutations
})
