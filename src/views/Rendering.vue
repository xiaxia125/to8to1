<template>
  <div>
    <my-head></my-head>
    <div>
      <div class="navitem">
        <ul>
          <li><a href="javascript:;">效果图</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li><a href="javascript:;">免费设计</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li><a href="javascript:;">定制设计</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
          <li><a href="javascript:;">图满意</a></li>
        </ul>
      </div>
      <div class="banner">
        <div class="center">
          <div class="left">
            <div class="left-t">
              <span>空间</span>
              <span>space</span>
              <div>
                <a @click="selclick('客厅')" href="javascript:;">客厅</a>
                <a @click="selclick('卧室')" href="javascript:;">卧室</a>
                <a @click="selclick('厨房')" href="javascript:;">厨房</a>
                <a @click="selclick('卫生间')" href="javascript:;">卫生间</a>
                <a @click="selclick('餐厅')" href="javascript:;">餐厅</a>
                <a @click="selclick('玄关')" href="javascript:;">玄关</a>
                <a @click="selclick('阳台')" href="javascript:;">阳台</a>
                <a @click="selclick('功能区')" href="javascript:;">功能区</a>
              </div>
            </div>
            <div class="left-t">
              <span>样式</span>
              <span>style</span>
              <div>
                <a href="javascript:;">北欧极简</a>
                <a href="javascript:;">现代简约</a>
                <a href="javascript:;">美式田园</a>
                <a href="javascript:;">日式</a>
                <a href="javascript:;">中式现代</a>
                <a href="javascript:;">美式经典</a>
                <a href="javascript:;">欧式豪华</a>
                <a href="javascript:;">地中海</a>
                <a href="javascript:;">潮流混搭</a>
                <a href="javascript:;">其他</a>
              </div>
            </div>
            <div class="left-t">
              <span>颜色</span>
              <span>color</span>
              <div>
                <a href="javascript:;">白色</a>
                <a href="javascript:;">灰色</a>
                <a href="javascript:;">蓝色</a>
                <a href="javascript:;">绿色</a>
                <a href="javascript:;">橙色</a>
                <a href="javascript:;">红色</a>
                <a href="javascript:;">粉色</a>
                <a href="javascript:;">紫色</a>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="block">
              <el-carousel height="420px">
                <el-carousel-item>
                  <img src="../../public/imgs/rendering/swip1.png" alt="" />
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../../public/imgs/rendering/swip2.jpg" alt="" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
      <div class="container-top">
        <ul>
          <li>
            <a href="javascript:;">
              <img src="../../public/imgs/rendering/contop1.png" alt="" />
              <div>
                <h2>家居美图</h2>
                <p>美图千千万万总有适合你</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../public/imgs/rendering/contop2.png" alt="" />
              <div>
                <h2>整屋案例</h2>
                <p>看整屋案例 装温馨小家</p>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../../public/imgs/rendering/contop3.png" alt="" />
              <div>
                <h2>图满意</h2>
                <p>720度3D设计，给你不一样的家装体验</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="con-context">
          <div class="divlists" v-for="(item, i) of copyimg" :key="i">
            <router-link :to="`/detailsimg/${item.rid}`">
              <img
                :src="item.raddress"
                @mouseenter="imghoven(item.rid)"
                @mouseleave="imghovle(item.rid)"
                alt=""
              />
            </router-link>
            <router-link :to="`/detailsimg/${item.rid}`">{{
              item.rtittle
            }}</router-link>
            <div
              class="imghov"
              :class="imghovst == item.rid ? 'imghovst' : ''"
              @mouseenter="imghoven(item.rid)"
              @mouseleave="imghovle(item.rid)"
            >
              <div>
                <a href="javascript:;" class="imghov-l">☆ 收藏</a>
                <a href="javascript:;" class="imghov-r" :class="imghovbgc%2==0?'imghovbgcy':'imghovbgcg'"
                  >装修成这样要花多少钱？</a
                >
              </div>
            </div>
          </div>
        </div>
        <p v-if="pshow">加载中...</p>
        <p v-else>抱歉给不了更多了...</p>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imglists: {},
      copyimg: [],
      j: 16,
      changj: 16,
      pshow: true,
      imghovst: "",
      imghovbgc:0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollBottom);
    this.axios.get("/rendering").then((result) => {
      // console.log(result);
      let res = result.data;
      res.forEach((item) => {
        item.raddress = require(`../../public/imgs/rendering/${item.raddress}`);
      });
      this.imglists = result.data;
      for (let i = 0; i < this.j; i++) {
        this.copyimg.push(this.imglists[i]);
      }
    });
  },
  methods: {
    selclick(msg){
        this.$router.push({path:'/search',query:{msg:msg}});
    },
    imghoven(i) {
      this.imghovst = i;
      this.imghovbgc++;
    },
    imghovle(i) {
      this.imghovst = "";
    },
    scrollBottom() {
      //加载更多
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight && scrollTop > 100) {
        //写后台加载数据的函数
        setTimeout(() => {
          if (this.copyimg.length < this.imglists.length) {
            let lg = this.imglists.length - this.copyimg.length;
            this.j += 16;
            if (lg <= 16) {
              this.j = this.imglists.length;
              this.pshow = false;
            }
            for (let i = this.changj; i < this.j; i++) {
              this.copyimg.push(this.imglists[i]);
            }
            this.changj += 16;
          }
        }, 1000);
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollBottom);
  },
};
</script>

