<template>
  <div class="main">
    <div class="row row-narrow">
    <div class="page-sidebar">
    <div class="sidebar-menu" data-sticky="true">
      <div class="food-menu">
        <ul class="primary-menu">
          <li class="primary-menu-item selected"><a class="primary-menu-item-target" href="?daypartId=1"><span>正餐菜单</span><i class="fa fa-angle-right"></i></a>
            <ul class="secondary-menu">
              <template v-for="(type,index) in productTypes">
                <template v-if="index ===selectedType">
                  <li class="secondary-menu-item selected" :id="index" @click="changeProductByType(index)"><a class="secondary-menu-item-target" href="#"><i class="fa fa-circle"></i> <span>{{type}}</span></a></li>
                </template>
                <template v-else>
                  <li class="secondary-menu-item select" :id="index"  @click="changeProductByType(index)"><a class="secondary-menu-item-target" href="#"><i class="fa fa-circle"></i> <span>{{type}}</span></a></li>
                </template>
              </template>
              <!--<li class="secondary-menu-item select selected" :id="index"><a class="secondary-menu-item-target" href="#"><i class="fa fa-circle"></i> <span>type</span></a></li>-->

            </ul>
          </li>
          <li class="primary-menu-item"><a class="primary-menu-item-target" href="#"><span>早餐菜单</span><i class="fa fa-angle-right"></i></a>
          </li>
        </ul>
      </div>
      <a href="#menu-availability" class="h5 text-link" data-toggle="html-popover" data-container="body" data-html="true" data-content-selector="#menu-availability" data-placement="right" data-original-title="" title=""><i class="mcd icon mcd-detail"></i> <span class="text-default">菜单供应时间</span></a>
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
              <template v-for="product in productList[selectedType]">
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
                        <a data-productid="789" href="#signin" data-toggle="modal" data-target="#signin" class="btn btn-block action-create btn-red" onclick="onProductClick({ &#39;name&#39;:&quot;Golden Arch Bucket D EVM for CNY &quot;,&#39;id&#39;:&#39;900047&#39;,&#39;price&#39;:&#39;¥96.00&#39;,&#39;brand&#39;:&#39;McDonalds&#39;,&#39;cat&#39;:&quot;Promotions &amp; Popular Picks&quot;,&#39;variant&#39;:&#39;&#39;,&#39;url&#39;:&#39;#signin&#39;})" :id="product.productId" v-on:click="addCart(product,product.productId)">添加</a>
                        <button type="button" class="btn btn-success" :id="product.productId+'s'" style="display: none;">已添加</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </template>
            </div>
          </div>
        </div>
              <div class="col-xs-4">
      <div class="panel panel-basic panel-narrow">
        <div class="panel-section-group">
          <section class="panel-section how-it-works">
            <a href="#signin" data-toggle="modal" data-target="#signin"><img src="../css/img/how_mcdelivery_works_portrait_zh.png" tppabs="https://www.4008-517-517.cn/cn/static/1545754941318/assets/86/img/how_mcdelivery_works_portrait_zh.png"></a>
          </section>
        </div>
      </div>
    </div>
      </div>
  </div>
   </div>
    </div>
    <!--<div id="signin" class="modal-login modal fade in" role="dialog" aria-labelledby="modal-title" aria-hidden="true" tabindex="-1" style="display: none;">-->
      <!--<div class="modal-dialog">-->
        <!--<div class="modal-content">-->
          <!--<div class="modal-header">-->


            <!--&lt;!&ndash;<img class="logo" src="/cn/static/1545754941318/assets/86/img/mcdelivery_logo_zh.jpg" alt="">&ndash;&gt;-->


            <!--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">-->
              <!--<i class="fa mcd mcd-close"  v-on:click="del"></i>-->
            <!--</button>-->
          <!--</div>-->
          <!--<div class="modal-body">-->

            <!--&lt;!&ndash;<h2 id="login-title">欢迎，登录后开始订餐<a href="#" data-toggle="html-popover" data-placement="bottom" data-html="true" data-content-selector="#lighbox-popover-preffered-signin-method" data-original-title="" title="" data-container="#form_login_modal"><i class="mcd mcd-icon mcd-detail"></i></a>&ndash;&gt;-->
              <!--&lt;!&ndash;&lt;!&ndash; POPOVER START &ndash;&gt;&ndash;&gt;-->
              <!--&lt;!&ndash;<div id="lighbox-popover-preffered-signin-method" class="popover-details">&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="popover-wrapper">&ndash;&gt;-->
                  <!--&lt;!&ndash;<h4>首选登录方式</h4>&ndash;&gt;-->
                  <!--&lt;!&ndash;<p>请以您帐户设置的首选方式（邮箱或手机号）登录。</p>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;&lt;!&ndash; POPOVER END &ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;</h2>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="col-xs-offset-3 col-xs-6">&ndash;&gt;-->
                <!--&lt;!&ndash;<form action="/cn/login.html" method="post" accept-charset="utf-8" role="form" id="form_login_modal" name="form_login_modal" class="form-login-modal form-login" data-required-symbol="false" novalidate="novalidate">&ndash;&gt;-->
                  <!--&lt;!&ndash;<fieldset class="form-credentials">&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="list-group textfield-list-group">&ndash;&gt;-->
                      <!--&lt;!&ndash;<div class="list-group-item textfield-list-group-item">&ndash;&gt;-->
                        <!--&lt;!&ndash;<label class="sr-only" for="form_login_modal_username">邮箱</label>&ndash;&gt;-->
                        <!--&lt;!&ndash;<input type="text" name="userName" id="form_login_modal_username" class="required list-group-form-control" placeholder="邮箱/手机号" value="" aria-required="true">&ndash;&gt;-->

                      <!--&lt;!&ndash;</div>&ndash;&gt;-->
                      <!--&lt;!&ndash;<div class="list-group-item textfield-list-group-item">&ndash;&gt;-->
                        <!--&lt;!&ndash;<label class="sr-only" for="form_login_modal_password">密码</label>&ndash;&gt;-->
                        <!--&lt;!&ndash;<input type="password" name="password" id="form_login_modal_password" class="required list-group-form-control" placeholder="密码" autocomplete="off" value="" aria-required="true">&ndash;&gt;-->

                      <!--&lt;!&ndash;</div>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->

                    <!--&lt;!&ndash;<div class="checkbox">&ndash;&gt;-->
                      <!--&lt;!&ndash;<div class="icheckbox" style="position: relative;"><input type="checkbox" name="rememberMe" id="modal_login_rememberme" value="true" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div><input type="hidden" name="_rememberMe" value="on">&ndash;&gt;-->
                      <!--&lt;!&ndash;<label for="modal_login_rememberme" class="checkbox-label">下次自动登录</label>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                  <!--&lt;!&ndash;</fieldset>&ndash;&gt;-->
                  <!--&lt;!&ndash;<fieldset class="form-actions">&ndash;&gt;-->

                    <!--&lt;!&ndash;<button type="submit" class="btn btn-default btn-red btn-block btn-xl btn-submit" onclick="               dataLayer.push({               'event':'trackEvent',               'vpv':'vpv_signin',               'eventDetails.category':'signin',               'eventDetails.action':'click',               'eventDetails.label':'signin_popup'              });             ">登录</button>&ndash;&gt;-->


                    <!--&lt;!&ndash;<p class="action-forgot-password">&ndash;&gt;-->
                      <!--&lt;!&ndash;<a class="action-link" href="/cn/forgot-password.html">忘记密码？</a>&ndash;&gt;-->
                    <!--&lt;!&ndash;</p>&ndash;&gt;-->
                    <!--&lt;!&ndash;<hr class="fading-divider">&ndash;&gt;-->

                    <!--&lt;!&ndash;<a class="action-link" onclick="                  dataLayer.push({                   'event':'trackEvent',                   'vpv':'vpv_enter_delivery_address',                   'eventDetails.category':'registration',                   'eventDetails.action':'click',                   'eventDetails.label':'register_popup'                  });                 " href="/cn/guest.html">&ndash;&gt;-->
                      <!--&lt;!&ndash;<p class="header-new-customer">新用户</p>&ndash;&gt;-->
                      <!--&lt;!&ndash;<p class="action-check-address">&ndash;&gt;-->
                        <!--&lt;!&ndash;<span> <i class="fa fa-caret-right"></i> 请输入您的送餐地址</span>&ndash;&gt;-->
                      <!--&lt;!&ndash;</p>&ndash;&gt;-->
                    <!--&lt;!&ndash;</a>&ndash;&gt;-->


                  <!--&lt;!&ndash;</fieldset>&ndash;&gt;-->
                  <!--&lt;!&ndash;<input type="hidden" name="csrfValue" value="0F32EE0"></form>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--<div>-->

            <!--</div>-->
            <!--<div>-->

            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"
                    aria-hidden="true">×
            </button>
            <h4 class="modal-title" id="myModalLabel">
            {{this.productInformation.productName}}
            </h4>
          </div>
          <div class="modal-body">
           {{this.productInformation.content}}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default"
                    data-dismiss="modal">关闭
            </button>
            <button type="button" class="btn btn-primary">
              添加
            </button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
  </div>
