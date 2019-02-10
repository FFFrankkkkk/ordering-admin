<!--<!DOCTYPE html>-->


<!--&lt;!&ndash;[if lt IE 7]>      <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]&ndash;&gt;-->
<!--&lt;!&ndash;[if IE 7]>         <html class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]&ndash;&gt;-->
<!--&lt;!&ndash;[if IE 8]>         <html class="no-js lt-ie10 lt-ie9"> <![endif]&ndash;&gt;-->
<!--&lt;!&ndash;[if IE 9]>         <html class="no-js lt-ie10"> <![endif]&ndash;&gt;-->
<!--&lt;!&ndash;[if gt IE 9]>&lt;!&ndash;> <html class="no-js" style="" dir="ltr"> &lt;!&ndash;<![endif]&ndash;&gt;-->
<!--&lt;!&ndash;<head>&ndash;&gt;-->
  <!--<style id="antiClickjack">body{display:none;}</style>-->
  <script type="text/javascript">
    if(self===top)
    {
      var antiClickjack = document.getElementById("antiClickjack");
      antiClickjack.parentNode.removeChild(antiClickjack);
    }
    else
    {
      top.location = self.location;
    }
  </script>
  <script>var dataLayer = dataLayer || [];</script>


  <script>
    dataLayer.push({
      'ecommerce':{
        'promoView':{
          'promotions':[

            {
              'id':'2',
              'name':'Set_1_Breakfast_0_C',
              'creative':'banner'+'1',
              'position':'homepage'
            },

          ]
        }
      }
    });

    function onPromoClick(promoObj){
      dataLayer.push({
        'event':'promotionClick',
        'ecommerce':{
          'promoClick':{
            'promotions':[{
              'id':promoObj.id,
              'name':promoObj.name,
              'creative':promoObj.creative,
              'position':promoObj.position
            }]
          }
        }
      });
    }
  </script>
<script type="text/javascript">
  $.removeCookie('wos_startneworder_status', { path: '/' });

  /* [#signin.resetpassword.modal] */
  var rememberme_resetpassword = $('#modal_login_resetpassword_rememberme');
  rememberme_resetpassword.on('ifChecked', function(){
    $('#rememberMe').modal('show');
  });

  $('#form_login_resetpassword_modal').validate({
    errorPlacement: function(error, element) {
      var ElementParent = element.parent();
      if (/form_login_resetpassword_modal_username|form_login_resetpassword_modal_password/.test(element.attr('name'))) {
        $('#form_login_resetpassword_modal_password').parents('.textfield-list-group').append(error);
      } else {
        error.insertAfter(element);
      }
    }
  });

  if (null) {
    $('#signin-resetpassword').modal('show'); // Use this to show the new sign in modal
  }
  /* [/#signin.resetpassword.modal] */

</script>



  <!--<meta http-equiv="X-UA-Compatible" content="IE=edge" />-->
  <!--<meta charset=utf-8"utf-8" />-->
  <!--<meta http-equiv="Pragma" content="no-cache" />-->
  <!--<meta http-equiv="Cache-Control" content="no-cache,no-Store" />-->
  <!--<title>麦当劳网上订餐 | 麦乐送</title>-->



  <!--<meta name="description" content="" />-->




  <!--<link rel="stylesheet" href="static/1545754941318/assets/00/css/main.css" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/00/css/main.css" />-->
  <!--&lt;!&ndash;[if lte IE 9]>-->
  <!--<link rel="stylesheet" href="static/1545754941318/assets/00/css/main-2.css" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/00/css/main-2.css" />-->
  <!--<![endif]&ndash;&gt;-->


  <!--<link rel="stylesheet" href="static/1545754941318/assets/86/css/local.css" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/css/local.css" />-->
  <script type="text/javascript" src="./static/1545754941318/assets/00/js/vendor/jquery.min.js" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/00/js/vendor/jquery.min.js"></script>
  <script type="text/javascript" src="./static/1545754941318/assets/00/js/vendor/modernizr.min.js" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/00/js/vendor/modernizr.min.js"></script>
  <!--[if lt IE 9]><script type="text/javascript" src="./static/1545754941318/assets/00/js/oldie.js" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/00/js/oldie.js"></script><![endif]-->
  <!--<script type="text/javascript"> </script>-->
<script type="text/javascript" src="./static/1545754941318/assets/00/js/plugins.js" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/00/js/plugins.js"></script>
<script type="text/javascript" src="./static/1545754941318/assets/00/js/main.js" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/00/js/main.js"></script>
<script type="text/javascript" src="./static/1545754941318/assets/86/js/local.js" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/js/local.js"></script>
<script>
$(function() {
if(false){
$('body').on('click', '.menu-item-menu .menu-item-target, .action-ordernow, a[href*="account-order-history"] , a[href*="account-favourites"]', function(event) {
event.preventDefault();
$('#deliveryOptions').one('show.bs.modal', function() {
$('#form_deliveryoptions_datetime_later').iCheck('check');
}).modal('show');
});
}

/*[#signin-wechat.modal] */
// $('#signin-wechat').modal('show');
/*[/#signin-wechat.modal]*/
if(null){
$('#signin-wechat').modal('show');

console.log('#wechatFirstTimeLogin was clicked 4' );
}
/* [#signin-wechat.modal] */
//		           $('#signin-wechat').modal('show');
// $('#signin-wechat').modal('show');
$('#form_login_wechat').validate({

errorPlacement: function(error, element) {
if (element.is(':checkbox')) {
var controlGroup = element.parents('.checkbox');
var label = controlGroup.find('.checkbox-label');
label.append(error);
} else{
error.insertAfter(element);
}
}
});
$('#form_login_wechat_existing').validate({
errorPlacement: function(error, element) {
var ElementParent = element.parent();
if (/form_login_wechat_existing_username|form_login_wechat_existing_password/.test(element.attr('name'))) {
$('#form_login_wechat_existing_password').parents('.textfield-list-group').append(error);
} else {
error.insertAfter(element);
}
}
});
/* [#signin-wechat.modal] */
/* [#deliveryOptions.modal] */
$('#form_deliveryoptions').deliveryOptions({
// copy
timeInputHint: '\u8BF7\u9009\u62E9\u9001\u9910\u65F6\u95F4',

// api endpoints
getTimeSlotsUrl: 'https://www.4008-517-517.cn/cn/ajax/getTimeSlots.json',
validateUrl: 'https://www.4008-517-517.cn/cn/validate/validateStoreStatus.json',

// status codes
STATUS_CODE_ADDRESS_OOB:  416,
STATUS_CODE_STORE_CLOSED: 503,
STATUS_CODE_ADDRESS_OK:	  200
});
/* [/#deliveryOptions.modal] */



//  $('#offerOptInFirstTime').modal('show');


$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
if (options.url.indexOf("getCashlessPaymentStatus") == -1) { // Skipping this logic for wechat status checking ajax
var sId = '0B0D3C716888429DFC14DFC63C78C4C5.s46t01';
var pid = sId.lastIndexOf('.');
if (pid > 0) {
sId = sId.substr(0, pid);
}
var csrfVal = sId.substr(sId.length-7, 7);
jqXHR.setRequestHeader("csrfValue", csrfVal);
}
});
var signin = null;
if(signin != null){
$("#signin").modal();
var loginErrMsg = $("form[action*=login] #errorId");
if($(loginErrMsg)[0]){
$(loginErrMsg).clone().appendTo($("#signin fieldset:first"));
}
}
});

$(document).on({
'wos.session.ending.warning1': function() {
$('.inline-alert.alert-session-timeout').removeClass('hidden');
},
'wos.session.ending.warning2': function() {
$('.modal-alert.alert-session-timeout').modal('show');
},
'session.action.continue': function() {
$.get('https://www.4008-517-517.cn/cn/ajax/ping.json', function(response) {
if(!response.isExpired){
$(document).trigger('wos.session.reset');
}else{
window.location= 'home.html'/*tpa=https://www.4008-517-517.cn/cn/expireSession.html*/;
}
});
},
'wos.session.reset': function() {
$('.inline-alert.alert-session-timeout').addClass('hidden');
},
'wos.session.ended': function() {
window.location= 'home.html'/*tpa=https://www.4008-517-517.cn/cn/sessionEnded.html*/;
}
});

$(document.body).sessiontimer({
duration: 1800000, //  x mins * 60 * 1000
triggers: [
{
when: 900000, // x mins * 15 * 60 * 1000
eventName: 'wos.session.ending.warning1'
},
{
when: 300000, // x mins * 60 * 1000
eventName: 'wos.session.ending.warning2'
}
]
});

$(document).on({
'wos.menuswitch.ending.warning1': function() {
if (!$.cookie('wos.menuswitch.warning1.status')) {
$.cookie('wos.menuswitch.warning1.status', 'show');
}

if ($.cookie('wos.menuswitch.warning1.status') == 'show') {
$('.inline-alert.alert-menuswitch-timeout').removeClass('hidden');
} else {
$('.inline-alert.alert-menuswitch-timeout').addClass('hidden');
}
},
'wos.menuswitch.ending.warning2': function() {
if(!$.cookie('wos.menuswitch.warning2.status')) {
$.cookie('wos.menuswitch.warning2.status', 'show');
}

if ($.cookie('wos.menuswitch.warning2.status') == 'show') {
$('.modal-alert.alert-menuswitch-timeout').modal('show');
} else {
$('.modal-alert.alert-menuswitch-timeout').modal('hide');
}
},
'wos.menuswitch.warning1.closed': function() {
$.cookie('wos.menuswitch.warning1.status', 'close');
$('.inline-alert.alert-menuswitch-timeout').addClass('hidden');
},
'wos.menuswitch.warning2.closed': function() {
$.cookie('wos.menuswitch.warning2.status', 'close');
},
'wos.menuswitch.ended': function() {
$.removeCookie('wos.menuswitch.warning1.status');
$.removeCookie('wos.menuswitch.warning2.status');

$('.modal-alert.alert-menuswitch-timeout').modal('hide');
//window.location = 'home.html'/*tpa=https://www.4008-517-517.cn/cn/home.html*/;
if (0 != 0) {
window.location = 'home.html'/*tpa=https://www.4008-517-517.cn/cn/changeMenu.html?changeMenuTo=0*/;
}
},
'https://www.4008-517-517.cn/cn/menuswitch.action.ok': function() {
$.cookie('wos.menuswitch.warning2.status', 'close');
}
});

$(document.body).menuswitchtimer({
duration: -1000, // 5 mins left to menu switch off
triggers: [
{
when: -1000, // 3 mins before menu switch over, trigger this event
eventName: 'wos.menuswitch.ending.warning1'
},
{
when: -1000, // 1 min before menu switch over, trigger this event
eventName: 'wos.menuswitch.ending.warning2'
}
]
});

