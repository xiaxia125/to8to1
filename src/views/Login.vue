<template>
  <div id="d1">
    <div
      ><div class="grid-content bg-purple">
         <span
          ><img
            id="a1"
            src="../../public/imgs/register/lo.png"
            alt=""
            class="tu"
        /></span>
        <div>
          <img id="a1" src="../../public/imgs/register/zcdl_img.jpg" alt="" /> 
        </div></div
    ></div>
    <div id="sr">
      <div class="grid-content bg-purple-light">
        <div id="kuang" class="a1">
          <div id="kuang1">
            <span>账号登录</span>
            <div>
              <i class="el-icon-user-solid">
                <el-input
                  style="width: 220px; margin: 25px 10px 50px 20px"
                  type="text"
                  v-model="username"
                  :state="usernameState"
                  id="userName"
                  value=""
                  @blur="nameBlur"
                  class="login-name input-holder-style"
                  label="用户名/手机号/邮箱"
                  placeholder="用户名/手机号/邮箱"
                  maxlength="11"
                  clearable
                ></el-input>
                <div id="yonghuming" style="color:red" ></div>
              </i>
            </div>
            <i class="el-icon-lock"></i
            ><el-input
              style="width: 220px; margin: 0px 10px 20px 20px"
              class="input-holder-style"
              type="password"
              v-model="pwd"
              :state="pwdState"
              label="密码"
              id="userNum"
              value=""
              @blur="pwdBlur"
              placeholder="密码"
              maxlength="18"
              show-password
              clearable
            ></el-input>
            <div id="mima" style="color:red" ></div>
            <div id="kuang3">
              <input
                type="checkbox"
                name="cookietime"
                style="margin: 5px 10px 5px 18px"
                value="on"
              /><label class="qq">下次自动登录</label>
              <router-link  target="_blank" id="kuang2" class="qq" to="/register">忘记密码?</router-link>
            </div>
            <div id="kuang4">
              <div
                ><el-button
                  id="an"
                  type="warning"
                  @click="checkForm"
                  plain
                  round
                  >立即登陆</el-button
                ></div>
            </div>
            <div>
              <a class="qq" title="微博帐号登录" href="">
                <img
                  class="q1"
                  src="../../public/imgs/register/weibo=0.webp"
                  alt=""
                />
                微博登录</a
              >
              <a class="qq" title="QQ账户登录" href="">
                 <img
                  class="q1"
                  src="../../public/imgs/register/qq=0.webp"
                  alt=""
                /> 
                QQ登录</a
              >
              <router-link to="/register" class="qq">立即注册</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#sr{
  margin-right: 1300px;
}
#d1 {
  width: 1600px;
  margin: 0 auto;
  margin-bottom: 200px;
}
.q1 {
  width: 25px;
  height: 16px;
}
.tu {
  width: 320px;
  height: 70px;
}
#kuang {
  width: 325px;
  border: 1px solid #eee;
  text-align: center;
  padding-top: 40px;
    margin-left: 900px;
  margin-top: -400px;
}

#kuang3 {
  text-align: left;
  margin-left: 22px;
  margin: 11px;
}
#kuang4 {
  margin: 25px;
}
#an {
  width: 180px;
}
#kuang2 {
  text-align: right;
  margin-left: 100px;
}
#a1 {
  margin-top: 100px;
  margin-left: 300px;
}
.a1 {
  margin-top: 200px;
}
.qq {
  margin-right: 15px;
  text-decoration: none;
  color: #333;
  font-size: 12px;
}
#userName {
  width: 200px;
}
#userNum {
  width: 200px;
  padding: 10px;
}
#yonghuming{
  font-size: 10px;
  margin-top: -40px;
  margin-left: 180px;
}
#mima{
  font-size: 10px;
  margin-top: -10px;
  margin-left: 180px;
}
</style>
<script>
export default {
  data() {
    return {
      username: "", //双向数据绑定
      usernameState: "",
      pwd: "",
      pwdState: "",
    };
  },
  methods: {
    checkPwd() {
      let reg = /^[a-zA-Z0-9]{3,18}$/;//三到十二位 可以包含小写字母  大写字母  数字组合
      if (reg.test(this.pwd)) {
        //验证成功
        this.pwdState = "success";
        mima.innerHTML=""
        return true;
      } else {
        //验证失败
        this.pwdState = "error";
        mima.innerHTML="请输入密码"
        return false;
      }
    },
    //定义方法, 验证用户名
    checkUsername() {
      let reg = /^[a-zA-Z0-9]{6,12}$/;//三到十二位 可以包含小写字母  大写字母  数字组合
      //验证手机号 单词字符11位
      if (reg.test(this.username)) {
        //验证成功
        yonghuming.innerHTML=""
        return true;
      } else {
        //验证失败
        yonghuming.innerHTML="请输入用户名"
        this.usernameState = "error";
        return false;
      }
    },
    //点击登录之后执行, 验证
    checkForm() {
      this.checkUsername();
      this.checkPwd();
      if (this.checkUsername() && this.checkPwd()) {
        //this.$notify
        var uname = this.username;
        var upwd = this.pwd;
        this.axios.post(`/login/${uname}&${upwd}`).then(result=>{
          console.log(result)
          if(result.data>0){
            // this.$alert('登录成功', '通知',);
            ({
              title: "登录成功",
              message: "通知",
              type: "success",
            });
            //既然登陆成功，那就需要更新vuex中的信息
            let un = uname;
            console.log(un);
            this.$store.commit('loginOK',un);
            //不仅需要更新vuex，还需要把数据存入webstorage
            sessionStorage.setItem('islogin','true');
            sessionStorage.setItem('username',un)
            let s =JSON.stringify(result.data.result);
            sessionStorage.setItem('u',s);
            sessionStorage.removeItem("navcolor");
            sessionStorage.setItem("navcolor",1);
            this.$router.push('/');
          }else{
            this.$alert('用户名或密码错误', '通知',);
            //this.$notify
            ({
            title: "登录失败",
              message: "通知:  用户名或密码错误",
              type: "warning",
            });
          }
        })
      }
    },
    nameBlur(){
      this.checkUsername()
      },
      pwdBlur(){
      this.checkPwd()
      }, 
  },
};
</script>


