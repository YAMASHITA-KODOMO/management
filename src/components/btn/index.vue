<template>
  <div class="btn">
    <div @click="$emit('click')">
      <slot></slot>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'Btn',
    props: ['text'],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn>div{
  height: 96px;
  width: 710px;
  margin: 0 auto;
  border-radius: 10px;
  background: #f3602d;
  font-size: 36px;
  color: #fff;
  line-height: 96px;
  text-align: center;
}
</style>
