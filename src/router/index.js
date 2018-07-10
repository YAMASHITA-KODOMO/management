import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index'

const Customer = resolve => {
  import('pages/customer').then(module => {
    resolve(module)
  })
}

Vue.use(Router)

let defaltRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        // 页面是否显示搜索框
        searchBtn: true,
        // 页面是否显示添加按钮
        addBtn: true,
        // 页面的title
        name: '客户管理'
      },
      component: Index
    },
    {
      path: '/customer',
      name: 'customer',
      meta: {
        searchBtn: true,
        addBtn: true,
        name: '客户'
      },
      component: Customer
    },
    {
      path: '/allCustomer',
      name: 'allCustomer',
      meta: {
        name: '全部客户'
      },
      component: resolve => require(['pages/allCustomer'], resolve)
    },
    {
      path: '/customerInfo',
      name: 'customerInfo',
      meta: {
        name: '客户信息'
      },
      component: resolve => require(['pages/customer/customerInfo'], resolve)
    },
    {
      path: '/addCustomer',
      name: 'addCustomer',
      meta: {
        keepAlive: true,
        name: '新建客户'
      },
      component: resolve => require(['pages/addCustomer'], resolve)
    },
    {
      path: '/checkCustomerType',
      name: 'checkCustomerType',
      meta: {
        name: '选择客户类型户'
      },
      component: resolve => require(['pages/checkCustomerType'], resolve)
    },
    {
      path: '/checkCustomer',
      name: 'checkCustomer',
      meta: {
        name: '选择上级单位'
      },
      component: resolve => require(['pages/checkCustomer'], resolve)
      
    },
    {
      path: '/linkman',
      name: 'linkman',
      meta: {
        searchBtn: true,
        addBtn: true,
        name: '联系人'
      },
      component: resolve => require(['pages/linkman'], resolve)
    },
    {
      path: '/addLinkman',
      name: 'addLinkman',
      meta: {
        name: '新建联系人'
      },
      component: resolve => require(['pages/linkman/addLinkman'], resolve)
    },
    {
      path: '/visit',
      name: 'visit',
      meta: {
        searchBtn: true,
        addBtn: true,
        name: '拜访记录'
      },
      component: resolve => require(['pages/visit'], resolve)
    },
    {
      path: '/addVisit',
      name: 'addVisit',
      meta: {
        name: '新建拜访记录'
      },
      component: resolve => require(['pages/addVisit'], resolve)
    },
    {
      path: '/files',
      name: 'files',
      meta: {
        searchBtn: true,
        addBtn: true,
        name: '文件'
      },
      component: resolve => require(['pages/files'], resolve)
    }
  ]
})


class frameSingleton {
  constructor(){
    this.dom = document.createElement('iframe')
    this.setAttr()
  }
  setAttr(){
    let dom = this.dom
    dom.src = '/favicon.ico'
    dom.style.display = 'none'
    dom.onload = function () {
      console.log(1)
      setTimeout(function () {
        dom.remove();
      }, 0);
    }
  }
}

const frameProxy=(()=>{
  let instance
  return ()=> instance || (instance = Reflect.construct(frameSingleton, []).dom)
})()

defaltRouter.beforeEach(function(to, from, next) {
  document.title = to.meta.name
  // if (/ios/i.test(navigator.userAgent)) {
  // ios下不能更新标题名,有问题的时候再使用，但会触发多次路由跳转事件
  //   document.body.appendChild(frameProxy())
  // }
  next()
})

export default defaltRouter
