<template>
  <div class="search">
  	<div class="search-input">
  		<div>
  			<input type="text" name="keyword" v-model="keyword" placeholder="搜索客户/联系人/拜访记录/文件名称">
  			<span class="del" v-show="keyword" @click="keyword = ''"></span>
  		</div>
  		<span @click="$router.go(-1)">取消</span>
  	</div>
  	<!-- <no-record text="暂无搜索记录"></no-record>
  	<search-history></search-history> -->
  	<div class="content">
  		<page-tab :tabs="tabs" :activeID="activeID" @click="tabChange"></page-tab>
  		<!-- 客户 -->
  		<div v-show="activeID === 'customer'">客户</div>
  		<!-- 联系人 -->
  		<div v-show="activeID === 'linkman'">联系人</div>
  		<!-- 拜访记录 -->
  		<div v-show="activeID === 'visit'">拜访记录</div>
  		<!-- 文件 -->
  		<div v-show="activeID === 'files'">文件</div>
  	</div>
  </div>
</template>

<script>
	import noRecord from 'c/noRecord'
	import pageTab from 'c/pageTab'
	import searchHistory from 'c/searchHistory'
export default {
  name: 'search',
  data () {
    return {
    	keyword: '',
    	activeID: '',
    	tabs: [
	    	{
					text: '客户',
					id: 'customer',
				},
				{
					text: '联系人',
					id: 'linkman',
				},
				{
					text: '拜访记录',
					id: 'visit',
				},
				{
					text: '文件',
					id: 'files',
				}
			]
    }
  },
  conputed: {
  },
  components: {
  	noRecord,
  	searchHistory,
  	pageTab,
  },
  created(){
  	let type = this.$route.query.type
  	this.activeID = type === 'index' ? 'customer' : type
  },
  methods: {
  	tabChange (arg) {
  		this.activeID = arg.id
  		console.log(arg)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/define';
.search {
	height: 100%;
	box-sizing: border-box;
	padding-top: 82px;
	background: #fff;
	.search-input {
		height: 82px;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #f5f5f5;
		@include borderbtm;
		div {
			position: relative;
			float: left;
			width: 630px;
			height: 70px;
			border: 1px solid $borderColor;
			background: url('../assets/imgs/search-icon.png') no-repeat #fff;
			background-position: 20px center;
			border-radius: 8px;
			margin-top: 6px;
			margin-left: 20px;
			box-sizing: border-box;
			input {
				width: 540px;
				margin-left: 60px;
				height: 36px;
				line-height: 36px;
				margin-top: 14px;
				outline: none;
				border: 0;
				color: $black;
				font-size: 28px;
				&::-webkit-input-placeholder {
					color: $lightgrey;
					font-size: 28px;
				}
			}
			.del {
				position: absolute;
				top: 17px;
				right: 10px;
				width: 32px;
				height: 32px;
				display: block;
				background: url('../assets/imgs/delete-icon.png') no-repeat;
				background-size: 32px;
			}
		}
		&>span {
			float: right;
			line-height: 82px;
			padding-right: 20px;
			font-size: 32px;
			color: $color-active;
		}
	}
	.content {
		height: 100%;
		padding-top: 86px;
		box-sizing: border-box;
		.tabs {
			position: fixed;
			top: 82px;
			left: 0;
			width: 100%;
		}
	}
}
</style>