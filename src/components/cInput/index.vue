<template>
  <div class="c-input">
    <!-- text -->
    <div class="text" v-if="putInfo.type === 'text'">
      <label key="label"><span v-if="putInfo.req">*</span> {{putInfo.label}}：</label>
      <input
        v-if="putInfo.type === 'text'"
        type="input"
        :value="putInfo.value"
        v-on:input="$emit('input', $event.target.value)"
        @click="focusEvent($event)"
        :placeholder="putInfo.placeholder"
      >
    </div>

    <!-- chanckbox -->
    <div class="checkbox" v-if="putInfo.type === 'checkbox'">
      <label key="label"><span v-if="putInfo.req">*</span> {{putInfo.label}}：</label>
      <p @click="clickEvent()">{{putInfo.value}}<span><img :src="icon"></span></p>
    </div>

    <!-- textarea -->
    <div class="textarea" v-if="putInfo.type === 'area'">
      <label key="label"><span v-if="putInfo.req">*</span> {{putInfo.label}}：</label>
      <textarea
          :value="putInfo.value"
          v-on:input="inputEvent($event)"
          :placeholder="putInfo.placeholder"
        ></textarea>
    </div>
    <!-- btn -->
    <div class="btn" v-if="putInfo.type === 'btn'"
      @click="clickEvent()"
      >{{putInfo.label}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cInput',
    props: ['putInfo'],
    // props: ['value', 'req', 'label', 'type', 'route', 'event', 'placeholder'],
    data () {
      return {
      }
    },
    computed: {
      icon () {
        if (!this.putInfo.icon) {
          return require('./more.png')
        } else {

        }
      }
    },
    methods: {
      clickEvent (event) {
        // 传递了type跳到选择页面，没有传递则抛出click事件
        console.log(this.putInfo)
        if (this.putInfo.route) {
          this.$router.push({path: '/' + this.putInfo.route})
        } else {
          this.putInfo.event && this.putInfo.event()
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
        console.log('sss')
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
  padding-left: 20px;
  box-sizing: border-box;
  background-color: #fff;
  & > div {
    @include borderbtm;
    label {
      color: #6c6c6c;
    }
  }
  .text {
    line-height: 90px;
    
    label {
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
  }
  .checkbox {
    line-height: 90px;
    height: 90px;
    color: #000;
    label {
      font-size: 30px;
      span {
        color: #fb0000;
      }
    }
    p {
      padding-right: 20px;
      font-size: 32px;
      float: right;
      span {
        margin-left: 20px;
        img {
          width: 16px;
        }
      }
    }
  }
  .textarea {
    overflow: hidden;
    min-height: 270px;
    padding-top: 15px;
    width: 100%;
    label {
      line-height: 60px;
      font-size: 30px;
      float: left;
      span {
        color: #fb0000;
      }
    }
    textarea {
      float: right;
      margin-top: 15px;
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
      resize: none;
      font-size: 32px;
      &::-webkit-input-placeholder{
        font-size: 28px;
        color:#9b9b9b;
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
