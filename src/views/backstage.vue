<template>
    <div class="backstage">
        <el-container>
          <el-header>
            <div class="header_d">
              <span>Manage</span>
            </div>
            <div class="header_z" v-if="m==1">
              <img src="../../public/imgs/index/discuss/head3.jpg" alt="">
              <h1>用户信息管理</h1>
            </div>
            <div class="header_z" v-if="m==2">
              <img src="../../public/imgs/index/discuss/head4.jpg" alt="">
              <h1>商户信息管理</h1>
              <button class="tjshxx" @click="Company_insert">+添加商户信息</button>
            </div>
            <div class="header_z" v-if="m==3">
              <img src="../../public/imgs/index/discuss/head9.jpg" alt="">
              <h1>效果图管理</h1>
              <button class="tjshxx" @click="rendering_insert">+添加效果图信息</button>
            </div>
            <div class="header_z" v-if="m==4">
              <img src="../../public/imgs/index/discuss/head10.jpg" alt="">
              <h1>预约信息管理</h1>
            </div>
            <div class="header_i">
              <div class="header_ii">
                欢迎：{{$store.state.username2}}
                <button @click="clear()" class="clear">退出登录</button>
              </div>

            </div>
          </el-header>
          <el-container>
            <el-aside width="200px">
              <div>
                <div class="manage_user">
                  <a href="javascript:;" @click="manage(1)">用户管理</a>  
                </div>
                <div class="manage_user">
                  <a href="javascript:;" @click="manage(2)">商户信息管理</a>  
                </div>
                <div class="manage_user">
                  <a href="javascript:;" @click="manage(3)">效果图管理</a>  
                </div>
                <div class="manage_user">
                  <a href="javascript:;" @click="manage(4)">预约管理</a>  
                </div>                 
              </div>
            </el-aside>
            <el-main>
              <div class="table_sc" v-if="m==1">
              <table  cellpadding="0" cellspacing="0">
                <thead width="400">
                  <tr class="thead">
                    <td >编号</td>
                    <td>用户名</td>
                    <td>密码</td>
                    <td>昵称</td>
                    <td>手机号</td>
                    <td>头像</td>
                    <td>操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="thead2" v-for="(item,i) in items.data " :key="i">
                    <td>{{items.data[i].uid}}</td>
                    <td>{{items.data[i].uname}}</td>
                    <td>{{items.data[i].upwd}}</td>
                    <td>{{items.data[i].user_name}}</td>
                    <td>{{items.data[i].phone}}</td>
                    <td>{{items.data[i].avatar}}</td>
                    <td>
                        <button id="btn1" @click="btn1(i)">删除</button>
                        <button id="btn2" @click="btn2(i)">修改</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="table_sc" v-if="m==2">
              <table cellpadding="0" cellspacing="0">
                <thead width="400">
                  <tr class="thead">
                    <td>编号</td>
                    <td>公司logo</td>
                    <td>公司名称</td>
                    <td>公司电话</td>
                    <td>效果图</td>
                    <td>操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="thead2" v-for="(companys,i) in company.data " :key="i">
                    <td nowrap>{{company.data[i].cid}}</td>
                    <td nowrap>{{company.data[i].photo}}</td>
                    <td nowrap>{{company.data[i].caption}}</td>
                    <td nowrap>{{company.data[i].cell}}</td>
                    <td nowrap>{{company.data[i].map}}</td>
                    <td>
                      <button id="btn1" @click="btn3(i)">删除</button>
                      <button id="btn2" @click="btn4(i)">修改</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="table_sc" v-if="m==3">
              <table cellpadding="0" cellspacing="0">
                <thead width="400">
                  <tr class="thead">
                    <td>编号</td>
                    <td>标题</td>
                    <td>图片路径</td>
                    <td>类型</td>
                    <td>效果图房屋编号</td>
                    <td>颜色</td>
                    <td>操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="thead2" v-for="(renderings,i) in rendering.data " :key="i">
                    <td>{{rendering.data[i].rid}}</td>
                    <td>{{rendering.data[i].rtittle}}</td>
                    <td>{{rendering.data[i].raddress}}</td>
                    <td>{{rendering.data[i].rtype}}</td>
                    <td>{{rendering.data[i].rroomid}}</td>
                    <td>{{rendering.data[i].rcolor}}</td>
                    <td>
                      <button id="btn1" @click="btn5(i)">删除</button>
                      <button id="btn2" @click="btn6(i)">修改</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="table_sc" v-if="m==4">
              <table cellpadding="0" cellspacing="0">
                <thead width="400">
                  <tr class="thead">
                    <td>编号</td>
                    <td>预约用户姓名</td>
                    <td>预约用户电话号码</td>
                    <td>操作</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="thead2" v-for="(orderusers,i) in orderuser.data " :key="i">
                    <td>{{orderuser.data[i].oid}}</td>
                    <td>{{orderuser.data[i].oname}}</td>
                    <td>{{orderuser.data[i].ophone}}</td>
                    <td>
                    <button id="btn1" @click="btn7(i)">删除</button>
                    <button id="btn2" @click="btn8(i)">修改</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
            </el-main>
          </el-container>
        </el-container>
        <!-- 修改用户信息 -->
        <div class="form" :style="update_display">
          <h1>用户信息修改</h1>
          <a href="javascript:;" class="x" @click="update1_displayx()">X</a>
          <form>
            密码:<input type="password" value="" id="upwd" name="upwd"><br>
            昵称:<input type="text" value="" id="user_name" name="user_name"><br>
            手机号码:<input type="text" value="" id="phone" name="phone"><br>
            头像<input type="text" value="" id="avatar" name="avatar">
            <button @click="Submit()">提交</button>
          </form>
        </div>
        <!-- 修改商户信息 -->
        <div class="form" :style="UCompany_display">
          <h1>修改商户信息</h1>
          <a href="javascript:;" class="x" @click="update2_displayx()">X</a>
          <form>
            公司logo:<input type="text" value="" id="photo1" name="photo1"><br>
            公司名称:<input type="text" value="" id="caption1" name="caption1"><br>
            公司电话:<input type="text" value="" id="cell1" name="cell1"><br>
            效果图:<input type="text" value="" id="map1" name="map1">
            <button @click="UCompany()">提交</button>
          </form>
        </div>
        <!-- 修改效果图信息 -->
        <div class="form" :style="rendering_display">
          <h1>修改效果页</h1>
          <a href="javascript:;" class="x" @click="update3_displayx()">X</a>
          <form>
            标题:<input type="text" value="" id="rtittle" name="rtittle"><br>
            图片路径:<input type="text" value="" id="raddress" name="raddress"><br>
            类型:<input type="text" value="" id="rtype" name="rtype"><br>
            效果图房屋编号:<input type="text" value="" id="rroomid" name="rroomid">
            颜色:<input type="text" value="" id="rcolor" name="rcolor">
            <button @click="rendering1()">提交</button>
          </form>
        </div>
        <!-- 修改预约用户信息 -->
        <div class="form" :style="orderuser_display">
          <h1>修改预约用户信息</h1>
          <a href="javascript:;" class="x" @click="update4_displayx()">X</a>
          <form>
            用户姓名:<input type="text" value="" id="oname" name="oname"><br>
            用户手机号码:<input type="text" value="" id="ophone" name="ophone"><br>
            <button @click="orderuser1()">提交</button>
          </form>
        </div>
        <!-- 添加商户 -->
        <div class="form" :style="Company_display">
          <h1>添加商户</h1>
          <a href="javascript:;" class="x" @click="insert_displayx">X</a>
          <form>
            公司logo:<input type="text" value="" id="photo" name="photo"><br>
            公司名称:<input type="text" value="" id="caption" name="caption"><br>
            公司电话:<input type="text" value="" id="cell" name="cell"><br>
            效果图:<input type="text" value="" id="map" name="map">
            <button @click="Company()">提交</button>
          </form>
        </div>
        <!-- 添加效果图信息 -->
        <div class="form" :style="Rendering_display">
          <h1>添加效果图信息</h1>
          <a href="javascript:;" class="x" @click="insert2_displayx">X</a>
          <form>
            标题:<input type="text" value="" id="rtittle1" name="rtittle1"><br>
            图片路径:<input type="text" value="" id="raddress1" name="raddress1"><br>
            类型:<input type="text" value="" id="rtype1" name="rtype1"><br>
            效果图房屋编号:<input type="text" value="" id="rroomid1" name="rroomid1">
            颜色:<input type="text" value="" id="rcolor1" name="rcolor1">
            <button @click="rendering2()">提交</button>
          </form>
        </div>
    </div>
