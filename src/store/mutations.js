import * as types from './mutation-types'

const mutations =  {
	// initCustomer (state, obj) {
	// 	for (let key in state.customer) {
	// 		state.customer[key] = obj[key]
	// 	}
	// },
	// clearCustomer (state) {
	// 	for (key in state.customer) {
	// 		state.customer[key] = ''
	// 	}
	// },
	// setCustomer (state, obj) {
	// 	state.customer[obj.key] = obj.value
	// },
	// setLinkman (state, obj) {
	// 	state.linkmane[obj.key] = obj.value
	// },
	// setCustomerTab (state, value) {
	// 	state.customerTab = value
	// },
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
	[types.SET_CUSTOMER_TAB] (state, obj) {
		state.customerTab = value
  },
}

export default mutations