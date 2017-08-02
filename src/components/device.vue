<template>
	<div id="device">
    	<div class="status">
            <span class="tit">状态</span>
            <span class="all active">全部1</span>
            <span class="off-line">离线1</span>
            <span class="on-line">在线0</span>
        </div>
        <div class="place">
            <span>场地</span>
            <input class="weui-input tag" type="text" value="全部" @click="_place()" id="show-place">全部 (1个)</input>
        </div>
        <div class="inst">
            <span class="fl">离线说明</span>
            <span class="fr">如信号值未显示，请点击刷新图标</span>
        </div>
        <div class="space-info">
            <div class="space-info-t">
                <span class="fl">考拉</span>
                <p class="fr">
                    <span>共1台/</span>
                    <span class="col">离线1台</span>
                </p>
            </div>
            <ul class="list">
                <li>
                    <div class="fl">
                        <span @click="_goDeviceDetail">1号机-娃娃机117782</span>
                        <span class="font">(1币/次)</span>
                        <span class="col">离线</span>
                    </div>
                    <div class="fr">
                        <span>信号值</span>
                        <span>...</span>
                    </div>
                </li>
            </ul>
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
        _goDeviceDetail () {
            window.location.href = './device_detail.html'
        }  	
    },
	mounted (){
		$('#show-place').click(function(){
            $("#show-place").picker({
              title: "请选择区域",
              toolbar: false,
              toolbarCloseText: '确定',
              cols: [
                {
                  textAlign: 'center',
                  values: ['全部', '考拉', '考拉2', '考拉3']
                }
              ]
            });
        })
	}
}
</script>

<style lang="less">
  @import '../less/device.less';
</style>
