<template>
	<div id="price">
    <div class="deviceid">
      <p class="fl">设备</p>
      <p class="fl mk">娃娃机117782</p>
    </div>
    <div class="price">
      <p class="fl">价格</p>
      <p class="fl mk">
        <input type="text" name="" value="1">
        <span>币/次</span>
      </p>
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
  @import '../less/price.less';
</style>
