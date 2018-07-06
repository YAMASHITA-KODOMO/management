<template>
  <div>
    <separate :text="name"></separate>
    <div>
      <no-record :text="noRecord"></no-record>
    </div>
  </div>
</template>

<script>
  import customerItem from 'c/customerItem'
  import separate from 'c/separate'
  import noRecord from 'c/noRecord'
  import { getCutomerListByType } from '@/api/ajax'
  export default {
    name: 'allCustomer',
    data () {
      return {
        typeID: this.$route.query.typeID,
        name: this.$route.query.name,
        list: [],
        curPage: 0,
        listAll: false,
        noRecord: '暂无客户记录',
      }
    },
    components: {
      customerItem,
      separate,
      noRecord,
    },
    created () {
      this.name = this.name + '(0)'
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
