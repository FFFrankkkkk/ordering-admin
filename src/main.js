import Vue from 'vue'
import App from './App'
import router from './router'
import './css/1.css'
 import './css/main-2.css'
 import './css/main.css'
import axios from 'axios'  //引入axios  异步请求
Vue.config.productionTip = false
// import './components/static/1545754941318/assets/00/js/plugins' //引入css
/* eslint-disable no-new */
import global_ from './components/base.vue'
Vue.prototype.GLOBAL = global_;
axios.defaults.baseURL=global_.BASE_URL;
axios.defaults.withCredentials=true;
Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,
  // render: h => h(App)
  template: '<App/>',
  components: {App}

})
