<template>
	<div id="addaddr">
    	<ul class="place">
	        <li class="place-name">
	          	<p class="fl">商店名称</p>
	          	<input class="fr" placeholder="请填写" />
	        </li>
	        <li class="place-area">
	          	<p class="fl">地区</p>
	          	<input class="fr" placeholder="请填写" />
	        </li>
	        <li class="place-detail">
	          	<p class="fl">详细地址</p>
	          	<input class="fr" placeholder="请填写" />
	        </li>
	        <li class="place-sty">
	          	<p class="fl">地址类型</p>
	          	<input class="fr" placeholder="选填" />
	        </li>
	        <li class="place-defu">
	          	<div class="fl">
	          		<p>设为默认投放地址</p>
	          		<p class="col">每次注册设备时使用该地址</p>
	          	</div>
	          	<div class="fr weui-cell weui-cell_switch">
    				<div class="weui-cell__ft">
      					<input class="weui-switch" type="checkbox" checked="checked">
    				</div>
  				</div>
	        </li>
	      </ul>
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
  @import '../less/addaddr.less';
</style>
