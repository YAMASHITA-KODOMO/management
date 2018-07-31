<template>
  <div class="customer-item" :class="{mb10: dataObj.children}">
  	<div class="parent" @click="$router.push({path: '/customerInfo', query: {id: dataObj.id}})">
  		<p>{{dataObj.name}}</p>
  		<span class="more"></span>
  	</div>
  	<div class="child" v-for="(item, index) in dataObj.children"  @click="$router.push({path: '/customerInfo', query: {id: item.id}})">
  		<p>{{item.name}}</p>
  		<span class="more"></span>
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'customerItem',
    props: ['dataObj'],
    data () {
      return {
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.customer-item {
	padding-left: 20px;
	background: #fff;
	box-sizing: border-box;
	&.mb10 {
		margin-bottom: 10px;
	}
	div {
		position: relative;
		height: 90px;
		line-height: 90px;
		border-bottom: 1px solid $borderColor;
		p {
			font-size: 32px;
			color: #000;
			@include break;
			padding-right: 40px;
		}
		.more {
			display: block;
			width: 16px;
			height: 30px;
			position: absolute;
			top: 30px;
			right: 20px;
			background: url('../../assets/imgs/more-icon.png') no-repeat;
			background-size: 16px;
		}
		&.child {
			padding-left: 32px;
		}
	}
}
</style>
