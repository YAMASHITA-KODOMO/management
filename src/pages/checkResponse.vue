<template>
  <div class="check-response">
    <check-search-btn v-model="keyword" placeholder="搜索" :checked="checkedID" @click="submit"></check-search-btn>
    <!-- 
      loadmore触发加载数据函数
      list 绑定每次加载之后拿到的数据
      cpnt 显示的组件
      forbid 外部控制加载
      alpha 是否显示字母分割
      click 触发click事件， 参数为item
     -->
    <load-list
      @loadMore="getList"
      :list="normalList"
      cpnt="checkItem"
      :forbid="normalLoading"
      :alpha="true"
      @click="clickEvent"
      ></load-list>
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
  import loadList from 'c/loadList'
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
      loadList,
    },
    async created() {
      
    },
    methods: {
      async getList () {
        this.$loading.open()
        this.normalLoading = true
        let res = await getResponseList(this.normalPage)
        this.normalPage++
        this.normalList = res.userlist
        this.normalLoading = false
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
