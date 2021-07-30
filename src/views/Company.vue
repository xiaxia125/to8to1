<template>
  <div>
    <my-head></my-head>*
    <div>
      <!-- 容器 -->
      <div class="contain">
        <!-- 居中 -->
        <div class="wai">
          <!-- 左侧 -->
          <div class="zuo">
            <!-- 表头 -->
            <div class="head">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>郑州装修</el-breadcrumb-item>
                <el-breadcrumb-item>郑州装修公司</el-breadcrumb-item>
                <el-breadcrumb-item>共60结果</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <!-- 内容 -->
            <div class="type">
              <dl>
                <dt>施工方式</dt>
                <dd>
                  <a href="javascript::">全部</a><a href="javascript::">半包装修</a
                  ><a href="javascript::">全包装修</a><a href="javascript::">纯设计</a
                  ><a href="javascript::">软装</a><a href="javascript::">全屋装修</a>
                </dd>
              </dl>
              <dl>
                <dt>类型</dt>
                <dd>
                  <a href="javascript::">全部</a>
                  <a href="javascript::" @click="home">家装 </a>
                  <a href="javascript::" @click="gome">工装</a>
                  <ul>
                    <li class="a" v-show="visible">
                      <a href="javascript::">全部</a><a href="javascript::">小户型</a
                      ><a href="javascript::">普通住宅</a><a href="javascript::">复式</a
                      ><a href="javascript::">别墅</a><a href="javascript::">局部装修</a>
                      <a href="javascript::">其他</a>
                    </li>
                    <li class="b" v-show="able">
                      <a href="javascript::">全部</a><a href="javascript::">餐厅</a><a href="javascript::">商铺</a
                      ><a href="javascript::">展厅</a><a href="javascript::">办公室</a
                      ><a href="javascript::">休闲娱乐</a> <a href="javascript::">酒店</a>
                      <a href="javascript::">其他</a>
                    </li>
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>服务区域</dt>
                <dd>
                  <a href="javascript::">全部</a><a href="javascript::">二七区</a
                  ><a href="javascript::">管城回族区</a><a href="javascript::">惠济区</a
                  ><a href="javascript::">金水区</a><a href="javascript::">上街区</a>
                  <a href="javascript::">中原区</a><a href="javascript::">巩义市</a><a href="javascript::">新郑市</a
                  ><a href="javascript::">新密市</a><a href="javascript::">登封市</a
                  ><a href="javascript::">荥阳市</a> <a href="javascript::">中牟市</a>
                </dd>
              </dl>
              <dl>
                <dt>服务保障</dt>
                <dd class="fuxuan">
                  <a href="javascript::">全部</a> <input type="checkbox" value="fw" />
                  <p>先装修后支付</p>
                  <input type="checkbox" value="fw" />
                  <p>正品辅材</p>
                  <input type="checkbox" value="fw" />
                  <p>装修分期</p>
                </dd>
              </dl>
              <dl>
                <dt>承接价位</dt>
                <dd class="fuxuan">
                  <a href="javascript::">全部</a> <input type="checkbox" value="fe" />
                  <p>3万以下</p>
                  <input type="checkbox" value="fe" />
                  <p>3-5万</p>
                  <input type="checkbox" value="fe" />
                  <p>5-8万</p>
                  <input type="checkbox" value="fe" />
                  <p>8-12万</p>
                  <input type="checkbox" value="fe" />
                  <p>12-18万</p>
                  <input type="checkbox" value="fe" />
                  <p>18-30万</p>
                  <input type="checkbox" value="fe" />
                  <p>30-100万</p>
                  <input type="checkbox" value="fe" />
                  <p>100万以上</p>
                </dd>
              </dl>
            </div>
            <!-- 中间装修公司表头-->
            <div>
              <div class="header">
                <a href="javascript::" onClick="heu" id="gene">综合排序<i>↓</i></a>
                <a href="javascript::" onClick="heu" id="gene">好评率<i>↓</i></a>
                <a href="javascript::" onClick="heu" id="gene">签约人数<i>↓</i></a>
                <a href="javascript::" onClick="heu" id="gene">服务人数<i>↓</i></a>
              </div>
            </div>
            <!-- 装修公司 -->
            <div class="gongsi">
              <div class="max" v-for="(item, i) in body" :key="i">
                <div class="firm">
                  <!-- 图片 -->
                  <div class="imgs">
                    <img :src="item.photo" alt="" class="img" />
                  </div>
                  <!-- 右侧分支 -->
                  <div class="firm-right">
                    <div>
                      <router-link style="fontSize: 30px" :to="`/detailscom/${item.cid}`">
                       {{ body[i].caption
                      }}</router-link>
                    </div>
                    <div class="xing">
                      <div>
                        <img
                          src="../../public/imgs/commend/rate_5.png"
                          alt=""
                        />
                      </div>
                      <span>2905条</span>
                      <span>近期服务1323人</span>
                      <span>场均4-6万</span>
                      <span>日记57篇</span>
                      <i class="el-icon-phone"></i>
                      <span>{{ body[i].cell }}</span>
                    </div>
                    <div class="top">
                      <span>2020装修公司榜华中地区TOP10</span>
                      <span>先装修后支付</span>
                      <span>装修分期</span>
                    </div>
                    <div class="chu">
                      <img
                        src="../../public/imgs/commend/icon_activity.png"
                        alt=""
                      />
                      <span>交718抵5000</span>
                    </div>
                    <div class="chu">
                      <img
                        src="../../public/imgs/commend/icon_ticket.png"
                        alt=""
                      />
                      <span>签单送全房窗帘</span>
                    </div>
                    <div class="long">
                       
                      <img
                        alt=""
                        :src="item"
                        v-for="(item, i) in item.map"
                        :key="i"
                      />
                      <!-- <img
                src="../../public/imgs/commend/eb10cf36cdb94ca6855686ec62d15af1_230x160M.png"
                alt=""
              />
              <img
                src="../../public/imgs/commend/c47f6daf5fc8c0d2369a86f6b4dfbca4_230x160M.png"
                alt=""
              />
              <img
                src="../../public/imgs/commend/bf738ad85bde60e3307ca9bb1a3010aa_230x160M.png"
                alt=""
              /> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="paging">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="total"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="queryInfo.pagenum"
                  :page-size="queryInfo.pagesize"
                  :page-sizes="[1,2,5,10]"

                >
                </el-pagination>
              </div>
            </div>
          </div>

          <!-- 右侧 -->
          <div class="you">
            <div class="commend">
              <div style="width: 100%">
                <img
                  src="../../public/imgs/commend/data.png"
                  alt=""
                  style="width: 100%"
                />
              </div>
              <!-- 装修公司 1-->
              <div class="ke" >
                <div class="fang"><p>1</p></div>
                <img
                  src="../../public/imgs/commend/headphoto_s_1673623_s.jpg"
                />
                <div class="text">小龙装饰公司</div>
              </div>
              <!-- 2 -->
              <div class="ke" >
                <div class="fang color"><p>2</p></div>
                <img src="../../public/imgs/commend/headphoto_7956394_s.jpg" />
                <div class="text">鼎美新装饰</div>
              </div>
              <!-- 3 -->
              <div class="ke" >
                <div class="fang color2"><p>3</p></div>
                <img
                  src="../../public/imgs/commend/headphoto_s_10552215_s.png"
                />
                <div class="text">荣辉装饰</div>
              </div>
              <!-- 4 -->
              <div class="ke" >
                <div class="fang color3"><p>4</p></div>
                <img
                  src="../../public/imgs/commend/headphoto_s_10778472_s.jpg"
                />
                <div class="text">诗艺居装饰</div>
              </div>
              <!-- 5 -->
              <div class="ke" >
                <div class="fang color3"><p>5</p></div>
                <img
                  src="../../public/imgs/commend/headphoto_s_14736666_s.jpg"
                />
                <div class="text" to="/detailscom">百乐装饰</div>
              </div>
              <!-- 6 -->
              <div class="ke">
                <div class="fang color3"><p>6</p></div>
                <img
                  src="../../public/imgs/commend/headphoto_s_8825778_s.jpg"
                />
                <div class="text" to="/detailscom">木林景装饰</div>
              </div>

              <!-- 右侧文本栏 -->
              <div class="commend time">
                <div class="biaotou">
                  在土巴兔找装修公司价格实惠;<br />施工质量严格监管，不低于行业标<br />准。
                </div>
                <div class="dotted">
                  <img src="../../public/imgs/commend/1.png" alt="" />
                  <p>不懂装修注意事项？</p>
                  <p>土巴兔300名家装顾问.免费一<br />对一帮你解疑惑。</p>
                </div>
                <div class="dotted dat">
                  <img src="../../public/imgs/commend/3.png" alt="" />
                  <p>不懂验房和装修验收？</p>
                  <p>200名专业质检免费帮你做3次<br />验收。</p>
                </div>
                <div class="dotted dat">
                  <img src="../../public/imgs/commend/2.png" alt="" />
                  <p>怕装修猫腻、偷工减料？</p>
                  <p>"五星服务"、"四标规范"免费帮<br />你做把控。</p>
                </div>
                <div class="dotted dat">
                  <img src="../../public/imgs/commend/0.png" alt="" />
                  <p>怕给了钱，质量没保障？</p>
                  <p>"装修保"免费帮你保障，满意<br />了才付款装修。</p>
                  <router-link to="/detailscom/2"
                    ><button>享受省心的装修服务</button></router-link
                  >
                </div>
              </div>
              <!-- 右侧图片 -->
              <div class="c1">
                <img
                  src="../../public/imgs/company/9107f27fcd27ea782184c8333420d857.png"
                  alt=""
                />
              </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<style lang="scss" scoped>
