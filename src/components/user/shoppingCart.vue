<template>
<div>
  <div id="Box">
    <template v-if="ad">
    <h1>我的购物车</h1>
    <div id="dataDiv" >
      <button id="deleteAll">清空购物车</button>
      <table id="dataTable"  border="1px" cellpadding="0" cellspacing="0">
        <thead>
        <tr>
          <td><input type="checkbox" /></td>
          <td>name</td>
          <td>price</td>
          <td>number</td>
          <td>totalprice</td>
          <td>option</td>
        </tr>
        </thead>
        <tbody >
        <template  v-for="(addProduct,index) in ad">
        <tr>
          <td><input type="checkbox"/></td>
          <td>{{addProduct.product.productName}}</td>
          <td>{{addProduct.product.price}}</td>
          <td><button v-on:click="minusButton(addProduct,index)">-</button>{{addProduct.num}}<button v-on:click="addButton(addProduct,index)">+</button></td>
          <td>{{parseInt(addProduct.product.price)*parseInt(addProduct.num)}}</td>
          <td><button class="deleteOne">删除</button></td>
        </tr>
        </template>
        </tbody>
      </table>
      <p></p><span id="countPrice">总价为: ¥{{this.totalPrice}}</span></div>
      <button type="button" class="btn btn-primary">确认下单</button>
     </template>
    <template v-else>

    </template>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'headPage',
    data() {
      return {
        ad: this.cart,
        totalPrice: 0,
        user:{}
      }
    },
    created: function () {  //钩子函数
      this.countTotalPrice();
      this.getUser();
    },
    methods: {
      addButton: function (addProduct, index) {
        this.ad[index].num = parseInt(this.ad[index].num) + 1
        this.cart = this.ad;
        this.countTotalPrice();
      },
      minusButton: function (addProduct, index) {
        if(this.ad[index].num>1) {
          this.ad[index].num = parseInt(this.ad[index].num) - 1
        }else{
          this.ad.splice(index,1);
        }
        this.cart = this.ad;
        this.countTotalPrice();
      },
      countTotalPrice: function () {
        this.totalPrice=0
        for (var i=0; i<this.cart.length; i++) {
          this.totalPrice += parseInt(this.cart[i].num) * parseInt(this.cart[i].product.price);
        }
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
