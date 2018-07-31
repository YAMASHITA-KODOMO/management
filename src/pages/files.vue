<template>
  <div>
  	<load-more
      :api="api"
      cpnt="filesItem"
      ></load-more>
  </div>
</template>

<script>
	import filesItem from 'c/filesItem/'
  import loadMore from 'c/loadMore'
  import { getFilesList } from 'api/files'
  export default {
    name: 'files',
    data () {
      return {
      	api: getFilesList,
      }
    },
    components: {
      loadMore
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>