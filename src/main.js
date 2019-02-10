import Vue from 'vue'
import App from './App'
import router from './router'
import './css/1.css'
 import './css/main-2.css'
 import './css/main.css'
Vue.config.productionTip = false
// import './components/static/1545754941318/assets/00/js/plugins' //引入css
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  // render: h => h(App)
  template: '<App/>',
  components: {App}

})
