<template>
  <div>
    <c-info-banner :id="$route.query.id"></c-info-banner>
  </div>
</template>

<script>
  import cInfoBanner from 'c/cInfoBanner'
  export default {
    name: 'customerInfo',
    data () {
      return {
      }
    },
    components: {
      cInfoBanner,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
