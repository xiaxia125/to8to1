<template>
  <div>
    <my-head></my-head>
    <div class="fu">
      <div class="wai">
        <!-- 装饰公司 -->
        <div class="contain">
          <div class="head">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/Company' }"
                >郑州装修</el-breadcrumb-item
              >
              <el-breadcrumb-item>郑州装修公司</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/' }">
                {{detailscom.caption}}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- 顶部模块 -->
          <div class="shell">
            <div class="inner">
              <!-- 左侧 -->
              <div class="left">
                <el-carousel indicator-position="outside">
                  <el-carousel-item
                    v-for="(item, index) in list_img"
                    :key="index"
                  >
                    <h3 class="small">
                      <img :src="item" alt="" />
                    </h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <!-- 右侧 -->
              <div class="right">
                <!-- 第一行 -->
                <div class="one">
                  <p>{{detailscom.caption}}</p>
                  <button class="ying">营</button>
                  <button class="ren">认</button>
                  <span>保证金：</span>
                  <span>¥ 40000</span>
                  <span class="koub">口碑：</span>
                  <img src="../../public/imgs/commend/rate_5.png" alt="" />
                  <div>
                    <img
                      src="../../public/imgs/commend/erweima.png"
                      alt=""
                      class="erwei"
                    />
                    <div class="er">
                      <img
                        src="../../public/imgs/commend/T8T.93aed2aac4fea2323686f3717acf2bbe.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <!-- 第二行 -->
                <div class="aging">
                  <span>先装修后支付</span>
                  <span>装修分期</span>
                </div>
                <!-- 第三行 -->
                <div class="analy">
                  <div class="shuju">
                    <p>1126</p>
                    <p>设计案例</p>
                  </div>
                  <div class="shuju">
                    <p>106</p>
                    <p>装修工地</p>
                  </div>
                  <div class="shuju">
                    <p>100%</p>
                    <p>好评率</p>
                  </div>
                </div>
                <!-- 第四行 -->
                <div class="five">
                  <img src="../../public/imgs/commend/phone.png" alt="" />
                  <p>{{detailscom.cell}}</p>
                </div>
                <!-- 第五行 -->
                <div class="size">
                  <p>地址：</p>
                  <p>郑州市中原区巨正大厦A座9楼</p>
                </div>
                <!--第六行 -->
                <div class="btn">
                  <button @click="free">免费预约</button>
                  <p>已有</p>
                  <p>17758</p>
                  <p>人咨询</p>
                </div>
                <!--  -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 下部分板块 -->
      <div class="xia">
        <!-- 居中 -->
        <div class="clou">
          <!-- 左大 -->
          <div class="lefted">
            <!-- 优惠券  -->
            <div class="youhui">
              <div>
                <p>交718抵5000</p>
                <p>2021.07.05-2021.08.31</p>
                <button @click="free">马上领劵</button>
              </div>
              <div>
                <p>签单送全房窗帘</p>
                <p>2021.07.05-2021.09.01</p>
                <button @click="free">马上领劵</button>
              </div>
            </div>
            <!-- 设计案例 -->
            <div class="case">
              <div class="design">
                <div>
                  <span>设计案例</span>
                  <span>全部1444套</span>
                </div>
                <div class="cad">
                  <div class="cadd" v-for="(item, i) in 6" :key="i">
                    <img
                      src="../../public/imgs/commend/20210514117835820161620962954106.jpg"
                      alt=""
                    />
                    <p>90平方的现代简约风、温馨奢华</p>
                    <p>71㎡/2室1厅/现代简约/全部</p>
                    <span><i>7</i>万</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 右小 -->
          <div class="righted">
            <div class="suuer">
              <div class="survey">
                <div class="modu">
                  <div>服务概况</div>
                </div>
              </div>
              <div class="serve">
                <p>营业时间:</p>
                <p>周一~周日，每天09:00-22:00</p>
                <p>承接价位:</p>
                <p>0-30万</p>
                <p>服务区域:</p>
                <p>
                  二七区、管城回族区、惠济区、金水区、中原区、新郑市、新密市....
                </p>
                <p>专长风格:</p>
                <p>简约、现代、欧式</p>
              </div>
            </div>
            <div class="good">
              <div class="goodl">
                <p>已有<i>17799</i>人咨询</p>
                <p>服务好评率<i>99.44%</i></p>
              </div>
              <div class="baojia">
                <input
                  type="text"
                  placeholder="输入手机号，装修顾问将会联系你"
                />
                <input type="checkbox" />
                <p>我已阅读并同意</p>
                <i>《服务须知》</i>
                <button @click="free">为我报价</button>
                <p>
                  注：预约后商家会尽快回电与您联<br />系，请保证电话真实通畅
                </p>
              </div>
            </div>
          </div>

          <!--  -->
        </div>
      </div>
      <!-- 立即预约 -->
      <div v-show="bg">
        <div class="bgc"></div>
        <div class="draw">
          <div class="ling">
            <p>领取<i>小龙装饰公司</i>优惠券</p>
            <a href="#" @click="close">✖</a>
          </div>
          <div class="loan">
            <img src="../../public/imgs/commend/icon_ticket.png" alt="" />
            <p>交718抵5000</p>
            <br />
            <img src="../../public/imgs/commend/icon_ticket.png" alt="" />
            <p>签单送全房窗帘</p>
          </div>
          <div class="order">
            <input
              class="phon"
              type="text"
              maxlength="11"
              placeholder="请输入手机号码，装修公司会尽快联系你"
              v-model="phone"
              @blur="shphone"
            /><br />
            <div>
              <input type="checkbox" v-model="checkVal" value="checked" />
              <p>我已同意并阅读<i>《服务须知》</i></p>
            </div>
            <div class="serve" v-show="visible">
              <p>请同意并接受<a>《隐私政策》</a><a>《服务条款》</a></p>
              <div>
                <input type="button" v-model="agree" @click="visi_disagree" />
                <input type="button" v-model="disagree" @click="visi_agree" />
              </div>
            </div>
            <input
              type="button"
              class="apply"
              value="立即预约"
              @click="order"
            />
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<style lang="scss" scoped>
body {
  background-color: #999999;
}
.fu {
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 99;

  .bgc {
    width: 100%;
    height: 134%;
    z-index: 998;
    background-color: #000;
    opacity: 0.3;
    position: absolute;
    top: -81px;
    right: 0;
  }
  .draw {
    width: 660px;
    height: 400px;
    background-color: #fff;
    z-index: 999;
    position: fixed;
    left: 35%;
    top: 20%;

    .ling {
      width: 100%;
      height: 120px;
      //  background-color: aqua;
      p {
        padding-top: 45px;
        text-align: center;
        font-size: 22px;
        i {
          font-size: 22px;
          font-weight: bold;
          color: #ff8a00;
        }
      }
      a {
        display: block;
        font-size: 30px;
        float: right;
        margin-top: -80px;
        margin-right: 10px;
        color: #999999;
      }
    }
    .loan {
      width: 90%;
      //  height: 200px;
      background: url("../../public/imgs/commend/juan.png") no-repeat;
      background-size: contain;
      margin: 0 auto;
      img {
        width: 25px;
        margin: 5px 20px;
      }
      p {
        display: inline-block;
        font-size: 20px;
      }
    }
    .order {
      width: 100%;
      height: 200px;
      //  background-color: #ff8a00;
      .phon {
        width: 50%;
        height: 40px;
        margin-top: 50px;
        margin-left: 160px;
      }
      div {
        // width: 100%;
        input {
          width: 15px;
          height: 15px;
          margin: 10px 5px 10px 160px;
        }
        p {
          display: inline-block;
          font-size: 16px;
          color: #999999;
          i {
            color: #0cb46a;
            font-size: 16px;
          }
        }
      }
      .apply {
        width: 51%;
        height: 50px;
        margin-left: 160px;
        background-color: #f15400;
        border: 1px solid #f15400;
        font-size: 20px;
        color: #fff;
      }
    }
    .serve {
      background-color: rgb(253, 253, 253);
      position: absolute;
      // width: 80px;
      height: 162px;
      bottom: 138px;
      border-radius: 10px;
      left: 150px;
      p {
        margin: 45px 0 18px 22px;
        font-size: 14px;
        a {
          color: #0dc76e;
        }
      }
      div {
        margin-top: 28px;
        input {
          width: 96px;
          height: 31px;
          display: inline-block;
          border-radius: 3px;
          border: none;
          &:nth-child(1) {
            margin: 0 18px 0 28px;
            background-color: #f5f5f5;
          }
          &:nth-child(2) {
            margin: 0 18px 0 0;
            background-color: #50ac6a;
          }
        }
      }
    }
  }
  .wai {
    width: 100%;
    //   height: 550px;
    // background-color: #666666;

    .contain {
      width: 70%;
      // height: 500px;
      // background-color: blue;
      margin: 0 auto;
      // display: flex;
      min-width: 1500px;
      max-width: 1501px;
      .head {
        width: 100%;
        height: 40px;
        // background-color: brown;
        line-height: 40px;
        margin-left: 70px;
        .el-breadcrumb {
          width: 100%;
          height: 40px;
          line-height: 40px;
          padding-top: 15px;
          .el-breadcrumb-item {
            color: #57a5ff;
          }
        }
      }
      > .shell {
        width: 97%;
        height: 370px;
        background-color: #fff;
        margin-left: 4%;
        padding-top: 30px;
        .inner {
          width: 85%;
          height: 400px;

          // background-color: orchid;
          margin: 0 auto;

          .right {
            // width: 40%;
            // height: 350px;
            // background-color: red;
            float: left;
            margin-left: 30px;
            .one {
              width: 100%;
              height: 40px;
              //  background-color: blue;
              p {
                display: inline;
                font-size: 28px;
                color: black;
                margin-right: 8px;
              }

              .ying,
              .ren {
                width: 25px;
                height: 20px;
                border: 1px solid #5cdbd3;
                color: white;
                line-height: 12px;
                margin-right: 8px;
                font-size: 16px;
                background-color: #5cdbd3;
                border-radius: 10%;
              }
              .ren {
                border: 1px solid #ffad77;
                background-color: #ffad77;
              }
              .koub {
                margin-left: 8px;
              }
              img {
                width: 80px;
                margin-right: 5px;
              }
              div {
                display: inline;
                .erwei {
                  width: 18px;
                }
                .er {
                  display: none;
                  float: right;
                  margin-top: 10px;
                  margin-right: 0;
                }
                .erwei:hover + .er {
                  display: inline-block;
                }
              }
            }
            .aging {
              width: 100%;
              // height: 20px;
              // background-color: green;
              span {
                display: inline-block;
                line-height: 20px;
                margin-right: 10px;
                text-align: center;
              }
              span:nth-child(1) {
                width: 110px;
                border: 1px solid #ff8a00;
                color: #ff8a00;
              }

              span:nth-child(2) {
                width: 80px;
                border: 1px solid #57a5ff;
                color: #57a5ff;
              }
            }
            .analy {
              width: 100%;
              margin-top: 40px;
              .shuju {
                display: inline-block;
                margin-right: 60px;
                height: 53px;
                text-align: center;
                p:nth-child(1) {
                  font-size: 22px;
                  color: black;
                  margin-bottom: 10px;
                }
                p:nth-child(2) {
                  font-size: 14px;
                }
              }
            }
            .five {
              width: 100%;
              margin-top: 30px;

              img {
                width: 22px;
              }
              p {
                display: inline-block;
                font-size: 18px;
                color: black;
                margin-left: 10px;
                line-height: 10px;
              }
            }
            .size {
              width: 100%;
              margin-top: 10px;
              p {
                display: inline-block;
                font-size: 14px;
              }
            }
            .btn {
              width: 100%;
              margin-top: 10px;
              background-color: white;
              button {
                width: 240px;
                height: 45px;
                background-color: #ff5a00;
                color: #ffffff;
                font-size: 22px;
                border: 1px solid #ff5a00;
                margin-right: 10px;
              }
              p {
                display: inline-block;
                color: #999999;
                font-style: italic;
                font-size: 12px;
              }
              p:nth-child(3) {
                color: #ff5a00;
              }
            }
          }
          .right {
            width: 60%;
            // background-color: brown;
          }
          .left {
            width: 35%;
            float: left;
            .el-carousel__item h3 {
              color: #475669;
              font-size: 14px;
              opacity: 1;
              line-height: 300px;
              margin: 0;
              text-align: center;
            }

            .el-carousel__item:nth-child(2n) {
              background-color: #99a9bf;
            }

            .el-carousel__item:nth-child(2n + 1) {
              background-color: #d3dce6;
            }

            .small img {
              width: 100%;
              // height: 100%;
            }

            .el-carousel__container {
              width: 1226px;
              height: 460px;
            }
          }
        }
      }
    }
  }
  .xia {
    width: 100%;
    // height: 1000px;
    margin: 0px auto;
    min-width: 1500px;
    max-width: 1501px;
    .clou {
      width: 100%;
      // height: 500px;
      // background-color: #ff8a00;

      display: flex;
      .lefted {
        width: 80%;
        // height: 500px;
        // background-color: aqua;
        display: block;

        .youhui {
          width: 90%;
          height: 200px;
          background-color: #fff;
          border: 1px solid #fff;
          margin: 20px auto;

          div {
            float: left;
            width: 45%;
            height: 45%;
            margin-top: 40px;
            background: url(../../public/imgs/commend/youhui.png) no-repeat;
            background-size: 100%;
            margin-right: 10px;
            margin-left: 15px;
            max-width: 67%;
            // position: absolute;
            // top: 0;
            // left: 0;
            p {
              // position: relative;
              // left: 54px;
              // display: inline-block;
              margin-top: 2%;
              margin-left: 12%;
              width: 200px;
              // max-height: 37px;
              color: #916d35;
              // overflow: hidden;
            }
            button {
              display: block;
              background-color: #f15400;
              width: 76px;
              height: 30px;
              line-height: 28px;
              color: #fff;
              font-size: 12px;
              border: 1px solid #f15400;
              border-radius: 50px;
              // display: fixed;
              margin: -6% 0 0 78%;
            }
          }
        }
        .case {
          width: 90%;
          height: 800px;
          background-color: #fff;
          border: 1px solid #fff;
          margin: 0 auto;
          .design {
            width: 90%;
            height: 500px;
            // background-color: chartreuse;
            margin: 0 auto;
            div {
              width: 100%;
              height: 80px;
              line-height: 80px;
              // background-color: chocolate;
              span {
                font-weight: bold;
                font-size: 20px;
              }
              span:nth-child(2) {
                float: right;
                margin-top: 20px;
              }
            }
            .cad {
              width: 100%;
              height: 100%;

              // background-color: blue;

              .cadd {
                width: 280px;
                height: 300px;
                // background-color: crimson;
                overflow: hidden;
                display: inline-block;
                margin-right: 40px;
                img {
                  width: 100%;
                  overflow: hidden;
                  transition: all 0.5s ease-in-out;
                }
                img:hover {
                  transform: scale(1.15) translateZ(0);
                }
                p:nth-child(2) {
                  display: block;
                  margin-top: 10px;
                  height: 30px;
                  font-weight: bold;
                  font-size: 19px;
                }
                p:nth-child(3) {
                  color: #999;
                  font-size: 16px;
                }
                span {
                  float: right;
                  color: #999;
                  margin-top: -25px;
                  font-size: 20px;
                  i {
                    color: #ff5a00;
                    font-size: 20px;
                  }
                }
              }
            }
          }
        }
      }
      .righted {
        display: block;

        width: 20%;
        // height: 500px;
        // background-color: #fff;
        // border: 1px solid #fff;
        margin: 20px auto;
        .suuer {
          width: 100%;
          height: 380px;
          border: 1px solid #fff;
          background-color: #fff;
          .survey {
            width: 100%;
            // margin-left: 10%;
            border-bottom: 1px solid #ddd;
            .modu {
              width: 100%;
              height: 50px;
              // background-color: aqua;
              div {
                width: 50%;
                height: 100%;
                font-size: 20px;
                color: #0cb46a;
                font-weight: bold;
                text-align: center;
                line-height: 50px;
              }
            }
          }
          .serve {
            width: 90%;
            margin-left: 10%;
            // height: 300px;
            // background-color: blue;
            p {
              display: inline-block;
              width: 100%;
              height: 25px;
              // background-color: chartreuse;
              font-size: 16px;
            }
            p:nth-child(odd) {
              font-weight: bold;
              font-size: 16px;
              margin-top: 15px;
            }
            p:nth-child(even) {
              margin-bottom: 10px;
            }
          }
        }
        .good {
          margin-top: 20px;
          width: 100%;
          // height: 200px;
          background-color: #fff;
          border: 1px solid #fff;
          .goodl {
            width: 100%;
            height: 50px;
            // background-color: brown;
            padding-top: 30px;
            p {
              text-align: center;
              height: 22px;
              i {
                font-weight: bold;
              }
            }
          }
          .baojia {
            width: 100%;
            margin-left: 10px;
            // background-color: cadetblue;
            input:nth-child(1) {
              width: 90%;
              height: 30px;
              display: block;
              margin-bottom: 5px;
              border: 1px solid #ddd;
            }
            p {
              font-size: 16px;
              display: inline-block;
              margin-left: 5px;
              margin-bottom: 15px;
            }
            i {
              color: #0cb46a;
              font-size: 10px;
            }
            button {
              width: 90%;
              height: 30px;
              background-color: #ff5a00;
              border: 1px solid #ff5a00;
              margin-bottom: 20px;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: "Swiper",
  props: ["cid"],
  data() {
    return {
      list_img: [],
      bg: false,
      phone: "",
      checkVal: [],
      agree: "不同意",
      disagree: "同意",
      visible: false,
      uname: "预约用户",
      body: {},
      detailscom: {},
    };
  },
  mounted(){
   window.scrollTo(0,0);

   this.axios.get("/detailscom",{params:{cid:this.cid}}).then((result)=>{
      this.detailscom = result.data[0];
      // console.log(this.detailscom)
      let one = this.detailscom.map
      let img_array = one.split('|');
      // console.log(img_array); 
      let one_address =(require(`../../public/imgs/company/tupian/${img_array[0]}`));
      // console.log(one_address);
      let two_address = (require(`../../public/imgs/company/tupian/${img_array[1]}`));
      // console.log(two_address);
      let three_address = (require(`../../public/imgs/company/tupian/${img_array[2]}`));
      // console.log(three_address);
      let four_address =(require(`../../public/imgs/company/tupian/${img_array[3]}`));
      // console.log(four_address);
      let a = [one_address,two_address,three_address,four_address];
      // console.log(a);
      this.list_img = a ;
   });
  },
  methods: {
    free() {
      this.bg = true;
    },
    shphone() {
      let cell =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (this.phone == " ") {
        alert("请输入您的手机号码！");
        return false;
      } else if (cell.test(this.phone)) {
        // alert('手机号格式正确')
        return true;
      } else {
        alert("手机号格式不正确");
        return false;
      }
    },
    order() {
      if (this.shphone() && this.checkVal == "") {
        this.visible = true;}
      else if (this.shphone() && this.checkVal == "checked") {
      
        // alert('预约失败')
        this.axios.get(`/isorder/${this.phone}`).then((result) => {
          // console.log(result);
        
        if (result.data == 1) {
          alert("恭喜你！预约成功，稍后工作人员会电话联系您");
          this.bg = false;
          this.axios
            .post("/order", `oname=${this.uname}&ophone=${this.phone}`)
            .then((result) => {
              // console.log(result);
            });
        }else{
        alert("亲！您已经预约过了哦");
        this.bg = false;
        }
       });
       };
      
    },
    // 点击时复选框不选中
    visi_disagree() {
      this.visible = false;
    },
    // 点击时选择选中
    visi_agree() {
      this.visible = false;
      this.checkVal = "checked";
    },
    // 关闭预约
    close() {
      this.bg = false;
    },
  },
};
</script>