import {instance as axios, test} from './index'

// 获取每周访问记录
export function getVisitListWeekly(obj = {pageidx: 1}) {
	return axios.get('/visit_get_list_weekly', {params: obj})
}

// 获取每周访问记录
export function getVisitList(obj = {pageidx: 1}) {
	return test.get('/visit_get_list', {params: obj})
}

// 按照公司获取拜访记录
export function getVisitListByCustomer (pageidx, customerid) {
	return test.get('/visit_get_list_customer', {params: {pageidx, customerid}})
}