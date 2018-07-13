module.exports = {
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
		word: require('c/filesItem/word.png'),
		txt: require('c/filesItem/txt.png'),
		pdf: require('c/filesItem/pdf.png'),
		xlxs: require('c/filesItem/xlxs.png'),
		rar: require('c/filesItem/rar.png'),
		ppt: require('c/filesItem/ppt.png'),
		img: require('c/filesItem/img.png'),
		others: require('c/filesItem/others.png'),
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
	],
	devHost: 'http://task.ipanel.cn/projtest/api/customer_api',
	prodHost: 'http://task.ipanel.cn/api/customer_api',
	host: 'http://task.ipanel.cn/projtest/api/customer_api',
	userid: 'wangj',
}