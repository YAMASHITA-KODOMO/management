<!-- 页面的tab组件 -->
<template>
  <div class="tabs">
  	<ul>
  		<li 
  			@click="clickEvent(item)" 
  			v-for="(item, index) in tabs" 
  			:class="{active: item.id === activeClass}"
  			>{{item.text}}<span></span>
  		</li>
  	</ul>
  </div>
</template>

<script>
  export default {
    name: 'pageTab',
    props: {
    	'tabs': {
	      type: Array,
	      required: true
	    },
    	'activeID': {}
    },
    data () {
      return {
      	activeClass: null,
      }
    },
    created () {
    	// props不能更改，只能在props的基础上衍生出值
			this.activeClass = this.activeID
    },
    methods: {
    	clickEvent (arg) {
    		this.activeClass = arg.id
    		// 将click事件暴露出来，并传递当前点击的值
    		this.$emit('click', arg)
    	}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/scss/define';
.tabs {
	height: 86px;
	background-color: #fff;
	line-height: 86px;
	text-align: center;
	border-bottom: 1px solid $borderColor;
	ul {
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		li {
			position: relative;
			flex-grow: 1;
			color: #939393;
			font-size: 32px;
			&.active {
				color: #000;
				span {
					display: block;
					position: absolute;
					bottom: 0;
					left: 50%;
					margin-left: -50px;
					width: 100px;
					height: 6px;
					border-radius: 3px;
					background-color: #f3602d;
				}
			}
		}
	}
	
}
</style>
