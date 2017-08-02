<template>
	<div id="pay">
    	<div class="header">
    		<div class="header-l fl">
    			<div class="game-b">游戏币：0</div>
    			<span class="reload" @click="_reload()">刷新</span>
    		</div>
    		<div class="header-r fr">
                <button class="weui-btn weui-btn_primary" @click="_index()">首页选项</button>
    		</div>
    	</div>
    	<div class="body">
    		<!--<div class="ads">-->
    			<!--<img src="../assets/logo.png" height="50" width="50">-->
    		<!--</div>-->
    		<div class="start-box">
    			<p class="start">启动设备</p>
    			<p class="b">9号机_1币</p>
    			<p class="alert">启动失败5分钟内自动退币</p>
    		</div>
    	</div>
    	<div class="footer">
    		<button class="weui-btn change">换一台设备</button>
    		<button class="weui-btn weui-btn_primary">充值</button>
    	</div>
	</div>
</template>

<script>
import Vue from 'vue'
import directives from '../js/touch.js'
directives(Vue)
export default {

	components: {

	},
	data () {
	  	return{

	  	}
	},
	methods:{
	  	_reload () {
	  		window.location.reload()
	  	},
	  	_index () {
	  		location.href = './index.html'
	  	}
	},
	mounted (){
		var innerHeight = window.innerHeight
		$('.body').css('height',(innerHeight-57-61)+'px')
	}
}
</script>

<style lang="less">
  @import '../less/s_pay.less';
</style>
