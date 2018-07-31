<template>
  <div class="files-item" @click="clickEvent">
    <ul>
      <li class="icon"><img :src="dataObj.name | icon"></li>
      <li class="main">
        <p>{{dataObj.name.substring(16)}}</p>
        <p>{{size}} 来自 <span>{{dataObj.response_name}}</span></p>
      </li>
      <li class="date">
        {{dataObj.time.substring(0, 10)}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'filesItem',
    props: ['dataObj'],
    data () {
      return {
        filesIcon: {
          word: require('./word.png'),
          txt: require('./txt.png'),
          pdf: require('./pdf.png'),
          xlxs: require('./xlxs.png'),
          rar: require('./rar.png'),
          ppt: require('./ppt.png'),
          img: require('./img.png'),
          others: require('./others.png'),
        },
      }
    },
    filters: {
      icon (val) {
        let icon = {
          word: require('./word.png'),
          txt: require('./txt.png'),
          pdf: require('./pdf.png'),
          xlxs: require('./xlxs.png'),
          rar: require('./rar.png'),
          ppt: require('./ppt.png'),
          img: require('./img.png'),
          others: require('./others.png'),
        }
        // word
        if(val.search(/\.docx$/ig) > 0) {
          return icon.word
        }
        // txt
        if(val.search(/\.txt$/ig) > 0) {
          return icon.txt
        }
        // pdf
        if(val.search(/\.pdf$/ig) > 0) {
          return icon.pdf
        }
        // xlxs
        if(val.search(/\.xlxs$/ig) > 0) {
          return icon.xlxs
        }
        // rar
        if(val.search(/(\.rar|\.zip)$/ig) > 0) {
          return icon.rar
        }
        // ppt
        if(val.search(/\.pptx$/ig) > 0) {
          return icon.pptx
        }
        // img
        if(val.search(/(\.jpg|\.png|\.bmp|\.jpeg)$/ig) > 0) {
          return icon.img
        }
        return icon.others
      }
    },
    computed: {
      size: {
        get () {
          let sum = parseInt(this.dataObj.size)
          return sum < 1024 ? `${sum}B` : 
            sum / 1024 < 1024 ? `${parseInt(sum / 1024)}KB` :
            (parseInt(sum / 1024 / 1024) + 'MB')
        },
        set () {}
      }
    },
    methods: {
      clickEvent () {
        location.href = this.dataObj.src
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.files-item {
  height: 150px;
  background: #fff;
  padding-left: 20px;
  ul {
    @include borderbtm;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    .icon {
      height: 150px;
      width: 108px;
      box-sizing: border-box;
      padding-top: 20px;
      flex-shrink: 0;
      img {
        width: 108px;
        height: 108px;
      }
    }
    .main {
      height: 150px;
      width: 100%;
      position: relative;
      padding-left: 14px;
      p:first-child {
        font-size: 28px;
        color: #000;
        padding-top: 26px;
        line-height: 32px;
      }
      p:last-child {
        position: absolute;
        bottom: 26px;
        font-size: 24px;
        color: #939393;
        span {
          color: #000;
        }
      }
    }
    .date {
      width: 170px;
      height: 150px;
      box-sizing: border-box;
      padding-top: 26px;
      text-align: right;
      padding-right: 20px;
      font-size: 24px;
      color: #939393;
      flex-shrink: 0;
    }
  }
}
</style>
