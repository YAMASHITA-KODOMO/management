module.exports = {
	initCustomer (state, obj) {
		for (key in state.customer) {
			state.customer[key] = obj[key]
		}
	},
	clearCustomer (state) {
		for (key in state.customer) {
			state.customer[key] = ''
		}
	},
	setCustomer (state, obj) {
		state.customer[obj.key] = obj.value
	},
	setLinkman (state, obj) {
		state.linkmane[obj.key] = obj.value
	},
	setCustomerTab (state, value) {
		state.customerTab = value
	},
}