<template>
	<div id="sellername">
		<div class="tit">
			显示在页面头部，在使用过程中传播品牌
		</div>
    	<div class="name">
    		<input type="text" name="" placeholder="请输入">
    	</div>
    	<div class="smit">保存</div>
    	<p class="clear">清除</p>
	</div>
</template>

<script>
import Vue from 'vue'

import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'

export default {
  
	components: {
	    
	},
	data () {
	  	return{
	  		
	  	}
	},
	methods:{
        _goPurse () {
            window.location.href = './purse.html'
        }
    },
	mounted (){
    
	}
}
</script>

<style lang="less">
  @import '../less/sellername.less';
</style>
