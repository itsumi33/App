<template>
  <div class="body">
    <div class="head">
      <span class="login">登录</span>
      <span class="regist">注册</span>
    </div>
    <div class="form">
      <div class="count">
        <span>账号:</span>
        <input type="text"  v-model="user.phone" >
      </div>
      <div class="pwd">
        <span>密码:</span>
        <input type="password" v-model="user.password" >
      </div>
      <p class="forget">忘记密码</p>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import {reUserLogin} from '../../util/request';
import {mapActions} from 'vuex';
export default {
    data(){
        return{
            user:{
                phone:'',
                password:''
            }
        }
    },
  methods:{
      ...mapActions({
          reqUserLogin:'login/reqUserLogin'
      }),
    login(){
       reUserLogin(this.user).then(res=>{
            console.log(res.data.list);
            this.$router.push('/index')
	  })
    }
  },

};
</script>

<style scoped>
.body{
    width: 100vw;
    height: 100vh;
    background: #fff;
}
.head {
  width: 100vw;
  height: 60px;
  background:orange;
  color: #fff;
  font-size: 26px;
  line-height: 60px;
}
.head .login {
  margin-left: 120px;
}
.head .regist {
  float: right;
  margin-right: 20px;
}
.count,
.pwd {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid;
  line-height: 50px;
  margin-bottom: 20px;
}
.form{
    width: 82%;
    margin:100px auto 0px;
}
.forget{
    height: 30px;
    width: 100%;
    text-align: right;
    line-height: 30px;
}
button{
    width: 100%;
    height: 50px;
    background: orange;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    color: #fff;
    margin-top: 20px;
}
input{
    text-indent: 1em;
    font-size: 20px;
}
</style>