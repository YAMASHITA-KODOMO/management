<template>
  <div>
    <card-poster :imgList="info.card" :delete="info.delete"></card-poster>
    <c-input 
      v-for='(item, index) in list'
      :putInfo="item"
      v-model='info[item.model]'
      :key="index">
    </c-input>
    <btn @click="toEdit">编辑</btn>
  </div>
</template>

<script>
  import cInput from 'c/cInput'
  import btn from 'c/btn'
  import cardPoster from 'c/cardPoster'
  import { getLinkmanInfo } from 'api/linkman'
  export default {
    name: 'linkmanInfo',
    data () {
      return {
        id: this.$route.query.id,
        list: [
          {
            label: '姓名',
            model: 'name',
            type: 'checkbox',
            icon: 'download',
            event: this.call
          },
          {
            label: '手机号码',
            model: 'phone',
            type: 'checkbox',
            icon: 'call',
            event: this.call
          },
          {
            label: '公司',
            model: 'customer',
            icon: 'none',
            type: 'checkbox',
          },
          {
            label: '部门',
            model: 'department',
            icon: 'none',
            type: 'checkbox',
          },
          {
            label: '职务',
            model: 'job',
            icon: 'none',
            type: 'checkbox',
          },
          {
            label: '备注',
            model: 'remark',
            type: 'area',
            readonly: true
          },
        ],
        info: {}
      }
    },
    components: {
      cInput,
      btn,
      cardPoster,
    },
    async created () {
      let res = await getLinkmanInfo(this.id)
      this.info = res.info
    },
    methods: {
      call () {
        console.log('click download')
      },
      toEdit () {
        this.$router.push({path: '/addLinkman', query: {id: this.id}})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
