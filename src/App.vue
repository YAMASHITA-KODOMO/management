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
