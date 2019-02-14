<template>
  <div>
{{this.be}}
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
