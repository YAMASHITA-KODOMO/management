<!-- 拜访记录及记录时间分割框 -->
<template>
  <div class="separate">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'separate',
    props: ['text'],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.separate {
  background: #f5f5f5;
  font-size: 28px;
  line-height: 28px;
  color: #666;
  padding: 30px 20px 20px;
  border-bottom: 1px solid $borderColor;
}
</style>
