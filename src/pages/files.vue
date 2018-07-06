<template>
  <div>
  	<files-item :dataObj="data"></files-item>
  </div>
</template>

<script>
	import filesItem from 'c/filesItem/'
  export default {
    name: 'files',
    data () {
      return {
      	data: {
      		name: '大连天途有线电视网络股份有限公司拜访文件.doc',
      		src: '....',
      		date: '2018-03-19',
      		size: '1234567',
      		response_man: '无非'
      	}
      }
    },
    components: {
    	filesItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>