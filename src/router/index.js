import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import headPage from '@/components/headPage'
import home from '@/components/home'
import menuDisplay from '@/components/menuDisplay'
import manageMain from '@/components/manageUIMain/manageMain'
import manageProduct from '@/components/manage/manageProduct'
import shoppingCart from '@/components/user/shoppingCart'
import manageOrder from '@/components/manage/manageOrder'
import register from '@/components/register'
import changePassword from '@/components/changePassword'
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
    },
    {
      path: '/manageMain',
      name: 'manageMain',
      component: manageMain,
      children:[
        {
          path: 'manageProduct',
          name: 'manageProduct',
          component: manageProduct
        }
      ]
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/manageOrder',
      name: 'manageOrder',
      component: manageOrder
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: changePassword
    }
  ]
})
