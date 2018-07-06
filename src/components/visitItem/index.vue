<template>
  <div class="visit-item">
  	<p class="name">{{dataObj.customer_name}}</p>
    <p class="date">{{dataObj.date}}&nbsp;&nbsp;{{dataObj.linkman}}</p>
    <div 
      class="transiton-wrap" 
      ref='trans'
      :style="{height: hide ? transHideHei : transShowHei}"
      >
      <p 
        ref="content" 
        class="content"
        :class = "{break: addbreak}"
        >{{dataObj.content}}
      </p>
      <p
        ref = "files"
        class="files" 
        ><a v-for="(item, index) in dataObj.files" :href="item.src">{{item.name}}</a>
      </p>
    </div>
    <p class="response_man">{{dataObj.response_man}}&nbsp;&nbsp;{{dataObj.uptime}}</p>
    <p class="hide-tips">
      <span @click="hide = !hide">{{tipsText}}</span>
      <span @click="hide = !hide" class="switch" :class="{on: hide, off: !hide}"></span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'visitItem',
    props: ['dataObj'],
    data () {
      return {
        hide: true,
        // 组件显示时候动画部分的高度，因为css3的transiton必须要固定的值才能计算，内容不固定只能在dom挂载之后获取其高度,其值为content跟files的高度相加
        transShowHei: '300px',
        // 组件隐藏时候的动画部分的高度，因为window.lib.flexible.px2rem转换的值与直接在css里面写之后转换到页面的值不一样，所以还是在dom挂载之后获取其高度
        transHideHei: '30px',
        // 因为在隐藏状态下，设置了文本溢出，所以获取的到的高度不是全部文字的高度，所以该属性作为判定的是否获取到高度的标识符
        getHeiInit: false,
      }
    },
    computed: {
      // 添加文本溢出样式
      addbreak: {
        get () {
          // 默认情况下hide是true，但是addbreak是false，只有设置了getHeiInit获取到content原始高度后，hide与addbreak才同步
          return this.getHeiInit ? this.hide : false
        },
        set () {}
      },
      tipsText: {
        get () {
          return this.hide ? '查看更多' : '收起'
        },
        set () {}
      }
    },
    mounted () {
      this.transShowHei = parseInt(this.getStyleAttr(this.$refs.content, 'height')) + parseInt(this.getStyleAttr(this.$refs.files, 'height')) + 'px';
      this.getHeiInit = true
      this.$nextTick(x => {
        this.transHideHei = this.getStyleAttr(this.$refs.content, 'height')
      })
      
    },
    methods: {
      getStyleAttr (ele, attr) {
        var oStyle = window.getComputedStyle ? window.getComputedStyle(ele, null) : ele.currentStyle;
        return oStyle[attr]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.visit-item {
  background: #fff;
  padding-left: 20px;
  padding-top: 30px;
  margin-bottom: 10px;
  .name {
    font-size: 34px;
    color: #000;
    line-height: 46px;
    -webkit-font-smoothing: none;
  }
  .date {
    font-size: 26px;
    line-height: 26px;
    margin-top: 14px;
    margin-bottom: 26px;
    color: #9b9b9b;
  }
  .transiton-wrap {
    overflow: hidden;
    transition:height 1s;
    // height: 70px;
    .content {
      border-top: 1px solid $borderColor;
      padding-top: 16px;
      padding-bottom: 28px;
      font-size: 30px;
      text-align: justify;
      line-height: 52px;
      color: #6c6c6c;
      box-sizing: border-box;
      padding-right: 20px;
      &.break {
        @include break;
      }
    }
    .files {
      box-sizing: border-box;
      text-align: right;
      font-size: 30px;
      padding-right: 20px;
      a {
        margin-bottom: 18px;
        display: block;
        color: #4790e8;
      }
    }
  }
  .response_man {
    font-size: 26px;
    color: #9b9b9b;
    text-align: right;
    line-height: 30px;
    margin-bottom: 20px;
    margin-top: 40px;
    padding-right: 20px;
  }
  .hide-tips {
    line-height: 80px;
    font-size: 28px;
    color: #6c6c6c;
    text-align: right;
    padding-right: 20px;
    border-top: 1px solid #e5e5e5;
    .switch {
      height: 12px;
      width: 24px;
      display: inline-block;
      position: relative;
      top: -4px;   
      &.on {
        background: url('./on-icon.png') no-repeat top left;
        background-size: 24px;
      }
      &.off {
        background: url('./off-icon.png') no-repeat top left;
        background-size: 24px;
      }
    }
  }
}
</style>
