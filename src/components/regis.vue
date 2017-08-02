<template>
	<div id="regis">
    	<form @submit="_submit">
    		<div>
    			<input type="text" name="name" placeholder="姓名">
    		</div>
    		<div>
    			<input type="text" name="cellphone" placeholder="手机号" ref="phone">
    		</div>
    		<div>
    			<input type="password" name="password" placeholder="密码">
    		</div>
    		<div class="code">
    			<input type="text" name="code" placeholder="验证码">
    			<button type="button" @click="_getCode()">获取验证码</button>
    		</div>
    		<div class="smit">
    			<button type="submit">注册</button>
    		</div>
    	</form>
	</div>
</template>

<script>
import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

const fto = require('form_to_object')

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
        },
        _getCode () {
            var cellphone = this.$refs.phone.value
            this.$http.get('/auth/v1/user/get_verify_code?cellphone=' + cellphone)
            .then(function(res){
                console.log(res.data)
            },function(err){
                console.log(err)
            })
        },
        _submit (e) {
            e.preventDefault()
            var data = fto(e.target)
            this.$http.post('/auth/v1/user/register_by_cellphone',data)
            .then(function(res){
                console.log(res.data)
            },function(err){
                console.log(err)
            })
        }
    },
	mounted (){
    
	}
}
</script>

<style lang="less">
  @import '../less/regis.less';
</style>
