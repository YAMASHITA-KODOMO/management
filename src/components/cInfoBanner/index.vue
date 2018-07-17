<template>
  <div class="c-banner">
    <p class="name">{{info.name}}</p>
    <div class="more" @click="go('/addCustomer', {id: $route.query.id})"></div>
    <div>
      <div class="follow" 
        :class="{followed: info.follow}"
        @click="info.follow ? cancelFollow() : setFollow()"
        >{{followTip}}
      </div>
      <p>客户负责人：{{info.response_man}}</p>
      <p>电话：{{info.phone}}&nbsp;&nbsp;&nbsp;&nbsp;邮编：{{info.postal}}</p>
      <p class="address">地址：{{info.address}}</p>
    </div>
    <c-info-tool class="tool" :sum="[info.linkman_num, info.files_num]"></c-info-tool>
  </div>
</template>

<script>
  import { getCustomerInfo, setCustomerFollow, cancelCustomerFollow } from 'api/customer'
  import cInfoTool from 'c/cInfoTool'
  export default {
    name: 'cInfoBanner',
    props: ['id'],
    data () {
      return {
        info: {}
      }
    },
    computed: {
      followTip () {
        return this.info.follow ? '已关注': '+关注'
      }
    },
    components: {
      cInfoTool,
    },
    async created () {
      this.$loading.open()
      let res = await getCustomerInfo(this.id)
      this.info = res.info
      this.$loading.close()
    },
    methods: {
      async setFollow () {
        let res = await setCustomerFollow(this.id)
        this.info.follow = true
      },
      async cancelFollow () {
        let res = await cancelCustomerFollow(this.id)
        this.info.follow = false
      },
      go (path, query) {
        this.$router.push({path: path, query: query})
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.c-banner {
  position: relative;
  background: #fff;
  @include borderbtm;
  padding: 0 20px;
  .more {
    position: absolute;
    top: 22px;
    right: 20px;
    width: 26px;
    height: 26px;
    background: url('../../assets/imgs/more-icon.png') no-repeat right center;
  }
  &>div {
    position: relative;
  }
  p {
    color: $grey;
    font-size: 26px;
    line-height: 26px;
    margin-bottom: 20px;
  }
  .address {
    line-height: 36px;
  }
  .name {
    font-size: 34px;
    padding-top: 8px;
    line-height: 49px;
    margin-bottom: 27px;
    color: $black;
  }
  .tool {
    margin: 34px 0;
  }
  .follow {
    width: 120px;
    height: 60px;
    border-radius: 8px;
    color: $color-active;
    border: 1px solid $color-active;
    line-height: 60px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 28px;
  }
  .followed {
    border-color: $grey;
    color: $grey;
  }
}
</style>
