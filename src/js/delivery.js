// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import delivery from '../components/delivery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#delivery',
  template: '<delivery/>',
  components: { delivery }
})
