<template>
  <div id="app" :class="{pt80: $route.meta.searchBtn}">
    <search-btn v-show="$route.meta.searchBtn"></search-btn>
    <keepAlive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keepAlive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <add-btn v-show="$route.meta.addBtn"></add-btn>
  </div>
</template>

<script>
import searchBtn from '@/components/searchBtn/'
import addBtn from '@/components/addBtn/'
export default {
  name: 'App',
  components: {
    searchBtn,
    addBtn
  }
}
</script>

<style>
html, body, div, ul, li, p, span, img {
  margin: 0;
  padding: 0;
  border: 0;
}
html, body {
  -webkit-text-size-adjust: none;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
ul, li {
  list-style: none;
}
/* 加载中的样式修改 */
.mint-indicator-wrapper {
  padding: 28px !important;
  background: rgba(0, 0, 0, .2);
}
.mint-spinner-snake {
  width: 54px !important;
  height: 54px !important;
  border-top-color: #fff !important;
  border-bottom-color: #fff !important;
  border-left-color: #fff !important;
}
/* messageBox的样式修改 */
.mint-msgbox-title {
  font-size: 32px;
}
.mint-msgbox-message {
  font-size: 32px;
}
.mint-msgbox-content {
  padding: 30px 20px 45px;
}
.mint-msgbox-btns {
  height: 80px;
}
.mint-msgbox-btn {
  font-size: 32px;
  line-height: 80px;
}
</style>
<style scoped>
#app {
  width: 100%;
  height: 100%;
  font-family: 'pingfang', 'microsoft yahei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
.pt80 {
  padding-top: 80px;
}
</style>
