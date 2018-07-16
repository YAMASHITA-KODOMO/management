import {instance as axios, test} from './index'
// import {test as axios} from './index' //全测试版

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
	return test.get('getCustomerInfo', {params: {id}})
		.then(res => res.data.data)
}
// 关注客户
export function setCustomerFollow(id) {

}
// 取消关注
export function cancelCustomerFollow(id) {

}