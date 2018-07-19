<template>
  <div>
    <c-input 
      v-for='(item, index) in inputList'
      :putInfo="item"
      v-model.lazy='customer[item.model]'
      :key="index">
    </c-input>
    <city-picker v-show="cityPanel" @hidePanel="cityPanel = false" @submitPanel="submitCity"></city-picker>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import cInput from 'c/cInput'
  import cityPicker from 'c/cityPicker'
  import { getCustomerInfo } from 'api/customer'
  export default {
    name: 'addCustomer',
    data () {
      return {
        inputList: [
          {
            label: '客户全称',
            model: 'name',
            req: true,
            type: 'text'
          },
          {
            label: '客户类型',
            model: 'type',
            req: true,
            type: 'checkbox',
            route: 'checkCustomerType'
          },
          {
            label: '上级单位',
            model: 'sup',
            type: 'checkbox',
            route: 'checkCustomer'
          },
          {
            label: '地区·省份·城市',
            model: 'city',
            type: 'checkbox',
            event: this.checkCity
          },
          {
            label: '电话',
            model: 'phone',
            type: 'text'
          },
          {
            label: '传真',
            model: 'fax',
            type: 'text'
          },
          {
            label: '详细地址',
            model: 'address',
            type: 'area'
          },
          {
            label: '邮政编码',
            model: 'postal',
            type: 'text'
          },
          {
            label: '客户简介',
            model: 'desc',
            type: 'area'
          },
          {
            label: '客户负责人',
            model: 'response_man',
            type: 'checkbox',
            route: 'checkResponse',
            req: true
          },
          {
            label: '备注',
            model: 'remark',
            type: 'area',
          },
          {
            label: '提交',
            type: 'btn',
            event: this.submit
          }
        ],
        c: {name: 123},
        cityPanel: false
      }
    },
    computed: {
      ...mapGetters([
        'customer'
      ])
    },
    components: {
      cInput,
      cityPicker,
    },
    async created () {
      let id = this.$route.query.id
      if ( id ) {
        let res = await getCustomerInfo(id)
        this.initCustomer(res.info)
      }
    },
    methods: {
      ...mapMutations({
        initCustomer: 'INIT_CUSTOMER',
        setCustomer: 'SET_CUSTOMER',
        clearCustomer: 'CLEAR_CUSTOMER'
      }),
      // 显示选中的城市
      checkCity () {
        this.cityPanel = true
      },
      // 提交选中城市
      submitCity (values) {
        // this.setCustomer({key: 'city', value: values.join('·')})
        console.log(values)
      },
      submit () {
        console.log(this.customer)
        console.log(this.$store.state.customer)
      },
    },
    beforeRouteEnter (to, from, next) {
      // 携带了id为编辑页面，防止每次进都入created获取数据，需要判定从选择页面进入的做缓存
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
        this.clearCustomer()
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