</template>
<style scoped>
.backstage{
  min-width: 1500px
}
  /* 头部模块 */
.el-header, .el-footer {
  color: #333;
  line-height: 60px;
  padding: 0;
}
.el-header{
  height: 100px !important;
}
.header_d{
  height: 100px;
  width: 200px;
  background-color: #21233a;
  text-align: center;
  display: inline-block;
}
.header_d span{
  color:rgb(211, 188, 188);
  font-size: 30px;
  line-height: 100px;
}
.header_i{
  width: 200px;
  height: 100px;
  float: right;
}
.header_ii{
  width: 100px;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
}
.header_ii .clear{
  color: rgb(92, 91, 91);
  margin-top: 10px;
  padding: 5px 10px 5px 10px;
  border: none;
  border-radius: 10px;
  background-color: rgb(171, 231, 225);
}
.header_z{
  width: 400px;
  height: 100px;
  display: inline-block;
  text-align: center;
}
.header_z img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    vertical-align:middle;
    display: inline-block;
    margin-right: 20px;
    margin-top: -10px;
}
.header_z h1{
  font-size: 30px;
  display: inline-block;
  font-family: '楷体';
}
.tjshxx{
  border: none;
  border-radius: 20px;
  background-color: rgb(63, 63, 63);
  color:white;
  margin-left: 10px;
  margin-top: -20px;
}
  /* 右侧模块 */
