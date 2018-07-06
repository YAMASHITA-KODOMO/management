<!-- 添加组件 -->
<template>
  <div class="add-btn" :class="{coverShow: mask}">
    <div v-show="mask" class="add-cover" @click="mask=!mask">
      <ul>
        <li v-for="(item, index) in addList">
          <p @click="clickEvent(item)">{{item.text}}</p>
          <img :src="item.icon" @click="clickEvent(item)">
        </li>
      </ul>
    </div>
    <div v-show="!mask" class="add-icon" @click="mask = !mask"></div>
  </div>
</template>

<script>
  import { addList } from '@/config'
  export default {
    name: 'addBtn',
    data () {
      return {
        mask: false,
        addList: addList
      }
    },
    created () {
    },
    methods: {
      clickEvent (item) {
        this.$router.push({path: item.url})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.add-btn {
  &.coverShow {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .add-cover {
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 40px;
      box-sizing: border-box;
      li {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        height: 102px;
        line-height: 102px;
        margin-right: 60px;
        margin-top: 60px;
        img {
          width: 102px;
          height: 102px;
        }
        p {
          font-size: 32px;
          color: #fff;
          margin-right: 20px;
        }
      }
    }
  }
  .add-icon {
    width: 102px;
    height: 102px;
    background: url('./add-btn-icon.png') no-repeat top left;
    background-size: 102px;
    position: fixed;
    bottom: 40px;
    right: 60px;
  }
}

</style>
