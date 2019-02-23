<template>
  <div>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">管理菜单</a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">查看菜单</a></li>
            <li><a href="#">添加菜品</a></li>
            <li><a href="#">添加菜品种类</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <form role="form">
      <div class="form-group">
        <label for="name">菜品名称</label>
        <input type="text" class="form-control" id="name"
               placeholder="请输入名称">
      </div>
      <tr><td height="30px">所属类型：</td>
        <td><select id="productType" v-model="addProduct.type">
          <template v-for="productType in productTypes">
          <option value="productType.name">{{productType.name}}</option>
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
        <input type="text" class="form-control"    placeholder="价格">
        <span class="input-group-addon">.00</span>
      </div>
      <div class="form-group">
        <label for="name">菜品介绍</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-default">提交</button>
    </form>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'manageProduct',
    data () {  //组件数据
      return {
        user:"",
        base_url:this.$http.defaults.baseURL,　
        addProduct:{
          productName:'',
          price:'',
          text:'',
          type:''
        },
        productTypes:[],
        file: ''
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
            console.log(this.productTypes[0].name);
            this.addProduct.type=this.productTypes[0].name;
            console.log(this.addProduct.type);
          }).catch(error => {
          console.log(err);
        });
      },
      getFile:function(event){ //换头像时被调用
        this.file = event.target.files[0];
        var objUrl = this.getObjectURL(this.file) ;
        if (objUrl) {
          document.getElementById("myImage").setAttribute("src", objUrl) ;
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
      addProduct:function () {
        event.preventDefault();//阻止提交
        let formData = new FormData();
        formData.append('file', this.file);
        formData.append('productName',addProduct.productName);
          formData.append('price',addProduct.price);
        formData.append('text',addProduct.text);
        formData.append('type',addProduct.type);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'//提交包含文件域时的设置
          }
        };
        this.$http.post('/servlet/ProductServlet?type=addProduct', formData, config).then(
          function (response) {
            if (response.status === 200) {
              console.log(response.data.message);
              if(response.data!=null)
                document.getElementById("rightDiv").innerHTML=response.data.message;
              else
                document.getElementById("rightDiv").innerHTML="添加异常！";
            }
          }
        );
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

