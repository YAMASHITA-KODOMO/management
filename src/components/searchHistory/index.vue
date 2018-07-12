<template>
  <div class="searc-history">
    <p>搜索历史</p>
    <span><img :src="removeIcon"></span>
    <ul>
      <li>北方广电</li>
      <li>大连</li>
      <li>北方广电</li>
      <li>曹</li>
      <li>北方广电</li>
      <li>大连</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'searchHistory',
    data () {
      return {
        removeIcon: require('./remove-icon.png')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.searc-history {
  position: relative;
  padding: 30px 20px ;
  p {
    color: $black;
    font-size: 30px;
    line-height: 30px;
  }
  span {
    position: absolute;
    top: 28px;
    right: 20px;
    img {
      width: 28px;
      height: 29px;
    }
  }
  ul {
    li {
      margin-top: 30px;
      border: 1px solid #e5e5e5;
      float: left;
      margin-right: 30px;
      height: 60px;
      border-radius: 30px;
      line-height: 60px;
      color: $lightgrey;
      font-size: 30px;
      padding: 0 30px;
    }
  }
}
</style>
