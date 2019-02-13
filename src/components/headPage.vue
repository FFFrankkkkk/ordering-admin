<template>
  <div>
  <div class="header-actions row">
    <div class="my-account-quicklinks">
      <ul class="list-inline list-inline-divide">
        <li class="list-item"><a class="list-item-target" href="#signin" data-toggle="modal" data-target="#signin">登录</a></li>
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
          <a class="menu-item-target dropdown-toggle" href="#signin" data-toggle="modal" data-target="#signin">
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

      }
    }
  }
</script>