$(document).on({'wos.storeclose.ending.warning1': function() {
if(!$.cookie('wos.storeclose.warning1.status')) {
$.cookie('wos.storeclose.warning1.status', 'show');
}
if ($.cookie('wos.storeclose.warning1.status') == 'show') {
$('.modal-alert.modal-countdownstoreclosetimer').modal('show');
} else {
$('.modal-alert.modal-countdownstoreclosetimer').modal('hide');
}
},
'wos.storeclose.ended': function() {
$.removeCookie('wos.storeclose.warning1.status');
window.location = 'home.html'/*tpa=https://www.4008-517-517.cn/cn/homeStoreClosed.html*/;
},
'storeclose.action.continue': function() {
$.cookie('wos.storeclose.warning1.status', 'close');
}
});

if (false) {
$(document.body).storeclosetimer({
duration: 0,
triggers: [
{
when: (0 * 60 * 1000),
eventName: 'wos.storeclose.ending.warning1'
}
]
});
}
function manageAlerts() {
var menuswitchTimer = $(document.body).data('plugin_menuswitchtimer');
var sessionTimer = $(document.body).data('plugin_sessiontimer');
if (menuswitchTimer.remaining > 0) {
menuswitchTimer.enableTrigger(menuswitchTimer.remaining < sessionTimer.remaining);
sessionTimer.enableTrigger(!menuswitchTimer.enabled);
} else {
sessionTimer.enableTrigger(true);
menuswitchTimer.enableTrigger(false);
}
setTimeout(manageAlerts, 1000);
}

manageAlerts();
</script>
<script type="text/javascript">
  /*<![CDATA[*/
  $(function() {
    $.validator.addMethod('verifyUsername', function(value, element) {
      var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var mobileRegex = /^([0-9]*)$/;
      return emailRegex.test(value) || mobileRegex.test(value);
    });
    /* [#page-content] */
    $('#form_login_masthead').validate({
      rules: {
        userName: {
          required: true,
          verifyUsername: true
        },

        password: {
          required: true
        }
      },
      messages: {
        userName: {
          required: '\u90AE\u7BB1\u6216\u624B\u673A\u53F7\u662F\u5FC5\u586B\u4FE1\u606F\u3002',
          verifyUsername: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1\u6216\u624B\u673A\u53F7\u3002'

        },

        password: {
          required: '\u5BC6\u7801\u662F\u5FC5\u586B\u4FE1\u606F'
        }
      },
      errorPlacement: function(error, element) {
        if (element.attr("name") == "userName" || element.attr("name") == "password" ) {
          $("#form_login_masthead ul").remove();
          $('#form_login_masthead_password').parents('.textfield-list-group').append(error);
        } else {
          error.insertAfter(element);
        }
      }
    });
    /* [/#page-content] */




    /* [#trackOrder.modal] */
    $('#form_trackOrder').validate({
      rules: {
        orderNum: {
          required: true,
          remote: {
            param: {
              url: 'https://www.4008-517-517.cn/cn/validate/trackOrder.json',
              data: {
                orderNumber: function() {
                  console.log('orderNumber : ', $('#form_trackOrder_orderNum').val());
                  return $('#form_trackOrder_orderNum').val();
                }
              },
              complete: function(xhr, status) {
                var response = xhr.responseJSON;
                if(response.valid==false)
                {
                  $('#form_trackOrder .form-group .error')
                    .html(response.message);
                }
              }
            }
          }
        }
      },
      messages: {
        orderNum: {
          required : '\u8BA2\u5355\u53F7\u7801\u662F\u5FC5\u586B\u5185\u5BB9\u3002'
        }
      }
    });
    /* [/#trackOrder.modal] */

    $('#form_login_modal').validate({
      rules: {
        userName: {
          required: true,
          verifyUsername: true
        },
        password: {
          required: true
        }
      },
      messages: {
        userName: {
          required: '\u90AE\u7BB1\u6216\u624B\u673A\u53F7\u662F\u5FC5\u586B\u4FE1\u606F\u3002',
          verifyUsername: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1\u6216\u624B\u673A\u53F7\u3002'
        },

        password: {
          required: '\u5BC6\u7801\u662F\u5FC5\u586B\u4FE1\u606F'
        }
      },
      errorPlacement: function(error, element) {
        var ElementParent = element.parent();
        if (element.attr("name") == "userName" || element.attr("name") == "password" ) {
          $('#form_login_modal_password').parents('.textfield-list-group').append(error);
          $("#form_login_masthead #errorId").remove();
        } else {
          error.insertAfter(element);
        }
      }
    });
    /* [/#signin.modal] */
    if(null=="true"){
      $('#alertTimeOut').modal('show');
    }


  });

  /*]]>*/
</script>
<script type="text/javascript">
  $.removeCookie('wos_startneworder_status', { path: '/' });

  /* [#signin.resetpassword.modal] */
  var rememberme_resetpassword = $('#modal_login_resetpassword_rememberme');
  rememberme_resetpassword.on('ifChecked', function(){
    $('#rememberMe').modal('show');
  });

  $('#form_login_resetpassword_modal').validate({
    errorPlacement: function(error, element) {
      var ElementParent = element.parent();
      if (/form_login_resetpassword_modal_username|form_login_resetpassword_modal_password/.test(element.attr('name'))) {
        $('#form_login_resetpassword_modal_password').parents('.textfield-list-group').append(error);
      } else {
        error.insertAfter(element);
      }
    }
  });

  if (null) {
    $('#signin-resetpassword').modal('show'); // Use this to show the new sign in modal
  }
  /* [/#signin.resetpassword.modal] */

</script>
<!--</head>-->


<!--<body class="country-86 lang-zh page-home">-->
<!--<noscript><iframe src="../../www.googletagmanager.com/ns.html-id=GTM-TQHPHB" tppabs="https://www.googletagmanager.com/ns.html?id=GTM-TQHPHB" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'/*tpa=https://www.4008-517-517.cn/cn/gtm.js*/});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TQHPHB');</script>-->
<!--&lt;!&ndash;[if lt IE 9]>-->
<!--<p id="outdated" class="browsehappy">您目前使用的浏览器版本过低，为保证您正常浏览网页，请<a href="javascript:if(confirm('http://browsehappy.com/?locale=zh  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='http://browsehappy.com/?locale=zh'" tppabs="http://browsehappy.com/?locale=zh" target="_blank">升级</a>至最新版本。</p>-->
<!--<![endif]&ndash;&gt;-->
<!--&lt;!&ndash; TODO: Please add the following line &ndash;&gt;-->


<!--<script type="text/javascript"></script>-->
<template>
  <!--<div>-->
