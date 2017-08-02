<template>
  <div id="device_detail">
      <ul class="device">
        <li class="device-sty">
          <p class="fl">设备类型</p>
          <p class="fr">娃娃机</p>
        </li>
        <li class="device-id">
          <p class="fl">设备唯一码</p>
          <p class="fr">117782</p>
        </li>
        <li class="device-num" @click="_goDeviceNum()">
          <p class="fl">编号</p>
          <p class="fr">1 &gt;</p>
        </li>
        <li class="device-status">
          <p class="fl">状态</p>
          <p class="fr">离线</p>
        </li>
        <li class="device-name">
          <p class="fl">店名</p>
          <p class="fr">考拉</p>
        </li>
        <li class="device-addr">
          <p class="fl">地址</p>
          <p class="fr">布衣港电商产业园</p>
        </li>
      </ul>
      <div class="price" @click="_goPrice()">
        <p class="fl">单价</p>
        <p class="fr">1币/次&gt;</p>
      </div>
      <div class="gif">
        <div class="tit" @click = "_goGif()">
          <p class="fl">礼品</p>
          <p class="fr">已设置&gt;</p>
        </div>
        <ul class="gif-list">
          <li>
            <div class="fl">
              <p class="gif-tit">纸巾</p>
              <p class="gif-num">0.30元/个</p>
            </div>
            <p class="fr">剩余20个</p>
          </li>
        </ul>
      </div>
      <div class="oth">
        <p class="fl">备注</p>
        <p class="fr">未填写&gt;</p>
      </div>
      <div class="quit">
        解除绑定
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
  	  	_goDeviceNum () {
          window.location.href = './devicenum.html'
        },
        _goPrice () {
          window.location.href = './price.html'
        },
        _goGif () {
          window.location.href = './gif.html'
        }
    },
  	mounted (){
  		
  	}
}
</script>

<style lang="less">
  @import '../less/device_detail.less';
</style>
