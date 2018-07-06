<template>
  <div class="c-tool">
    <div 
      v-for="(item, index) in toolList" 
      :style="{background: item.bgcolor }"
      :key="index"
      @click="$router.push({path: item.url, query: {id: $route.query.id}})"
      >
      <img :src="item.icon">
      {{item.text}}({{item.sum}})
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cInfoTool',
    props: ['sum'],
    data () {
      return {
        list: [
          {
            text: '联系人',
            icon: require('./linkman.png'),
            bgcolor: '#47b3e1',
            sum: 0,
            url: '/cLinkman'
          },
          {
            text: '相关文档',
            icon: require('./files.png'),
            bgcolor: '#3ec852',
            sum: 0,
            url: '/cFiles'
          }
        ]
      }
    },
    computed: {
      toolList () {
        return this.list.map( (x, index)=> {
          x.sum = this.sum[index]
          return x
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.c-tool {
  overflow: hidden;
  div {
    float: left;
    width: 345px;
    border-radius: 8px;
    height: 100px;
    line-height: 100px;
    margin-left: 20px;
    color: #fff;
    text-align: center;
    font-size: 32px;
    img {
      height: 47px;
      position: relative;
      top: 14px;
    }
  }
  div:first-child {
    margin-left: 0;
  }
}
</style>
