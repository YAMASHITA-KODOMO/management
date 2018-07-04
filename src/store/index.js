import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const store = new vuex.Store({
	state: {
		// 全局记录编辑信息，因为需要两个页面之间跳转
		customer: {
			name: '',
			type: '',
			typeID: '',
			sup: '',
			city: '',
			phone: '',
			fax: '',
			address: '',
			postal: '',
			desc: '',
			linkman: '',
			remark: '',
		},
		linkmane: {}
	},
	mutations: {
		setCustomer (state, obj) {
			state.customer[obj.key] = obj.value
		},
		setLinkman (state, obj) {
			state.linkmane[obj.key] = obj.value
		}
	}
})
export default store
