<template>
  <div>
    <page-tab :tabs="tabs" @click="clickTab" :activeID="activeID"></page-tab>
    <div
    	v-for="(data, index) in datalist"
    	v-show="activeID === data.id"
    	v-infinite-scroll="data.loadMore"
		  infinite-scroll-disabled="data.loading"
		  infinite-scroll-distance="10">
		  <no-record v-show="!data.list.length" :text="noInfo"></no-record>
    	<linkman-item v-for="(item, index) in data.list" :key="'usually' + index" :dataObj="item"></linkman-item>
    </div>
  </div>
</template>

<script>
	import { mapState } from 'vuex'
	import pageTab from 'c/pageTab'
	import noRecord from 'c/noRecord'
	import linkmanItem from 'c/linkmanItem'
	import alphabetSeparate from 'c/alphabetSeparate'
	import noMore from 'c/noMore'
	import { getLinkmanUsually, getLinkmanTotal, getLinkmanDelete } from 'api/linkman'
	export default {
	  name: '',
	  data () {
	    return {
	    	tabs: [
					{
						text: '常用联系人',
						id: 'usually',
					},
					{
						text: '全部联系人',
						id: 'total',
					},
					{
						text: '标记为删除',
						id: 'delete',
					}
				],
				noInfo: '暂无联系人信息',
				usually: {
					id: 'usually',
					loadMore: this.loadMoreUsually,
					list: [],
					page: 1,
					loading: false,
					all: false,
				},
				total: {
					id: 'total',
					loadMore: this.loadMoreTotal,
					list: [],
					page: 1,
					loading: false,
					all: false,
				},
				delete: {
					id: 'delete',
					loadMore: this.loadMoreDelete,
					list: [],
					page: 1,
					loading: false,
					all: false,
				},
	    }
	  },
	  computed: {
	  	...mapState({
	  		// 激活的tab，默认response
	  		activeID: state => state.linkmanTab
	  	}),
	  	datalist: {
	  		get () {return [this.usually, this.total, this.delete]}
	  	}
	  },
	  components: {
	  	pageTab,
	  	noRecord,
	  	linkmanItem,
	  	alphabetSeparate,
	  	noMore,
	  },
	  created () {

	  },
	  methods: {
	  	// 获取常用联系人
	  	async loadMoreUsually() {
	  		let res = await getLinkmanUsually({pageidx: this.usually.page})
	  		this.usually.page++
	  		if (res.list.length < 20) {
	  			this.usually.loading = true
	  			this.usually.all = true
	  		}
	  		this.usually.list.push(...res.list)
	  	},
	  	// 获取常用联系人
	  	async loadMoreTotal() {
	  		let res = await getLinkmanTotal({pageidx: this.total.page})
	  		this.total.page ++
	  		if (res.list.length < 20) {
	  			this.total.loading = true
	  			this.total.all = true
	  		}
	  		this.total.list.push(...res.list)
	  	},
	  	// 获取标记为删除联系人
	  	async loadMoreDelete() {
	  		let res = await getLinkmanDelete({pageidx: this.delete.page})
	  		this.delete.page ++
	  		if (res.list.length < 20) {
	  			this.delete.loading = true
	  			this.delete.all = true
	  		}
	  		this.delete.list.push(...res.list)
	  	},
	  	clickTab (arg) {
	  		this.$store.commit('SET_LINKMAN_TAB', arg.id)
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
