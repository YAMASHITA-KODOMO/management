<template>
  <div class="index">
    <!-- 菜单模块 -->
    <menu-list></menu-list>
    <!-- 文字分割 -->
    <separate :text="`本周拜访记录(${visitTotal})`"></separate>
    <div>
      <no-record :text="noInfo" v-if="!visitList.length"></no-record>
      <visit-item v-for="(item, index) in visitList" :dataObj="item" :key="index"></visit-item>
    </div>
  </div>
</template>

<script>
  import menuList from 'cpnts/menuList'
  import separate from 'cpnts/separate'
  import noRecord from 'cpnts/noRecord'
  import visitItem from 'cpnts/visitItem'
  import { getVisitListWeekly } from '@/tool/ajax'
  export default {
    name: '',
    data () {
      return {
        visitTotal: 0,
        noInfo: '暂无拜访记录',
        visitList: []
      }
    },
    components: {
      menuList,
      separate,
      noRecord,
      visitItem
    },
    async created () {
      let res = await getVisitListWeekly()
      console.log(res)
      this.visitList = res.list
      this.visitTotal = res.total
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  height: 100%;
  box-sizing: border-box;
}
.bg {
  background: #fff;
}
.pt80 {
  padding-top: 80px;
}
</style>
