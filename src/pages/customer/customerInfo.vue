<template>
  <div>
    <c-info-banner :id="$route.query.id"></c-info-banner>
    <separate>{{separateInfo}}</separate>
  </div>
</template>

<script>
  import cInfoBanner from 'c/cInfoBanner'
  import separate from 'c/separate'
  import { getVisitListByCustomer } from 'api/visit'
  export default {
    name: 'customerInfo',
    data () {
      return {
        total: 0,
        page: 0,
        list: [],
        loading: false,
      }
    },
    computed: {
      separateInfo () {
        return `拜访记录(${this.total})`
      }
    },
    components: {
      cInfoBanner,
      separate,
    },
    created () {

    },
    methods: {
      loadMoreList () {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
