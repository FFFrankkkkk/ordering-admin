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
      <div class="form-group">
        <label for="inputfile">图片上传</label>
        <input type="file" id="inputfile">
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
        be:'aaa'        　　　
     }
    },
    created:function(){  //钩子函数，创建vue组件后被自动调用。发生在mounted之前
//      this.getUser();
    },
    //mounted钩子：类似jquery的ready方法，在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。发生在created之后
    mounted(){
      //设置外框高度 this.$refs.frameDiv:可以通过这种方式获取 ref属性值 为frameDiv的元素（标签）对象
//           this.$refs.frameDiv.style.height=this.$refs.leftDiv.offsetHeight+"px";
    },
    methods:{
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