<style lang="scss" scoped>
.navitem {
  min-width: 1220px;
  width: 100%;
  height: 38px;
  padding-top: 17px;
  ul {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    font-size: 14px;
    a {
      color: #333;
      margin: 0 5px;
      &:hover {
        color: #0cb46a;
      }
    }
    & > :first-child a {
      color: #0cb46a;
    }
  }
}
.banner {
  width: 100%;
  height: 420px;
  background-color: rgb(240, 240, 240);
  .center {
    min-width: 1220px;
    width: 1220px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    .left {
      width: 314px;
      height: 100%;
      background-color: #fff;
      // box-shadow:inset 0px 15px 10px -15px #000;
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 93%, 0.5),
        hsla(0, 0%, 100%, 0) 3%
      );
      .left-t {
        width: 284px;
        margin-left: 30px;
        margin-top: 30px;
        text-align: left;
        & > :first-child {
          font-size: 18px;
          color: #333;
        }
        & > :first-child + span {
          font-size: 12px;
          color: #999;
          opacity: 0.5;
          letter-spacing: 3px;
          margin-left: 8px;
        }
        div {
          margin-top: 20px;
          a {
            display: inline-block;
            width: 60px;
            margin: 0 10px 8px 0;
            color: #666;
            font-size: 12px;
            &:hover {
              color: #0cb46a;
            }
          }
        }
      }
    }
    .right {
      width: 906px;
      height: 100%;
      background-color: rgb(72, 109, 72);
    }
  }
}
.container-top {
  width: 100%;
  height: 150px;
  margin: 30px 0;
  ul {
    width: 1220px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    li {
      width: 393px;
      height: 100%;
      overflow: hidden;
      position: relative;
      a {
        display: inline-block;
        &:hover > img {
          transform: scale(1.1);
        }
        img {
          display: inline-block;
          transition: 0.5s;
        }
        div {
          position: absolute;
          width: 393px;
          margin-top: 50px;
          top: 0;
          left: 0;
          text-align: center;
          color: #fff;
          h2 {
            font-size: 34px;
            font-weight: normal;
          }
          p {
            font-size: 16px;
            color: #fff;
          }
        }
      }
    }
  }
}
.container {
  width: 100%;
  background-color: #f8f8f8;
  padding-top: 10px;
  margin-bottom: 50px;
  & > p {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: center;
  }
  .con-context {
    width: 1220px;
    margin: 20px auto 0;
    column-count: 4;
    column-gap: 20px;
    .divlists {
      width: 290px;
      padding-bottom: 30px;
      position: relative;
      & > :nth-child(1) {
        display: inline-block;
        img {
          margin-bottom: 15px;
          width: 290px;
        }
      }
      & > :nth-child(2) {
        display: inline-block;
        text-align: left;
        font-size: 16px;
        width: 290px;
        color: #111;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      a:hover {
        color: #f25618;
      }
      .imghov {
        width: 100%;
        height: 35px;
        position: absolute;
        bottom: 74px;
        display: none;

        & > div {
          display: flex;
          .imghov-l {
            padding-left: 20px;
            width: 96px;
            line-height: 35px;
            font-size: 14px;
            color: #fff;
            background-color: #12121280;
            height: 35px;
          }
          .imghov-r {
            width: 164px;
            line-height: 35px;
            font-size: 14px;
            padding-left: 10px;
            color: #fff;
            height: 35px;
          }
          .imghovbgcy{
            background-color: #e26b24;
          }
          .imghovbgcg{
            background-color: #14b06a;
          }
        }
      }
      .imghovst {
        display: block;
      }
    }
  }
}
</style>