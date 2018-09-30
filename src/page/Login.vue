<template>
<div class="loginContainer">
  <el-form :model="user" :rules="rules" ref="user">
   
      <el-form-item prop="name">
        <font class="title">用户名</font>
        <el-input type="text" placeholder="请输入用户名" v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <font class="title">密码</font>
        <el-input type="password" placeholder="请输入密码" v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button class="login"  @click="submitForm('user')" type="primary" :loading="logining" plain>登录</el-button>
      </el-form-item>
  </el-form>
</div>
    
</template>
<script>
export default {
  data(){
    return {
      logining:false,
      user:{
        name:'',
        password:''
      },
      rules:{
          name:[
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password:[
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
      }
    }
  },
  
  methods:{
    submitForm(user){
      var _this = this;
        _this.$refs[user].validate((valid) => {
            if (valid) {
              this.logining=true;
              var loginParams = {
                        username: this.user.name,
                        password: this.user.password
                    };
                    //sessionStorage.removeItem("user");
                
              if (loginParams.username == "admin" && loginParams.password == "123456") {
                        _this.logining = false;
                        sessionStorage.setItem('user', JSON.stringify(loginParams));
                        _this.$router.push({ path: '/home' });
              } else {
                        _this.logining = false;
                        _this.$alert('用户名或密码错误！', '提示信息', {
                            confirmButtonText: '确定'
                        });
              }
              
            } else {
              console.log('error submit!!');
              return false;
            }
          });
      }
  }
}
</script>
<style>
.loginContainer{
  -webkit-border-radius:5px;
  border-radius:5px;
  -moz-border-radius:5px;
  background-clip: padding-box;
  margin: 180px auto;
  width:400px;
  padding:35px 35px 15px;
  border:1px solid #eaeaea;
  box-shadow:8px 10px 44px #cac6c6;
 
}
.title{
  font-size: 14px;
  color: #333;
  display: block;
}
.btn{
  text-align: center;
}
.login{
  width:120px;
}
</style>

