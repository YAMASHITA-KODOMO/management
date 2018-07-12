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
	export default {
	  name: 'menuList',
	  data () {
	    return {
	    	list: [
	    		{
						icon: require('./customer.png'),
						text: '客户',
						url: '/customer'
					},
					{
						icon: require('./linkman.png'),
						text: '联系人',
						url: '/linkman'
					},
					{
						icon: require('./visit.png'),
						text: '拜访',
						url: '/visit'
					},
					{
						icon: require('./files.png'),
						text: '文件夹',
						url: '/files'
					},
				]
			}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.menu-list {
	background: #fff;
	width: 100%;
	border-bottom: 1px solid $color-border;
	ul {
		height: 250px;
		padding: 0 10px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		li {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
			img {
				width: 102px;
				height: 102px;
				margin-bottom: 14px;
			}
			p {
				font-size: $font-size-large;
				line-height: $font-size-large;
				color: $color-text;
			}
		}
	}
}
</style>
