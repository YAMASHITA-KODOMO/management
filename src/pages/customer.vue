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
    	<div
  			v-infinite-scroll="loadMoreResponseCustomer"
			  infinite-scroll-disabled="responseLoading"
			  infinite-scroll-distance="10">
  			<separate v-if="responseUsuallyList.length">常联系客户({{responseUsuallyTotal}})</separate>
  			<customer-item v-for="(item, index) in responseUsuallyList" :dataObj="item" :key="`responseUsually-${index}`"></customer-item>
  			<separate v-if="responseOtherList.length">3个月以上未联系客户({{responseOtherTotal}})</separate>
  			<customer-item v-for="(item, index) in responseOtherList" :dataObj="item" :key="index"></customer-item>
  			<no-more v-if="responseAll"></no-more>
  		</div>
    	<no-record v-if="!responseUsuallyList.length && !responseOtherList.length" :text="noInfo"></no-record>
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
    	<no-record v-if="!followList.length" :text="noInfo"></no-record>
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
	import { getCutomerListResponse, getCutomerListFollow } from 'api/customer'
	import { tabs, customerTypeIcon } from '@/config'
	import { InfiniteScroll  } from 'mint-ui'
	Vue.use( InfiniteScroll )
	export default {
	  name: 'customer',
	  data () {
	    return {
	    	tabs: tabs.customer,/*tab数据*/
	    	noInfo: '暂无客户信息',/*没有数据时的文字*/
	    	/*我负责列表*/
	    	responseUsuallyList: [],
	    	responseUsuallyTotal: 0,
	    	responseOtherList:[],
	    	responseOtherTotal: 0,
	    	responseLoading: true,/*是否允许加载，true不允许，因为是全局监听scroll事件，所以在其他的tab页不允许加载*/
	    	responseAll: false,/*是否已经加载完全，显示加载完全的文字提示*/
	    	responsePage: 1,/*当前页面,从1开始算*/
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
	  	})
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
	  	loadMoreResponseCustomer (pageidx, pagenum) {
	  		let res = getCutomerListResponse(pageidx, pagenum)
	  		this.responseUsuallyList.push(...res.usually_list)
	  		this.responseOtherList.push(...res.other_list)
	  		if (this.responseUsuallyList.length > 1) {
	  			this.responseAll = true
	  			this.responseLoading = true
	  		}
	  	},
	  	clickTab (arg) {
	  		this.$store.commit('setCustomerTab', arg.id)
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
