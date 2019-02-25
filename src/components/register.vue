<template>
  <div>
    <form class="bs-example bs-example-form" role="form">
      <tr height="30">
        <td align="right">用户类型：</td>
        <td><select id="type" v-model="user.type">
          <option value="user">普通用户</option>
          <option value="manager">管理员</option>
        </select></td>
      </tr>
      <div class="input-group">
        <span class="input-group-addon">用户名:</span>
        <input id="name" type="text" class="form-control" placeholder="*不能为空"  v-model="user.name">
      </div>
      <div class="input-group">
        <span class="input-group-addon">密码:</span>
        <input id="password" type="password" class="form-control" placeholder="*不能为空"  v-model="user.password">
      </div>
      <div class="input-group">
        <span class="input-group-addon">重新输入密码:</span>
        <input id="password2" type="password" class="form-control" placeholder="*不能为空">
      </div>
      <div class="input-group">
        <span class="input-group-addon">手机号:</span>
        <input id="phoneNumber" type="text" class="form-control"  v-model="user.phone" >
      </div>
      <br>
      <div class="input-group">
        <span class="input-group-addon">邮箱@:</span>
        <input id="emailNumber" type="text" class="form-control" v-model="user.email">
      </div>
      <div class="input-group">
        <tr>
          <td align="right">图形验证码：</td>
          <td valign="middle">
            <input type="text" v-model="user.checkCode" required="required">
            <img id="checkImg"   :src="this.GLOBAL.BASE_URL+'/servlet/ImageCheckCodeServlet?rand=-1'" class="hand" />
          </td>
        </tr>
      </div>
      <br>
      <button type="button" class="btn btn-default"  @click="submit()">注册</button>
    </form>
  </div>
</template>
<script type="text/javascript">
  import Qs from 'qs';
  export default {
    name: 'register',
    data() {
      return {
        user:{
          type:'',
          name:'',
          password:'',
          phone:'',
          email:'',
          checkCode:''
        }
      }
    },
    created: function () {  //钩子函数

    },
    methods: {
    valName:function () {
      var str1=document.getElementById("name").value;//获取文本框的内容
      if(str1==null || str1==""){
        alert("用户名不能为空");
        return false;
      }
      return true;
    },
    valPassword:function () {
      var str = document.getElementById("password").value;
      if (document.getElementById("password").value == null || document.getElementById("password").value == "") {
        alert("密码不能为空");
        return false;
      }
      return true;
    },
    passwordSame:function (){
    var str = document.getElementById("password").value;
    if(document.getElementById("password2").value==null || document.getElementById("password2").value==""){
    alert("*不能为空");
      return false;
    }else if(document.getElementById("password").value==document.getElementById("password2").value){
      return true ;
    }else{
     alert("*两次密码不一样");
      return false;
    }

  },
    phoneNumbercheck:function (){
    var str=document.getElementById("phoneNumber").value;
    if(str==null||str==""){
      alert("*请输入手机号");
      return false;
    }else{
      return true;
    }
  },
    emailNumbercheck:function(){
    var str=document.getElementById("emailNumber").value;
    if(str==null||str==""){
     alert("*请输入邮箱账号");
      return false;
    }else{
      return true;
    }
  },
    submit:function () {
      var result1 = this.valName();
      result1 = this.valPassword()
      result1 = this.passwordSame() && result1;
      result1 = this.phoneNumbercheck() && result1;
      result1 = this.emailNumbercheck() && result1;
      if (result1) {
        var data = Qs.stringify(this.user);
        this.$http.post('/servlet/UserServlet?type1=register', data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(
          function (response) {
            if (response.status === 200) {
              alert(response.data);
              console.log(response);
              this.user = [];

            } else {
              alert("发生错误");
            }
          }
        ).catch(error => {

        });
      }
    }
    }
  }
</script>
