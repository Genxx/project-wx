<template>
	<div id="delivery">
    	<div class="list">
    		<div class="addr">
    			<div class="box">
    				<span class="addr-tit">考拉</span>
    				<span class="addr-col">其他</span>
    				<span class="addr-col">1台</span>
    			</div>
    			<p class="col">布衣港电商产业园</p>
    		</div>
    		<div class="menu">
				<div class="fl weui-cells weui-cells_checkbox">
				  	<label class="weui-cell weui-check__label" for="s11">
				    	<div class="weui-cell__hd">
				      		<input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked">
				      	<i class="weui-icon-checked"></i>
				    	</div>
					    <div class="weui-cell__bd">
					      	<p>设为默认</p>
					    </div>
				  	</label>
				</div>
    			<div class="fr">
    				<span class="edit">编辑</span>
    				<span class="del">删除</span>
    			</div>
    		</div>
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
  @import '../less/delivery.less';
</style>
