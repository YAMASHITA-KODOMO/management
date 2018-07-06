<template>
  <div class="no-record">
  	<p>{{text}}</p>
  </div>
</template>

<script>
  export default {
    name: 'noRecord',
    props: ['text'],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.no-record {
	position: relative;
	width: 100%;
	height: 480px;
	background: url('./no-record.png') no-repeat;
	background-position: center 148px;
	background-size: 318px 247px;
	p {
		font-size: 36px;
		color: #d7d7d7;
		position: absolute;
		bottom: 0;
		text-align: center;
		width: 100%;
	}
}
</style>
