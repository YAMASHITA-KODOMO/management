<!--顶部搜索框 -->
<template>
  <div class="search-btn">
    <ul @click="clickEvent">
      <li><span></span>搜索</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'searchBtn',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    clickEvent () {
      this.$router.push({path: '/search', query: {type: this.$route.name}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.search-btn {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 6px 20px;
  border-bottom: 1px solid $borderColor;
  background: #f5f5f5;
  ul {
    height: 68px;
    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    border: 1px solid $borderColor;
    li {
      font-size: 30px;
      color: #939393;
      text-align: center;
      line-height: 68px;
      span {
        margin-right: 10px;
        display: inline-block;
        top: 4px;
        position: relative;
        width: 30px;
        height: 30px;
        background: url('../../assets/imgs/search-icon.png') no-repeat center;
        background-size: 30px;
      }
      
    }
  }
}
</style>
