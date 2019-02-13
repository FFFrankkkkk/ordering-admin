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
        <div class="panel-body">
          <form action="https://www.4008-517-517.cn/cn/login.html" method="post" accept-charset="utf-8" role="form" id="form_login_masthead" name="form_login_masthead" class="panel-home-masthead-form" data-required-symbol="false">
            <fieldset class="form-credentials">
              <div class="list-group textfield-list-group">
                <div class="list-group-item textfield-list-group-item">
                  <label class="sr-only" for="form_login_masthead_username">Email</label>
                  <input type="text" name="userName" id="form_login_masthead_username" class="required list-group-form-control" placeholder="邮箱/手机号" value="" />
                </div>
                <div class="list-group-item textfield-list-group-item">
                  <label class="sr-only" for="form_login_masthead_password">Password</label>
                  <input type="password" name="password" id="form_login_masthead_password" class="required list-group-form-control" placeholder="密码" autocomplete="off" value="" />
                </div>
              </div>
            </fieldset>
            <fieldset class="form-actions">
              <button type="submit" class="btn btn-default btn-red btn-block btn-xl btn-submit" onclick="                dataLayer.push({                'event':'trackEvent',                'vpv':'vpv_signin',                'eventDetails.category':'signin',                'eventDetails.action':'click',                'eventDetails.label':'signin_homepage'               });              ">登录</button>
              <p class="action-forgot-password "><a class="action-link" href="forgot-password.html" tppabs="https://www.4008-517-517.cn/cn/forgot-password.html">忘记密码？</a></p>
              <p class="login-other"><span><block>第三方登录：</block><a href="javascript:if(confirm('https://open.weixin.qq.com/connect/qrconnect?appid=wxf2443890c9035c8c&redirect_uri=https%3A%2F%2Fcnprod-wos.4008-517-517.cn%2Fcn%2Fwechat_callback.html&response_type=code&scope=snsapi_login&state=123  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='https://open.weixin.qq.com/connect/qrconnect?appid=wxf2443890c9035c8c&redirect_uri=https%3A%2F%2Fcnprod-wos.4008-517-517.cn%2Fcn%2Fwechat_callback.html&response_type=code&scope=snsapi_login&state=123#wechat_redirect'" tppabs="https://open.weixin.qq.com/connect/qrconnect?appid=wxf2443890c9035c8c&redirect_uri=https%3A%2F%2Fcnprod-wos.4008-517-517.cn%2Fcn%2Fwechat_callback.html&response_type=code&scope=snsapi_login&state=123#wechat_redirect"><img src="../css/img/login_logo_wechat.png" tppabs="https://www.4008-517-517.cn/cn/assets/86/img/login_logo_wechat.png" /></a></span></p>
              <hr class="fading-divider" />
              <a class="action-link" onclick="                 dataLayer.push({                  'event':'trackEvent',                  'vpv':'vpv_enter_delivery_address',                  'eventDetails.category':'registration',                  'eventDetails.action':'click',                  'eventDetails.label':'register_homepage'                 });                " href="guest.html" tppabs="https://www.4008-517-517.cn/cn/guest.html">
                <p class="header-new-customer">注册新用户</p>
              </a>
            </fieldset>
            <input type="hidden" name="csrfValue" value="C78C4C5" /></form>
        </div>
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
  export default {
    name:'home',
    data(){
      return{

      }
    }
  }
</script>