</template>
<script type="text/javascript" >
    export default {
      name: 'menuDisplay',
      data() {
        return {
          selectedType: 0,
          productTypesNumber: 0,
          productTypes: [],
          productList: [],
          base_url: this.$http.defaults.baseURL,
          productInformation:{}
        }
      },
      created: function () {
        this.getProductsHeads();
      },
      methods: {//组件的中的方法，可以在组件中使用，包括在标签中
        getProductsHeads: function () {
          var url = '/servlet/ProductServlet?type=showProducts';
          //利用axios发出get请求 默认要求的返回结果必须是json格式，且数据保存在response.data中
          this.$http.get(url)  //发出请求
            .then(response => {
              // 响应成功回调
              this.productTypesNumber = response.data[0];
              this.productTypes = response.data[1];
              this.productList = response.data[2];
              console.log(response);
            }).catch(error => {
            console.log(err);
          });
        },
        changeProductByType:function (index) {
          document.getElementById(index).classList.add('selected');
          var a=document.getElementsByClassName("secondary-menu-item");
          for(var i=0; i<a.length;i++)
          {
              if(i!==index){
                a[i].classList.remove('selected');
              }
          }
             this.selectedType=index;
        },
        getProductInformation:function (product) {
                this.productInformation=product;
        },
        addCart:function (product,id) {
          var addProduct={};
          document.getElementById(id).style.display="none";
          document.getElementById(id+'s').style.display="block";
          addProduct.num=1;
          addProduct.product=product;
          this.cart.push(addProduct);
        }
      }
    }

</script>
