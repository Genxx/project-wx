<template>
	<div id="gains">
    <ul class="times-list">
      <li>今日</li>
      <li>昨天</li>
      <li>本周</li>
      <li>本月</li>
      <li>半年</li>
    </ul>
    <div class="time">
      <p class="fl">时间</p>
      <div class="fl mr0">
        <input class="weui-input" id="dt-start" type="text" name="">
        <span>-</span>
        <input class="weui-input" id="dt-end" type="text" name="">
      </div>
    </div>
    <div class="place">
      <p class="fl">场地</p>
      <input class="weui-input fl mr0" type="text" value="全部" @click="_place()" id="show-place" />
    </div>
    <div class="gains-detail">
      <div class="tit">
        <p class="fl tit-name">考拉</p>
        <span class="fl tit-num">1台</span>
        <p class="fr">合计 : 0.00元</p>
      </div>
      <ul class="list">
        <li class="list-online">
          <p class="fl">在线支付</p>
          <p class="fr">0.00元</p>
        </li>
        <li class="list-ad">
          <p class="fl">广告收益</p>
          <p class="fr">
            <span class="col">分发0次,</span>
            <span>0.00元</span>
          </p>
        </li>
        <li class="list-money">
          <p class="fl">
            <span>现金收益</span>
            <span class="fs">(仅兑币机)</span>
          </p>
          <p class="fr">0.00元</p>
        </li>
      </ul>
      <div class="sum">
        <p class="fl">合计投币</p>
        <div class="fr">
          <p>0个</p>
          <p class="col">线上(含广告币0个)0个,线下0个</p>
        </div>
      </div>
      <div class="gif-use">
        <p class="fl">礼品消耗</p>
        <p class="fr">0个,0.00元</p>
      </div>
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
	  _place () {
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
    }	
  },
	mounted (){
    $("#dt-start").calendar()
    $("#dt-end").calendar()
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
	}
}
</script>

<style lang="less">
  @import '../less/gains.less';
</style>
