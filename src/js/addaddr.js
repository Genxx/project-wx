// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import addaddr from '../components/addaddr'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#addaddr',
  template: '<addaddr/>',
  components: { addaddr }
})