<!--<div class="root">-->
  <!--<div class="wrap container">-->
    <!--<div class="global-header">-->
      <!--<div class="header-actions row">-->
        <!--<div class="language-selector">-->
          <!--<ul class="list-inline list-inline-divide">-->
            <!--<li class="list-item selected">-->
              <!--<a class="list-item-target" href="-locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/?locale=zh">中文 <i class="fa fa-caret-left icon" ></i></a>-->
              <!--&lt;!&ndash; &ndash;&gt;-->
            <!--</li>-->
            <!--<li class="list-item"><a class="list-item-target" href="-locale=en.htm" tppabs="https://www.4008-517-517.cn/cn/?locale=en">English <i class="fa fa-caret-left icon" ></i></a></li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="my-account-quicklinks">-->
          <!--<ul class="list-inline list-inline-divide">-->





            <!--<li class="list-item"><a class="list-item-target" href="#signin" data-toggle="modal" data-target="#signin">登录</a></li>-->







            <!--<li class="list-item"><a class="list-item-target" href="#trackOrder" data-toggle="modal" data-target="#trackOrder">追踪订单</a></li>-->


          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="global-navbar navbar navbar-default" role="navigation">-->
        <!--<div class="navbar-header">-->
          <!--<a class="navbar-brand wos-brand" href="home.html" tppabs="https://www.4008-517-517.cn/cn/home.html">-->


            <!--<img src="./static/1545754941318/assets/86/img/mcdelivery_logo_zh.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/img/mcdelivery_logo_zh.jpg" alt="McDelivery&amp;trade;" />-->

          <!--</a>-->
        <!--</div>-->
        <!--<div class="main-navigation clearfix">-->
          <!--<ul class="nav navbar-nav">-->
            <!--<li class="menu-item menu-item-menu">-->

              <!--<a class="menu-item-target" href="browse/menu.html" tppabs="https://www.4008-517-517.cn/cn/menu.html">-->
                <!--<i class="fa mcd mcd-burger icon"></i>-->
                <!--浏览菜单-->
              <!--</a>-->



            <!--</li>-->

            <!--<li class="menu-item menu-item-menu">-->
              <!--<a class="menu-item-target" href="#signin" data-toggle="modal" data-target="#signin">-->
                <!--<i class="fa mcd mcd-burger icon"></i>-->
                <!--优惠券-->
              <!--</a>-->

            <!--</li>-->


            <!--<li class="menu-item menu-item-account dropdown">-->
              <!--<a class="menu-item-target dropdown-toggle" href="#signin" data-toggle="modal" data-target="#signin">-->
                <!--<i class="fa fa-user icon"></i>-->
                <!--我的账户-->
              <!--</a>-->
            <!--</li>-->





            <!--<li class="menu-item menu-item-support dropdown ">-->
              <!--<a class="menu-item-target dropdown-toggle" href="" data-toggle="dropdown">-->
                <!--<i class="fa fa-phone icon"></i> 帮助<span class="caret"></span></a>-->
              <!--<ul class="dropdown-menu">-->
                <!--<li class="dropdown-menu-item">-->



                  <!--<a class="dropdown-menu-item-target" href="support-tnc.html-staticLinkId=5&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-tnc.html?staticLinkId=5&locale=zh" target="_self">网站条款</a>-->



                <!--</li>-->
                <!--<li class="dropdown-menu-item">-->



                  <!--<a class="dropdown-menu-item-target" href="support-privacy.html-staticLinkId=7&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-privacy.html?staticLinkId=7&locale=zh" target="_self">隐私政策</a>-->



                <!--</li>-->
                <!--<li class="dropdown-menu-item">-->



                  <!--<a class="dropdown-menu-item-target" href="support-webpolicy.html-staticLinkId=6&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-webpolicy.html?staticLinkId=6&locale=zh" target="_self">订餐须知</a>-->



                <!--</li>-->
                <!--<li class="dropdown-menu-item">-->



                  <!--<a class="dropdown-menu-item-target" href="support-faq.html-staticLinkId=8&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-faq.html?staticLinkId=8&locale=zh" target="_self">常见问题</a>-->



                <!--</li>-->
                <!--<li class="dropdown-menu-item">-->



                  <!--<a class="dropdown-menu-item-target" href="support-additional-1.html-staticLinkId=12&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-additional-1.html?staticLinkId=12&locale=zh" target="_self">关于30分钟必达</a>-->



                <!--</li>-->
                <!--<li class="dropdown-menu-item">-->



                  <!--<a class="dropdown-menu-item-target" href="javascript:if(confirm('http://www.mcdonalds.com.cn/index/Quality/publicinfo/deliveryinfo?staticLinkId=13&locale=zh  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='http://www.mcdonalds.com.cn/index/Quality/publicinfo/deliveryinfo?staticLinkId=13&locale=zh'" tppabs="http://www.mcdonalds.com.cn/index/Quality/publicinfo/deliveryinfo?staticLinkId=13&locale=zh" target="_self">经营公示</a>-->



                <!--</li>-->
                <!--<li class="dropdown-menu-item">-->



                  <!--<a class="dropdown-menu-item-target" href="javascript:if(confirm('https://www.mcdonalds.com.cn/index/Quality/publicinfo/delivery-food-safety-measures?staticLinkId=16&locale=zh  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='https://www.mcdonalds.com.cn/index/Quality/publicinfo/delivery-food-safety-measures?staticLinkId=16&locale=zh'" tppabs="https://www.mcdonalds.com.cn/index/Quality/publicinfo/delivery-food-safety-measures?staticLinkId=16&locale=zh" target="_self">安全公示</a>-->



                <!--</li>-->


              <!--</ul>-->
            <!--</li>-->

          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="alert alert-warning alert-dismissable inline-alert type-flama hidden alert-menuswitch-timeout" data-dismiss-trigger="wos.menuswitch.warning1.closed">-->
        <!--<button type="button" class="close" data-hide="inline-alert" aria-hidden="true"><i class="fa mcd mcd-close"></i></button>-->
        <!--<p><i class="fa fa-exclamation text-white icon"></i> <span>我们将在 <span class="text-primary timer menuswitch-timer"></span> 后切换至早餐菜单，请尽快提交订单。</span></p>-->
      <!--</div>-->

      <!--&lt;!&ndash; Start of Session time out warning &ndash;&gt;-->

      <!--&lt;!&ndash; End of Session time out warning &ndash;&gt;-->
      <!--&lt;!&ndash; [countdownmenuswitchtimer.modal] &ndash;&gt;-->
      <!--<div id="countdownmenuswitchtimer" data-alert-type="modal" data-backdrop="static" data-keyboard="false" class="modal-countdownmenuswitchtimer modal-alert alert-menuswitch-timeout modal-alert modal fade" role="dialog" aria-labelledby="countdownmenuswitchtimer-title" aria-hidden="true" tabindex="-1">-->
        <!--<div class="modal-dialog">-->
          <!--<div class="modal-content">-->
            <!--<div class="modal-header">-->
            <!--</div>-->
            <!--<div class="modal-body">-->
              <!--<div class="row">-->
                <!--<div class="col-xs-3 timer-wrapper">-->
                  <!--<div class="time-disclaimer">菜单马上将会进行更新为早餐菜单，还有</div>-->
                  <!--<div class="time timer text-din timer-clock menuswitch-timer"></div>-->
                  <!--<div class="time-disclaimer"></div>-->
                <!--</div>-->
                <!--<div class="col-xs-8 timer-wrapper">-->
                  <!--<div class="alert-content text-left">-->
                    <!--<h1 id="countdownmenuswitchtimer-title">菜单更新提醒</h1>-->
                    <!--<p>我们将马上更新为早餐菜单，请在计时结束前确认您的订单。</p>-->
                    <!--<p><button type="button" data-dismiss-trigger="menuswitch.action.ok" aria-hidden="true" class="btn btn-red btn-lg text-ucase">是的</button></p>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--&lt;!&ndash; [/countdownmenuswitchtimer.modal] &ndash;&gt;-->
    <!--</div>-->
    <!--<div class="main" role="main">-->

      <!--&lt;!&ndash; Begin Home Masthead Section &ndash;&gt;-->
      <!--<section class="home-masthead page-masthead home-section">-->
        <!--<div class="slideshow">-->

          <!--<div class="cycle-pager slide-pager"></div>-->




          <!--<a class="slide-target slide-item action-ordernow" href="javascript:if(confirm('https://www.4008-517-517.cn/cn/ORDERNOW  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ������������ļ�δ�ҵ���  \n\n�����ڷ������ϴ���?'))window.location='https://www.4008-517-517.cn/cn/ORDERNOW'" tppabs="https://www.4008-517-517.cn/cn/ORDERNOW" target="_self" onclick="onPromoClick({ &#39;id&#39;:&#39;2&#39;,&#39;name&#39;:&#39;Set_1_Breakfast_0_C&#39;,&#39;creative&#39;:&#39;banner&#39; + &#39;1&#39;,&#39;position&#39;:&#39;homepage&#39;})" style="background-image: url(/cn/static/1545754941318/assets/86/banners/landing_29925_4.jpg?)">-->
          <!--</a>-->








        <!--</div>-->



        <!--&lt;!&ndash; Begin Login Panel &ndash;&gt;-->
        <!--<div class="panel panel-home-masthead panel-home-masthead-login">-->

          <!--<div class="panel-heading">-->
            <!--<div class="panel-heading">-->
              <!--<h2><a href="#" data-toggle="html-popover" data-placement="bottom" data-html="true" data-content-selector="#popover-preffered-signin-method" data-original-title="" title="" data-container="#form_login_masthead"><i class="mcd mcd-icon mcd-detail"></i></a>-->
                <!--&lt;!&ndash; POPOVER START &ndash;&gt;-->
                <!--<div id="popover-preffered-signin-method" class="popover-details">-->
                  <!--<div class="popover-wrapper">-->
                    <!--<h4>首选登录方式</h4>-->
                    <!--<p>请以您帐户设置的首选方式（邮箱或手机号）登录。</p>-->
                  <!--</div>-->
                <!--</div>-->
                <!--&lt;!&ndash; POPOVER END &ndash;&gt; <span class="text-default">开始订餐</span>-->

              <!--</h2>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="panel-body">-->
            <!--<form action="https://www.4008-517-517.cn/cn/login.html" method="post" accept-charset="utf-8" role="form" id="form_login_masthead" name="form_login_masthead" class="panel-home-masthead-form" data-required-symbol="false">-->
              <!--<fieldset class="form-credentials">-->
                <!--<div class="list-group textfield-list-group">-->
                  <!--<div class="list-group-item textfield-list-group-item">-->
                    <!--<label class="sr-only" for="form_login_masthead_username">Email</label>-->
                    <!--<input type="text" name="userName" id="form_login_masthead_username" class="required list-group-form-control" placeholder="邮箱/手机号" value="" />-->

                  <!--</div>-->
                  <!--<div class="list-group-item textfield-list-group-item">-->
                    <!--<label class="sr-only" for="form_login_masthead_password">Password</label>-->
                    <!--<input type="password" name="password" id="form_login_masthead_password" class="required list-group-form-control" placeholder="密码" autocomplete="off" value="" />-->

                  <!--</div>-->
                <!--</div>-->

                <!--<div class="checkbox">-->
                  <!--<input type="checkbox" name="rememberMe" id="form_login_masthead_rememberme" value="true" /><input type="hidden" name="_rememberMe" value="on" />-->
                  <!--<label for="form_login_masthead_rememberme" class="checkbox-label">下次自动登录</label>-->
                <!--</div>-->
              <!--</fieldset>-->

              <!--<fieldset class="form-actions">-->

                <!--<button type="submit" class="btn btn-default btn-red btn-block btn-xl btn-submit" onclick="                dataLayer.push({                'event':'trackEvent',                'vpv':'vpv_signin',                'eventDetails.category':'signin',                'eventDetails.action':'click',                'eventDetails.label':'signin_homepage'               });              ">登录</button>-->


                <!--<p class="action-forgot-password "><a class="action-link" href="forgot-password.html" tppabs="https://www.4008-517-517.cn/cn/forgot-password.html">忘记密码？</a></p>-->


                <!--<p class="login-other"><span><block>第三方登录：</block><a href="javascript:if(confirm('https://open.weixin.qq.com/connect/qrconnect?appid=wxf2443890c9035c8c&redirect_uri=https%3A%2F%2Fcnprod-wos.4008-517-517.cn%2Fcn%2Fwechat_callback.html&response_type=code&scope=snsapi_login&state=123  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='https://open.weixin.qq.com/connect/qrconnect?appid=wxf2443890c9035c8c&redirect_uri=https%3A%2F%2Fcnprod-wos.4008-517-517.cn%2Fcn%2Fwechat_callback.html&response_type=code&scope=snsapi_login&state=123#wechat_redirect'" tppabs="https://open.weixin.qq.com/connect/qrconnect?appid=wxf2443890c9035c8c&redirect_uri=https%3A%2F%2Fcnprod-wos.4008-517-517.cn%2Fcn%2Fwechat_callback.html&response_type=code&scope=snsapi_login&state=123#wechat_redirect"><img src="assets/86/img/login_logo_wechat.png" tppabs="https://www.4008-517-517.cn/cn/assets/86/img/login_logo_wechat.png" /></a></span></p>-->

                <!--<hr class="fading-divider" />-->

                <!--<a class="action-link" onclick="                 dataLayer.push({                  'event':'trackEvent',                  'vpv':'vpv_enter_delivery_address',                  'eventDetails.category':'registration',                  'eventDetails.action':'click',                  'eventDetails.label':'register_homepage'                 });                " href="guest.html" tppabs="https://www.4008-517-517.cn/cn/guest.html">-->
                  <!--<p class="header-new-customer">新用户</p>-->
                  <!--<p class="action-check-address">-->
                    <!--<span> <i class="fa fa-caret-right" ></i> 请输入您的送餐地址</span>-->
                  <!--</p>-->
                <!--</a>-->


              <!--</fieldset>-->
              <!--<input type="hidden" name="csrfValue" value="C78C4C5" /></form>-->
          <!--</div>-->
        <!--</div>&lt;!&ndash; End Login Panel &ndash;&gt;-->

      <!--</section>&lt;!&ndash; End Home Masthead Section &ndash;&gt;-->

      <!--&lt;!&ndash; Begin Promotion Section &ndash;&gt;-->
      <!--<section class="promotions home-section">-->
        <!--<div class="row">-->
          <!--<div class="col-xs-4 text-center promotion">-->


            <!--<p><a data-toggle="modal" href="support-additional-1.html-staticLinkId=12&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-additional-1.html?staticLinkId=12&locale=zh" target="_blank"><img class="img-block promotion-thumbnail" src="static/1545754941318/assets/86/banners/home_promo_3267_home_promo_2734_MDS-banner_cn_1.jpg-.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/banners/home_promo_3267_home_promo_2734_MDS-banner_cn_1.jpg?" /></a></p>-->




          <!--</div>-->
          <!--<div class="col-xs-4 text-center promotion">-->


            <!--<p><a data-toggle="modal" href="javascript:if(confirm('http://a.app.qq.com/o/simple.jsp?pkgname=com.mcdonalds.gma.cn  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='http://a.app.qq.com/o/simple.jsp?pkgname=com.mcdonalds.gma.cn'" tppabs="http://a.app.qq.com/o/simple.jsp?pkgname=com.mcdonalds.gma.cn" target="_blank"><img class="img-block promotion-thumbnail" src="static/1545754941318/assets/86/banners/home_promo_27973_QR_CODE1.jpg-.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/banners/home_promo_27973_QR_CODE1.jpg?" /></a></p>-->




          <!--</div>-->
          <!--<div class="col-xs-4 text-center promotion">-->


            <!--<p><a data-toggle="modal" href="support-webpolicy.html-staticLinkId=6&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-webpolicy.html?staticLinkId=6&locale=zh" target="_blank"><img class="img-block promotion-thumbnail" src="static/1545754941318/assets/86/banners/home_promo_3997_layout_360x240_CS3.jpg-.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/banners/home_promo_3997_layout_360x240_CS3.jpg?" /></a></p>-->




          <!--</div>-->
        <!--</div>-->
      <!--</section>&lt;!&ndash; End Promotion Section &ndash;&gt;-->



      <!--&lt;!&ndash; Begin How It Works Section &ndash;&gt;-->
      <!--<section class="how-it-works home-section">-->
        <!--<h1 class="section-title">如何订餐？</h1>-->
        <!--<p><a href="#signin" data-target="#signin" data-toggle="modal">-->
          <!--<img class="img-block" alt="" src="static/1545754941318/assets/86/img/how_mcdelivery_works_zh.png" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/img/how_mcdelivery_works_zh.png" />-->
        <!--</a></p>-->
      <!--</section>&lt;!&ndash; End How It Works Section &ndash;&gt;	</div>-->
  <!--</div>-->
  <!--<div class="global-footer">-->
    <!--<div class="footer-nav">-->
      <!--<div class="container">-->
        <!--<div class="row">-->

          <!--<div class="column">-->
            <!--<h3 class="list-group-title">浏览菜单</h3>-->
            <!--<ul class="list-unstyled">-->
              <!--<li class="menu-item">-->

                <!--<a class="menu-item-target" href="browse/menu.html-daypartId=2&catId=1.htm" tppabs="https://www.4008-517-517.cn/cn/browse/menu.html?daypartId=2&catId=1">促销产品和热卖产品</a>-->

              <!--</li>-->
              <!--<li class="menu-item">-->

                <!--<a class="menu-item-target" href="browse/menu.html-daypartId=2&catId=3.htm" tppabs="https://www.4008-517-517.cn/cn/browse/menu.html?daypartId=2&catId=3">主食和超值早晨套餐</a>-->

              <!--</li>-->
              <!--<li class="menu-item">-->

                <!--<a class="menu-item-target" href="browse/menu.html-daypartId=2&catId=4.htm" tppabs="https://www.4008-517-517.cn/cn/browse/menu.html?daypartId=2&catId=4">小食</a>-->

              <!--</li>-->
              <!--<li class="menu-item">-->

                <!--<a class="menu-item-target" href="browse/menu.html-daypartId=2&catId=6.htm" tppabs="https://www.4008-517-517.cn/cn/browse/menu.html?daypartId=2&catId=6">甜品</a>-->

              <!--</li>-->
              <!--<li class="menu-item">-->

                <!--<a class="menu-item-target" href="browse/menu.html-daypartId=2&catId=5.htm" tppabs="https://www.4008-517-517.cn/cn/browse/menu.html?daypartId=2&catId=5">饮品</a>-->

              <!--</li>-->
              <!--<li class="menu-item">-->

                <!--<a class="menu-item-target" href="browse/menu.html-daypartId=2&catId=8.htm" tppabs="https://www.4008-517-517.cn/cn/browse/menu.html?daypartId=2&catId=8">开心乐园餐</a>-->

              <!--</li>-->

            <!--</ul>-->
          <!--</div>-->




          <!--<div class="column">-->
            <!--<h3 class="list-group-title">帮助</h3>-->
            <!--<ul class="list-unstyled">-->
              <!--<li class="menu-item">-->



                <!--<a class="menu-item-target" href="support-tnc.html-staticLinkId=5&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-tnc.html?staticLinkId=5&locale=zh" target="_self">网站条款</a>-->



              <!--</li>-->
              <!--<li class="menu-item">-->



                <!--<a class="menu-item-target" href="support-privacy.html-staticLinkId=7&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-privacy.html?staticLinkId=7&locale=zh" target="_self">隐私政策</a>-->



              <!--</li>-->
              <!--<li class="menu-item">-->



                <!--<a class="menu-item-target" href="support-webpolicy.html-staticLinkId=6&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-webpolicy.html?staticLinkId=6&locale=zh" target="_self">订餐须知</a>-->



              <!--</li>-->
              <!--<li class="menu-item">-->



                <!--<a class="menu-item-target" href="support-faq.html-staticLinkId=8&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-faq.html?staticLinkId=8&locale=zh" target="_self">常见问题</a>-->



              <!--</li>-->
              <!--<li class="menu-item">-->



                <!--<a class="menu-item-target" href="support-additional-1.html-staticLinkId=12&locale=zh.htm" tppabs="https://www.4008-517-517.cn/cn/support-additional-1.html?staticLinkId=12&locale=zh" target="_self">关于30分钟必达</a>-->



              <!--</li>-->
              <!--<li class="menu-item">-->



                <!--<a class="menu-item-target" href="javascript:if(confirm('http://www.mcdonalds.com.cn/index/Quality/publicinfo/deliveryinfo?staticLinkId=13&locale=zh  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='http://www.mcdonalds.com.cn/index/Quality/publicinfo/deliveryinfo?staticLinkId=13&locale=zh'" tppabs="http://www.mcdonalds.com.cn/index/Quality/publicinfo/deliveryinfo?staticLinkId=13&locale=zh" target="_self">经营公示</a>-->



              <!--</li>-->
              <!--<li class="menu-item">-->



                <!--<a class="menu-item-target" href="javascript:if(confirm('https://www.mcdonalds.com.cn/index/Quality/publicinfo/delivery-food-safety-measures?staticLinkId=16&locale=zh  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='https://www.mcdonalds.com.cn/index/Quality/publicinfo/delivery-food-safety-measures?staticLinkId=16&locale=zh'" tppabs="https://www.mcdonalds.com.cn/index/Quality/publicinfo/delivery-food-safety-measures?staticLinkId=16&locale=zh" target="_self">安全公示</a>-->



              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->

          <!--<div class="column">-->
            <!--<h3 class="list-group-title">关注我们</h3>-->
            <!--<ul class="list-unstyled">-->

              <!--<li class="menu-item">-->




                <!--<a class="menu-item-target footer-icon wb" href="javascript:if(confirm('http://weibo.com/mcdonaldsworlds  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='http://weibo.com/mcdonaldsworlds'" tppabs="http://weibo.com/mcdonaldsworlds" target="_blank">新浪微博</a>-->


              <!--</li>-->

              <!--<li class="menu-item">-->





                <!--<a class="menu-item-target footer-icon wc" href="javascript:if(confirm('http://www.mcdonalds.com.cn/content/dam/china/common/weixin.jpg?keepThis=true&amp;TB_iframe=true&amp;height=550&amp;width=1000  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='http://www.mcdonalds.com.cn/content/dam/china/common/weixin.jpg?keepThis=true&amp;TB_iframe=true&amp;height=550&amp;width=1000'" tppabs="http://www.mcdonalds.com.cn/content/dam/china/common/weixin.jpg?keepThis=true&amp;TB_iframe=true&amp;height=550&amp;width=1000" target="_blank">微信</a>-->

              <!--</li>-->

            <!--</ul>-->
          <!--</div>-->

          <!--&lt;!&ndash;&lt;!&ndash; <div class="column col-xs-4">&ndash;&gt;-->
                        <!--&lt;!&ndash;<h3>Stay in touch with us!</h3>&ndash;&gt;-->
                        <!--&lt;!&ndash;<form class="signup-form form" action="" method="post" accept-charset="utf-8" role="form">&ndash;&gt;-->
                              <!--&lt;!&ndash;<div class="form-row">&ndash;&gt;-->
                                  <!--&lt;!&ndash;<input type="text" class="form-control input-lg" placeholder="Enter your email address">&ndash;&gt;-->
                              <!--&lt;!&ndash;</div>&ndash;&gt;-->
                            <!--&lt;!&ndash;<div class="form-row">&ndash;&gt;-->
                                <!--&lt;!&ndash;<button type="submit" class="btn btn-primary btn-lg btn-block btn-red">Sign me up!</button>&ndash;&gt;-->
                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                        <!--&lt;!&ndash;</form>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div> &ndash;&gt;&ndash;&gt;-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="footer-disclaimer">-->
      <!--<div class="container">-->
        <!--<div class="text-center"></div>-->
        <!--<div class="text-center text-ucase">2014 麦当劳版权所有 | 沪 ICP备06017533号-6 <a target="_blank" href="javascript:if(confirm('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402000847  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402000847'" tppabs="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402000847"><span class="police-logo"></span> 沪公网安备31010402000847号</a></div>-->
        <!--<div class="text-center text-ucase">金色拱门和&ldquo;我就喜欢&rdquo;是麦当劳及其关联公司的商标。</div>-->

        <!--<div class="text-center shaic-logo">-->
          <!--<a target="_blank" href="javascript:if(confirm('https://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=1atr5hendjiu231gru8oviml251yswbh67tsigj9j25x2q8wsx  \n\n���ļ��޷��� Teleport Ultra ����, ��Ϊ ����һ�����·���ⲿ������Ϊ������ʼ��ַ�ĵ�ַ��  \n\n�����ڷ������ϴ���?'))window.location='https://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=1atr5hendjiu231gru8oviml251yswbh67tsigj9j25x2q8wsx'" tppabs="https://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=1atr5hendjiu231gru8oviml251yswbh67tsigj9j25x2q8wsx"><img alt="上海工商" src="static/1545754941318/assets/86/img/SHAIC_logo.gif" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/img/SHAIC_logo.gif" /></a>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->



  <!--</div>-->

