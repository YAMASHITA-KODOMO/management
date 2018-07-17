import {instance as axios, test} from './index'
// import {test as axios} from './index' //全测试版

// 获取我关注的客户
export function getCutomerListFollow (pageidx) {
	return axios.get('/customer_get_list_follow', {params: {pageidx: pageidx}})
}

// 获取我常联系的 负责的客户
export function getCutomerListResponseUsually (pageidx) {
	return axios.get('/customer_get_list_response_usual', {params: {pageidx: pageidx}})
}
// 获取我不常联系的 负责的客户
export function getCutomerListResponseOver3 (pageidx) {
	return axios.get('/customer_get_list_response_over3month', {params: {pageidx: pageidx}})
}

// 按照分类获取列表
export function getCustomerlistByType (pageidx, typeid) {
	return axios.get('/customer_get_list_total', {params: {pageidx: pageidx, typeid: typeid}})
}

// 获取全部数据
export function getCustomerlistTotal (pageidx) {
	return axios.get('/customer_get_list_total', {params: {typeid:"all", pageidx: pageidx}})
}

// 获取客户信息
export function getCustomerInfo(id) {
	return axios.get('customer_get_info', {params: {id}})
}
// 关注客户
export function setCustomerFollow(id) {
	return axios.get('customer_set_follow', {params: {id}})
}
// 取消关注
export function cancelCustomerFollow(id) {
	return axios.get('customer_cancel_follow', {params: {id}})
}

// 取消关注
export function getType(id) {
	return axios.get('get_customer_type', {params: {}})
}

