import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import headPage from '@/components/headPage'
import home from '@/components/home'
import menuDisplay from '@/components/menuDisplay'
import $ from 'jquery'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/menuDisplay',
      name: 'menuDisplay',
      component: menuDisplay
    }
  ]
})
