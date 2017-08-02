<template>
	<div id="balance">
    	<div class="cash">
            <div class="sty">
                <p class="fl wd100">提现方式</p>
                <p class="fl">微信支付</p>
            </div>
            <div class="cash-num">
                <p class="fl wd100">提现</p>
                <div class="fl">
                    <div class="num">
                        <span>&yen;</span>
                        <input type="text" name="" placeholder="提现金额">
                    </div>
                    <p class="fcol">余额&yen;0.60</p>
                </div>
            </div>
            <div class="poundage">
                <p class="fl wd100">手续费</p>
                <span class="fl num fcol">&yen;0.00</span>
                <p class="fr fcol">微信收取0.6%手续费</p>
            </div>
            <div class="money">
                <p class="fl wd100">实际到账</p>
                <p class="fl fcol">&yen;0.00</p>
            </div>
        </div>
        <div class="smit">提现</div>
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
  @import '../less/balance.less';
</style>
