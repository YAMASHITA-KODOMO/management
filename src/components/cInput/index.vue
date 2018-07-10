<template>
  <div class="c-input" :class="{area: type === 'area', notarea: type !== 'area', btn: type === 'btn'}">
    <div v-if="type === 'btn'" class="btn" @click="clickEvent()">{{label}}</div>
    <div v-else :class="{area: type === 'area', notarea: type !== 'area'}">
      <label :class="{area: type === 'area'}"><span v-if="req">*</span> {{label}}：</label>
      <input
        v-if="type === 'text'"
        type="input"
        :value="value"
        v-on:input="$emit('input', $event.target.value)"
        @click="focusEvent($event)"
        :placeholder="placeholder"
      >
      <div
        class="checkbox"
        v-if="type === 'checkbox'"
        @click="clickEvent($event)"
        >
        <p>{{value}}</p>
      </div>
      <div class="textarea" v-if="type==='area'">
        <textarea
          :value="value"
          v-on:input="inputEvent($event)"
          :placeholder="placeholder"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cInput',
    props: ['value', 'req', 'label', 'type', 'route', 'event', 'placeholder'],
    data () {
      return {
      }
    },
    methods: {
      clickEvent (event) {
        // 传递了type跳到选择页面，没有传递则抛出click事件
        if (this.route) {
          this.$router.push({path: '/' + this.route})
        } else {
          this.event && this.event()
          // this.$emit('click')
        }
      },
      focusEvent (event) {
        if (event.target.value.length > 15) {
          return
        }
        event.target.selectionStart = event.target.value.length
        event.target.selectionEnd =  event.target.value.length
      },
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
@import '../../assets/scss/define';
.c-input {
  &.notarea, & .notarea {
    height: 90px;
  }
  &.btn {
    padding-left: 0;
    background: none;
  }
  padding-left: 20px;
  box-sizing: border-box;
  background-color: #fff;
  &.area {
    min-height: 270px;
    overflow: hidden;
  }
  & > div {
    box-sizing: border-box;
    &.area {
      min-height: 270px;
      overflow: hidden;
    }
    @include borderbtm;
    line-height: 90px;
    label {
      &.area {
        float: left;
        width: 180px;
      }
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
      width: 480px;
      background-color: none;
      text-align: right;
      padding-top: 5px;
      padding-right: 60px;
      outline: 0;
      color: #000;
      font-size: 32px;
    }
    .checkbox {
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
    .textarea {
      float: right;
      padding-top: 15px;
      textarea {
        width: 550px;
        border: 0;
        min-height: 260px;
        font-family: 'pingfang', 'microsoft yahei';
        padding: 0;
        margin: 0;
        line-height: 60px;
        overflow-x:visible;
        overflow-y:visible;
        outline: 0;
        color: #000;
        font-size: 32px;
        &::-webkit-input-placeholder{
          font-size: 28px;
          color:#9b9b9b;
        }
      }
    }
  }
  .btn {
    height: 96px;
    width: 710px;
    margin: 80px auto;
    border-radius: 10px;
    background: #f3602d;
    font-size: 36px;
    color: #fff;
    line-height: 96px;
    text-align: center;
  }
}
</style>
