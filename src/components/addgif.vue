<template>
	<div id="addgif">
    	<div class="name">
    		<p class="fl">礼品名称</p>
    		<input type="text" name="" class="fr" placeholder="请填写">
    	</div>
    	<div class="price">
    		<p class="fl">价格</p>
    		<input type="text" name="" class="fr" placeholder="请填写">
    	</div>
    	<div class="smit">
    		保存
    	</div>
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
        
    },
	mounted (){
    
	}
}
</script>

<style lang="less">
  @import '../less/addgif.less';
</style>
