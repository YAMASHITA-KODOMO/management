<!-- 选择联系人的搜索框 -->
<template>
  <div class="check-search-btn">
    <input type="" name="" placeholder="搜索" v-on:input="$emit('input', $event.target.value)">
    <div class="btn" :class="{active: checked}" @click="clickEvent">确定</div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: ['checked', 'value'],
    data () {
      return {
      }
    },
    methods: {
      clickEvent () {
        // 只有checked为true时抛出click
        if (this.checked) {
          this.$emit('click')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.check-search-btn {
  height: 114px;
  background: url('../../assets/imgs/search-icon.png') no-repeat 20px center #fff;
  background-size: 28px;
  input {
    width: 500px;
    height: 60px;
    margin-top: 27px;
    margin-left: 58px;
    line-height: 58px;
    font-size: 30px;
    border: 0;
    outline: 0;
    color: $black;
    &::-webkit-input-placeholder {
      color: $lightgrey;
    }
  }
  .btn {
    height: 114px;
    width: 118px;
    float: right;
    background: #999;
    color: #fff;
    font-size: 28px;
    line-height: 114px;
    text-align: center;
    &.active {
      background: #f3602d;
    }
  }
}
</style>
