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
    <checkbox label="客户负责人" v-model="customer.linkman" :need="true" type="checkLinkman"></checkbox>
    <input-area label="备注" v-model="customer.remark"></input-area>
    <btn class="m80" @click="submit">提交</btn>
  </div>
</template>

<script>
  import { mapState } from 'vuex'  
  import inputText from 'cpnts/inputText'
  import inputArea from 'cpnts/inputArea'
  import checkbox from 'cpnts/checkbox'
  import btn from 'cpnts/btn'
  export default {
    name: 'addCustomer',
    props: [],
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        customer: state => state.customer,
      })
    },
    watch: {
      customer (val) {
        console.log(val)
      }
    },
    components: {
      inputText,
      checkbox,
      inputArea,
      btn
    },
    created () {
    },
    methods: {
      checkCity () {
        console.log('checkCity')
      },
      submit () {
        console.log(this.$store.state.customer)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m80 {
  margin: 80px 0;
}
</style>