<!--</div>-->
<!--<div id="loading-view" class="loading-view hidden"><div class="loading"><span class="loading-icon"></span></div></div>-->



<!--<div id="signin" class="modal-login modal fade" role="dialog" aria-labelledby="modal-title" aria-hidden="true" tabindex="-1">-->
  <!--<div class="modal-dialog">-->
    <!--<div class="modal-content">-->
      <!--<div class="modal-header">-->


        <!--<img class="logo" src="static/1545754941318/assets/86/img/mcdelivery_logo_zh.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/img/mcdelivery_logo_zh.jpg" alt="" />-->


        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">-->
          <!--<i class="fa mcd mcd-close"></i>-->
        <!--</button>-->
      <!--</div>-->
      <!--<div class="modal-body">-->

        <!--<h2 id="login-title">欢迎，登录后开始订餐<a href="#" data-toggle="html-popover" data-placement="bottom" data-html="true" data-content-selector="#lighbox-popover-preffered-signin-method" data-original-title="" title="" data-container="#form_login_modal"><i class="mcd mcd-icon mcd-detail"></i></a>-->
          <!--&lt;!&ndash; POPOVER START &ndash;&gt;-->
          <!--<div id="lighbox-popover-preffered-signin-method" class="popover-details">-->
            <!--<div class="popover-wrapper">-->
              <!--<h4>首选登录方式</h4>-->
              <!--<p>请以您帐户设置的首选方式（邮箱或手机号）登录。</p>-->
            <!--</div>-->
          <!--</div>-->
          <!--&lt;!&ndash; POPOVER END &ndash;&gt;-->
        <!--</h2>-->
        <!--<div class="row">-->
          <!--<div class="col-xs-offset-3 col-xs-6">-->
            <!--<form action="https://www.4008-517-517.cn/cn/login.html" method="post" accept-charset="utf-8" role="form" id="form_login_modal" name="form_login_modal" class="form-login-modal form-login" data-required-symbol="false">-->
              <!--<fieldset class="form-credentials">-->
                <!--<div class="list-group textfield-list-group">-->
                  <!--<div class="list-group-item textfield-list-group-item">-->
                    <!--<label class="sr-only" for="form_login_modal_username">邮箱</label>-->
                    <!--<input type="text" name="userName" id="form_login_modal_username" class="required list-group-form-control" placeholder="邮箱/手机号" value="" />-->

                  <!--</div>-->
                  <!--<div class="list-group-item textfield-list-group-item">-->
                    <!--<label class="sr-only" for="form_login_modal_password">密码</label>-->
                    <!--<input type="password" name="password" id="form_login_modal_password" class="required list-group-form-control" placeholder="密码" autocomplete="off" value="" />-->

                  <!--</div>-->
                <!--</div>-->

                <!--<div class="checkbox">-->
                  <!--<input type="checkbox" name="rememberMe" id="modal_login_rememberme" value="true" /><input type="hidden" name="_rememberMe" value="on" />-->
                  <!--<label for="modal_login_rememberme" class="checkbox-label">下次自动登录</label>-->
                <!--</div>-->
              <!--</fieldset>-->
              <!--<fieldset class="form-actions">-->

                <!--<button type="submit" class="btn btn-default btn-red btn-block btn-xl btn-submit" onclick="               dataLayer.push({               'event':'trackEvent',               'vpv':'vpv_signin',               'eventDetails.category':'signin',               'eventDetails.action':'click',               'eventDetails.label':'signin_popup'              });             ">登录</button>-->


                <!--<p class="action-forgot-password">-->
                  <!--<a class="action-link" href="forgot-password.html" tppabs="https://www.4008-517-517.cn/cn/forgot-password.html">忘记密码？</a>-->
                <!--</p>-->
                <!--<hr class="fading-divider" />-->

                <!--<a class="action-link" onclick="                  dataLayer.push({                   'event':'trackEvent',                   'vpv':'vpv_enter_delivery_address',                   'eventDetails.category':'registration',                   'eventDetails.action':'click',                   'eventDetails.label':'register_popup'                  });                 " href="guest.html" tppabs="https://www.4008-517-517.cn/cn/guest.html">-->
                  <!--<p class="header-new-customer">新用户</p>-->
                  <!--<p class="action-check-address">-->
                    <!--<span> <i class="fa fa-caret-right" ></i> 请输入您的送餐地址</span>-->
                  <!--</p>-->
                <!--</a>-->


              <!--</fieldset>-->
              <!--<input type="hidden" name="csrfValue" value="C78C4C5" /></form>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</div>-->

