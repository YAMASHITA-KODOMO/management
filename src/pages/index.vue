<template>
  <div class="index">
    <div class="p-fixed">
      <!-- 菜单模块 -->
      <menu-list></menu-list>
      <!-- 文字分割 -->
      <separate class="separate">本周拜访记录({{visitTotal}})</separate>
    </div>
    <div
      class="scroll"
      v-infinite-scroll="loadMoreVisit"
      infinite-scroll-disabled="responseLoading"
      infinite-scroll-distance="10"
      >
      <no-record :text="noInfo" v-if="!visitList.length"></no-record>
      <visit-item v-for="(item, index) in visitList" :dataObj="item" :key="index"></visit-item>
    </div>
  </div>
</template>

<script>
  import menuList from 'c/menuList/'
  import separate from 'c/separate'
  import noRecord from 'c/noRecord'
  import visitItem from 'c/visitItem'
  import { getVisitListWeekly } from 'api/visit'
  export default {
    name: '',
    data () {
      return {
        visitTotal: 0,
        noInfo: '暂无拜访记录',
        visitList: [],
        nomore: true,
        curpage: 1
      }
    },
    components: {
      menuList,
      separate,
      noRecord,
      visitItem,
    },
    async created () {
    },
    methods: {
      async loadMoreVisit () {
        let res = await getVisitListWeekly({pageidx: this.curpage})
        this.visitList.push(...res.list)
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
}
</style>
