<template>
  <div class="input-text">
    <div @click="clickEvent">
      <label><span v-show="need">*</span> {{label}}：</label>
      <div><p>{{value}}</p></div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'checkBox',
    props: ['value', 'need', 'label', 'type'],
    data () {
      return {
      }
    },
    methods: {
      clickEvent () {
        // 传递了type跳到选择页面，没有传递则抛出click事件
        if (this.type) {
          this.$router.push({path: '/' + this.type})
        } else {
          this.$emit('click')
        }
      }  
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.input-text {
  padding-left: 20px;
  height: 90px;
  background-color: #fff;
  box-sizing: border-box;
  div {
    box-sizing: border-box;
    height: 90px;
    @include borderbtm;
    line-height: 90px;
    label {
      color: #6c6c6c;
      font-size: 30px;
      span {
        color: #fb0000;
      }
    }
    div {
      float: right;
      border: 0;
      height: 90px;
      text-align: right;
      margin-right: 20px;
      background: url('../../assets/imgs/more-icon.png') no-repeat right center;
      background-size: 16px;
      color: #000;
      font-size: 32px;
      p {
        padding-right: 40px;
      }
    }
  }
}
</style>
