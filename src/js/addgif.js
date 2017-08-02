// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import addgif from '../components/addgif'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#addgif',
  template: '<addgif/>',
  components: { addgif }
})
