// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/index'
import store from './store/index'
Vue.config.productionTip = false
import './assets/css/reset.css'
/* eslint-disable no-new */
Vue.prototype.$preImg = 'http://localhost:3000'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
