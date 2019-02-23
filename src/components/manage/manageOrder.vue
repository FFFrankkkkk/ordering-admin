<template>
  <div>
    <div id="Box">
      <h1>管理订单</h1>
      <template v-if="this.orders.length===0">
        <div class="center-block" style="width:200px;background-color:#ccc;">
          <h2>暂无订单</h2>
        </div>
      </template>
      <template v-else>
        <div id="dataDiv" >
          <button id="deleteAll" v-on:click="deleteAllProduct()">删除所有订单</button>
          <table id="dataTable"  border="1px" cellpadding="0" cellspacing="0">
            <thead>
            <tr>
              <td><input type="checkbox" /></td>
              <td>用户名</td>
              <td>下单时间</td>
              <td>订单状态</td>
              <td>管理</td>
              <td>删除</td>
            </tr>
            </thead>
            <tbody >
            <template  v-for="(order,index) in orders">
              <tr>
                <td><input type="checkbox"/></td>
                <td>{{order.userName}}</td>
                <td>{{order.orderTime}}</td>
                <template v-if="order.status==='unconfirmed'">
                <td>未确认</td>
                </template>
                <template v-else>
                  <td>已确认</td>
                </template>
                <td><button v-on:click="makerComfirm(index)"><span class="glyphicon glyphicon-trash"></span>确认接单</button></td>
                <td><button class="deleteOne" v-on:click="deleteOrder(index)"> <span class="glyphicon glyphicon-trash"></span> 删除</button></td>
              </tr>
            </template>
            </tbody>
          </table>
      </div>
      </template>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Qs from 'qs';
  export default {
    name: 'manageOrder',
    data() {
      return {
        orders:[],
        user:{}
      }
    },
    created: function () {  //钩子函数
      this.getOrders();
      this.getUser();
    },
    methods: {
      deleteOrder:function (index) {
        var url ='/servlet/OrderServlet?type=deleteOrder&orderId='+this.orders[index].orderId;
        this.orders.splice(index,1);
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调;
            console.log(response.data);
            alert("删除订单成功！");
          }).catch(error => {
          console.log(err);
        });
      },
      deleteAllOrder:function () {
        this.orders=[];
        var url ='/servlet/OrderServlet?type=deleteAllOrder';
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调;
          }).catch(error => {
          console.log(err);
        });
      },
      makerComfirm:function (index) {
        var url ='/servlet/OrderServlet?type=makeConfirm&orderId='+this.orders[index].orderId;
        this.orders[index].status="confirmed";
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调
          }).catch(error => {
          console.log(err);
        });
      },
      getOrders:function () {
        var url ='/servlet/OrderServlet?type=showOrder'
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调
            this.orders=response.data;
            console.log(this.orders);
            console.log(response.data);
          }).catch(error => {
          console.log(err);
        });
      },
      getUser:function(){
        var url ='/servlet/UserServlet?type1=user'
        //利用axios发出ajax的get请求
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调
            this.user=response.data;
            console.log(this.user);
          }).catch(error => {
          console.log(err);
        });
      }
    }
  }
</script>
<style>
  #Box{width: 1000px;height: 500px;margin: auto;}
  #deleteAll{
    float: right;
    border-radius: 5px;
    background-color: dodgerblue;
    border: 0px;}
  #dataTable{width: 1000px;}
  .deleteOne{
    width: 100%;
    background-color: #2B93FF;
    border-radius: 5px;
    border: 0px;}
</style>

