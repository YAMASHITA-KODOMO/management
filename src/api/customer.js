import axios from './config'

// 获取我关注的客户
export function getCutomerListFollow (obj = {}) {
	return axios.get('/customer_get_list_follow', {params: obj})
}

// 获取我负责的客户
export function getCutomerListResponse () {

	let data = {
		name: '大连天途有线电视网络股份有限公司大连天途有线电视网络股份有限公司',
		id: '123'
	}
	let usually_list = new Array(4).fill(data)
	let other_list = new Array(6).fill(data)
	return {usually_list, usually_total: 4, other_list, other_total: 6}
}
// 获取客户信息
export function getCustomerInfo(id) {
	let data = {
		name: '大连天途有线电视网络股份有限公司大连天途有线电视网络股份有限公司',
		response_man: '吴菲',
		phone: '13888888888',
		postal: '541800',
		address: '大连天途有线电视网络股份有限公司大连天途有线电视网络股份有限公司大连天途有线电视网络股份有限公司大连天途有线电视网络股份有限公司',
		linkman_num: 3,
		files_num: 5,
		follow: false
	}
	return data
}
// 关注客户
export function setCustomerFollow(id) {

}
// 取消关注
export function cancelCustomerFollow(id) {

}