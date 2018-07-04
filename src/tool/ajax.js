// 获取每周访问记录
export function getVisitListWeekly() {
	let res = []
	let data = {
		customer_name: '大连天途有线电视网络股份有限公司',
		date: '2018-05-12',
		uptime: '2018-05-13 13:30:30',
		linkman: '王总,李总',
		content: 'homed在大连发行盒子共60万件。homed在大连发行盒子共60万件。homed在大连发行盒子共60万件。homed在大连发行盒子共60万件。homed在大连发行盒子共60万件。homed在大连发行盒子共60万件。homed在大连发行盒子共60万件。',
		response_man: '吴菲',
		files: [
			{
				name: '大连天途有线电视网络股份有限公司.doc',
				src: ''
			}, {
				src: '',
				name: '大连天途有线电视网络股份有限公司.ppt'
			}
		]
	}
	res.push(data)
	return {list: res, total: 16}
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
// 获取我关注的客户
export function getCutomerListFollow () {

	let data = {
		name: '大连天途有线电视网络股份有限公司大连天途有线电视网络股份有限公司',
		id: '123'
	}
	let res = new Array(20).fill(data)
	return {list: res, total: 10}
}
// 获取文件列表
export function getfilesListAll () {
	
}