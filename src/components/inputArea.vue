<template>
  <div class="input-area">
    <div>
      <div class="label">
        <label><span v-if="need">*</span> {{label}}：</label>
      </div>
      <div class="textarea">
        <textarea
        :value="value"
        v-on:input="inputEvent($event)"
      ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'inputArea',
    props: ['value', 'need', 'label'],
    data () {
      return {
      }
    },
    methods: {
      inputEvent (event) {
        let $ele = event.target
        $ele.style.height = $ele.scrollTop + $ele.scrollHeight + 'px'
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/define';
.input-area {
  padding-left: 20px;
  // min-height: 270px;
  background-color: #fff;
  &>div {
    min-height: 270px;
    @include borderbtm;
    line-height: 90px;
    overflow: hidden;
    .label {
      float: left;
      width: 150px;
      label {
        color: #6c6c6c;
        font-size: 30px;
        line-height: 90px;
        span {
          color: #fb0000;
        }
      }
    }
    .textarea {
      float: left;
      padding-top: 15px;
      textarea {
        width: 560px;
        border: 0;
        // height: 270px;
        font-family: 'pingfang', 'microsoft yahei';
        padding: 0;
        margin: 0;
        line-height: 60px;
        overflow-x:visible;
        overflow-y:visible;
        outline: 0;
        color: #000;
        font-size: 32px;
      }
    }
  }
}
</style>
