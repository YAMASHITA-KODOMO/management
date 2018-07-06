<template>
  <div class="check-customer">
    <check-search-btn v-model="keyword" placeholder="搜索" :checked="checkedID" @click="submit"></check-search-btn>
    <div v-show="keyword === ''">
      <separate>常联系客户</separate>
      <check-item @click="clickEvent(item)" v-for="(item, index) in list" :key="index" :checked="checkedID === item.id">{{item.name}}</check-item>
    </div>
    <div v-show="keyword !== ''">
      search
    </div>
    
  </div>
</template>

<script>
  import checkSearchBtn from 'c/checkSearchBtn'
  import separate from 'c/separate'
  import checkItem from 'c/checkItem'
  export default {
    name: 'checkCustomer',
    props: [],
    data () {
      return {
        keyword: '',
        checkedID: '',
        list: [
          {id: 123, name: 'sass'},
          {id: 2345, name: 'sass'},
        ]
      }
    },
    components: {
      checkSearchBtn,
      checkItem,
      separate
    },
    methods: {
      submit () {
        console.log('选中的id:' + this.checkedID)
      },
      clickEvent(item) {
        this.checkedID = item.id
        console.log(item)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.check-customer {

}
</style>
