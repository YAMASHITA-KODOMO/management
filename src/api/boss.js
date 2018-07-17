import { boss as axios } from './index'

export function getResponseList (pageidx) {
	return axios.get('/get_boss_users', {params: {scope_id: 1, cur_page: pageidx}})
}