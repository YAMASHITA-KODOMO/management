import {instance as axios, test} from './index'

// 获取每周访问记录
export function getVisitListWeekly(pageidx) {
	let obj = {
		type: 'weekly',
		pageidx,
	}
	return axios.get('/visit_get_list', {params: obj})
}

// 获取所有访问记录
export function getVisitList(pageidx) {
	let obj = {
		type: 'charge',
		pageidx,
	}
	return axios.get('/visit_get_list', {params: obj})
}

// 按照公司获取拜访记录
export function getVisitListByCustomer (pageidx, customerid) {
	return axios.get('/visit_get_list', {params: {pageidx, customerid}})
}

// 获取拜访记录信息
export function getVisitInfo (visitid) {
	return axios.get('/visit_get_info', {params: {visitid,}})
}
