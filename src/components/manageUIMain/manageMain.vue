<template>
  <div class="main">
    <div class="row row-narrow">
      <div class="page-sidebar">
        <div class="sidebar-menu" data-sticky="true">
          <div class="food-menu">
            <ul class="primary-menu">
              <li class="primary-menu-item selected"><a class="primary-menu-item-target" href="?daypartId=1"><span>我的账户</span><i class="fa fa-angle-right"></i></a>
                <ul class="secondary-menu">
                   <template v-if=" this.user.type=='manager'">
                    <li class="secondary-menu-item selected " ><a class="secondary-menu-item-target" href="#" @click="goFunc(0)"><i class="fa fa-circle"></i> <span>管理菜品</span></a></li>
                    <li class="secondary-menu-item select " ><a class="secondary-menu-item-target" href="#" @click="goFunc(1)"><i class="fa fa-circle"></i> <span>管理订单</span></a></li>
                    <li class="secondary-menu-item select " ><a class="secondary-menu-item-target" href="#" @click="goFunc(2)"><i class="fa fa-circle"></i> <span>管理用户</span></a></li>
                   </template>
                  <template v-else>
                    <li class="secondary-menu-item select selected" :id="index"><a class="secondary-menu-item-target" href="#"><i class="fa fa-circle"></i> <span>查看订单</span></a></li>
                  </template>
                </ul>
              </li>
            </ul>
          </div>
          <div id="menu-availability" class="popover-wrapper popover-details">
            <div class="popover-wrapper">
              <table class="table-default table-menu-availability"><thead><tr><th class="menu-type">早餐菜单</th><th class="menu-type">正餐菜单</th></tr></thead><tbody><tr><td><div>5:00 AM - 10:30 AM </div><div class="last-order">(订单接受时间不迟于 10:15 AM)</div></td><td><div>10:30 AM - 5:00 AM </div><div class="last-order">(订单接受时间不迟于 4:45 AM)</div></td></tr></tbody></table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-10 pull-right">
        <div class="page-content">
          <div class="row row-narrow">
            <div class="col-xs-8">
              <div id="product-cards" class="product-cards" data-equal-height=".product-card--standard .product-title">
                <div class="row row-narrow">
                  <router-view></router-view>
                </div>
              </div>
            </div>
            <div class="col-xs-4">
              <div class="panel panel-basic panel-narrow">
                <div class="panel-section-group">
                  <section class="panel-section how-it-works">
                    <a href="#signin" data-toggle="modal" data-target="#signin"><img src="../../css/img/how_mcdelivery_works_portrait_zh.png" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/img/how_mcdelivery_works_portrait_zh.png"></a>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
　　export default {
    name: 'manageMain',

　　　　data () {  //组件数据
　　　　　　return {
            user:"",
        base_url:this.$http.defaults.baseURL　　　　　　　　　}
　　　　},
    created:function(){  //钩子函数，创建vue组件后被自动调用。发生在mounted之前
        this.getUser();
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
        },
        goFunc:function(i){
            switch(i){
                case 0:this.$router.push({ name: 'manageProduct' });break;
                case 1:this.$router.push({ name: 'manageProduct' });break;
                case 2:this.$router.push({ name: 'manageProduct' });break;
            }
        }
    }
　　}

</script>

<style type="text/css">
    .newsShowByType_left li:hover{
       color:red
    }
    .newsShowByType_left ul{
        list-style-type:none
    }
</style>
