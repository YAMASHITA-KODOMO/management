import axios from './config'

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