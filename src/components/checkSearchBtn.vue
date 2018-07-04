<!-- 选择联系人的搜索框 -->
<template>
  <div class="check-search-btn">
    <input type="" name="">
    <div class="btn" :class="{active: checked}" @click="clickEvent">确定</div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: ['checked'],
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
.check-search-btn {
  height: 114px;
  background: #fff;
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
