<template>
  <div>
    <page-tab :tabs="tabs" @click="clickTab"></page-tab>
    <div>
    	<linkman-item :dataObj="data"></linkman-item>
    	<linkman-separate :text="'A'"></linkman-separate>
    	<linkman-item :dataObj="data1"></linkman-item>
    </div>
  </div>
</template>

<script>
	import pageTab from 'cpnts/pageTab'
	import noRecord from 'cpnts/noRecord'
	import linkmanItem from 'cpnts/linkmanItem'
	import linkmanSeparate from 'cpnts/linkmanSeparate'
	import { getCutomerListResponse, getCutomerListFollow } from '@/tool/ajax'
	import { tabs } from '@/config'
	export default {
	  name: '',
	  data () {
	    return {
	    	tabs: tabs.linkman,
	    	data: {
	    		name: '李洋',
	    		phone: '13888888888',
	    		department: '事业部',
	    		customer: '大连天途有线电视网络股份有限公司'
	    	},
	    	data1: {
	    		name: '李洋',
	    		id: '123',
	    		phone: '13888888888',
	    		department: '事业综合沟通部',
	    		customer: '大连天途有线电视网络股份有限公司'
	    	}
	    }
	  },
	  components: {
	  	pageTab,
	  	noRecord,
	  	linkmanItem,
	  	linkmanSeparate
	  },
	  methods: {
	  	clickTab (arg) {

	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
