import axios from './config'

// 获取我关注的客户
export function getCutomerListFollow (obj = {}) {
	return axios.get('/customer_get_list_follow', {params: obj})
}

// 获取我常联系的 负责的客户
export function getCutomerListResponseUsually (obj = {}) {
	return axios.get('/customer_get_list_response_usual', {params: obj})
}
// 获取我不常联系的 负责的客户
export function getCutomerListResponseOthers (obj = {}) {
	return axios.get('/customer_get_list_response_over3month', {params: obj})
} 

export function getCustomerlistTotal (obj = {}) {
	return axios.get('/customer_get_list_total', {params: obj})
}

// 获取客户信息
export function getCustomerInfo(id) {
	// let data = {
	// 	name: '大连天途有线电视网络股份有限公司大连天途有线电视网络股份有限公司',
	// 	response_man: '吴菲',
	// 	phone: '13888888888',
	// 	postal: '541800',
	// 	address: '大连天途有线电视网络股份有限公司大连天途有线电视网络股份有限公司大连天途有线电视网络股份有限公司大连天途有线电视网络股份有限公司',
	// 	linkman_num: 3,
	// 	files_num: 5,
	// 	follow: false
	// }
	// return data

	//因为你把全局的baseURL改掉了 我就这样暂时用一下
	var test = axios.create({
		baseURL: '/api/'
	})
	return test.get('getCustomerInfo', {params: {id}})
	.then(
		(res)=>{
			return res.data.data
		}
	)
}
// 关注客户
export function setCustomerFollow(id) {

}
// 取消关注
export function cancelCustomerFollow(id) {

}