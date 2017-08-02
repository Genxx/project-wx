<template>
	<div id="account">
    	<div class="self-box">
    		<img class="fl" src="../assets/admin.jpeg" alt="picture" width="100" height="100">
    		<div class="fl self">
    			<p class="name">姓名</p>
    			<p class="phone">12345678901</p>
    		</div>
    	</div>
    	<div class="purse" @click="_goPurse()">
    		<p class="fl">钱包</p>
    		<p class="fr">余额0.30元</p>
    	</div>
    	<div class="gif-box">
    		<div class="gif-manage">
    			礼品管理
    		</div>
    		<div class="gif-notify">
    			<p class="fl">礼品库存通知</p>
    			<div class="fr weui-cell weui-cell_switch">
                    <div class="weui-cell__ft">
                        <input class="weui-switch" type="checkbox" checked="checked">
                    </div>
                </div>
    		</div>
    		<p class="tit">
    			<span>每台设备库存少于10推送消息，</span>
    			<a href="#">修改数量</a>
    		</p>
    	</div>
    	<div class="addr">投放地址</div>
    	<div class="custom">
    		<p class="fl">客服</p>
    		<p class="fr">某某某客服4001001000</p>
    	</div>
    	<div class="seller">
    		<p class="fl">商户名称</p>
    		<p class="fr">未设置</p>
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
        _goPurse () {
            window.location.href = './purse.html'
        }
    },
	mounted (){
    
	}
}
</script>

<style lang="less">
  @import '../less/account.less';
</style>