.el-aside {
  background-color: #1b1d33;
  color: #333;
  line-height: 200px;
  height: 86vh;
  text-align: center;
}
.manage_user{
  line-height: 50px;
  margin-top: 40px;
}
.manage_user a{
  color: rgb(167, 164, 164);
  font-size: 20px;
  font-family: '楷体';
}
  /* 内容模块 */
.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
  padding-left: 20px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.table_sc{
  height: 600px;
  overflow:scroll;
}
table thead{
  background-color: #1b1d33;
}
.thead td{
  width: 250px;
  height: 0px;
  line-height: 70px;
  font-size: 25px;
  color: rgb(122, 110, 110);
  word-wrap:break-word;
  word-break:break-all;
  font-family: '楷体';
}
.thead2 td{
    width: 200px;
    height: 50px;
    font-size: 20px;
    color: rgb(90, 82, 82);
    word-wrap:break-word;
    word-break:break-all;
}.thead2 td #btn1{
    border: none;
    background-color: rgb(255, 191, 191);
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    margin-right: 10px;
}
.thead2 td #btn2{
    border: none;
    background-color: rgb(147, 245, 252);
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
}
.thead td #btn1{
    border: none;
    background-color: red;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    margin-right: 10px;
}
.thead td #btn2{
    border: none;
    background-color: rgb(147, 245, 252);
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
}
table td{
    text-align: center;
    border:1px solid black;
}
/* 用户信息修改模块 */
.form{
    width: 300px;
    position: fixed;
    top: 30%;
    left: 40%;
    background-color: rgb(255, 255, 255);
    text-align:center;
    box-shadow: 0px 8px 13px 2px rgb(179, 179, 179);
}
.x{
  position: absolute;
  top: 10px;
  right: 10px;
}
.form h1{
    text-align: center;
    font-family: '楷体';
}
.form input{
    margin: 0 auto;
    display: block;
}
.form button{
  border: none;
  padding: 5px 10px 5px 10px;
  background-color: rgb(241, 240, 240);
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
<script>
  export default {
    data() {
      return {
          items:{},
          company:{},
          rendering:{},
          orderuser:{},
          m: 1,
          uid:'',
          cid:'',
          rid:'',
          oid:'',
          // 用户修改
          update_display:'display:none',
          //商品修改/添加
          UCompany_display:'display:none',
          Company_display:'display:none',
          //效果图修改/添加
          rendering_display:'display:none',
          Rendering_display:'display:none',
          //预约用户修改
          orderuser_display:'display:none',
      };
    },
    methods:{
        manage(m) {
          this.m = m;
        },
        clear(){
          //删除数据
          sessionStorage.removeItem("islogin")
          sessionStorage.removeItem("username")
          // sessionStorage.setItem("navcolor",this.navcolor)
          this.$router.push('/manage');
        },
        //用户管理
        btn1(i){
            var uid = this.items.data[i].uid
            if(confirm('是否要删除该项数据') ){
                this.axios.delete(`/delUser/${uid}`).then(result=>{
                console.log(result)
            }),
                location.reload();
                }
            },
        btn2(i){
            this.uid = this.items.data[i].uid;
            this.update_display='display:block';
            },
        update1_displayx(){
          this.update_display='display:none';
        },
        Submit(){
            var _upwd=upwd.value;
            var _user_name=user_name.value;
            var _phone=phone.value;
            var _avatar=avatar.value;
            alert(`${this.uid},${_upwd},${_user_name},${_phone},${_avatar}`);
            var body = `uid=${this.uid}&upwd=${_upwd}&user_name=${_user_name}&phone=${_phone}&avatar=${_avatar}`

            this.axios.put('/update',body).then(result=>{
             console.log(result)
            })
        },
        //商品管理
        btn3(i){
            var cid = this.company.data[i].cid
            if(confirm('是否要删除该项数据') ){
                this.axios.delete(`/delUser2/${cid}`).then(result=>{
                console.log(result)

            }),
                location.reload();
                }
            },
        btn4(i){
            this.cid = this.company.data[i].cid
            this.UCompany_display='display:block';
             },
        update2_displayx(){
          this.UCompany_display='display:none';
        },
        insert_displayx(){
          this.Company_display='display:none';
        },
        Company_insert(){
          this.Company_display='display:block';
        },
        Company(){
          var _photo = photo.value;
          var _caption = caption.value;
          var _cell = cell.value;
          var _map = map.value;
          var body = `photo=${_photo}&caption=${_caption}&cell=${_cell}&map=${_map}`
          this.axios.post('/ref2',body).then(result=>{
          })
        },
        UCompany(){
          var cphoto = photo1.value;
          var ccaption = caption1.value;
          var ccell = cell1.value;
          var cmap = map1.value;
          var body = `cid=${this.cid}&photo=${cphoto}&caption=${ccaption}&cell=${ccell}&map=${cmap}`
          console.log(body)
            this.axios.put('/update2',body).then(result=>{
              console.log(result)
            })
        },
        //效果图管理
        btn5(i){
            var rid = this.rendering.data[i].rid
            if(confirm('是否要删除该项数据') ){
                this.axios.delete(`/delUser3/${rid}`).then(result=>{
                console.log(result)

            }),
                location.reload();
                }
            },
        btn6(i){
            this.rid = this.rendering.data[i].rid;
            this.rendering_display='display:block';
            },
        update3_displayx(){
          this.rendering_display='display:none';
        },
        rendering_insert(){
          this.Rendering_display='display:block';
        },
        insert2_displayx(){
          this.Rendering_display='display:none';
        },
        rendering1(){
          var _rtittle = rtittle.value;
          var _raddress = raddress.value;
          var _rtype = rtype.value;
          var _rroomid = rroomid.value;
          var _rcolor = rcolor.value;
          var body = `rid=${this.rid}&rtittle=${_rtittle}&raddress=${_raddress}&rtype=${_rtype}&rroomid=${_rroomid}&rcolor=${_rcolor}`
          console.log(body)
          this.axios.put('/update3',body).then(result=>{
            console.log(result)
          })
        },
        rendering2(){
          var __rtittle = rtittle1.value;
          var __raddress = raddress1.value;
          var __rtype = rtype1.value;
          var __rroomid = rroomid1.value;
          var __rcolor = rcolor1.value;
          var body = `rid=${this.rid}&rtittle=${__rtittle}&raddress=${__raddress}&rtype=${__rtype}&rroomid=${__rroomid}&rcolor=${__rcolor}`
          console.log(body)
          this.axios.post('/ref3',body).then(result=>{
          })
        },
        //预约管理
        btn7(i){
            var oid =this.orderuser.data[i].oid;
            if(confirm('是否要删除该项数据') ){
                this.axios.delete(`/delUser4/${oid}`).then(result=>{
                console.log(result)

            }),
                location.reload();
                }
            },
        btn8(i){
            this.oid = this.orderuser.data[i].oid;
            this.orderuser_display='display:block';
            },  
        update4_displayx(){
            this.orderuser_display='display:none';
          },
        orderuser1(){
          var _oname = oname.value;
          var _ophone = ophone.value;
          alert(`${_oname},${_ophone}`);
          var body = `oid=${this.oid}&oname=${_oname}&ophone=${_ophone}`
          console.log(body)
          this.axios.put('/update4',body).then(result=>{
            console.log(result)
          })
        },
    },
    mounted(){
            this.axios.get('/user').then(result=>{
                console.log(result);
                this.items= result
                // 处理图片
                // items.forEach(item=>{
                // if(items.data[i].avatar){
                // item.image = require(`../assets/articles/${items.data[i].avatar}`)
                // }
                // })
            })
            this.axios.get('/company').then(result=>{
                console.log(result);
                this.company= result
            })
            this.axios.get('/rendering').then(result=>{
                console.log(result);
                this.rendering= result
            })
            this.axios.get('/orderuser').then(result=>{
                console.log(result);
                this.orderuser= result
            })
            // this.axios.get('/rendering').then(result=>{
            //     console.log(result);
            //     this.rendering= result
            // })
    }
  };

</script>