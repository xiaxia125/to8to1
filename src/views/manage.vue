<template>
  <div class="manage">
    <div>
      <div class="grid-content bg-purple">
        <span>
           <img id="a1" src="../../public/imgs/register/lo.png" alt="" class="tu"/>
        </span>
        <div>
          <img id="a1" src="../../public/imgs/register/zcdl_img.jpg" alt="" /> 
        </div>
      </div>
    </div>
    <div id="sr">
      <div class="grid-content bg-purple-light">
        <div id="kuang" class="a1">
          <div id="kuang1">
            <span>管理员登录</span>
              <div>
                  账号:<input type="text" id="musername" name="musername" value="" placeholder="请输入管理员账号" maxlength="16">
              </div>
              <div>
                  密码:<input type="password" id="mpwd" name="mpwd" value="" placeholder="密码" maxlength="12">
              </div>
                  <button id="an" @click="checkForm()">登录</button>
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
  height: 325px;
  border: 1px solid #eee;
  text-align: center;
  padding-top: 40px;
    margin-left: 900px;
  margin-top: -400px;
}
#kuang1 span{
  color: black;
  font-size: 25px;
  font-family: '宋体';
}
#an {
  width: 180px;
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 40px;
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
#musername {
  width: 200px;
  padding: 8px;
  margin-top: 40px;
  margin-bottom: 40px;
}
#mpwd {
  width: 200px;
  padding: 8px;
}
</style>
<script>
export default {
  methods: {
    //点击登录之后执行, 验证
    checkForm(){
        var username = musername.value;
        var pwd = mpwd.value;
        var body = `musername=${username}&mpwd=${pwd}`
        this.axios.post('/login2',body).then(result=>{  console.log(result)
          if(result.data>0){   
            //既然登陆成功，那就需要更新vuex中的信息
            let un = username;
            this.$store.commit('loginOK2',un);
            //不仅需要更新vuex，还需要把数据存入webstorage
            sessionStorage.setItem('islogin2','true');
            sessionStorage.setItem('username2',un)
            let s =JSON.stringify(result.data.result);
            sessionStorage.setItem('u',s);
            sessionStorage.removeItem("navcolor");
            sessionStorage.setItem("navcolor",1);
            this.$router.push('/backstage');
          }else{
              alert('账号或密码输入错误');
            }
        
        })
    }
  }
}
</script>


