<template>
  <div>
    <check-search-btn v-model="keyword" placeholder="搜索" :checked="checked" @click="submit"></check-search-btn>
  </div>
</template>

<script>
  import checkSearchBtn from 'cpnts/checkSearchBtn'
  export default {
    name: 'checkCustomer',
    props: [],
    data () {
      return {
        keyword: '',
        checked: false
      }
    },
    components: {
      checkSearchBtn,
    },
    methods: {
      submit () {
        console.log('submit')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
