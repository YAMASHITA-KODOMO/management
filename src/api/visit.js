import axios from './config'

// 获取每周访问记录
export function getVisitListWeekly(obj = {pageidx: 1}) {
	return axios.get('/visit_get_list_weekly', {params: obj})
}