<template>
  <div class="c-type" @click="$router.push({path: '/allCustomer', query: {typeId: dataObj.typeID, name: dataObj.name}})"><img :src="require(`./${dataObj.typeID}.png`)"></div>
</template>

<script>
  export default {
    name: 'cTypeItem',
    props: ['dataObj'],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.c-type {
  margin-bottom: 10px;
  padding: 0 20px;
  img {
    width: 100%;
    height: 166px;
  }
}
</style>
