<template>
  <div>
  	<load-list
  		@loadMore="loadMore"
  		:list="list"
  		cpnt="visitItem"
  		:forbid="loading"
  		></load-list>
  </div>
</template>

<script>
	import loadList from 'c/loadList'
	import { getVisitList } from 'api/visit'
	export default {
	  name: 'visit',
	  data () {
	    return {
	    	total: null,
	    	list: [],
	    	loading: false,
	    	page: 1,
	    }
	  },
	  components: {
	  	loadList,
	  },
	  methods: {
	  	async loadMore () {
	  		this.loading = true
	  		let res = await getVisitList(this.page)
	  		this.page++
	  		if (this.total === null) {
	  			this.total = res.total
	  		}
	  		this.list = res.list
	  		this.loading = false
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>