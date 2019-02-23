<template>
<div>
  <div id="Box">
    <h1>我的购物车</h1>
      <template v-if="this.cart.length===0">
        <div class="center-block" style="width:200px;background-color:#ccc;">
               <h2>购物车为空</h2>
        </div>
      </template>
      <template v-else>
    <div id="dataDiv" >
      <button id="deleteAll" v-on:click="deleteAllProduct()">清空购物车</button>
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
          <td><button v-on:click="minusButton(addProduct,index)"><span class="glyphicon glyphicon-minus"></span></button>{{addProduct.num}}<button v-on:click="addButton(addProduct,index)">   <span class="glyphicon glyphicon-plus"></span> </button></td>
          <td>{{parseInt(addProduct.product.price)*parseInt(addProduct.num)}}</td>
          <td><button class="deleteOne" v-on:click="deleteProduct(index)"> <span class="glyphicon glyphicon-trash"></span> 删除</button></td>
        </tr>
        </template>
        </tbody>
      </table>
      <p></p><span id="countPrice">总价为: ¥{{this.totalPrice}}</span></div>
      <button type="button" class="btn btn-primary" v-on:click="bulidOrder()">确认下单</button>
     </template>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Qs from 'qs';
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
      console.log(this.cart);
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
      deleteProduct:function (index) {
        this.ad.splice(index,1);
        this.cart = this.ad;
      },
      deleteAllProduct:function () {
        this.ad=[];
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
      },
      bulidOrder:function () {
//        var url ='/servlet/OrderServlet?type=addOrder&userId='+this.user.userId
//        var data = Qs.stringify(this.cart);
        var productsId="";
        var ProductsNum="";
        for (var i=0; i<this.cart.length; i++) {
          productsId=productsId +","+this.cart[i].product.productId;
          ProductsNum=ProductsNum +","+this.cart[i].num;
        }
        productsId=productsId.slice(1,productsId.length);
        ProductsNum=ProductsNum.slice(1,ProductsNum.length);
        console.log(productsId);
        console.log(ProductsNum);
        var url ='/servlet/OrderServlet?type=addOrder&userId='+this.user.userId+"&productsId="+productsId+"&ProductsNum="+ProductsNum;
        console.log(url);
        this.$http.get(url)
          .then(response => {
                alert("下单成功，待确认！");
                this.cart=[];
                this.ad=[];
          }).catch(error => {
            console.log(error);
          }
        );
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

