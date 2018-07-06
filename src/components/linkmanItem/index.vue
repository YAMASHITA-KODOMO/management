<template>
  <div class="linkman-item" @click="$router.push({path: '/linkmanInfo', query: {id: dataObj.id}})">
  	<div class="name">
  		<p>{{dataObj.name}}</p>
  		<p>{{dataObj.department}}</p>
  	</div>
  	<div class="phone">
  		<p>{{dataObj.phone}}</p>
  		<p>{{dataObj.customer}}</p>
  	</div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: ['dataObj'],
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.linkman-item {
	display: flex;
	height: 135px;
	box-sizing: border-box;
	background: #fff;
	padding-left: 20px;
	@include borderbtm;
	div {
		&:first-child {
			width: 170px;
			margin-right: 10px;
		}
		p:first-child {
			font-size: 32px;
			line-height: 32px;
			padding-top: 28px;
			margin-bottom: 18px;
		}
		p:last-child {
			font-size: 26px;
			color: #939393;
			@include break;
		}
	}
}
</style>
