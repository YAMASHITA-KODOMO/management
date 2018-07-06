<template>
  <div class="linkman-separate">
  	<slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'linkmaneSeparate',
    props: ['text'],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.linkman-separate {
	height: 74px;
	color: #000;
	font-weight: bold;
	font-size: 30px;
	padding-left: 30px;
	background: #f5f5f5;
  padding-top: 32px;
  line-height: 30px;
  box-sizing: border-box;
}
</style>
