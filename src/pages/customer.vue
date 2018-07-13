<template>
  <div class="customer">
  	<!-- 页面的tab菜单 -->
    <page-tab :tabs="tabs" @click="clickTab" class="tabs" :activeID="activeID"></page-tab>
    <!-- 每个类型的列表显示都不一样，分开来写，减少耦合判断 -->
    <!-- 我负责的 -->
    <div
    	class="mt6"
    	v-show="activeID === 'response'"
    	>
    	<no-record v-show="!responseUsuallyTotal && !responseUsuallyTotal && responseAll" :text="noInfo"></no-record>
    	<div
  			v-infinite-scroll="loadMoreResponseCustomer"
			  infinite-scroll-disabled="responseLoading"
			  infinite-scroll-distance="10"
			  v-show="responseUsuallyTotal || responseOver3Total"
			  >
  			<separate>常联系客户({{responseUsuallyTotal}})</separate>
  			<customer-item v-for="(item, index) in responseUsuallyList" :dataObj="item" :key="`responseUsually-${index}`"></customer-item>
  			<separate v-show="showOver3Separate">3个月以上未联系客户({{responseOver3Total}})</separate>
  			<customer-item v-for="(item, index) in responseOver3List" :dataObj="item" :key="index"></customer-item>
  			<no-more v-show="responseAll"></no-more>
  		</div>
    </div>
    <!-- 我关注的 -->
    <div
    	class="mt6"
    	v-show="activeID === 'follow'"
    	>
  		<div
  			v-infinite-scroll="loadMoreFollowCustomer"
			  infinite-scroll-disabled="followLoading"
			  infinite-scroll-distance="10">
			  <customer-item v-for="(item, index) in followList" :dataObj="item" :key="index"></customer-item>
			  <no-more v-if="followAll"></no-more>
  		</div>
    	<no-record v-if="!followList.length && followAll" :text="noInfo"></no-record>
    </div>
    <!-- 全部 -->
    <div
    	class="mt6"
    	v-show="activeID === 'all'"
    	>
    	<div class="c-type" v-for="(item, index) in allList" @click="$router.push({path: '/allCustomer', query: {typeId: item.typeID, name: item.name}})"><img :src="item.icon"></div>
    	<no-record v-if="allList.lenght" :text="noInfo"></no-record>
    </div>
  </div>
</template>

<script>
	import Vue from 'vue'
	import { mapState } from 'vuex'
	import pageTab from 'c/pageTab'
	import noRecord from 'c/noRecord'
	import customerItem from 'c/customerItem'
	import noMore from 'c/noMore'
	import separate from 'c/separate'
	import { getCutomerListResponseUsually, getCutomerListResponseOthers, getCutomerListFollow } from 'api/customer'
	import { tabs, customerTypeIcon } from '@/config'
	export default {
	  name: 'customer',
	  data () {
	    return {
	    	tabs: tabs.customer,/*tab数据*/
	    	noInfo: '暂无客户信息',/*没有数据时的文字*/
	    	/*我负责列表*/
	    	responseUsuallyList: [],
	    	responseUsuallyTotal: 0,
	    	responseOver3List:[],
	    	responseOver3Total: 0,
	    	showOver3Separate: false,
	    	responseLoading: true,/*是否允许加载，true不允许，因为是全局监听scroll事件，所以在其他的tab页不允许加载*/
	    	responseAll: false,/*是否已经加载完全，显示加载完全的文字提示*/
	    	responsePage: 1,/*当前页面,从1开始算*/
	    	responseOver3Page: 1,
	    	/*我关注的*/
	    	followList: [],
	    	followLoading: true,
	    	followAll: false,
	    	followPage: 1,
	    	allList: customerTypeIcon,/*全部列表*/
	    }
	  },
	  computed: {
	  	...mapState({
	  		// 激活的tab，默认response
	  		activeID: state => state.customerTab
	  	}),
	  },
	  watch: {
	  	activeID (val) {
	  		this.followLoading = (val !== 'follow' || this.followAll)
	  		this.responseLoading = (val !== 'response' || this.responseAll)
	  	}
	  },
	  components: {
	  	pageTab,
	  	noRecord,
	  	customerItem,
	  	noMore,
	  	separate,
	  },
	  async created () {
	  	this.loadMoreFollowCustomer(0, 20)
	  	this.loadMoreResponseCustomer(0, 20)
	  },
	  methods: {
	  	async loadMoreFollowCustomer () {
	  		let res = await getCutomerListFollow({pageidx: this.followPage});
	  		this.followList.push(...res.list)
	  		if (res.list.length < 20) {
	  			this.followAll = true
	  			this.followLoading = true
	  		}
	  	},
	  	loadMoreResponseCustomer () {
	  		// 逻辑
	  		// 先获取usually， usually获取完获取over3， 获取over3完关闭load

	  		// over3为0，表示还没有开始获取over3； 只要获取over3就会修改over3total的值，如果over3total的值为0，则会关闭load
	  		if (!this.responseOver3Total) {
	  			this.getUsually()
	  		} else {
	  			// over3大于0 ，表示已经获取完usually开始获取over3了
	  			this.getOver3()
	  		}
	  	},
	  	// 获取常联系客户
	  	async getUsually () {
	  		let res = await getCutomerListResponseUsually({pageidx: this.responsePage})
	  		this.responsePage ++
	  		// 把数据push进去list
  			this.responseUsuallyList.push(...res.list)
  			// 如果total为0,则表示第一次进入，赋值total
  			if (!this.responseUsuallyTotal) {
  				this.responseUsuallyTotal = res.total
  			}
  			// 如果获取到的数据小于20条，则去获取3个月不联系的客户
  			if (res.list.length < 20) {
  				this.getOver3()
  			}
	  	},
	  	// 获取超过3个月不联系客户
	  	async getOver3 () {
	  		let res = await getCutomerListResponseOthers({pageidx: this.responseOver3Page})
	  		this.responseOver3Page ++
	  		this.responseOver3List.push(...res.list)
	  		if (!this.responseOver3Total) {
	  			// 赋值记录总数
  				this.responseOver3Total = res.total
  				// 显示overesparate
  				this.showOver3Separate = true
  			}
  			// 如果获取到的数据小于20条，则表示已经获取完全，不会再出发获取事件
  			if (res.list.length < 20) {
  				this.responseAll = true
  			}
	  	},
	  	clickTab (arg) {
	  		this.$store.commit('SET_CUSTOMER_TAB', arg.id)
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.customer {
	padding-top: 86px;
	.tabs {
		position: fixed;
		top: 80px;
		left: 0;
		width: 100%;
		z-index: 8;
	}
	.mt6 {
		margin-top: 6px;
	}
	.c-type {
		margin-bottom: 10px;
		padding: 0 20px;
		img {
			width: 100%;
			height: 166px;
		}
	}
}
</style>
