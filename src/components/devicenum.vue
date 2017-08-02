<template>
	<div id="devicenum">
    	<div class="header">
    		请选择设备编号
    	</div>
    	<div class="info">
    		<div class="tit">
    			<p>编号用于启动设备，请按顺序填写；</p>
    			<p>同一个投放地编码不可重复。</p>
    			<ul class="diff">
    				<li class="rged">
    					<span class="fl mr k1"></span>
    					<span class="fl">已注册</span>
    				</li>
    				<li class="cose">
    					<span class="fl mr k2"></span>
    					<span class="fl">可选</span>
    				</li>
    				<li class="cked">
    					<span class="fl mr k3"></span>
    					<span class="fl">选中</span>
    				</li>
    			</ul>
    		</div>
    		<ul class="num">
    			<li :class="liNum == 1 ? 'active' : ''" @click="_cked(1)">1</li>
    			<li :class="liNum == 2 ? 'active' : ''" @click="_cked(2)">2</li>
    			<li :class="liNum == 3 ? 'active' : ''" @click="_cked(3)">3</li>
    			<li :class="liNum == 4 ? 'active' : ''" @click="_cked(4)" class="mr0">4</li>
    			<li>5</li>
    			<li>6</li>
    			<li>7</li>
    			<li class="mr0">8</li>
    			<li>9</li>
    			<li>10</li>
    			<li>11</li>
    			<li class="mr0">12</li>
    			<li>13</li>
    			<li>14</li>
    			<li>15</li>
    			<li class="mr0">16</li>
    		</ul>
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
	  		liNum: 1
	  	}
	},
	methods:{
	  	_cked (t) {
            this.liNum = t
        }
    },
	mounted (){
		
	}
}
</script>

<style lang="less">
  @import '../less/devicenum.less';
</style>
