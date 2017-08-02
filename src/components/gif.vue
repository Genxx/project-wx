<template>
  <div id="gif">
      <div class="focus">
        <span>设备礼品统计时，应保证设备与机台接线正确，</span>
        <a href="#">查看安装视频</a>
      </div>
      <ul class="list">
        <li class="device-id">
          <p class="fl">设备唯一码</p>
          <p class="fr">117782</p>
        </li>
        <li class="gif-sty">
          <p class="fl">礼品类型</p>
          <div class="fr">
            <p>纸巾</p>
            <p>0.30元</p>
          </div>
        </li>
        <li class="kucun">
          <p class="fl">现有库存</p>
          <p class="fr">20</p>
        </li>
      </ul>
      <p class="clear-kc">清除此设备库存</p>
      <ul class="add-kc">
        <li class="add">
          <p class="fl">增添库存</p>
          <div class="fr weui-cell weui-cell_switch">
            <div class="weui-cell__ft">
                <input class="weui-switch" type="checkbox" checked="checked">
            </div>
          </div>
        </li>
        <li class="num">
          <p class="fl">增添数量</p>
          <input type="text" name="" class="fr" value="10">
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
  @import '../less/gif.less';
</style>
