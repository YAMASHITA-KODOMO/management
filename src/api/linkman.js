import {instance as axios, test} from './index'

// 获取常用联系人
export function getLinkmanUsually (obj) {
	obj.type = 'usually'
	return axios.get('/linkman_get_list', {params: obj})
}

// 获取全部联系人
export function getLinkmanTotal (obj) {
	obj.type = 'total'
	return axios.get('/linkman_get_list', {params: obj})
}

// 获取标记为删除联系人
export function getLinkmanDelete (obj) {
	obj.type = 'delete'
	return axios.get('/linkman_get_list', {params: obj})
}

// 获取客户联系人
export function getLinkmanByCustomer (pageidx, customerid) {
	let obj = {
		customerid,
		pageidx,
	}
	return axios.get('/linkman_get_list', {params: obj})
}

// 获取联系人信息 
export function getLinkmanInfo(linkmanid) {
	return axios.get('/linkman_get_info', {params: {linkmanid,}})
}

// 标记为删除
export function deleteLinkman (linkmanid, use_flag) {
	return axios.get('linkman_delete', {params: {linkmanid, use_flag,}})
}