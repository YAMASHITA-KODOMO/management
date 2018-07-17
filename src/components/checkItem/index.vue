<template>
  <div class="check-item" @click="$emit('click')">
    <span :class="{active: checked}"></span><slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'checkItem',
    props: ['checked'],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.check-item {
  height: 90px;
  background: #fff;
  @include borderbtm;
  line-height: 90px;
  color: $black;
  font-size: 32px;
  padding-left: 20px;
  span {
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 1px solid $borderColor;
    border-radius: 16px;
    margin-right: 18px;
    position: relative;
    top: 6px;
  }
  .active {
    border-color: $color-active;
    background: url('../../assets/imgs/selected.png') no-repeat;
    background-size: 32px;
  }
}
</style>
