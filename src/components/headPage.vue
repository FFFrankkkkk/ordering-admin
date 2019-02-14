<template>
  <div>
  <div class="header-actions row">
    <div class="my-account-quicklinks">
      <ul class="list-inline list-inline-divide">
        <template  v-if=" !user.name ">
        <li class="list-item"><a class="list-item-target" href="#signin" data-toggle="modal" data-target="#signin">登录</a></li>
        </template>
        <template  v-if=" user.name ">
        <li class="list-item"><a class="list-item-target" href="#signin" data-toggle="modal" data-target="#signin">{{user.name}}</a></li>
        </template>
        <li class="list-item"><a class="list-item-target" href="#trackOrder" data-toggle="modal" data-target="#trackOrder">追踪订单</a></li>
      </ul>
    </div>
  </div>
  <div class="global-navbar navbar navbar-default" role="navigation">
    <div class="navbar-header">
      <a class="navbar-brand wos-brand"  tppabs="https://www.4008-517-517.cn/cn/home.html">
        <router-link to="/"> <img src="../assets/images/mcdelivery_logo_en.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/img/mcdelivery_logo_zh.jpg" alt="McDelivery&amp;trade;" /></router-link>
      </a>
    </div>
    <div class="main-navigation clearfix">
      <ul class="nav navbar-nav">
        <li class="menu-item menu-item-menu">
          <a class="menu-item-target" tppabs="https://www.4008-517-517.cn/cn/menu.html">
            <i class="fa mcd mcd-burger icon"></i>
            <!--浏览菜单-->
            <router-link to="/menuDisplay">浏览菜单</router-link>
          </a>
        </li>
        <li class="menu-item menu-item-menu">
          <a class="menu-item-target" href="#signin" data-toggle="modal" data-target="#signin">
            <i class="fa mcd mcd-burger icon"></i>
            优惠券
          </a>
        </li>
        <li class="menu-item menu-item-account dropdown">
          <a class="menu-item-target dropdown-toggle" href="#" data-toggle="modal" data-target="#signin" v-on:click="myCount" >
            <i class="fa fa-user icon"></i>
            我的账户
          </a>
        </li>
        <li class="menu-item menu-item-support dropdown ">
          <a class="menu-item-target dropdown-toggle" href="" data-toggle="dropdown">
            <i class="fa fa-phone icon"></i> 帮助<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li class="dropdown-menu-item">
              <a class="dropdown-menu-item-target" href="support-tnc.html-staticLinkId=5&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-tnc.html?staticLinkId=5&locale=zh" target="_self">网站条款</a>
            </li>
            <li class="dropdown-menu-item">
              <a class="dropdown-menu-item-target" href="support-privacy.html-staticLinkId=7&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-privacy.html?staticLinkId=7&locale=zh" target="_self">隐私政策</a>
            </li>
            <li class="dropdown-menu-item">
              <a class="dropdown-menu-item-target" href="support-webpolicy.html-staticLinkId=6&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-webpolicy.html?staticLinkId=6&locale=zh" target="_self">订餐须知</a>
            </li>
            <li class="dropdown-menu-item">
              <a class="dropdown-menu-item-target" href="support-faq.html-staticLinkId=8&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-faq.html?staticLinkId=8&locale=zh" target="_self">常见问题</a>
            </li>
            <li class="dropdown-menu-item">
              <a class="dropdown-menu-item-target" href="support-additional-1.html-staticLinkId=12&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-additional-1.html?staticLinkId=12&locale=zh" target="_self">关于30分钟必达</a>
            </li>
            <li class="dropdown-menu-item">
              <a class="dropdown-menu-item-target" href="javascript:if(confirm('http://www.mcdonalds.com.cn/index/Quality/publicinfo/deliveryinfo?staticLinkId=13&locale=zh  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='http://www.mcdonalds.com.cn/index/Quality/publicinfo/deliveryinfo?staticLinkId=13&locale=zh'" tppabs="http://www.mcdonalds.com.cn/index/Quality/publicinfo/deliveryinfo?staticLinkId=13&locale=zh" target="_self">经营公示</a>
            </li>
            <li class="dropdown-menu-item">
              <a class="dropdown-menu-item-target" href="javascript:if(confirm('https://www.mcdonalds.com.cn/index/Quality/publicinfo/delivery-food-safety-measures?staticLinkId=16&locale=zh  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='https://www.mcdonalds.com.cn/index/Quality/publicinfo/delivery-food-safety-measures?staticLinkId=16&locale=zh'" tppabs="https://www.mcdonalds.com.cn/index/Quality/publicinfo/delivery-food-safety-measures?staticLinkId=16&locale=zh" target="_self">安全公示</a>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
  </div>
</template>
<script type="text/javascript" >
  export default {
    name:'headPage',
    data(){
      return{
        user: {},
        base_url:this.$http.defaults.baseURL
      }
    },
    created:function(){  //钩子函数
      this.getUser();
    },
    methods:{
      submitForm:function(){
        console.log(this.login);
        //qs.stringify()将对象 序列化成查询字符串，如：'name=hehe&age=10'
        var data = Qs.stringify(this.login);
        console.log(data)

        var url ='/servlet/UserServlet?type1=login'
        //利用axios发出ajax的post请求
        this.$http.post(url,data,
          {headers:{'Content-Type':'application/x-www-form-urlencoded'}})  //设置提交Content-Type类型，无文件域的一般表单，可以设置为'application/x-www-form-urlencoded'
          .then(response =>{
            // 响应成功回调
            if(response.data.result==1){
              //成功登陆后，1.更新headPage.vue组件中关于用户的信息；2、显示home.vue组件
              console.log(response.data);
              console.log( "aaaaaa"+this.$store.getters.getLoginFresh);
              //修改store中的loginFresh为true，使得headPage刷新用户数据
              this.$store.dispatch('needLoginFresh');
              console.log( "bbbbbb"+this.$store.getters.getLoginFresh);
              //使得App.vue中的<router-view/>显示home.vue组件
              this.$router.push({path:'/'});
            }
            else//登录失败
              console.log(response);
            alert(response.data);
          }).catch(error => {
            console.log(error);
          }
        );
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
      logout:function(){
        var url ='/servlet/UserServlet?type1=exit';
        this.$http.get(url)  //发出请求
          .then(response =>{
            // 响应成功回调
            if(response.data.result===1){
              this.user=null;//更新用户为null
              //触发本组件的go_home事件，1为传给父组件函数的数据，这里并没有利用它
              this.$emit('go_home',1);
            }
          }).catch(error => {
          console.log(error);
        });
      },
      myCount:function () {
          if(this.user){
            this.$router.push({ name: 'manageMain' })
          }else{
            alert("请先登陆！");
          }
      }
    },
    watch: {
      //监视store中的loginFresh，如果发生变化，自动调用 getLoginFresh(curval,oldval)函数
      getLoginFresh(curval,oldval) {
        console.log( "ccccccc"+curval);
        //如果vuex中的loginFresh状态值被改为真（表示登录成功，见login.vue中this.$store.dispatch('needLoginFresh');语句），则要重新获取登录之后的用户信息，并更新本组件的数据
        if(curval==true){
          this.getUser();
          //$store.getters.getLoginFresh  获取vuex中的loginFreshh状态值
          console.log( "dddddd"+this.$store.getters.getLoginFresh);
          //设置vuex中的loginFresh状态值为假
          this.$store.dispatch('unneedLoginFresh');
          console.log( "eeeeee"+this.$store.getters.getLoginFresh);
        }
      }
    }
  }
</script>
