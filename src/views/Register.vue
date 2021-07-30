<template>
  <div id="d1">
    <div>
      <div class="grid-content bg-purple">
        <span
          ><img
            id="a1"
            src="../../public/imgs/register/lo.png"
            alt=""
            class="tu"
        /></span>
        <div>
          <img id="a1" src="../../public/imgs/register/zcdl_img.jpg" alt="" />
        </div>
      </div>
    </div>
    <div id="sr">
      <div class="grid-content bg-purple-light">
        <div id="kuang" class="a1">
          <div id="kuang1">
            <span>免费注册</span>
            <div>
              <i class="el-icon-s-custom" style="padding-left: 35px"></i
              ><el-input
                type="text"
                v-model="username"
                style="width: 220px; margin: 20px 42px 10px 10px"
                :state="usernameState"
                id="userName"
                name="userName"
                value=""
                @blur="nameBlur"
                class="login-name input-holder-style"
                label="用户名/手机号/邮箱"
                placeholder="用户名/手机号/邮箱"
                maxlength="11"
                clearable
              ></el-input>
              <div
                id="yonghuming"
                style="color: red"
              ></div>
            </div>
            <i class="el-icon-lock">
              <el-input
                class="input-holder-style"
                style="width: 220px; padding: 8px"
                type="password"
                v-model="pwd"
                :state="pwdState"
                label="密码"
                id="userNum"
                name="userNum"
                value=""
                @blur="pwdname"
                placeholder="密码"
                maxlength="18"
                show-password
                clearable
              ></el-input>
              <div
                id="mima"
                style="color: red"
              ></div
            ></i>
            <i class="el-icon-lock">
              <el-input
                class="input-holder-style"
                style="width: 220px; padding: 8px"
                type="password"
                v-model="pwd1"
                :state="pwdState"
                label="密码"
                id="userNum"
                @blur="pwdname1"
                placeholder="确认密码"
                maxlength="18"
                show-password
                clearable
              >              
              </el-input>
              <div
                id="mima1"
                style="color: red"
              ></div>
            </i>
            <div id="kuang3"></div>
            <div id="kuang4">
              <div>
                <el-button id="an" type="warning" @click="checkForm" plain round
                  >快速注册</el-button
                >
              </div>
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
              <router-link to="/login">立即登录</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#sr {
  margin-right: 1300px;
}
#d1 {
  width: 1600px;
  margin: 0 auto;
  margin-bottom: 185px;
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
  padding: 50px;
  margin-bottom: 8px;
}
#userNum {
  width: 200px;
  padding: 8px;
  margin: 20px;
}
#mima {
  font-size: 10px;
  margin-left: 180px;
}
#mima1 {
  font-size: 10px;
  margin-left: 180px;
}
#yonghuming {
  font-size: 10px;
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
      pwd1: "",
      pwdState: "",
    };
  },
  methods: {
    checkPwd() {
      let reg = /^[a-zA-Z0-9]{6,8}$/; //三到十二位 可以包含小写字母  大写字母  数字组合
      if (reg.test(this.pwd)) {
        //验证成功
        this.pwdState = "success";
        mima.innerHTML = "";
        return true;
      } else {
        //验证失败mima.innerHTML===mima1.innerHTM
        this.pwdState = "error";
        mima.innerHTML = "请输入密码";
        return false;
      }
    },
    checkPwd1() {
      let reg = /^[a-zA-Z0-9]{6,8}$/; //三到十二位 可以包含小写字母  大写字母  数字组合
      if (reg.test(this.pwd1) && this.pwd === this.pwd1) {
        mima1.innerHTML = "";
        return true;
      } else {
        mima1.innerHTML = "请确认密码";
        return false;
      }
    },
    //定义方法, 验证用户名
    checkUsername() {
      let reg = /^[a-zA-Z0-9]{6,12}$/; //三到十二位 可以包含小写字母  大写字母  数字组合
      //验证手机号 单词字符11位
      if (reg.test(this.username)) {
        yonghuming.innerHTML = "";
        //验证成功
        return true;
      } else {
        //验证失败
        yonghuming.innerHTML = "请输入用户名";
        this.usernameState = "error";
        return false;
      }
    },
    //点击注册之后执行, 验证
    checkForm() {
      this.checkUsername();
      this.checkPwd();
      this.checkPwd1();
      this.$alert("恭喜注册成功", "通知");
      if (this.checkUsername() && this.checkPwd() && this.checkPwd1()) {
        //this.$notify
        var uname = this.username;
        var upwd = this.pwd;
        var body = `uname=${uname}&upwd=${upwd}`;
        this.axios.post("/ref", body).then((result) => {
          this.$router.push("/login");
        })({
          title: "注册成功",
          message: "通知",
          type: "success",
        });
      } else {
        this.$alert("注册失败", "通知");
        //this.$notify
        ({
          title: "注册失败",
          message: "通知:  用户名/密码输入不正确",
          type: "warning",
        });
      }
    },
    nameBlur() {
      this.checkUsername();
    },
    pwdname() {
      this.checkPwd();
    },
    pwdname1() {
      this.checkPwd1();
    },
  },
};
</script>