.contain {
  width: 100%;
  //   height: 5000px;
  // min-width: 1450px;
  // max-width: 1450px;
  //   background-color: blueviolet;
  .wai {
    width: 80%;
    min-width: 1000px;
    max-width: 1000px;
    margin: 0 auto;
    // background-color: chartreuse;
    // height: 500px;
    display: flex;
    .zuo {
      width: 90%;
      // height: 500px;
      margin-top: 50px;
      // background-color: chocolate;
      .head {
        width: 100%;
        height: 60px;
        // background-color: brown;
        border: 1px solid #ddd;
        line-height: 40px;
        .el-breadcrumb {
          margin-top: 18px;
          margin-left: 10px;
        }
      }
      .type {
        width: 100%;
        //   height: 500px;
        //   background-color: darkorange;
        dl {
          width: 100%;
          height: 60px;
          //   background-color: greenyellow;
          border: 1px solid #ddd;
          dt {
            width: 120px;
            text-align: center;
            line-height: 60px;
            background-color: #f8f8f8;
            border-right: 1px solid #ddd;
          }
          dd {
            display: block;
            width: 78%;
            margin: -50px 0 0 140px;
            a {
              margin-right: 30px;
              font-size: 10px;
              color: #66666a;
            }
            a:hover {
              color: #0db469;
            }
            a:nth-child(1) {
              color: #0db469;
            }
          }
          .fuxuan {
            p {
              display: inline-block;
              font-size: 14px;
              margin-left: 5px;
              margin-right: 18px;
              color: #66666a;
            }
            p:hover {
              color: #0db469;
            }
          }
        }
      }
      .header {
        width: 100%;
        height: 40px;
        margin-top: 50px;
        border: 1px solid #ddd;
        margin-bottom: 60px;
        a {
          display: block;
          width: 100px;
          height: 40px;
          float: left;
          border-right: 1px solid #ddd;
          line-height: 40px;
          text-align: center;
          color: #666;
          i {
            margin: 0 0 0px 5px;
          }
        }
        a:nth-child(1) {
          color: #0db469;
        }
      }
      .gongsi {
        width: 100%;
        // height: 500px;
        // background-color: rgb(25, 233, 181);
        .max {
          width: 100%;

          .firm {
            width: 100%;

            // height: 450px;
            .imgs {
              width: 80px;
              height: 100px;
              display: inline-block;
              .img {
                width: 100%;
                /* height: 50px; */
                border: 1px solid #ddd;
                border-radius: 50%;
              }
            }
            .firm-right {
              display: inline-block;
              width: 100%;
              height: 400px;
              margin-left: 100px;
              margin-top: -100px;
              .xing {
                height: 20px;
                margin-top: 20px;
                img {
                  width: 80px;
                  margin: 0px 5px 0 0;
                  float: left;
                }
                span {
                  display: inline-block;
                  margin: -30px 10px 0 0px;
                }
                span:nth-child(5) {
                  margin-right: 60px;
                  color: #f26f20;
                }
                .el-icon-phone {
                  color: #f26f20;
                }
                span:last-child {
                  font-size: 18px;
                }
              }
              .top {
                width: 90%;
                height: 30px;
                margin-top: 20px;
                span {
                  display: inline-block;
                  height: 30px;
                  text-align: center;
                  line-height: 30px;
                  margin-right: 20px;
                }
                span:nth-child(1) {
                  width: 240px;
                  background-color: #fff0ec;
                  color: #ff5921;
                }
                span:nth-child(2) {
                  width: 110px;
                  border: 1px solid #ddd;
                }
                span:nth-child(3) {
                  width: 80px;
                  border: 1px solid #ddd;
                }
              }
              div h1 {
                font: bold 30px "华文楷体";
                color: black;
              }
              .chu {
                margin-top: 20px;
                height: 20px;
                img {
                  width: 2%;
                  // float: left;
                  margin-right: 15px;
                }
                span {
                  line-height: 20px;
                  font-size: 18px;
                }
              }
              .long {
                width: 90%;
                margin-top: 20px;
                margin-right: 0;
                img {
                  width: 20%;
                  /* display: inline-block; */
                  margin-right: 30px;
                }
              }
            }
          }
        }
      }
      .paging {
        width: 100%;
        text-align: center;
        margin-top: 50px;
      }
      .paging .el-pagination {
        width: 100%;
      }
    }

    .you {
      width: 33%;
      margin-top: 50px;
      margin-left: 30px;
      //   height: 500px;
      // background-color: darkgreen;
      .commend {
        width: 100%;
        // height: 650px;
        border: 1px solid #ddd;
        // position: relative;
        // margin: 15px 0 0 1120px;
        // min-width: 10%;
        margin-bottom: 30px;
        .ke {
          width: 100%;
          //   height: 500px;
          .fang {
            width: 30px;
            height: 35px;
            background-color: rgb(108, 30, 210);
            border-bottom-left-radius: 40%;
            border-bottom-right-radius: 40%;
            // float: left;
            display: inline-block;
            margin: 25px 0 0 20px;
          }
          img {
            display: inline-block;
            width: 15%;
            border: 1px solid red;
            border-radius: 50%;
            margin: 0 10px 0 20px;
          }
          p {
            font-size: 20px;
            text-align: center;
            line-height: 30px;
            color: white;
          }
          .text {
            display: inline-block;
            font-size: 20px;
            line-height: 80px;
            color: black;
          }
          .color {
            background-color: darkorange;
          }
          .color2 {
            background-color: rgb(0, 132, 255);
          }
          .color3 {
            background-color: gray;
          }
        }
        .biaotou {
          width: 100%;
          font: bold 16px "华文楷体";
          color: black;
          height: 50px;
          margin-top: 10px;
          margin-left: 10px;
        }
      }
      .time {
        div p {
          margin: 10px 0 0 70px;
        }
        p:nth-child(1) {
          font-size: 16px;
          color: gray;
          margin-top: 40px;
        }
        p:nth-child(2) {
          font-size: 18px;
          margin-bottom: 30px;
          margin-top: 50px;
        }
        .dat {
          p:nth-child(1) {
            margin-top: 30px;
          }
          button {
            width: 95%;
            height: 50px;
            border: 1px solid #f26f20;
            background-color: #f26f20;
            color: white;
            margin: 15px 5px;
          }
        }
      }
      .time .dotted {
        border-bottom: 1px dotted #ddd;
        img {
          width: 20%;
          float: left;
          margin-top: 10px;
          margin-left: 10px;
          margin-right: 10px;
        }
      }
      .c1 {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
<script>
// function heu(){
//     document.getElementById('gene').style.color='blue';
// };
export default {
  data() {
    return {
      checkList: [],
      visible: true,
      able: false,
      body: {},
      imgarr: [],
      total:1,
      queryInfo:{
        query:'',
        pagenum:1,
        pagesize:1
      }
    };
  },
  mounted() {
    this.axios.get("/company").then((result) => {
      this.body = result.data;
      //  console.log(result)
      //  console.log(this.body[i].photo)
      this.body.forEach((item) => {
        // console.log(item.photo)
        item.photo = require(`../../public/imgs/company/tupian/${item.photo}`);
        item.map = item.map.split("|");

        //  console.log(item.map);
        console.log(item.map);

        //  .forEach(it=>{
        //   console.log(it);
        for (var i = 0; i < item.map.length; i++) {
          item.map[
            i
          ] = require(`../../public/imgs/company/tupian/${item.map[i]}`);
        }
        // })
      });
    });
  },
  methods: {
    home() {
      this.visible = true;
      this.able = false;
    },
    gome() {
      this.visible = false;
      this.able = true;
    },
    handleSizeChange(newsize){
      console.log(newsize)
      this.queryInfo.pagesize = newsize
      this.userlistinfo()
    },
    handleCurrentChange(newPage){
      console.log(newPage)
      this.queryInfo.pagenum = newPage
      this.userlistinfo()
    }
  },
};
</script>