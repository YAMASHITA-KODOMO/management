const state = {
	// 全局记录编辑信息，因为需要两个页面之间跳转
	// 因为直接引用的对象，所以会跟着改变，不需mutation
	customer: {
		// name: '',
		// type: '',
		// typeID: '',
		// sup: '',
		// city: '',
		// phone: '',
		// fax: '',
		// address: '',
		// postal: '',
		// desc: '',
		// response_man: '',
		// response_id: '',
		// remark: '',
	},
	// 客户页面tab页面激活项,默认显示我负责的
	customerTab: 'response',
	// 联系人tab页面激活项
	linkmanTab: 'usually',
	// 编辑联系人信息
	linkman: {}
}

export default state