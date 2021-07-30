<template>
  <div class="header">
    <div class="center">
      <table></table>
      <div class="logimg">
        <a href="/"></a>
        <img
          src="../../public/imgs/index/logo/logo.gif"
          width="145"
          height="51"
          alt=""
        />
      </div>
      <div class="nav-content">
        <ul>
          <li :class="navcolor == 1 ? 'navcolorr' : ''">
            <router-link @click.native="navClick(1)" to="/">首页</router-link>
          </li>
          <li
            @mouseover="navOver1"
            @mouseleave="navLeave1"
            :class="navcolor == 2 ? 'navcolorr' : ''"
          >
            <router-link @click.native="navClick(2)" to="/rendering">效果图<span></span></router-link>
          </li>
          <li
            @mouseover="navOver2"
            @mouseleave="navLeave2"
            :class="navcolor == 3 ? 'navcolorr' : ''"
          >
            <router-link @click.native="navClick(3)" to="/company">装修公司<span></span></router-link>
          </li>
          <li
            @mouseover="navOver3"
            @mouseleave="navLeave3"
            :class="navcolor == 4 ? 'navcolorr' : ''"
          >
            <router-link @click.native="navClick(4)" to="/strategy">装修攻略<span></span></router-link>
          </li>
          <li :class="navcolor == 5 ? 'navcolorr' : ''">
            <router-link @click.native="navClick(5)" to="/security">保障服务</router-link>
          </li>
          <li>
            <a href="javascript:;">
              下载APP
              <span></span>
              <img
                src="../../public/imgs/index/app.jpg"
                width="390"
                height="211"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="nav-search">
        <div>
          <div class="search-inp">
            <input type="text" v-model="inpvalue" @keyup.13="inpclik" placeholder="搜装修公司/问题/攻略/效果图" />
          </div>
          <div class="search-icon" @click="inpclik"></div>
        </div>
      </div>
      <div class="nav-login">
        <div v-if="$store.state.islogin">
          欢迎：{{$store.state.username}}
          <button @click="clear()" class="clear">退出登录</button>
        </div>
        <div class="else" v-else>
          <div class="left">
            <router-link to="/login" class="el-icon-s-custom">登录</router-link>
          </div>
          <div class="right">
            <router-link to="/register" class="el-icon-s-custom">注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="nav-hover"
      @mouseover="navOver1"
      @mouseleave="navLeave1"
      :style="`display:${navDisplay};`"
    >
      <div class="centerr">
        <div>家居美图</div>
        <div>
          <a @click="selclick('客厅')" href="javascript:;">客厅</a>
          <a @click="selclick('卧室')" href="javascript:;">卧室</a>
          <a @click="selclick('厨房')" href="javascript:;">厨房</a>
          <a href="javascript:;">北极简欧</a>
          <a href="javascript:;">现代简约</a>
          <a href="javascript:;">美式田园</a>
          <a href="javascript:;">白色</a>
          <a href="javascript:;">灰色</a>
          <a href="javascript:;">蓝色</a>
          <a @click="selclick('卫生间')" href="javascript:;">卫生间</a>
          <a @click="selclick('餐厅')" href="javascript:;">餐厅</a>
          <a @click="selclick('玄关')" href="javascript:;">玄关</a>
          <a href="javascript:;">日式</a>
          <a href="javascript:;">中式现代</a>
          <a href="javascript:;">美式经典</a>
          <a href="javascript:;">绿色</a>
          <a href="javascript:;">红色</a>
          <a href="javascript:;">橙色</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navDisplay: "none",
      navcolor: 1,
      inpvalue:'',
    };
  },
  methods: {
    selclick(msg){
        this.$router.push({path:'/search',query:{msg:msg}});
    },
    navOver1() {
      this.navDisplay = "block";
    },
    navOver2() {
      this.navDisplay = "block";
    },
    navOver3() {
      this.navDisplay = "block";
    },
    navLeave1() {
      this.navDisplay = "none";
    },
    navLeave2() {
      this.navDisplay = "none";
    },
    navLeave3() {
      this.navDisplay = "none";
    },
    navClick(i) {
      console.log(i)
      this.navcolor = i;
      sessionStorage.removeItem("navcolor");
      sessionStorage.setItem("navcolor", i);
      // this.navcolor=sessionStorage.getItem("navcolor");
      location.reload();
      
    },
    clear(){
      //删除数据
      sessionStorage.removeItem("islogin")
      sessionStorage.removeItem("username")
      // sessionStorage.setItem("navcolor",this.navcolor)
      location.reload();
    },
    inpclik(){
      if(this.inpvalue!=''){
      
      let reg=/厨房|卧室|卫生间|阳台|玄关|餐厅|客厅/;
      let arr=reg.exec(this.inpvalue)
      if(arr!=null){
        this.$router.push({path:'/search',query:{msg:arr[0]}});
      }else{
        this.$router.push({path:'/search',query:{msg:this.inpvalue}});
      }
      sessionStorage.removeItem("navcolor");
      sessionStorage.setItem("navcolor",2);
      location.reload();
      this.navcolor=sessionStorage.getItem("navcolor");
      }
      // 
      //   this.axios.get('/search',{params:{msg:this.inpvalue}}).then(result=>{
      //     console.log(result)
      //   })
    },
  },
  mounted() {
    this.navcolor=sessionStorage.getItem("navcolor");
    console.log(this.navcolor);
    if (sessionStorage.getItem("navcolor") !== null) {
      this.navcolor = sessionStorage.getItem("navcolor");
    }
    console.log(this.navcolor);
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  // margin-top: 35px;
  position: relative;

  .navcolorr > a {
    color: #0cb46a !important;
    border-bottom: 2px solid #0cb46a;
  }

  .center {
    width: 1460px;
    height: 80px;
    margin: 0 auto;
    // min-width: 1460px;
    display: flex;
    .logimg {
      width: 289px;
      height: 54px;
      margin-top: 13px;
      display: inline-block;
      & > :nth-child(1) {
        display: inline-block;
        width: 132px;
        height: 47px;
        background-image: url("../../public/imgs/index/logo/logoicon.png");
        background-position: 0 -208px;
      }
      & > :nth-child(2) {
        display: inline-block;
        width: 145px;
        height: 51px;
        margin: -30px 0 0 11px;
      }
    }
    .nav-content {
      width: 750px;
      height: 100%;
      margin-left: 60px;
      display: inline-block;
      padding-top: 22px;
      ul {
        display: flex;
        li {
          position: relative;
          margin-right: 30px;
          padding: 0 16px;
          height: 60px;
          a {
            display: inline-block;
            height: 40px;
            line-height: 38px;
            font-size: 16px;
            color: #333;
            &:hover {
              color: #0cb46a;
            }
          }
        }
        & > :nth-child(2),
        & > :nth-child(3),
        & > :nth-child(4) {
          span {
            width: 8px;
            height: 5px;
            display: inline-block;
            margin-left: 5px;
            position: absolute;
            top: 17px;
            background-image: url("../../public/imgs/index/logo/logoicon.png");
            background-position: -152px -180px;
          }
        }
        & > :nth-child(2),
        & > :nth-child(3),
        & > :nth-child(4) {
          a:hover span {
            background-position: -164px -180px;
          }
        }
        & > :nth-child(6) {
          a {
            position: relative;
            img {
              display: none;
            }
            &:hover {
              // position: relative;
              img {
                position: absolute;
                top: 60px;
                left: -150px;
                display: block;
                z-index: 100;
              }
            }
          }
        }
        & > :last-child {
          margin-right: 0;
          span {
            display: inline-block;
            width: 11px;
            height: 16px;
            background-image: url("../../public/imgs/index/logo/logoicon.png");
            background-position: -176px -180px;
            margin-top: 5px;
          }
        }
      }
    }
    .nav-search {
      width: 228px;
      height: 79px;
      & > div {
        width: 228px;
        height: 36px;
        font-size: 13px;
        margin-top: 22px;
        border: 1px solid #e5e5e5;
        display: flex;
        .search-inp {
          width: 194px;
          height: 32px;
          input {
            padding: 9px 0 9px 8px;
            border: none;
          }
        }
        .search-icon {
          width: 34px;
          height: 32px;
          margin-top: 4px;
          background-image: url("../../public/imgs/index/logo/logoicon.png");
          background-position: -200px -216px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .nav-login {
      margin-left: 26px;
      width: 110px;
      height: 38px;
      margin-top: 21px;
      display: flex;
      justify-content: space-between;
      i {
        line-height: 38px;
      }
      .left {
        width: 48px;
        height: 100%;
        // border: 1px solid #e5e5e5;
        border-radius: 25px 0 0 25px;
        line-height: 38px;
        margin-right: 10px;
        text-align: center;
        display: inline-block;
        a {
          font-size: 15px;
          &:hover {
            cursor: pointer;
            // border: 1px solid #0cb46a;
            color: #0cb46a;
          }
        }
      }
      .right {
        width: 48px;
        height: 100%;
        // border: 1px solid #e5e5e5;
        border-radius: 0 25px 25px 0;
        line-height: 38px;
        text-align: center;
        display: inline-block;
        a {
          font-size: 15px;
          &:hover {
            cursor: pointer;
            // border: 1px solid #0cb46a;
            color: #0cb46a;
          }
        }
      }
    }
  }
  .nav-hover {
    position: absolute;
    width: 100%;
    height: 114px;
    background-color: #fff;
    margin-top: 1px;
    z-index: 100;
    box-shadow: 0 10px 15px rgb(0 0 0 / 10%);
    .centerr {
      width: 735px;
      height: 96px;
      margin: 0 auto;
      margin-top: 10px;
      font-size: 14px;
      color: #333;
      text-align: left;
      & > :nth-child(1) {
        height: 36px;
        line-height: 36px;
      }
      & > :nth-child(2) {
        height: 52px;
        a {
          width: 60px;
          display: inline-block;
          margin-right: 10px;
          margin-top: 10px;
          color: #333;
          &:nth-child(3n) {
            margin-right: 40px;
          }
          &:hover {
            color: #0cb46a;
          }
        }
      }
    }
  }
}
.clear{
  border: none;
  background-color: rgb(211, 252, 255);
  padding: 3px 10px;
  font-size: 10px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 15px;
}
</style>