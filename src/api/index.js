import axios from 'axios'

const baseURL = {
	devHost: 'http://task.ipanel.cn/projtest/api/customer_api',
	prodHost: 'http://task.ipanel.cn/api/customer_api',
	host: 'http://task.ipanel.cn/projtest/api/customer_api',
	localhost: '/api/'
}
const userid = 'wangj'

const instance = axios.create({
	baseURL: baseURL.host
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.method === 'get') {
  	if (userid) {
  		config.params.userid = userid
  	}
  } else {
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});





const test = axios.create({
	baseURL: baseURL.localhost
})


export {instance, test}