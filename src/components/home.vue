<template>
  <div>
  <div id="myCarousel" class="carousel slide">
    <!-- 轮播（Carousel）指标 -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
      <div class="item active">
        <img class="carouselImg" src="../assets/images/carousel/landing_30046_1.jpg" alt="First slide">
      </div>
      <div class="item">
        <img  class="carouselImg" src="../assets/images/carousel/landing_30048_3.jpg" alt="Second slide">
      </div>
      <div class="item">
        <img  class="carouselImg" src="../assets/images/carousel/landing_30050_5.jpg" alt="Third slide">
      </div>
      <div class="item">
        <img  class="carouselImg" src="../assets/images/carousel/landing_30052_7.jpg" alt="Third slide">
      </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev" style="visibility: hidden;">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next" style="visibility: hidden;">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    <div class="loginSection">
      <div class="panel panel-home-masthead panel-home-masthead-login">

        <div class="panel-heading">
          <div class="panel-heading">
            <h2><a href="#" data-toggle="html-popover" data-placement="bottom" data-html="true" data-content-selector="#popover-preffered-signin-method" data-original-title="" title="" data-container="#form_login_masthead"><i class="mcd mcd-icon mcd-detail"></i></a>
              <!-- POPOVER START -->
              <div id="popover-preffered-signin-method" class="popover-details">
                <div class="popover-wrapper">
                  <h4>首选登录方式</h4>
                  <p>请以您帐户设置的首选方式（邮箱或手机号）登录。</p>
                </div>
              </div>
              <!-- POPOVER END --> <span class="text-default">开始订餐</span>
            </h2>
          </div>
        </div>
        <template  v-if=" !user.name ">
        <div class="panel-body">
          <form action="https://www.4008-517-517.cn/cn/login.html" method="post" accept-charset="utf-8" role="form" id="form_login_masthead" name="form_login_masthead" class="panel-home-masthead-form" data-required-symbol="false">
            <fieldset class="form-credentials">
              <div class="list-group textfield-list-group">
                <div class="list-group-item textfield-list-group-item">
                  <label class="sr-only" for="form_login_masthead_username">Email</label>
                  <input type="text" name="userName" id="form_login_masthead_username" class="required list-group-form-control" placeholder="邮箱/手机号" v-model="login.name"  />
                </div>
                <div class="list-group-item textfield-list-group-item">
                  <label class="sr-only" for="form_login_masthead_password">Password</label>
                  <input type="password" name="password" id="form_login_masthead_password" class="required list-group-form-control" placeholder="密码" autocomplete="off" v-model="login.password"/>
                </div>
              </div>
            </fieldset>
            <fieldset class="form-actions">
              <button type="button" class="btn btn-default btn-red btn-block btn-xl btn-submit" v-on:click="submitForm" >登录</button>
              <p class="action-forgot-password "><a class="action-link" href="forgot-password.html" tppabs="https://www.4008-517-517.cn/cn/forgot-password.html">忘记密码？</a></p>
              <p class="login-other"><span><block>第三方登录：</block><a href="javascript:if(confirm('https://open.weixin.qq.com/connect/qrconnect?appid=wxf2443890c9035c8c&redirect_uri=https%3A%2F%2Fcnprod-wos.4008-517-517.cn%2Fcn%2Fwechat_callback.html&response_type=code&scope=snsapi_login&state=123  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='https://open.weixin.qq.com/connect/qrconnect?appid=wxf2443890c9035c8c&redirect_uri=https%3A%2F%2Fcnprod-wos.4008-517-517.cn%2Fcn%2Fwechat_callback.html&response_type=code&scope=snsapi_login&state=123#wechat_redirect'" tppabs="https://open.weixin.qq.com/connect/qrconnect?appid=wxf2443890c9035c8c&redirect_uri=https%3A%2F%2Fcnprod-wos.4008-517-517.cn%2Fcn%2Fwechat_callback.html&response_type=code&scope=snsapi_login&state=123#wechat_redirect"><img src="../css/img/login_logo_wechat.png" tppabs="https://www.4008-517-517.cn/cn/assets/86/img/login_logo_wechat.png" /></a></span></p>
              <hr class="fading-divider" />
              <a class="action-link" onclick="                 dataLayer.push({                  'event':'trackEvent',                  'vpv':'vpv_enter_delivery_address',                  'eventDetails.category':'registration',                  'eventDetails.action':'click',                  'eventDetails.label':'register_homepage'                 });                " href="guest.html" tppabs="https://www.4008-517-517.cn/cn/guest.html">
                <p class="header-new-customer">注册新用户</p>
              </a>
            </fieldset>
            <input type="hidden" name="csrfValue" value="C78C4C5" /></form>
        </div>
        </template>
        <template v-if="user.name">
          <div class="panel-body">
            <form action="https://www.4008-517-517.cn/cn/login.html" method="post" accept-charset="utf-8" role="form" id="form_login_masthead" name="form_login_masthead" class="panel-home-masthead-form" data-required-symbol="false">
              <fieldset class="form-credentials">
                <div class="list-group textfield-list-group">
                  <div class="list-group-item textfield-list-group-item" style="background-color: grey">
                    <a  class="required list-group-form-control" >{{user.name}}</a>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-actions">
                <button type="button" class="btn btn-default  btn-block btn-xl btn-submit" style="background-color: rgb(15, 206, 26)" v-on:click="" >管理</button>
                <button type="button" class="btn btn-default btn-red btn-block btn-xl btn-submit" v-on:click="logout" >注销</button>
              </fieldset>
              <input type="hidden" name="csrfValue" value="C78C4C5" /></form>
          </div>
        </template>
      </div>
    </div>
  </div>
    <section class="promotions home-section">
      <div class="row">
        <div class="col-xs-4 text-center promotion">
          <p><a data-toggle="modal" href="support-additional-1.html-staticLinkId=12&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-additional-1.html?staticLinkId=12&locale=zh" target="_blank"><img class="img-block promotion-thumbnail" src="../css/img/home_promo_3267_home_promo_2734_MDS-banner_cn_1.jpg-.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/banners/home_promo_3267_home_promo_2734_MDS-banner_cn_1.jpg?" /></a></p>
        </div>
        <div class="col-xs-4 text-center promotion">
          <p><a data-toggle="modal" href="javascript:if(confirm('http://a.app.qq.com/o/simple.jsp?pkgname=com.mcdonalds.gma.cn  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='http://a.app.qq.com/o/simple.jsp?pkgname=com.mcdonalds.gma.cn'" tppabs="http://a.app.qq.com/o/simple.jsp?pkgname=com.mcdonalds.gma.cn" target="_blank"><img class="img-block promotion-thumbnail" src="../css/img/home_promo_27973_QR_CODE1.jpg-.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/banners/home_promo_27973_QR_CODE1.jpg?" /></a></p>
        </div>
        <div class="col-xs-4 text-center promotion">
          <p><a data-toggle="modal" href="support-webpolicy.html-staticLinkId=6&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-webpolicy.html?staticLinkId=6&locale=zh" target="_blank"><img class="img-block promotion-thumbnail" src="../css/img/home_promo_3997_layout_360x240_CS3.jpg-.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/banners/home_promo_3997_layout_360x240_CS3.jpg?" /></a></p>
        </div>
      </div>
    </section><!-- End Promotion Section -->
    <section class="how-it-works home-section">
      <!--<h1 class="section-title">如何订餐？</h1>-->
      <p><a href="#signin" data-target="#signin" data-toggle="modal">
        <img class="img-block" alt="" src="../css/img/how_mcdelivery_works_zh.png" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/img/how_mcdelivery_works_zh.png" />
      </a></p>
    </section>
  </div>
</template>
<script type="text/javascript" >
  import Qs from 'qs';
  export default {
    name:'home',
    data(){
      return{
        login:{//表单数据整合成一个对象login
          name: '',
          password: ''
        },
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
              alert(登陆成功);
              location.reload();
            }
            else//登录失败
              console.log(response);
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
              location.reload();
            }
          }).catch(error => {
          console.log(error);
        });

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
