<template>
	<div id="purse">
    	<div class="balance ">
    		<div class="fl">
    			<p>账号余额</p>
    			<p class="sty">
    				<span class="num">0.60</span>
    				<span>元</span>
    			</p>
    		</div>
    		<p class="fr" @click="_goBalance()">提现&gt;</p>
    	</div>
    	<div class="gains">
    		<p class="tit">当天广告收益</p>
    		<div class="oth">
    			<span class="fl">0.00元</span>
    			<span class="fr">昨日广告收益已到账</span>
    		</div>
    	</div>
    	<p class="intr">当天广告收益于次日审核到账后即可提现</p>
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
	   _goBalance () {
        window.location.href = './balance.html'
       }
    },
	mounted (){
    
	}
}
</script>

<style lang="less">
  @import '../less/purse.less';
</style>
