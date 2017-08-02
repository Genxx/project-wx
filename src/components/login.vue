<template>
	<div id="login">
    	<form @submit="_submit">
    		<div>
    			<input type="text" name="cellphone" placeholder="手机号">
    		</div>
    		<div>
    			<input type="password" name="password" placeholder="密码">
    		</div>
    		<div class="smit">
    			<button type="submit">登录</button>
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
        _submit (e) {
            e.preventDefault()
            var data = fto(e.target)

            this.$http.post('/auth/v1/user/login_by_cellphone',data)
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
  @import '../less/login.less';
</style>