<!--<div id="trackOrder" class="modal-trackorder modal fade" data-backdrop="static" role="dialog" aria-labelledby="trackorder-title" aria-hidden="true" tabindex="-1">-->
  <!--<div class="modal-dialog">-->
    <!--<div class="modal-content">-->
      <!--<div class="modal-header">-->
        <!--<h1 id="trackorder-title">追踪订单</h1>-->
        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa mcd mcd-close"></i></button>-->
      <!--</div>-->
      <!--<div class="modal-body">-->
        <!--<p>请输入订单号码，查询订单状态。</p>-->
        <!--<form action="https://www.4008-517-517.cn/cn/searchOrder.html" method="post" role="form" id="form_trackOrder" name="form_trackOrder" class="form form-track-order">-->

          <!--<div class="form-group">-->
            <!--<label class="field-label" for="form_trackOrder_orderNum">订单号码:</label>-->
            <!--<input type="text" class="form-control input-lg required" id="form_trackOrder_orderNum" name="orderNum" />-->
          <!--</div>-->
          <!--<div class="form-group">-->
            <!--<button type="submit" class="btn btn-default btn-red btn-lg text-ucase">下一步</button>-->
          <!--</div>-->
          <!--<input type="hidden" name="csrfValue" value="C78C4C5" /></form>-->
        <!--<p class="note">如有任何问题，请致电麦乐送4008-517-517.</p>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</div>-->






