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
                    <img :src="product.imgUrl" tppabs="https://www.4008-517-517.cn/cn/static/1547573486227/assets/86/products/900047.png?" class="img-block" />
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
                        <a data-productid="789" href="#signin" data-toggle="modal" data-target="#signin" class="btn btn-block action-create btn-red" onclick="onProductClick({ &#39;name&#39;:&quot;Golden Arch Bucket D EVM for CNY &quot;,&#39;id&#39;:&#39;900047&#39;,&#39;price&#39;:&#39;¥96.00&#39;,&#39;brand&#39;:&#39;McDonalds&#39;,&#39;cat&#39;:&quot;Promotions &amp; Popular Picks&quot;,&#39;variant&#39;:&#39;&#39;,&#39;url&#39;:&#39;#signin&#39;})">添加</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </template>
              <!--<div class="product-card product-card&#45;&#45;standard">-->
                <!--<div class="panel panel-default panel-product">-->
                  <!--<div class="panel-body">-->
                    <!--<img src="../assets/images/products/900038.png-.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1547573486227/assets/86/products/900038.png?" class="img-block" />-->
                    <!--<h5 class="product-title">Twister Fries</h5>-->
                    <!--<div class="product-badges">-->


                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="panel-footer">-->
                    <!--<div class="row row-narrow">-->
                      <!--<div class="col-xs-6">-->
                        <!--<div class="product-details">-->
                          <!--<div class="product-cost">-->
                            <!--From <span class="starting-price">¥13.00</span>-->
                          <!--</div>-->

                          <!--<div class="product-nutritional-info">-->





                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<div class="product-controls">-->








                        <!--<a data-productid="789" href="#signin" data-toggle="modal" data-target="#signin" class="btn btn-block action-create btn-red" onclick="onProductClick({ &#39;name&#39;:&quot;Twister Fries&quot;,&#39;id&#39;:&#39;900038&#39;,&#39;price&#39;:&#39;¥13.00&#39;,&#39;brand&#39;:&#39;McDonalds&#39;,&#39;cat&#39;:&quot;Promotions &amp; Popular Picks&quot;,&#39;variant&#39;:&#39;&#39;,&#39;url&#39;:&#39;#signin&#39;})">Add</a>-->









                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="product-card product-card&#45;&#45;standard">-->
                <!--<div class="panel panel-default panel-product">-->
                  <!--<div class="panel-body">-->
                    <!--<img src="../assets/images/products/900040.png-.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1547573486227/assets/86/products/900040.png?" class="img-block" />-->
                    <!--<h5 class="product-title">Red Bean Pie</h5>-->
                    <!--<div class="product-badges">-->


                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="panel-footer">-->
                    <!--<div class="row row-narrow">-->
                      <!--<div class="col-xs-6">-->
                        <!--<div class="product-details">-->
                          <!--<div class="product-cost">-->
                            <!--From <span class="starting-price">¥9.00</span>-->
                          <!--</div>-->

                          <!--<div class="product-nutritional-info">-->





                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<div class="product-controls">-->








                        <!--<a data-productid="789" href="#signin" data-toggle="modal" data-target="#signin" class="btn btn-block action-create btn-red" onclick="onProductClick({ &#39;name&#39;:&quot;Red Bean Pie&quot;,&#39;id&#39;:&#39;900040&#39;,&#39;price&#39;:&#39;¥9.00&#39;,&#39;brand&#39;:&#39;McDonalds&#39;,&#39;cat&#39;:&quot;Promotions &amp; Popular Picks&quot;,&#39;variant&#39;:&#39;&#39;,&#39;url&#39;:&#39;#signin&#39;})">Add</a>-->









                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="product-card product-card&#45;&#45;standard">-->
                <!--<div class="panel panel-default panel-product">-->
                  <!--<div class="panel-body">-->
                    <!--<img src="../assets/images/products/900041.png-.jpg" tppabs="https://www.4008-517-517.cn/cn/static/1547573486227/assets/86/products/900041.png?" class="img-block" />-->
                    <!--<h5 class="product-title">Red Bean Pie 2HP</h5>-->
                    <!--<div class="product-badges">-->
                    <!--</div>-->
                  <!--</div>-->
                  <!--<div class="panel-footer">-->
                    <!--<div class="row row-narrow">-->
                      <!--<div class="col-xs-6">-->
                        <!--<div class="product-details">-->
                          <!--<div class="product-cost">-->
                            <!--From <span class="starting-price">¥14.50</span>-->
                          <!--</div>-->
                          <!--<div class="product-nutritional-info">-->
                          <!--</div>-->
                        <!--</div>-->
                      <!--</div>-->
                      <!--<div class="product-controls">-->
                        <!--<a data-productid="789" href="#signin" data-toggle="modal" data-target="#signin" class="btn btn-block action-create btn-red" onclick="onProductClick({ &#39;name&#39;:&quot;Red Bean Pie 2HP&quot;,&#39;id&#39;:&#39;900041&#39;,&#39;price&#39;:&#39;¥14.50&#39;,&#39;brand&#39;:&#39;McDonalds&#39;,&#39;cat&#39;:&quot;Promotions &amp; Popular Picks&quot;,&#39;variant&#39;:&#39;&#39;,&#39;url&#39;:&#39;#signin&#39;})">Add</a>-->
                      <!--</div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
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
          base_url: this.$http.defaults.baseURL
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
        }
      }
    }

</script>
