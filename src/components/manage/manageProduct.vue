<template>
  <div>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">管理菜单</a>
        </div>
        <div>
          <ul id="selectFunction" class="nav navbar-nav">
            <li id="funtion1" class="active" @click="getFunction(0)"><a href="#">查看菜单</a></li>
            <li><a id="funtion2" href="#" @click="getFunction(1)">添加菜品</a></li>
            <li><a id="funtion3"href="#" @click="getFunction(2)">管理菜品种类</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="showProductSection">
      <div id="showProduct">
        <div class="page-content">
          <div class="row row-narrow">
              <div id="product-cards" class="product-cards" data-equal-height=".product-card--standard .product-title">
                <div class="row row-narrow">
                  <template v-for="(product,index) in products">
                    <div class="product-card product-card--standard">
                      <div class="panel panel-default panel-product">
                        <div class="panel-body">
                          <a href="#" data-toggle="modal" data-target="#myModal" v-on:click="getProductInformation(product)"><img :src="product.imgUrl" width="176.52px" height="132.39px"  tppabs="https://www.4008-517-517.cn/cn/static/1547573486227/assets/86/products/900047.png?" class="img-block" /></a>
                          <h5 class="product-title">{{product.productName}} </h5>
                          <div class="product-badges">
                          </div>
                        </div>
                        <div class="panel-footer">
                          <div class="row row-narrow">
                            <div class="col-xs-6">
                              <div class="product-details">
                                <div class="product-cost">
                                  <span class="starting-price">¥{{product.price}}起</span>
                                </div>
                                <div class="product-nutritional-info">
                                </div>
                              </div>
                            </div>
                            <div class="product-controls">
                              <a data-productid="789" href="#signin" data-toggle="modal" data-target="#signin" class="btn btn-block action-create btn-red" onclick="onProductClick({ &#39;name&#39;:&quot;Golden Arch Bucket D EVM for CNY &quot;,&#39;id&#39;:&#39;900047&#39;,&#39;price&#39;:&#39;¥96.00&#39;,&#39;brand&#39;:&#39;McDonalds&#39;,&#39;cat&#39;:&quot;Promotions &amp; Popular Picks&quot;,&#39;variant&#39;:&#39;&#39;,&#39;url&#39;:&#39;#signin&#39;})" :id="product.productId"  v-on:click="editProduct(product)">编辑</a>
                              <a data-productid="789" href="#signin" data-toggle="modal" data-target="#signin" class="btn btn-block action-create btn-red" onclick="onProductClick({ &#39;name&#39;:&quot;Golden Arch Bucket D EVM for CNY &quot;,&#39;id&#39;:&#39;900047&#39;,&#39;price&#39;:&#39;¥96.00&#39;,&#39;brand&#39;:&#39;McDonalds&#39;,&#39;cat&#39;:&quot;Promotions &amp; Popular Picks&quot;,&#39;variant&#39;:&#39;&#39;,&#39;url&#39;:&#39;#signin&#39;})"  v-on:click="deleteProduct(index)">删除</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="editProductSection" style="display:none;">
      <form action="">
        <div class="form-group">
          <label for="name">菜品名称</label>
          <input type="text" class="form-control" id="editname" v-model="eidtProduct.productName"
                 placeholder="请输入名称">
        </div>
        <tr><td height="30px">所属类型：</td>
          <td><select id="editproductType" v-model="eidtProduct.productType">
            <template v-for="productType in productTypes">
              <option :value="productType.name">{{productType.name}}</option>
            </template>
          </select>
          </td>
        </tr>
        <div class="panel-body">
          <a href="#" data-toggle="modal" data-target="#myModal" v-on:click="getProductInformation(product)"><img :src="eidtProduct.imgUrl" width="176.52px" height="132.39px"  tppabs="https://www.4008-517-517.cn/cn/static/1547573486227/assets/86/products/900047.png?" class="img-block" /></a>
          <div class="product-badges">
          </div>
        </div>
        <div class="form-group">
          <label>图片上传</label>
          <input @change="getFile($event)" type="file" multiple="multiple">
          <br>修改预览：<img id="editImage" height="100px"/>
        </div>
        <div class="input-group">
          <span class="input-group-addon">$</span>
          <input type="text" class="form-control"    placeholder="价格" v-model="eidtProduct.price">
          <span class="input-group-addon">.00</span>
        </div>
        <div class="form-group">
          <label for="name">菜品介绍</label>
          <textarea class="form-control" rows="3" v-model="eidtProduct.content"></textarea>
        </div>
        <button type="button" class="btn btn-default"  @click="submitEditProduct($event)">确定更改</button>
      </form>
    </div>
    <div id="addProductSection">
    <form action="">
      <div class="form-group">
        <label for="name">菜品名称</label>
        <input type="text" class="form-control" id="name" v-model="addProduct.productName"
               placeholder="请输入名称">
      </div>
      <tr><td height="30px">所属类型：</td>
        <td><select id="productType" v-model="addProduct.type">
          <template v-for="productType in productTypes">
          <option :value="productType.name">{{productType.name}}</option>
          </template>
        </select>
        </td>
      </tr>
      <div class="form-group">
        <label>图片上传</label>
        <input @change="getFile($event)" type="file" multiple="multiple">
        <br>修改预览：<img id="myImage" height="100px"/>
      </div>
      <div class="input-group">
        <span class="input-group-addon">$</span>
        <input type="text" class="form-control"    placeholder="价格" v-model="addProduct.price">
        <span class="input-group-addon">.00</span>
      </div>
      <div class="form-group">
        <label for="name">菜品介绍</label>
        <textarea class="form-control" rows="3" v-model="addProduct.text"></textarea>
      </div>
      <button type="button" class="btn btn-default"  @click="addAProduct($event)">提交</button>
    </form>
  </div>
    <div id="addProductTypeSection">
      <input type="text" class="form-control" id="addProductTypename" v-model="addProductTypename"
             placeholder="请输入名称">
      <button type="button" class="btn btn-default"  @click="addProductType()">提交</button>
      <table class="table table-bordered">
        <caption>删除菜单种类后该种类下的菜品一并删除<span class="label label-default">请慎重选择！</span></caption>
        <thead>
        <tr>
          <th>种类名称</th>
          <th>删除</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="(productType,index) in productTypes">
        <tr>
          <td>{{productType.name}}</td>
          <td><button type="button" class="btn btn-danger" @click="deleteProductType(index)">删除</button></td>
        </tr>
        </template>
        </tbody>
      </table>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"
                    aria-hidden="true">×
            </button>
            <h4 class="modal-title" id="myModalLabel">
              {{this.productInformation.productName}}：<h6>所属类型:{{this.productInformation.productType}}</h6>
            </h4>
          </div>

          <div class="modal-body">
            <h5>
              详情：
            </h5>
            {{this.productInformation.content}}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default"
                    data-dismiss="modal">关闭
            </button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'manageProduct',
    data () {  //组件数据
      return {
        user:"",
        base_url:this.$http.defaults.baseURL,　
        addProduct:{//添加的菜品
          productName:'',
          price:'',
          text:'',
          type:''
        },
        productTypes:[],//菜品种类
        addProductTypename:'',//增加的菜品种类
        file: '',
        products:[],//所有菜品
        productInformation:{},//菜品的详情
        eidtProduct:{}//编辑的菜品
     }
    },
    created:function(){  //钩子函数，创建vue组件后被自动调用。发生在mounted之前
      this.getUser();
      this.getProductType();
    },
    //mounted钩子：类似jquery的ready方法，在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。发生在created之后
    mounted(){
      //设置外框高度 this.$refs.frameDiv:可以通过这种方式获取 ref属性值 为frameDiv的元素（标签）对象
//           this.$refs.frameDiv.style.height=this.$refs.leftDiv.offsetHeight+"px";
      this.getFunction(0);
    },
    methods:{
      getUser:function(){
        var url ='/servlet/UserServlet?type1=user';
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
      getProductType:function () {
        var url ='/servlet/productTypeServlet?type=getProductType';
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调
            this.productTypes=response.data;
          }).catch(error => {
          console.log(err);
        });
      },
      getFile:function(event){ //换头像时被调用
        this.file = event.target.files[0];
        var objUrl = this.getObjectURL(this.file) ;
        if (objUrl) {
          document.getElementById("myImage").setAttribute("src", objUrl) ;
          if(this.editProduct){
            document.getElementById("editImage").setAttribute("src", objUrl) ;
          }
        }
        console.log(this.file);
      },
      getObjectURL:function(file){
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
          url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
      },
      addAProduct:function (event) {
        event.preventDefault();//阻止提交
        console.log(this.addProduct);
        let formData = new FormData();
        formData.append('productName',this.addProduct.productName);
        formData.append('price',this.addProduct.price);
        formData.append('text',this.addProduct.text);
        formData.append('type',this.addProduct.type);
        formData.append('file', this.file);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'//提交包含文件域时的设置
          }
        };
        this.$http.post('/servlet/ProductServlet?type=addProduct', formData, config).then(
          function (response) {
            if (response.status === 200) {
              alert("添加成功");
              this.addProduct=[];
              this.file=[];
            }else {
              alert("发生错误");
            }
          }
        ).catch(error => {

        });
      },
      getFunction:function (index) {
        if(index==0){
          this.getAllProducts();
          document.getElementById("addProductTypeSection").style.display="none";
          document.getElementById("addProductSection").style.display="none";
          document.getElementById("showProductSection").style.display="block";
          var a= document.getElementById("selectFunction");
          var items=a.getElementsByTagName("li");
          for(var i=0; i<items.length;i++)
          {
            if(i!=index){
              items[i].classList.remove('active');
            }else{
              items[i].classList.add('active');
            }
          }
        }else if(index==1){
          document.getElementById("showProductSection").style.display="none";
          document.getElementById("showProductSection").style.display="none";
          document.getElementById("addProductSection").style.display="block";
          var a= document.getElementById("selectFunction");
          var items=a.getElementsByTagName("li");
          console.log(items);
          for(var i=0; i<items.length;i++)
          {
            if(i!=index){
              items[i].classList.remove('active');
            }else{
              items[i].classList.add('active');
            }
          }
        }else if(index==2){
          document.getElementById("showProductSection").style.display="none";
          document.getElementById("addProductSection").style.display="none";
          document.getElementById("addProductTypeSection").style.display="block";
          var a= document.getElementById("selectFunction");
          var items=a.getElementsByTagName("li");
          this.addProductType();
          for(var i=0; i<items.length;i++)
          {
            if(i!=index){
              items[i].classList.remove('active');
            }else{
              items[i].classList.add('active');
            }
          }
        }
      },
      addProductType:function () {
        var url ='/servlet/productTypeServlet?type=addProductType&addProductTypename='+this.addProductTypename;
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调
            console.log(response);
            alert("添加成功！");
            this.addProductTypename='';
          }).catch(error => {
          console.log(error);
        });
      },
      getAllProducts:function () {
        var url ='/servlet/ProductServlet?type=showAllProduct';
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调
            console.log(response.data);
            this.products=response.data;
          }).catch(error => {
          console.log(error);
        });
      },
      getProductInformation:function (product) {
        this.productInformation=product;
      },
      editProduct:function (product) {
        this.eidtProduct=product;
        document.getElementById("editProductSection").style.display="block";
        document.getElementById("showProductSection").style.display="none";
      },
      submitEditProduct:function () {
        event.preventDefault();//阻止提交
        console.log(this.addProduct);
        let formData = new FormData();
        formData.append('oldImgUrl',this.eidtProduct.imgUrl);
        formData.append('productId',this.eidtProduct.productId);
        formData.append('productName',this.eidtProduct.productName);
        formData.append('price',this.eidtProduct.price);
        formData.append('text',this.eidtProduct.content);
        formData.append('type',this.eidtProduct.productType);
        formData.append('file', this.file);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'//提交包含文件域时的设置
          }
        };
        this.$http.post('/servlet/ProductServlet?type=editProduct', formData, config).then(
          function (response) {
            if (response.status === 200) {
              alert("更改成功");
              this.addProduct=[];
              this.file=[];
            }else {
              alert("发生错误");
            }
          }
        ).catch(error => {

        });
      },
      deleteProduct:function (index) {
        var url ='/servlet/ProductServlet?type=deleteProduct&productId='+this.products[index].productId;
        this.products.splice(index,1);
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调
            alert("删除成功！");
          }).catch(error => {
          console.log(error);
        });
      },
      deleteProductType:function (index) {
        var url ='/servlet/productTypeServlet?type=deleteProductType&productTypeId='+this.productTypes[index].productTypeId;
        this.productTypes.splice(index,1);
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调
            this.addProductType();
            alert("删除成功！");
          }).catch(error => {
          console.log(error);
        });
      }
    }
  }

</script>
<style>
  #imgPreview {
    width: 40%;
    height: 180px;
    margin: 10px auto 0px auto;
    border: 1px solid black;
    text-align: center;
  }
  #prompt3 {
    width: 100%;
    height: 180px;
    text-align: center;
    position: relative;
  }
  #imgSpan {
    position: absolute;
    top: 60px;
    left: 40px;
  }
  .filepath {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  #img3 {
    height: 100%;
    width: 100%;
    display: none;
  }

</style>

