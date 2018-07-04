<!-- 首页菜单模块 -->
<template>
  <div class="menu-list">
  	<ul>
  		<li v-for="item in list" @click="$router.push({path: item.url})">
  			<img :src="item.icon">
  			<p>{{item.text}}</p>
  			</li>
  	</ul>
  </div>
</template>

<script>
	import config from '@/config'
	export default {
	  name: 'menuList',
	  data () {
	    return {
	    	list: config.menuList
	    }
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/define';
.menu-list {
	background: #fff;
	width: 100%;
	border-bottom: 1px solid $borderColor;
	ul {
		display: flex;
		flex-wrap: wrap;
		padding: 50px 10px 0;
		li {
			width: 25%;
			margin-bottom: 50px;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
			// text-align: center;
			img {
				width: 102px;
				height: 102px;
				margin-bottom: 14px;
			}
			p {
				font-size: 30px;
				line-height: 30px;
				color: #000;
			}
		}
	}
}
</style>
