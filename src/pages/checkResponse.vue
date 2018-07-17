<template>
  <div class="check-response">
    <check-search-btn v-model="keyword" placeholder="搜索" :checked="checkedID" @click="submit"></check-search-btn>
    <div v-show="keyword === ''"
      v-infinite-scroll="getList"
      infinite-scroll-disabled="normalLoading"
      infinite-scroll-distance="10"
      >
      <template v-for="(item, index) in normalList">
        <alphabet-separate v-if="item.letter">{{item.letter}}</alphabet-separate>
        <check-item v-else  @click="clickEvent(item)" :key="'normal' + index" :dataObj="item" :checked="checkedID === item.account">{{item.username}}</check-item>
      </template>
    </div>
    <div v-show="keyword !== ''"
      v-infinite-scroll=""
      infinite-scroll-disabled=""
      infinite-scroll-distance="10"
      >
      search
    </div>
  </div>
</template>

<script>
  import { getResponseList } from 'api/boss'
  import checkItem from 'c/checkItem'
  import alphabetSeparate from 'c/alphabetSeparate'
  import checkSearchBtn from 'c/checkSearchBtn'
  export default {
    name: 'checkResponse',
    data () {
      return {
        keyword: '',
        checkedID: '',
        normalLoading: false,
        normalList: [],
        letter: '',
        normalPage: 1,
      }
    },
    components: {
      checkSearchBtn,
      checkItem,
      alphabetSeparate,
    },
    async created() {
      
    },
    methods: {
      async getList () {
        this.$loading.open()
        let res = await getResponseList(this.normalPage)
        console.log(res)
        this.normalPage++
        let len = res.userlist.length
        // 循环添加字母后的数据
        let afterLetter = []
        for (let i = 0; i < len; i++) {
          let firstLetter = res.userlist[i].account.substr(0, 1).toUpperCase() || '#'
          if (firstLetter !== this.letter) {
            this.normalList.push({letter: firstLetter})
            this.letter = firstLetter
          }
          this.normalList.push(res.userlist[i])
        }
        this.$loading.close()
      },
      submit () {

      },
      clickEvent(item) {
        this.checkedID = item.account
        console.log(item)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.check-response {
  padding-top: 114px;
}
</style>