<!--&lt;!&ndash; [#signin.resetpassword.modal] &ndash;&gt;-->
<!--<div id="signin-resetpassword" class="modal-login modal fade" role="dialog" aria-labelledby="login-title" aria-hidden="true" tabindex="-1">-->
  <!--<div class="modal-dialog">-->
    <!--<div class="modal-content">-->
      <!--<div class="modal-header">-->


        <!--<img class="logo" src="static/1545754941318/assets/86/img/mcdelivery_logo_zh.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/img/mcdelivery_logo_zh.jpg" alt="" />-->


        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa mcd mcd-close"></i></button>-->
      <!--</div>-->
      <!--<div class="modal-body">-->
        <!--&lt;!&ndash;<h3 id="login-title">重置密码成功！</h3>&ndash;&gt;-->
        <!--<div class="login-description">用新密码重新登录后下单。</div>-->
        <!--<div class="row">-->
          <!--<div class="col-xs-offset-3 col-xs-6">-->
            <!--<form action="https://www.4008-517-517.cn/cn/login.html" method="post" accept-charset="utf-8" role="form" id="form_login_resetpassword_modal" name="form_login_modal" class="form-login-modal form-login" data-required-symbol="false">-->
              <!--<fieldset class="form-credentials">-->
                <!--<div class="list-group textfield-list-group">-->
                  <!--<div class="list-group-item textfield-list-group-item">-->
                    <!--<label class="sr-only" for="form_login_resetpassword_modal_username">邮箱/手机号</label>-->
                    <!--<input type="text" name="userName" id="form_login_resetpassword_modal_username" class="list-group-form-control" data-rule-required="true" data-msg-required="邮箱或手机号是必填信息。" placeholder="邮箱/手机号" value="" />-->
                  <!--</div>-->
                  <!--<div class="list-group-item textfield-list-group-item">-->
                    <!--<label class="sr-only" for="form_login_resetpassword_modal_password">密码</label>-->
                    <!--<input type="password" name="password" id="form_login_resetpassword_modal_password" class="list-group-form-control" autocomplete="off" data-rule-required="true" data-msg-required="密码是必填信息" placeholder="密码" value="" />-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="checkbox">-->
                  <!--<input type="checkbox" name="modal_login_resetpassword_rememberme" id="modal_login_resetpassword_rememberme" />-->
                  <!--<label for="modal_login_resetpassword_rememberme" class="checkbox-label">下次自动登录</label>-->
                <!--</div>-->
              <!--</fieldset>-->
              <!--<fieldset class="form-actions">-->
                <!--<button type="submit" class="btn btn-default btn-red btn-block btn-xl btn-submit">登录</button>-->
              <!--</fieldset>-->
              <!--<input type="hidden" name="csrfValue" value="C78C4C5" /></form>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->

<!--</div>-->
<!--&lt;!&ndash; [/#signin.resetpassword.modal] &ndash;&gt;-->






     		<!--&lt;!&ndash;<div th:replace="common/fragment :: alertTimeOut"></div>&ndash;&gt;-->

<!--<div id="signin-wechat" data-backdrop="static" data-keyboard="false" class="modal fade" role="dialog" aria-labelledby="signin-wechat-title" aria-hidden="true" tabindex="-1">-->

  <!--<div class="modal-dialog">-->
    <!--<div class="modal-content">-->

      <!--<div class="modal-header">-->
        <!--<h1>没有麦当劳账号？</h1>-->
        <!--<p>账号激活短信已发送到您的手机。</p>-->
        <!--<form role="form" id="form_login_wechat" name="form_login_wechat" method="post" data-required-symbol="false" action="https://www.4008-517-517.cn/cn/loginWechat.html">-->





          <!--<div class="form-group">-->
            <!--<div class="row">-->
              <!--<div class="col-sm-10">-->
                <!--<input type="text" class="form-control input-lg number digit-only" id="form_login_wechat_mobile" name="contactNo" minlength="11" maxlength="11" data-rule-required="true" data-rule-verifymobileno="true" aria-required="true" data-msg-required="请输入您的手机号。" data-msg-verifymobileno="手机号格式不正确。" data-msg-minlength="手机号格式不正确。" data-msg-number="手机号格式不正确。" placeholder="手机号" value="" />-->


              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group">-->
            <!--<div class="checkbox">-->
              <!--<input type="checkbox" name="subscribeMailList" value="true" id="form_login_wechat_agreetnc" data-rule-required="true" data-msg-required="Acceptance of Terms &amp; Conditions, Privacy Policy and Web Ordering Policy is required." style="position: absolute; opacity: 0;" aria-required="true" /><input type="hidden" name="_subscribeMailList" value="on" />-->
              <!--<label class="checkbox-label type-sans" for="form_login_wechat_agreetnc">是的，我已经阅读并同意 <a href="support-tnc.html" tppabs="https://www.4008-517-517.cn/cn/support-tnc.html" target="_blank">网站条款</a>, <a href="support-privacy.html" tppabs="https://www.4008-517-517.cn/cn/support-privacy.html" target="_blank">隐私政策</a> 和 <a href="support-webpolicy.html" tppabs="https://www.4008-517-517.cn/cn/support-webpolicy.html" target="_blank">订餐须知</a>。*</label>-->
            <!--</div>-->
          <!--</div>-->

          <!--<div class="form-group">-->
            <!--<div class="checkbox">-->
              <!--<input type="checkbox" name="subscribeMailList2" value="true" id="form_login_wechat_subscribe" style="position: absolute; opacity: 0;" /><input type="hidden" name="_subscribeMailList2" value="on" />-->
              <!--<label class="checkbox-label type-sans" for="form_login_wechat_subscribe">是的，我愿意接收来自麦当劳的促销信息。</label>-->
            <!--</div>-->
          <!--</div>-->

          <!--<div class="form-group">-->

            <!--<button type="submit" class="btn btn-default btn-red btn-lg text-ucase">提交</button>-->

          <!--</div>-->



          <!--<input type="hidden" name="csrfValue" value="C78C4C5" /></form>-->
      <!--</div>-->
      <!--<div class="modal-body">-->
        <!--<hr class="fading-divider">-->
        <!--<h1>已有麦当劳账号</h1>-->
        <!--<p>登录麦当劳账号从而绑定您的微信账号</p>-->


        <!--<form action="https://www.4008-517-517.cn/cn/loginWechatAlready.html" method="post" accept-charset="utf-8" role="form" id="form_login_wechat_existing" name="form_login_wechat_existing" class="form-login-modal form-login" data-required-symbol="false" novalidate="novalidate">-->
          <!--<div class="row">-->
            <!--<div class="col-sm-8">-->
              <!--<fieldset class="form-credentials">-->
                <!--<div class="list-group textfield-list-group">-->
                  <!--<div class="list-group-item textfield-list-group-item">-->
                    <!--<label class="sr-only" for="form_login_wechat_existing_username">邮箱/手机号</label>-->
                    <!--<input type="text" name="userName" id="form_login_wechat_existing_username" class="list-group-form-control" data-rule-required="true" data-msg-required="邮箱或手机号是必填信息。" placeholder="邮箱/手机号" value="" />-->
                  <!--</div>-->



                  <!--<div class="list-group-item textfield-list-group-item">-->
                    <!--<label class="sr-only" for="form_login_wechat_existing_password">密码</label>-->
                    <!--<input type="password" name="password" id="form_login_wechat_existing_password" class="list-group-form-control" autocomplete="off" data-rule-required="true" data-msg-required="密码是必填信息" placeholder="密码" value="" />-->
                  <!--</div>-->



                <!--</div>-->
              <!--</fieldset>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="row">-->
            <!--<div class="col-sm-6">-->
              <!--<fieldset class="form-actions">-->
                <!--<button type="submit" class="btn btn-default btn-red btn-block btn-lg btn-submit">登录</button>-->
              <!--</fieldset>-->
            <!--</div>-->
          <!--</div>-->
          <!--<input type="hidden" name="csrfValue" value="C78C4C5" /></form>-->
        <!--</hr>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</div>-->


<!--<div id="rememberMe" class="modal-rememberme modal fade" data-backdrop="static" role="dialog" aria-labelledby="rememberme-title" aria-hidden="true" tabindex="-1">-->
  <!--<div class="modal-dialog">-->
    <!--<div class="modal-content">-->
      <!--<div class="modal-header">-->
        <!--<h1 id="rememberme-title">下次自动登录</h1>-->
        <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa mcd mcd-close"></i></button>-->
      <!--</div>-->
      <!--<div class="modal-body">-->
        <!--<p>选择“记住我”，您将在30天内保持登录状态。为避免您的账户产生异常订单，请不要在公用电脑上使用此功能。</p>-->
        <!--<div class="form-group">-->
          <!--<button id="btnRememberMeCancel" class="btn btn-default btn-black btn-lg text-ucase">取消</button>-->
          <!--<button id="btnRememberMeAgree" class="btn btn-default btn-red btn-lg text-ucase">确认</button>-->
        <!--</div>-->
        <!--<p class="note">如有任何问题，请致电麦乐送4008-517-517。</p>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</div>-->
<!--&lt;!&ndash;<script>&ndash;&gt;-->
  <!--&lt;!&ndash;/*<![CDATA[*/&ndash;&gt;-->
  <!--&lt;!&ndash;$(function() {&ndash;&gt;-->
    <!--&lt;!&ndash;$("#form_login_masthead_rememberme").on("ifChecked", function(event){&ndash;&gt;-->
      <!--&lt;!&ndash;$("#rememberMe").modal("show");&ndash;&gt;-->
    <!--&lt;!&ndash;});&ndash;&gt;-->
    <!--&lt;!&ndash;$("#modal_login_rememberme").on("ifChecked", function(event){&ndash;&gt;-->
      <!--&lt;!&ndash;$("#rememberMe").modal("show");&ndash;&gt;-->
    <!--&lt;!&ndash;});&ndash;&gt;-->
    <!--&lt;!&ndash;$("#btnRememberMeCancel").click(function(){&ndash;&gt;-->
      <!--&lt;!&ndash;$("#rememberMe").modal("hide");&ndash;&gt;-->
      <!--&lt;!&ndash;$("#form_login_masthead_rememberme").iCheck("uncheck");&ndash;&gt;-->
      <!--&lt;!&ndash;$("#modal_login_rememberme").iCheck("uncheck");&ndash;&gt;-->

      <!--&lt;!&ndash;if (typeof rememberme_resetpassword !== 'undefined') {&ndash;&gt;-->
        <!--&lt;!&ndash;rememberme_resetpassword.iCheck('uncheck');&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;})&ndash;&gt;-->
    <!--&lt;!&ndash;$("#btnRememberMeAgree").click(function(){&ndash;&gt;-->
      <!--&lt;!&ndash;$("#rememberMe").modal("hide");&ndash;&gt;-->
    <!--&lt;!&ndash;})&ndash;&gt;-->
    <!--&lt;!&ndash;$(":button[class=close]").click(function(){&ndash;&gt;-->
      <!--&lt;!&ndash;$("#btnRememberMeCancel").click();&ndash;&gt;-->
    <!--&lt;!&ndash;})&ndash;&gt;-->
  <!--&lt;!&ndash;})&ndash;&gt;-->
  <!--&lt;!&ndash;/*]]>*/&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->








<!--&lt;!&ndash;<script type="text/javascript" src="static/1545754941318/assets/00/js/plugins.js" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/00/js/plugins.js"></script>&ndash;&gt;-->
<!--&lt;!&ndash;<script type="text/javascript" src="static/1545754941318/assets/00/js/main.js" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/00/js/main.js"></script>&ndash;&gt;-->
<!--&lt;!&ndash;<script type="text/javascript" src="static/1545754941318/assets/86/js/local.js" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/js/local.js"></script>&ndash;&gt;-->
<!--&lt;!&ndash;<script>&ndash;&gt;-->
  <!--&lt;!&ndash;/*<![CDATA[*/&ndash;&gt;-->
  <!--&lt;!&ndash;$(function() {&ndash;&gt;-->
    <!--&lt;!&ndash;if(false){&ndash;&gt;-->
      <!--&lt;!&ndash;$('body').on('click', '.menu-item-menu .menu-item-target, .action-ordernow, a[href*="account-order-history"] , a[href*="account-favourites"]', function(event) {&ndash;&gt;-->
        <!--&lt;!&ndash;event.preventDefault();&ndash;&gt;-->
        <!--&lt;!&ndash;$('#deliveryOptions').one('show.bs.modal', function() {&ndash;&gt;-->
          <!--&lt;!&ndash;$('#form_deliveryoptions_datetime_later').iCheck('check');&ndash;&gt;-->
        <!--&lt;!&ndash;}).modal('show');&ndash;&gt;-->
      <!--&lt;!&ndash;});&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->

    <!--&lt;!&ndash;/*[#signin-wechat.modal] */&ndash;&gt;-->
    <!--&lt;!&ndash;// $('#signin-wechat').modal('show');&ndash;&gt;-->
    <!--&lt;!&ndash;/*[/#signin-wechat.modal]*/&ndash;&gt;-->
    <!--&lt;!&ndash;if(null){&ndash;&gt;-->
      <!--&lt;!&ndash;$('#signin-wechat').modal('show');&ndash;&gt;-->

      <!--&lt;!&ndash;console.log('#wechatFirstTimeLogin was clicked 4' );&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;/* [#signin-wechat.modal] */&ndash;&gt;-->
<!--&lt;!&ndash;//		           $('#signin-wechat').modal('show');&ndash;&gt;-->
    <!--&lt;!&ndash;// $('#signin-wechat').modal('show');&ndash;&gt;-->
    <!--&lt;!&ndash;$('#form_login_wechat').validate({&ndash;&gt;-->

      <!--&lt;!&ndash;errorPlacement: function(error, element) {&ndash;&gt;-->
        <!--&lt;!&ndash;if (element.is(':checkbox')) {&ndash;&gt;-->
          <!--&lt;!&ndash;var controlGroup = element.parents('.checkbox');&ndash;&gt;-->
          <!--&lt;!&ndash;var label = controlGroup.find('.checkbox-label');&ndash;&gt;-->
          <!--&lt;!&ndash;label.append(error);&ndash;&gt;-->
        <!--&lt;!&ndash;} else{&ndash;&gt;-->
          <!--&lt;!&ndash;error.insertAfter(element);&ndash;&gt;-->
        <!--&lt;!&ndash;}&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;});&ndash;&gt;-->
    <!--&lt;!&ndash;$('#form_login_wechat_existing').validate({&ndash;&gt;-->
      <!--&lt;!&ndash;errorPlacement: function(error, element) {&ndash;&gt;-->
        <!--&lt;!&ndash;var ElementParent = element.parent();&ndash;&gt;-->
        <!--&lt;!&ndash;if (/form_login_wechat_existing_username|form_login_wechat_existing_password/.test(element.attr('name'))) {&ndash;&gt;-->
          <!--&lt;!&ndash;$('#form_login_wechat_existing_password').parents('.textfield-list-group').append(error);&ndash;&gt;-->
        <!--&lt;!&ndash;} else {&ndash;&gt;-->
          <!--&lt;!&ndash;error.insertAfter(element);&ndash;&gt;-->
        <!--&lt;!&ndash;}&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;});&ndash;&gt;-->
    <!--&lt;!&ndash;/* [#signin-wechat.modal] */&ndash;&gt;-->
    <!--&lt;!&ndash;/* [#deliveryOptions.modal] */&ndash;&gt;-->
    <!--&lt;!&ndash;$('#form_deliveryoptions').deliveryOptions({&ndash;&gt;-->
      <!--&lt;!&ndash;// copy&ndash;&gt;-->
      <!--&lt;!&ndash;timeInputHint: '\u8BF7\u9009\u62E9\u9001\u9910\u65F6\u95F4',&ndash;&gt;-->

      <!--&lt;!&ndash;// api endpoints&ndash;&gt;-->
      <!--&lt;!&ndash;getTimeSlotsUrl: 'https://www.4008-517-517.cn/cn/ajax/getTimeSlots.json',&ndash;&gt;-->
      <!--&lt;!&ndash;validateUrl: 'https://www.4008-517-517.cn/cn/validate/validateStoreStatus.json',&ndash;&gt;-->

      <!--&lt;!&ndash;// status codes&ndash;&gt;-->
      <!--&lt;!&ndash;STATUS_CODE_ADDRESS_OOB:  416,&ndash;&gt;-->
      <!--&lt;!&ndash;STATUS_CODE_STORE_CLOSED: 503,&ndash;&gt;-->
      <!--&lt;!&ndash;STATUS_CODE_ADDRESS_OK:	  200&ndash;&gt;-->
    <!--&lt;!&ndash;});&ndash;&gt;-->
    <!--&lt;!&ndash;/* [/#deliveryOptions.modal] */&ndash;&gt;-->



<!--&lt;!&ndash;//  $('#offerOptInFirstTime').modal('show');&ndash;&gt;-->


    <!--&lt;!&ndash;$.ajaxPrefilter(function(options, originalOptions, jqXHR) {&ndash;&gt;-->
      <!--&lt;!&ndash;if (options.url.indexOf("getCashlessPaymentStatus") == -1) { // Skipping this logic for wechat status checking ajax&ndash;&gt;-->
        <!--&lt;!&ndash;var sId = '0B0D3C716888429DFC14DFC63C78C4C5.s46t01';&ndash;&gt;-->
        <!--&lt;!&ndash;var pid = sId.lastIndexOf('.');&ndash;&gt;-->
        <!--&lt;!&ndash;if (pid > 0) {&ndash;&gt;-->
          <!--&lt;!&ndash;sId = sId.substr(0, pid);&ndash;&gt;-->
        <!--&lt;!&ndash;}&ndash;&gt;-->
        <!--&lt;!&ndash;var csrfVal = sId.substr(sId.length-7, 7);&ndash;&gt;-->
        <!--&lt;!&ndash;jqXHR.setRequestHeader("csrfValue", csrfVal);&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;});&ndash;&gt;-->
    <!--&lt;!&ndash;var signin = null;&ndash;&gt;-->
    <!--&lt;!&ndash;if(signin != null){&ndash;&gt;-->
      <!--&lt;!&ndash;$("#signin").modal();&ndash;&gt;-->
      <!--&lt;!&ndash;var loginErrMsg = $("form[action*=login] #errorId");&ndash;&gt;-->
      <!--&lt;!&ndash;if($(loginErrMsg)[0]){&ndash;&gt;-->
        <!--&lt;!&ndash;$(loginErrMsg).clone().appendTo($("#signin fieldset:first"));&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;});&ndash;&gt;-->

  <!--&lt;!&ndash;$(document).on({&ndash;&gt;-->
    <!--&lt;!&ndash;'wos.session.ending.warning1': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;$('.inline-alert.alert-session-timeout').removeClass('hidden');&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'wos.session.ending.warning2': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;$('.modal-alert.alert-session-timeout').modal('show');&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'session.action.continue': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;$.get('https://www.4008-517-517.cn/cn/ajax/ping.json', function(response) {&ndash;&gt;-->
        <!--&lt;!&ndash;if(!response.isExpired){&ndash;&gt;-->
          <!--&lt;!&ndash;$(document).trigger('wos.session.reset');&ndash;&gt;-->
        <!--&lt;!&ndash;}else{&ndash;&gt;-->
          <!--&lt;!&ndash;window.location= 'home.html'/*tpa=https://www.4008-517-517.cn/cn/expireSession.html*/;&ndash;&gt;-->
        <!--&lt;!&ndash;}&ndash;&gt;-->
      <!--&lt;!&ndash;});&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'wos.session.reset': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;$('.inline-alert.alert-session-timeout').addClass('hidden');&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'wos.session.ended': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;window.location= 'home.html'/*tpa=https://www.4008-517-517.cn/cn/sessionEnded.html*/;&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;});&ndash;&gt;-->

  <!--&lt;!&ndash;$(document.body).sessiontimer({&ndash;&gt;-->
    <!--&lt;!&ndash;duration: 1800000, //  x mins * 60 * 1000&ndash;&gt;-->
    <!--&lt;!&ndash;triggers: [&ndash;&gt;-->
      <!--&lt;!&ndash;{&ndash;&gt;-->
        <!--&lt;!&ndash;when: 900000, // x mins * 15 * 60 * 1000&ndash;&gt;-->
        <!--&lt;!&ndash;eventName: 'wos.session.ending.warning1'&ndash;&gt;-->
      <!--&lt;!&ndash;},&ndash;&gt;-->
      <!--&lt;!&ndash;{&ndash;&gt;-->
        <!--&lt;!&ndash;when: 300000, // x mins * 60 * 1000&ndash;&gt;-->
        <!--&lt;!&ndash;eventName: 'wos.session.ending.warning2'&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;]&ndash;&gt;-->
  <!--&lt;!&ndash;});&ndash;&gt;-->

  <!--&lt;!&ndash;$(document).on({&ndash;&gt;-->
    <!--&lt;!&ndash;'wos.menuswitch.ending.warning1': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;if (!$.cookie('wos.menuswitch.warning1.status')) {&ndash;&gt;-->
        <!--&lt;!&ndash;$.cookie('wos.menuswitch.warning1.status', 'show');&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->

      <!--&lt;!&ndash;if ($.cookie('wos.menuswitch.warning1.status') == 'show') {&ndash;&gt;-->
        <!--&lt;!&ndash;$('.inline-alert.alert-menuswitch-timeout').removeClass('hidden');&ndash;&gt;-->
      <!--&lt;!&ndash;} else {&ndash;&gt;-->
        <!--&lt;!&ndash;$('.inline-alert.alert-menuswitch-timeout').addClass('hidden');&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'wos.menuswitch.ending.warning2': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;if(!$.cookie('wos.menuswitch.warning2.status')) {&ndash;&gt;-->
        <!--&lt;!&ndash;$.cookie('wos.menuswitch.warning2.status', 'show');&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->

      <!--&lt;!&ndash;if ($.cookie('wos.menuswitch.warning2.status') == 'show') {&ndash;&gt;-->
        <!--&lt;!&ndash;$('.modal-alert.alert-menuswitch-timeout').modal('show');&ndash;&gt;-->
      <!--&lt;!&ndash;} else {&ndash;&gt;-->
        <!--&lt;!&ndash;$('.modal-alert.alert-menuswitch-timeout').modal('hide');&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'wos.menuswitch.warning1.closed': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;$.cookie('wos.menuswitch.warning1.status', 'close');&ndash;&gt;-->
      <!--&lt;!&ndash;$('.inline-alert.alert-menuswitch-timeout').addClass('hidden');&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'wos.menuswitch.warning2.closed': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;$.cookie('wos.menuswitch.warning2.status', 'close');&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'wos.menuswitch.ended': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;$.removeCookie('wos.menuswitch.warning1.status');&ndash;&gt;-->
      <!--&lt;!&ndash;$.removeCookie('wos.menuswitch.warning2.status');&ndash;&gt;-->

      <!--&lt;!&ndash;$('.modal-alert.alert-menuswitch-timeout').modal('hide');&ndash;&gt;-->
      <!--&lt;!&ndash;//window.location = 'home.html'/*tpa=https://www.4008-517-517.cn/cn/home.html*/;&ndash;&gt;-->
      <!--&lt;!&ndash;if (0 != 0) {&ndash;&gt;-->
        <!--&lt;!&ndash;window.location = 'home.html'/*tpa=https://www.4008-517-517.cn/cn/changeMenu.html?changeMenuTo=0*/;&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'https://www.4008-517-517.cn/cn/menuswitch.action.ok': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;$.cookie('wos.menuswitch.warning2.status', 'close');&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;});&ndash;&gt;-->

  <!--&lt;!&ndash;$(document.body).menuswitchtimer({&ndash;&gt;-->
    <!--&lt;!&ndash;duration: -1000, // 5 mins left to menu switch off&ndash;&gt;-->
    <!--&lt;!&ndash;triggers: [&ndash;&gt;-->
      <!--&lt;!&ndash;{&ndash;&gt;-->
        <!--&lt;!&ndash;when: -1000, // 3 mins before menu switch over, trigger this event&ndash;&gt;-->
        <!--&lt;!&ndash;eventName: 'wos.menuswitch.ending.warning1'&ndash;&gt;-->
      <!--&lt;!&ndash;},&ndash;&gt;-->
      <!--&lt;!&ndash;{&ndash;&gt;-->
        <!--&lt;!&ndash;when: -1000, // 1 min before menu switch over, trigger this event&ndash;&gt;-->
        <!--&lt;!&ndash;eventName: 'wos.menuswitch.ending.warning2'&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;]&ndash;&gt;-->
  <!--&lt;!&ndash;});&ndash;&gt;-->

  <!--&lt;!&ndash;$(document).on({'wos.storeclose.ending.warning1': function() {&ndash;&gt;-->
    <!--&lt;!&ndash;if(!$.cookie('wos.storeclose.warning1.status')) {&ndash;&gt;-->
      <!--&lt;!&ndash;$.cookie('wos.storeclose.warning1.status', 'show');&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;if ($.cookie('wos.storeclose.warning1.status') == 'show') {&ndash;&gt;-->
      <!--&lt;!&ndash;$('.modal-alert.modal-countdownstoreclosetimer').modal('show');&ndash;&gt;-->
    <!--&lt;!&ndash;} else {&ndash;&gt;-->
      <!--&lt;!&ndash;$('.modal-alert.modal-countdownstoreclosetimer').modal('hide');&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'wos.storeclose.ended': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;$.removeCookie('wos.storeclose.warning1.status');&ndash;&gt;-->
      <!--&lt;!&ndash;window.location = 'home.html'/*tpa=https://www.4008-517-517.cn/cn/homeStoreClosed.html*/;&ndash;&gt;-->
    <!--&lt;!&ndash;},&ndash;&gt;-->
    <!--&lt;!&ndash;'storeclose.action.continue': function() {&ndash;&gt;-->
      <!--&lt;!&ndash;$.cookie('wos.storeclose.warning1.status', 'close');&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;});&ndash;&gt;-->

  <!--&lt;!&ndash;if (false) {&ndash;&gt;-->
    <!--&lt;!&ndash;$(document.body).storeclosetimer({&ndash;&gt;-->
      <!--&lt;!&ndash;duration: 0,&ndash;&gt;-->
      <!--&lt;!&ndash;triggers: [&ndash;&gt;-->
        <!--&lt;!&ndash;{&ndash;&gt;-->
          <!--&lt;!&ndash;when: (0 * 60 * 1000),&ndash;&gt;-->
          <!--&lt;!&ndash;eventName: 'wos.storeclose.ending.warning1'&ndash;&gt;-->
        <!--&lt;!&ndash;}&ndash;&gt;-->
      <!--&lt;!&ndash;]&ndash;&gt;-->
    <!--&lt;!&ndash;});&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
  <!--&lt;!&ndash;function manageAlerts() {&ndash;&gt;-->
    <!--&lt;!&ndash;var menuswitchTimer = $(document.body).data('plugin_menuswitchtimer');&ndash;&gt;-->
    <!--&lt;!&ndash;var sessionTimer = $(document.body).data('plugin_sessiontimer');&ndash;&gt;-->
    <!--&lt;!&ndash;if (menuswitchTimer.remaining > 0) {&ndash;&gt;-->
      <!--&lt;!&ndash;menuswitchTimer.enableTrigger(menuswitchTimer.remaining < sessionTimer.remaining);&ndash;&gt;-->
      <!--&lt;!&ndash;sessionTimer.enableTrigger(!menuswitchTimer.enabled);&ndash;&gt;-->
    <!--&lt;!&ndash;} else {&ndash;&gt;-->
      <!--&lt;!&ndash;sessionTimer.enableTrigger(true);&ndash;&gt;-->
      <!--&lt;!&ndash;menuswitchTimer.enableTrigger(false);&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;setTimeout(manageAlerts, 1000);&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->

  <!--&lt;!&ndash;manageAlerts();&ndash;&gt;-->

  <!--&lt;!&ndash;/*]]>*/&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->


<!--<div>-->
  <!--<div>-->
    <!--&lt;!&ndash;<script type="text/javascript">&ndash;&gt;-->
      <!--&lt;!&ndash;/*<![CDATA[*/&ndash;&gt;-->
      <!--&lt;!&ndash;$(function() {&ndash;&gt;-->
        <!--&lt;!&ndash;$.validator.addMethod('verifyUsername', function(value, element) {&ndash;&gt;-->
          <!--&lt;!&ndash;var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;&ndash;&gt;-->
          <!--&lt;!&ndash;var mobileRegex = /^([0-9]*)$/;&ndash;&gt;-->
          <!--&lt;!&ndash;return emailRegex.test(value) || mobileRegex.test(value);&ndash;&gt;-->
        <!--&lt;!&ndash;});&ndash;&gt;-->
        <!--&lt;!&ndash;/* [#page-content] */&ndash;&gt;-->
        <!--&lt;!&ndash;$('#form_login_masthead').validate({&ndash;&gt;-->
          <!--&lt;!&ndash;rules: {&ndash;&gt;-->
            <!--&lt;!&ndash;userName: {&ndash;&gt;-->
              <!--&lt;!&ndash;required: true,&ndash;&gt;-->
              <!--&lt;!&ndash;verifyUsername: true&ndash;&gt;-->
            <!--&lt;!&ndash;},&ndash;&gt;-->

            <!--&lt;!&ndash;password: {&ndash;&gt;-->
              <!--&lt;!&ndash;required: true&ndash;&gt;-->
            <!--&lt;!&ndash;}&ndash;&gt;-->
          <!--&lt;!&ndash;},&ndash;&gt;-->
          <!--&lt;!&ndash;messages: {&ndash;&gt;-->
            <!--&lt;!&ndash;userName: {&ndash;&gt;-->
              <!--&lt;!&ndash;required: '\u90AE\u7BB1\u6216\u624B\u673A\u53F7\u662F\u5FC5\u586B\u4FE1\u606F\u3002',&ndash;&gt;-->
              <!--&lt;!&ndash;verifyUsername: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1\u6216\u624B\u673A\u53F7\u3002'&ndash;&gt;-->

            <!--&lt;!&ndash;},&ndash;&gt;-->

            <!--&lt;!&ndash;password: {&ndash;&gt;-->
              <!--&lt;!&ndash;required: '\u5BC6\u7801\u662F\u5FC5\u586B\u4FE1\u606F'&ndash;&gt;-->
            <!--&lt;!&ndash;}&ndash;&gt;-->
          <!--&lt;!&ndash;},&ndash;&gt;-->
          <!--&lt;!&ndash;errorPlacement: function(error, element) {&ndash;&gt;-->
            <!--&lt;!&ndash;if (element.attr("name") == "userName" || element.attr("name") == "password" ) {&ndash;&gt;-->
              <!--&lt;!&ndash;$("#form_login_masthead ul").remove();&ndash;&gt;-->
              <!--&lt;!&ndash;$('#form_login_masthead_password').parents('.textfield-list-group').append(error);&ndash;&gt;-->
            <!--&lt;!&ndash;} else {&ndash;&gt;-->
              <!--&lt;!&ndash;error.insertAfter(element);&ndash;&gt;-->
            <!--&lt;!&ndash;}&ndash;&gt;-->
          <!--&lt;!&ndash;}&ndash;&gt;-->
        <!--&lt;!&ndash;});&ndash;&gt;-->
        <!--&lt;!&ndash;/* [/#page-content] */&ndash;&gt;-->




        <!--&lt;!&ndash;/* [#trackOrder.modal] */&ndash;&gt;-->
        <!--&lt;!&ndash;$('#form_trackOrder').validate({&ndash;&gt;-->
          <!--&lt;!&ndash;rules: {&ndash;&gt;-->
            <!--&lt;!&ndash;orderNum: {&ndash;&gt;-->
              <!--&lt;!&ndash;required: true,&ndash;&gt;-->
              <!--&lt;!&ndash;remote: {&ndash;&gt;-->
                <!--&lt;!&ndash;param: {&ndash;&gt;-->
                  <!--&lt;!&ndash;url: 'https://www.4008-517-517.cn/cn/validate/trackOrder.json',&ndash;&gt;-->
                  <!--&lt;!&ndash;data: {&ndash;&gt;-->
                    <!--&lt;!&ndash;orderNumber: function() {&ndash;&gt;-->
                      <!--&lt;!&ndash;console.log('orderNumber : ', $('#form_trackOrder_orderNum').val());&ndash;&gt;-->
                      <!--&lt;!&ndash;return $('#form_trackOrder_orderNum').val();&ndash;&gt;-->
                    <!--&lt;!&ndash;}&ndash;&gt;-->
                  <!--&lt;!&ndash;},&ndash;&gt;-->
                  <!--&lt;!&ndash;complete: function(xhr, status) {&ndash;&gt;-->
                    <!--&lt;!&ndash;var response = xhr.responseJSON;&ndash;&gt;-->
                    <!--&lt;!&ndash;if(response.valid==false)&ndash;&gt;-->
                    <!--&lt;!&ndash;{&ndash;&gt;-->
                      <!--&lt;!&ndash;$('#form_trackOrder .form-group .error')&ndash;&gt;-->
                        <!--&lt;!&ndash;.html(response.message);&ndash;&gt;-->
                    <!--&lt;!&ndash;}&ndash;&gt;-->
                  <!--&lt;!&ndash;}&ndash;&gt;-->
                <!--&lt;!&ndash;}&ndash;&gt;-->
              <!--&lt;!&ndash;}&ndash;&gt;-->
            <!--&lt;!&ndash;}&ndash;&gt;-->
          <!--&lt;!&ndash;},&ndash;&gt;-->
          <!--&lt;!&ndash;messages: {&ndash;&gt;-->
            <!--&lt;!&ndash;orderNum: {&ndash;&gt;-->
              <!--&lt;!&ndash;required : '\u8BA2\u5355\u53F7\u7801\u662F\u5FC5\u586B\u5185\u5BB9\u3002'&ndash;&gt;-->
            <!--&lt;!&ndash;}&ndash;&gt;-->
          <!--&lt;!&ndash;}&ndash;&gt;-->
        <!--&lt;!&ndash;});&ndash;&gt;-->
        <!--&lt;!&ndash;/* [/#trackOrder.modal] */&ndash;&gt;-->

        <!--&lt;!&ndash;$('#form_login_modal').validate({&ndash;&gt;-->
          <!--&lt;!&ndash;rules: {&ndash;&gt;-->
            <!--&lt;!&ndash;userName: {&ndash;&gt;-->
              <!--&lt;!&ndash;required: true,&ndash;&gt;-->
              <!--&lt;!&ndash;verifyUsername: true&ndash;&gt;-->
            <!--&lt;!&ndash;},&ndash;&gt;-->
            <!--&lt;!&ndash;password: {&ndash;&gt;-->
              <!--&lt;!&ndash;required: true&ndash;&gt;-->
            <!--&lt;!&ndash;}&ndash;&gt;-->
          <!--&lt;!&ndash;},&ndash;&gt;-->
          <!--&lt;!&ndash;messages: {&ndash;&gt;-->
            <!--&lt;!&ndash;userName: {&ndash;&gt;-->
              <!--&lt;!&ndash;required: '\u90AE\u7BB1\u6216\u624B\u673A\u53F7\u662F\u5FC5\u586B\u4FE1\u606F\u3002',&ndash;&gt;-->
              <!--&lt;!&ndash;verifyUsername: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1\u6216\u624B\u673A\u53F7\u3002'&ndash;&gt;-->
            <!--&lt;!&ndash;},&ndash;&gt;-->

            <!--&lt;!&ndash;password: {&ndash;&gt;-->
              <!--&lt;!&ndash;required: '\u5BC6\u7801\u662F\u5FC5\u586B\u4FE1\u606F'&ndash;&gt;-->
            <!--&lt;!&ndash;}&ndash;&gt;-->
          <!--&lt;!&ndash;},&ndash;&gt;-->
          <!--&lt;!&ndash;errorPlacement: function(error, element) {&ndash;&gt;-->
            <!--&lt;!&ndash;var ElementParent = element.parent();&ndash;&gt;-->
            <!--&lt;!&ndash;if (element.attr("name") == "userName" || element.attr("name") == "password" ) {&ndash;&gt;-->
              <!--&lt;!&ndash;$('#form_login_modal_password').parents('.textfield-list-group').append(error);&ndash;&gt;-->
              <!--&lt;!&ndash;$("#form_login_masthead #errorId").remove();&ndash;&gt;-->
            <!--&lt;!&ndash;} else {&ndash;&gt;-->
              <!--&lt;!&ndash;error.insertAfter(element);&ndash;&gt;-->
            <!--&lt;!&ndash;}&ndash;&gt;-->
          <!--&lt;!&ndash;}&ndash;&gt;-->
        <!--&lt;!&ndash;});&ndash;&gt;-->
        <!--&lt;!&ndash;/* [/#signin.modal] */&ndash;&gt;-->
        <!--&lt;!&ndash;if(null=="true"){&ndash;&gt;-->
          <!--&lt;!&ndash;$('#alertTimeOut').modal('show');&ndash;&gt;-->
        <!--&lt;!&ndash;}&ndash;&gt;-->


      <!--&lt;!&ndash;});&ndash;&gt;-->

      <!--&lt;!&ndash;/*]]>*/&ndash;&gt;-->
    <!--&lt;!&ndash;</script>&ndash;&gt;-->
  <!--</div>-->



<!--</div>-->




<!--<div>-->
  <!--&lt;!&ndash;<script type="text/javascript">&ndash;&gt;-->
    <!--&lt;!&ndash;$.removeCookie('wos_startneworder_status', { path: '/' });&ndash;&gt;-->

    <!--&lt;!&ndash;/* [#signin.resetpassword.modal] */&ndash;&gt;-->
    <!--&lt;!&ndash;var rememberme_resetpassword = $('#modal_login_resetpassword_rememberme');&ndash;&gt;-->
    <!--&lt;!&ndash;rememberme_resetpassword.on('ifChecked', function(){&ndash;&gt;-->
      <!--&lt;!&ndash;$('#rememberMe').modal('show');&ndash;&gt;-->
    <!--&lt;!&ndash;});&ndash;&gt;-->

    <!--&lt;!&ndash;$('#form_login_resetpassword_modal').validate({&ndash;&gt;-->
      <!--&lt;!&ndash;errorPlacement: function(error, element) {&ndash;&gt;-->
        <!--&lt;!&ndash;var ElementParent = element.parent();&ndash;&gt;-->
        <!--&lt;!&ndash;if (/form_login_resetpassword_modal_username|form_login_resetpassword_modal_password/.test(element.attr('name'))) {&ndash;&gt;-->
          <!--&lt;!&ndash;$('#form_login_resetpassword_modal_password').parents('.textfield-list-group').append(error);&ndash;&gt;-->
        <!--&lt;!&ndash;} else {&ndash;&gt;-->
          <!--&lt;!&ndash;error.insertAfter(element);&ndash;&gt;-->
        <!--&lt;!&ndash;}&ndash;&gt;-->
      <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;});&ndash;&gt;-->

    <!--&lt;!&ndash;if (null) {&ndash;&gt;-->
      <!--&lt;!&ndash;$('#signin-resetpassword').modal('show'); // Use this to show the new sign in modal&ndash;&gt;-->
    <!--&lt;!&ndash;}&ndash;&gt;-->
    <!--&lt;!&ndash;/* [/#signin.resetpassword.modal] */&ndash;&gt;-->

  <!--&lt;!&ndash;</script>&ndash;&gt;-->
<!--</div>-->
  <!--</div>-->
</template>
<!--</body>-->
<!--</html>-->
 <script type="text/javascript">
//   $(function () {
//     alert(123);
//   });
   export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
