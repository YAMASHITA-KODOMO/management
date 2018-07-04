<template>
  <div class="input-text">
    <div>
      <label><span v-if="need">*</span> {{label}}：</label>
      <input
        type="input"
        :value="value"
        v-on:input="$emit('input', $event.target.value)"
        @click="focusEvent($event)"
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'inputText',
    props: ['value', 'need', 'label'],
    data () {
      return {
      }
    },
    methods: {
      focusEvent (event) {
        event.target.selectionStart = event.target.value.length
        event.target.selectionEnd =  event.target.value.length
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/define';
.input-text {
  padding-left: 20px;
  height: 90px;
  box-sizing: border-box;
  background-color: #fff;
  div {
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
    input {
      float: right;
      border: 0;
      height: 80px;
      background-color: none;
      text-align: right;
      padding-top: 5px;
      padding-right: 60px;
      outline: 0;
      color: #000;
      font-size: 32px;
    }
  }
}
</style>
