import * as types from './mutation-types'

const mutations =  {
	[types.INIT_CUSTOMER] (state, obj) {
		state.customer = obj
	},
	[types.CLEAR_CUSTOMER] (state, obj) {
		state.customer = {}
	},
	[types.SET_CUSTOMER] (state, obj) {
		state.customer[obj.key] = obj.value
	},
	[types.SET_LINKMAN] (state, obj) {
		state.linkmane[obj.key] = obj.value
	},
	[types.SET_CUSTOMER_TAB] (state, value) {
		state.customerTab = value
  },
  [types.SET_LINKMAN_TAB] (state, value) {
  	state.linkmanTab = value
  }
}

export default mutations