module.exports = {
	// 首页菜单列表数据
	menuList: [
		{
			icon: require('../assets/imgs/customer.png'),
			text: '客户',
			url: '/customer'
		},
		{
			icon: require('../assets/imgs/linkman.png'),
			text: '联系人',
			url: '/linkman'
		},
		{
			icon: require('../assets/imgs/visit.png'),
			text: '拜访',
			url: '/visit'
		},
		{
			icon: require('../assets/imgs/files.png'),
			text: '文件夹',
			url: '/files'
		},
		// {
		// 	icon: require('../assets/imgs/logo.png'),
		// 	text: '文件夹',
		// 	url: '/files'
		// }
	],
	// 添加按钮的添加类别
	addList: [
		{
			icon: require('../assets/imgs/add-customer-icon.png'),
			url: '/addCustomer',
			text: '添加客户',
		},
		{
			icon: require('../assets/imgs/add-linkman-icon.png'),
			url: '/addLinkman',
			text: '添加联系人',
		},
		{
			icon: require('../assets/imgs/add-visit-icon.png'),
			url: '/addVisit',
			text: '添加拜访记录',
		}
	],
	// tabs菜单数据，包括客户、联系人、搜索
	tabs: {
		// 客户的
		customer: [
			{
				text: '我负责的',
				id: 'response',
				api: 'myResponseCustomer'
			},
			{
				text: '我关注的',
				id: 'follow',
			},
			{
				text: '全部客户',
				id: 'all',
			}
		],
		// 联系人的
		linkman: [
			{
				text: '常用联系人',
				id: 'response',
				api: 'myResponseCustomer'
			},
			{
				text: '全部联系人',
				id: 'follow',
			},
			{
				text: '标记为删除',
				id: 'all',
			}
		]
	},
	// 文件列表对应的icon
	filesIcon: {
		word: require('../assets/imgs/word.png'),
		txt: require('../assets/imgs/txt.png'),
		pdf: require('../assets/imgs/pdf.png'),
		xlxs: require('../assets/imgs/xlxs.png'),
		rar: require('../assets/imgs/rar.png'),
		ppt: require('../assets/imgs/ppt.png'),
		img: require('../assets/imgs/img.png'),
		others: require('../assets/imgs/others.png'),
	},
	// 客户类型分类icon
	customerTypeIcon: [
		{
			name: '广电',
			icon: require('../assets/imgs/ct-gd.png'),
			typeID: '5'
		},
		{
			name: '电信',
			icon: require('../assets/imgs/ct-dx.png'),
			typeID: '6'
		},
		{
			name: '移动',
			icon: require('../assets/imgs/ct-yd.png'),
			typeID: '7'
		},
		{
			name: '联通',
			icon: require('../assets/imgs/ct-lt.png'),
			typeID: '8'
		},
		{
			name: '机顶盒',
			icon: require('../assets/imgs/ct-jdh.png'),
			typeID: '9'
		},		
		{
			name: '一体机',
			icon: require('../assets/imgs/ct-ytj.png'),
			typeID: '10'
		},
		{
			name: '内容商',
			icon: require('../assets/imgs/ct-nrs.png'),
			typeID: '11'
		},
		{
			name: '芯片厂商',
			icon: require('../assets/imgs/ct-xpcs.png'),
			typeID: '12'
		},
		{
			name: '技术厂商',
			icon: require('../assets/imgs/ct-jscs.png'),
			typeID: '13'
		},
		{
			name: '模具供应商',
			icon: require('../assets/imgs/ct-mjgys.png'),
			typeID: '15'
		},
		{
			name: '硬件供应商',
			icon: require('../assets/imgs/ct-yjgys.png'),
			typeID: '16'
		},
		{
			name: '软件供应商',
			icon: require('../assets/imgs/ct-rjgys.png'),
			typeID: '17'
		},
		{
			name: '耗材供应商',
			icon: require('../assets/imgs/ct-hcgys.png'),
			typeID: '18'
		},
		{
			name: '服务供应商',
			icon: require('../assets/imgs/ct-fwgys.png'),
			typeID: '19'
		},
		{
			name: '其他类型',
			icon: require('../assets/imgs/ct-qtlx.png'),
			typeID: '20'
		},
	]
}