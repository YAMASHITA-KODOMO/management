<template>
  <div class="all-customer">
    <separate @click.prevent="loading = false" class="separate">{{typeName}}</separate>
    <no-record v-show="!listTotal && listAll" :text="noRecord"></no-record>
    <div
      class="scroll"
      v-infinite-scroll="getlist"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      >
      <customer-item v-for="(item, index) in list" :dataObj="item" :key="index"></customer-item>
    </div>
    <no-more v-show="listTotal && listAll"></no-more>
  </div>
</template>

<script>
  import customerItem from 'c/customerItem'
  import separate from 'c/separate'
  import noRecord from 'c/noRecord'
  import noMore from 'c/noMore'
  import { getCustomerlistTotal } from 'api/customer'
  export default {
    name: 'allCustomer',
    data () {
      return {
        typeID: this.$route.query.typeId,
        check: true,
        list: [],
        listTotal: 0,
        curPage: 1,
        // 设置为false，组件create的时候就会调用加载数据
        loading: false,
        listAll: false,
        noRecord: '暂无客户记录',
      }
    },
    computed: {
      typeName () {
        return `${this.$route.query.name}(${this.listTotal})`
      }
    },
    components: {
      customerItem,
      separate,
      noRecord,
      noMore,
    },
    created () {
    },
    methods: {
      async getlist () {
        this.loading = true
        // 加载之前设置为true，防止数据量过少，会触发两次load
        let res = await getCustomerlistTotal({pageidx: this.curPage, typeid: this.typeID})
        this.loading = false
        if (res.list.length < 20) {
          this.loading = true
          this.listAll = true
        }
        this.curPage ++
        this.list.push(...res.list)
        if (!this.total) {
          this.listTotal = parseInt(res.total)
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all-customer {
  padding-top: 78px;
}
.separate {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  background: #f5f5f5;
}
</style>
