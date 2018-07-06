<template>
  <div>
    <div class="type-list" v-for="(item, index) in customerTypeList" @click="clickEvent(item)">{{item.name}}</div>
  </div>
</template>

<script>
  import { customerTypeIcon } from '@/config'
  export default {
    name: 'checkList',
    props: ['type'],
    data () {
      return {
        customerTypeList: customerTypeIcon
      }
    },
    methods: {
      clickEvent (item) {
        this.$store.commit('setCustomer', {key: 'type', value: item.name})
        this.$store.commit('setCustomer', {key: 'typeID', value: item.typeID})
        console.log(this.$store.state.customer)
        this.$router.go(-1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/define';
.type-list {
  height: 90px;
  background: #fff;
  @include borderbtm;
  padding-left: 30px;
  font-size: 32px;
  color: #000;
  line-height: 90px;
}
</style>
