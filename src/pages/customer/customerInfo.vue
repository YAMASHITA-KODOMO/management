<template>
  <div>
    <c-info-banner :id="$route.query.id"></c-info-banner>
    <separate>{{separateInfo}}</separate>
    <no-record v-if="!total && listAll" text="暂无拜访记录"></no-record>
    <load-list
      @loadMore="loadMoreList"
      cpnt="visitItem"
      :list="list"
      :forbid="loading"
      ></load-list>
  </div>
</template>

<script>
  import cInfoBanner from 'c/cInfoBanner'
  import noRecord from 'c/noRecord'
  import separate from 'c/separate'
  import loadList from 'c/loadList'
  import { getVisitListByCustomer } from 'api/visit'
  export default {
    name: 'customerInfo',
    data () {
      return {
        total: 0,
        listAll: false,
        page: 1,
        list: [],
        loading: false,
        id: this.$route.query.id
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
      loadList,
      noRecord,
    },
    created () {

    },
    methods: {
      async loadMoreList () {
        this.loading = true
        let res = await getVisitListByCustomer(this.page, this.id)
        this.page++
        if (!this.total) {
          // 接口返回的是字符串
          this.total = parseInt(res.total)
        }
        if (res.list.length < 20) {
          this.listAll = true
        }
        this.list = res.list
        this.loading = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
