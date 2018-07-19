<template>
  <div class="c-input" >
    <div :class='[putInfo.type]'>
      <label key="label" :class='{req:putInfo.req}'> {{putInfo.label}}：</label>
      <input
        v-if="putInfo.type === 'text'"
        class='context' 
        type="text"
        :value="putInfo.value"
        :placeholder="putInfo.placeholder"
        @change="changeEvent($event)"
        @click="focusEvent($event)"
      >
      <p 
        v-if="putInfo.type === 'checkbox'"
        class='context' 
        @click="clickEvent()"
      > {{putInfo.value}} </p>
      <textarea
        v-if="putInfo.type === 'area'"
        class='context' 
        :value="putInfo.value"
        :placeholder="putInfo.placeholder"
        @input="inputEvent($event)"
      ></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cInput',
    props: ['putInfo'],
    data () {
      return {
      }
    },
    methods: {
      changeEvent(event){
        console.log(event);
        // $emit('input', $event.target.value)
      },
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

<style lang="scss" scoped>
@import '../../assets/scss/define';
.c-input {
  @include borderbtm;
  padding-left: 20px;
  background-color: #fff;
  color: $color-text;
  >div{
    padding-right: 40px;
    line-height: 90px;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    > label {
      color: #6c6c6c;
      font-size: $font-size-large;
      &.req:before {
        content: '*';
        color: $color-emphasis;
      }
    }
    > .context {
      font-size: $font-size-large;
      flex: 1;
      text-align: right;
      border: 0;
      outline: 0;
    }
  }
  > .checkbox {
    background: url('./more.png') 700px center / 14px no-repeat;
  }
  > .area {
    overflow: hidden;
    min-height: 270px;
    padding-top: 15px;
    width: 100%;
    > label {
      line-height: 60px;
    }
    > textarea {
      text-align: left;
      min-height: 260px;
      font-family: 'pingfang', 'microsoft yahei';
      padding: 0;
      margin: 0;
      line-height: 60px;
      overflow:visible;
      resize: none;
      &::-webkit-input-placeholder{
        font-size: 28px;
        color:#9b9b9b;
      }
    }
  }
}
</style>
