<template>
  <div class="index">
    <div class="p-fixed">
      <!-- 菜单模块 -->
      <menu-list></menu-list>
      <!-- 文字分割 -->
      <separate class="separate">本周拜访记录({{visitTotal === null ? 0 : visitTotal}})</separate>
    </div>
    <no-record :text="noInfo" v-if="visitTotal !== null && !visitTotal"></no-record>
    <load-list
      class='scroll'
      @loadMore="loadMoreVisit"
      cpnt="visitItem"
      :list="visitList"
      :forbid="loading"
      >
    </load-list>
  </div>
</template>

<script>
  import menuList from 'c/menuList'
  import separate from 'c/separate'
  import noRecord from 'c/noRecord'
  import loadList from 'c/loadList'
  import { getVisitListWeekly } from 'api/visit'
  export default {
    name: '',
    data () {
      return {
        visitTotal: null,
        noInfo: '暂无拜访记录',
        visitList: [],
        loading: false,
        curpage: 1
      }
    },
    components: {
      menuList,
      separate,
      noRecord,
      loadList,
    },
    async created () {
      console.log('this.$indicator:' + this.$indicator)
    },
    methods: {
      async loadMoreVisit () {
        this.$loading.open()
        let res = await getVisitListWeekly(this.curpage)
        this.curpage++
        this.visitTotal = parseInt(res.total)
        this.visitList = res.list
        this.$loading.close()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index {
  height: 100%;
  box-sizing: border-box;
  .p-fixed {
    position: fixed;
    top: 80px;
    left: 0;
    height: 324px;
    width: 100%;
    z-index: 9;
  }
  .scroll {
    padding-top: 324px;
  }
  .no-record {
    margin-top: 324px;
  }
}
</style>
