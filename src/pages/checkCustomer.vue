<template>
  <div class="check-customer">
    <check-search-btn v-model="keyword" placeholder="搜索" :checked="checkedID" @click="submit"></check-search-btn>
    <div v-show="keyword === ''"
      v-infinite-scroll="getList"
      infinite-scroll-disabled="normalLoading"
      infinite-scroll-distance="10"
      >
      <separate>常联系客户</separate>
      <check-item 
        @click="clickEvent(item)" 
        v-for="(item, index) in usuallyList" 
        :key="index" 
        :checked="checkedID === item.id">{{item.name}}</check-item>
      <template v-for="(item, index) in totalList">
        <alphabet-separate v-if="item.letter" :key="item.letter">{{item.letter}}</alphabet-separate>
        <check-item v-else  @click="clickEvent(item)" :key="'normal' + index" :checked="checkedID === item.id">{{item.name}}</check-item>
      </template>
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
  import alphabetSeparate from 'c/alphabetSeparate'
  import { getCustomerlistTotal, getCutomerListResponseUsually } from 'api/customer'
  export default {
    name: 'checkCustomer',
    props: [],
    data () {
      return {
        keyword: '',
        checkedID: '',
        usuallyList: [],
        usuallyPage: 0,
        totalList: [],
        totalPage: 0,
        startTotal: false,
        normalLoading: false,
        letter: '',
      }
    },
    components: {
      checkSearchBtn,
      checkItem,
      separate,
      alphabetSeparate,
    },
    created () {
      // getType()
    },
    methods: {
      getList () {
        // this.normalLoading = true
        if (this.startTotal) {
          this.getTotal()
        } else {
          this.getUsually()
        }
      },
      async getTotal () {
        let res = await getCustomerlistTotal(this.totalPage)
        this.totalPage++
        let len = res.list.length
        if ( len < 20 ) {
          this.normalLoading = true
        }
        // 循环添加字母后的数据
        let afterLetter = []
        for (let i = 0; i < len; i++) {
          let firstLetter = res.list[i].account.substr(0, 1).toUpperCase() || '#'
          if (firstLetter !== this.letter) {
            this.totalList.push({letter: firstLetter})
            this.letter = firstLetter
          }
          this.totalList.push(res.list[i])
        }
      },
      async getUsually () {
        let res = await getCutomerListResponseUsually(this.usuallyPage)
        this.usuallyPage++
        if (res.list.length < 20) {
          this.startTotal = true
          this.getTotal()
        }
        this.usuallyList.push(...res.list)
        // this.normalLoading = false
      },
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
  padding-top: 114px;
}
</style>
