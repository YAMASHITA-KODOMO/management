<template>
  <div>
    <input-text  label="客户全称" v-model="customer.name" :need="true"></input-text>
    <checkbox label="客户类型" v-model="customer.type" :need="true" type="checkCustomerType"></checkbox>
    <checkbox label="上级单位" v-model="customer.sup" type="checkCustomer"></checkbox>
    <checkbox label="省份·城市·城区" v-model="customer.city" @click="checkCity"></checkbox>
    <input-text label="电话" v-model="customer.phone"></input-text>
    <input-text label="传真" v-model="customer.fax"></input-text>
    <input-area label="详细地址" v-model="customer.address"></input-area>
    <input-text label="邮政编码" v-model="customer.postal"></input-text>
    <input-area label="客户简介" v-model="customer.desc"></input-area>
    <checkbox label="客户负责人" v-model="customer.response_man" :need="true" type="checkResponse"></checkbox>
    <input-area label="备注" v-model="customer.remark"></input-area>
    <btn class="m80" @click="submit">提交</btn>
    <!-- <city-picker :open="true"></city-picker> -->
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  import inputText from 'cpnts/inputText'
  import inputArea from 'cpnts/inputArea'
  import checkbox from 'cpnts/checkbox'
  import btn from 'c/btn'
  // import cityPicker from 'c/cityPicker'
  import { getCustomerInfo } from 'api/customer'
  export default {
    name: 'addCustomer',
    data () {
      return {
      }
    },
    computed: {
      // 需要跨页面获取数据，使用state保存
      // ...mapState({
      //   // 对象是引用地址，所以会直接修改state
      //   customer: state => state.customer,
      // })
      ...mapGetters([
        'customer'
      ])
    },
    components: {
      inputText,
      checkbox,
      inputArea,
      btn,
      // cityPicker,
    },
    async created () {
      // if (this.$route.query.id ) {
      //   let info = getCustomerInfo(this.$route.query.id)
      //   this.$store.commit('initCustomer', info)
      // }
      let id = this.$route.query.id
      if ( id ) {
        let info = await getCustomerInfo(id)
        this.initCustomer(info)
      }
    },
    methods: {
      ...mapMutations({
        initCustomer: 'INIT_CUSTOMER'
      }),
      checkCity () {
        console.log('checkCity')
      },
      submit () {
        console.log(this.$store.state.customer)
      }
    },
    beforeRouteEnter (to, from, next) {
      // 携带了id为编辑页面，防止每次进入都created获取数据，需要判定从选择页面进入的做缓存
      // 从以下页面进入的做缓存，不执行created事件
      if (from.name === 'checkCustomerType' ||
        from.name === null ||
        from.name === 'checkCustomer' ||
        from.name === 'checkResponse') {
        to.meta.keepAlive = true
      } else {
        to.meta.keepAlive = false
      }
      next()
    },
    beforeRouteLeave (to, from, next) {
      // 退出页面之前需要清除state，防止在编辑页面做的数据缓存到添加页面
      // 从添加也进入可不清除，做缓存，只清除从编辑页面退出的情况
      if (to.name === 'customerInfo') {
        this.$store.commit('clearCustomer')
      }
      next()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m80 {
  margin: 80px 0;
}
</style>
