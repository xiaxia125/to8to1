<template>
  <div>
    <my-head></my-head>
    <div id="strategy">
      <!-- 黑色弹出框 -->
       
      <div class="order_bg" v-show="bg_order">
        <div class="bg_black"></div>
        <div class="dialog">
          <i @click="close"></i>
          <div>
            <img src="../../public/imgs/strategy/dialog.png" alt="" class="" />
          </div>
        </div>
      </div>
      <!-- 攻略 导航 -->
      <div class="stra_nav">
        <div class="inside">
          <ul>
            <li><a href="#" class="nav_a">攻略知识</a></li>
            <p>|</p>
            <li><a href="#">3分钟学装修</a></li>
            <p>|</p>
            <li><a href="#">业主日记</a></li>
            <p>|</p>
            <li><a href="#">在线问答</a></li>
          </ul>
        </div>
      </div>
      <!-- 导航下大图 -->
      <div class="stra_img">
        <div class="inside">
          <form>
            <ul>
              <li>
                <img src="../../public/imgs/strategy/xzx_bg01.png" />
              </li>
              <li>
                <input
                  type="text"
                  placeholder="请输入您的姓名"
                  v-model="uname"
                  @blur="reUname"
                />
              </li>
              <span class="hint">{{ verifyName }}</span>
              <li>
                <input
                  type="text"
                  placeholder="输入手机号，客服稍后联系"
                  v-model="phone"
                  maxlength="11"
                  @blur="rePhone"
                />
              </li>
              <span class="hint">{{ verifyPhone }}</span>
              <li>
                <input
                  type="button"
                  class="apply"
                  value="预约礼包"
                  @click="order"
                />
              </li>
              <li>
                <input type="checkbox" v-model="checkVal" value="checked" />
                <span> 我已阅读并接受 </span>
                <a href="#">《隐私政策》</a>
                <a href="#">《服务条款》</a>
              </li>
            </ul>
            <div class="serve" v-show="visible">
              <p>请同意并接受<a>《隐私政策》</a><a>《服务条款》</a></p>
              <div>
                <input type="button" v-model="agree" @click="visi_disagree" />
                <input type="button" v-model="disagree" @click="visi_agree" />
              </div>
            </div>
          </form>
          <div>
            <a href="#">
              <img
                src="../../public\imgs\strategy\1c9ba70b38696bd0fcdae0f7e770913265740.jpg"
              />
            </a>
          </div>
        </div>
      </div>
      <!-- 报价流程 -->
      <div class="stra_flow">
        <div class="inside">
          <ul>
            <li>
              <a href="#"
                ><img
                  src="../../public\imgs\strategy\20190617_d4cf3b8f3a6e08b8c1dbyBgUbxCIkPJg.jpg"
                  alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  src="..\..\public\imgs\strategy\20190617_0a155f60e282e524a46cmJRmMnxY5uFH.jpg"
                  alt=""
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 装修前中后 -->
      <div class="stra_finish">
        <div class="inside">
          <ul>
            <li class="front">
              <div class="bg_img"></div>
              <div class="under">
                <ul class="under_icon">
                  <li>
                    <a href="#"><span class="bg_icon"></span>收房</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>设计</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>预算</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>合同</a>
                  </li>
                </ul>
                <ul class="under_text">
                  <li>
                    <router-link :to="`/detailsstr?id=${title3.did}`">
                        <span>{{title3.ltitle}}</span>{{title3.rtitle}}
                      </router-link>
                  </li>
                  <li>
                    <a href="#"
                      ><span>[装修常识]</span>田园风格墙面装饰的特点
                      田园风格的种类有哪些</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><span>[装修常识]</span>房屋墙面出现裂缝怎么处理
                      具体的处理方法的什么</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><span>[装修常识]</span>阁楼装修你需要注意哪些要点</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="between">
              <div class="bg_img"></div>
              <div class="under">
                <ul class="under_icon">
                  <li>
                    <a href="#"><span class="bg_icon"></span>拆改</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>水电</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>防水</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>瓦尼</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>木工</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>油漆</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>竣工</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>更多</a>
                  </li>
                </ul>
                <ul class="under_text">
                  <li>
                    <router-link :to="`/detailsstr?id=${title1.did}`">
                        <span>{{title1.ltitle}}</span>{{title1.rtitle}}
                      </router-link>
                  </li>
                  <li>
                    <a href="#"
                      ><span>[油漆]</span
                      >家里装修担心家居环境不安全？一招教你做到墙面超强防护</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><span>[油漆]</span
                      >过敏体质的福音！紫荆花超护家舒敏抗菌墙面漆评测</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><span>[油漆]</span
                      >包头墙面刮腻子价格多少？刮腻子施工的工序是什么</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="after">
              <div class="bg_img"></div>
              <div class="under">
                <ul class="under_icon">
                  <li>
                    <a href="#"><span class="bg_icon"></span>软装</a>
                  </li>
                  <li>
                    <a href="#"><span class="bg_icon"></span>入住</a>
                  </li>
                </ul>
                <ul class="under_text">
                  <li>
                    <a href="#"
                      ><span>[入住]</span>新房子墙面受潮怎么办
                      处理防潮的技巧是什么</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><span>[入住]</span>刮完腻子多久可入住
                      刷白墙的涂料含甲醛吗</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><span>[入住]</span>装修1个月能住人吗，多久才能正式入住</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><span>[入住]</span>榻榻米价格中的计算以及造价的计算</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 选材手册 -->
      <div class="stra_munual">
        <div class="inside">
          <h2 class="h2">选材手册</h2>
          <ul class="first_ul">
            <li><a href="#">橱柜</a></li>
            <li><a href="#">油漆</a></li>
            <li><a href="#">吊顶</a></li>
            <li><a href="#">灯具</a></li>
            <li><a href="#">壁纸</a></li>
            <li><a href="#">门窗</a></li>
            <li><a href="#">地板</a></li>
            <li><a href="#">装修材料</a></li>
            <li><a href="#">卫浴设备</a></li>
            <li><a href="#">瓷砖</a></li>
          </ul>
          <div class="third">
            <ul class="third_ul">
              <li class="th_bor">
                <div>
                  <a href="#">
                    <img
                      src="../../public/imgs/strategy/20210105_0fecaa35ab957d7ae9f3VRUovpky8aG1.png"
                      alt=""
                    />
                  </a>
                  <ul class="order">
                    <li class="mr12">
                      <a href="#"><span>[五金]</span>卫生间龙头的选购技巧</a>
                    </li>
                    <li class="mr12">
                      <a href="#"
                        ><span>[窗帘]</span>窗帘杆的种类 窗帘杆要怎么选择种类</a
                      >
                    </li>
                    <li class="mr12">
                      <a href="#"
                        ><span>[床上用品]</span>简单装潢要多少钱的大致估算讲解
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="th_bor">
                <div>
                  <a href="#">
                    <img
                      src="../../public/imgs/strategy/20210105_6ac2615b603e1d951b068srKAiyvdurV.png"
                      alt=""
                    />
                  </a>
                  <ul class="order">
                    <li class="mr12">
                      <router-link to="/detailsstr">
                        <span>[家具]</span>订做衣柜什么好
                        我们来看看订做衣柜的优点
                      </router-link>
                    </li>
                    <li class="mr12">
                      <router-link :to="`/detailsstr?id=${title2.did}`">
                        <span>{{title2.ltitle}}</span>{{title2.rtitle}}
                      </router-link>
                    </li>
                    <li class="mr12">
                      <router-link to="/detailsstr">
                        <span>[家用电器]</span
                        >快速了解专业安装空调和一些注意事项
                      </router-link>
                    </li>

                    <li class="mr12">
                      <router-link to="/detailsstr">
                        <span>[家用电器]</span>三匹空调多少钱
                        三匹空调品牌都有哪些
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="th_bor">
                <div class="th_third">
                  <ul>
                    <li class="mr18">
                      <a href="#">
                        <img
                          src="../../public/imgs/strategy/20190925_a4d0419eefd932321b876VHMpCzKsedv.png"
                          alt=""
                        />
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <span>辛苦装好的儿童房，台灯该怎么选择？</span>
                          </a>
                        </li>
                        <li>
                          通常台灯光线是否护眼，其光线本身的质量是基础，低蓝光、无可视...
                        </li>
                      </ul>
                    </li>
                    <li class="mr18">
                      <a href="#">
                        <img
                          src="../../public/imgs/strategy/20190925_ea78afffb8fc10111a58qbE5rpmBsGN9.jpg"
                          alt=""
                        />
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <span>
                              电视墙这样装，全家人都不愿意离开客厅了！</span
                            >
                          </a>
                        </li>
                        <li>
                          无论是大户型还是小户型的客厅，除了作为日常生活的主要活动空间...
                        </li>
                      </ul>
                    </li>
                    <li class="mr18">
                      <a href="#">
                        <img
                          src="../../public/imgs/strategy/20190924_1ac11f84b8c3df1183869AVjMt3m83VK.png"
                          alt=""
                        />
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <span
                              >新房装修有哪些讲究？
                              来听听过来人的经验，避免再入坑</span
                            >
                          </a>
                        </li>
                        <li>
                          因为装修也要花不少的钱，而且如果装修的不满意的话，这房子的就...
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="four">
            <ul class="four_ul">
              <li>
                <a href="#">
                  <img
                    src="../../public/imgs/strategy/0d467dd6a5ce6358803cbc60fb58953c31080.jpg"
                    alt=""
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="../../public/imgs/strategy/fb67c1746021dbdeb818bf270ca13d4942819.jpg"
                    alt=""
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="../../public/imgs/strategy/579e96420ce7a370db8360fcef7209c079220.jpg"
                    alt=""
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="../../public/imgs/strategy/a7672b033338880bed178ffac54e59aa81198.jpg"
                    alt=""
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 装修风水   augur 奥哥 -->
      <div class="stra_augur">
        <div class="inside">
          <h2 class="h2">装修风水</h2>
          <div class="two">
            <ul class="two_ul">
              <div class="third">
                <ul class="third_ul">
                  <li class="th_bor">
                    <div>
                      <a href="#">
                        <img
                          src="../../public/imgs/strategy/20190628_3b108dbb57a0bb979719ZA3lDJT4MOvN.png"
                          alt=""
                        />
                      </a>
                      <ul class="order">
                        <li class="mr12">
                          <a href="#"
                            ><span>[装修风水学]</span>玄关有什么讲究
                            你需要了解的玄关风水</a
                          >
                        </li>
                        <li class="mr12">
                          <a href="#"
                            ><span>[客厅风水]</span
                            >你应该知道的客厅沙发背景墙风水禁忌</a
                          >
                        </li>
                        <li class="mr12">
                          <a href="#"
                            ><span>[装修风水学]</span
                            >什么样的风水是居家好风水的标准呢?</a
                          >
                        </li>
                        <li class="mr12">
                          <a href="#"
                            ><span>[卧室风水]</span>卧室风水怎么整能旺财
                            卧室中的六大风水禁忌</a
                          >
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="th_bor">
                    <div>
                      <a href="#">
                        <img
                          src="../../public/imgs/strategy/20190628_9a296dff31cc55da71eb78yMNj7gOTR3.png"
                          alt=""
                        />
                      </a>
                      <ul class="order">
                        <li class="mr12">
                          <a href="#"
                            ><span>[装修风水学]</span>买房风水禁忌
                            最宜居住的家居风水布局</a
                          >
                        </li>
                        <li class="mr12">
                          <a href="#"
                            ><span>[卧室风水]</span
                            >房间风水的摆放禁忌和布局禁忌</a
                          >
                        </li>
                        <li class="mr12">
                          <a href="#"
                            ><span>[装修风水学]</span>门厅过道装修与风水的禁忌
                            你家犯了多少？</a
                          >
                        </li>
                        <li class="mr12">
                          <a href="#"
                            ><span>[卫生家风水]</span
                            >有关浴室镜子风水不得不说的秘密</a
                          >
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="th_bor">
                    <div class="th_third">
                      <ul>
                        <li class="mr18">
                          <a href="#">
                            <img
                              src="../../public/imgs/strategy/20190628_8d386fa7265cc910ca7bhftwMrDDaZlv.png"
                              alt=""
                            />
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                <span>洗手间颜色风水，你家装对了吗?</span>
                              </a>
                            </li>
                            <li>洗手间颜色风水上大有讲究 装对才有好运气</li>
                          </ul>
                        </li>
                        <li class="mr18">
                          <a href="#">
                            <img
                              src="../../public/imgs/strategy/20190628_ca2dae4365e908f402b4R8nbPQ3tN3Gf.png"
                              alt=""
                            />
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                <span>房间布置风水之十大要点和十大禁忌！ </span>
                              </a>
                            </li>
                            <li>
                              房间布置风水之十大要点和十大禁忌你一定要了解
                            </li>
                          </ul>
                        </li>
                        <li class="mr18">
                          <a href="#">
                            <img
                              src="../../public/imgs/strategy/20190628_87e5d196417e8938259eGkq1vjqKAK2z.png"
                              alt=""
                            />
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                <span> 别墅大门颜色及禁忌盘点 </span>
                              </a>
                            </li>
                            <li>
                              别墅大门颜色及禁忌盘点 你不知道的别墅大门风水
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <!-- 装修攻略 -->
      <div class="stra_strategy">
        <div class="inside">
          <h2 class="h2">装修攻略</h2>
          <ul class="strategy_first">
            <li v-for="(item, i) in number" :key="i">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: [
        "学区房翻新",
        "学区房改造",
        "学区房装修",
        "装饰工程的监理的过程",
        "装饰设计工程监理",
        "装饰工程监理工作",
        "装饰工程项目监理",
        "装饰全程监理",
        "装饰装饰工程监理",
        "装饰行业监理",
        "装饰的工程监理",
        "装饰现场监理",
        "装饰工程监理",
        "室内装饰监理",
        "监理装饰工程监理",
        "装饰装璜监理",
        "装饰装饰监理",
        "装饰监理装饰",
        "装饰工程施工监理",
        "施工装饰工程监理",
        "装饰监理工程",
        "监理装饰监理",
        "装潢装饰监理",
        "家庭装潢监理",
        "装潢工程监理",
        "工程装潢监理",
        "房屋装潢工程监理",
        "室内装修监理工作",
        "家居装修监理工作",
        "装修项目监理管理",
      ],
      verifyName: "",
      verifyPhone: "",
      uname: "",
      phone: "",
      checkVal: [],
      agree: "不同意",
      disagree: "同意",
      visible: false,
      bg_order: false,
      title1: {},
      title2: {},
      title3: {},
    };
  },
  methods: {
    //判断姓名
    reUname() {
      if (!this.uname) {
        this.verifyName = "请输入姓名";
        return false;
      } else {
        this.verifyName = "";
        return true;
      }
    },
    //判断手机号
    rePhone() {
      let reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
      if (!this.phone) {
        //验证成功
        this.verifyPhone = "手机号不能为空";
        return false;
      } else if (reg.test(this.phone)) {
        this.verifyPhone = "";
        return true;
      } else if (!reg.test(this.phone)) {
        //验证失败
        this.verifyPhone = "请输入正确的手机号";
        return false;
      }
    },
    // 点击预约
    order() {
      if (this.reUname() && this.rePhone() && this.checkVal == "") {
        this.visible = true;
      } else if (
        this.reUname() &&
        this.rePhone() &&
        this.checkVal == "checked"
      ) {
        this.axios
          .post("/order", `oname=${this.uname}&ophone=${this.phone}`)
          .then((result) => {
            console.log(result);
          });
        this.bg_order = true;
      }
    },
    // 关闭预约页面
    close() {
      this.bg_order = false;
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
  },
  mounted () {
    this.axios.get('/strategy').then(result=>{
      this.title1 = result.data[0];
      this.title2 = result.data[1];
      this.title3 = result.data[2];
    });
  }
};
</script>
<style lang="scss">
#strategy {
  .order_bg {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10;
    .bg_black {
      position: absolute;
      left: 0;
      top: -81px;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0);
      opacity: 0.6;
    }
    .dialog {
      position: relative;
      top: 50%;
      display: block;
      width: 800px;
      height: 500px;
      margin: -250px auto 0;
      background-color: #fff;
      z-index: 20;
      img {
        margin-top: 56px;
      }
      i {
        background-image: url(../../public/imgs/strategy/decorate_big.png);
        background-size: 650px;
        position: absolute;
        top: 15px;
        right: 15px;
        width: 25px;
        height: 25px;
        background-position: -405px -182px;
        cursor: pointer;
      }
    }
  }
  .inside {
    width: 1220px;
    margin: 0 auto;
  }
  .stra_nav {
    width: 100%;
    height: 55px;
    .inside {
      ul {
        display: flex;
        justify-content: center;
        //box-sizing: border-box;
        padding-top: 20px;
        li {
          margin: 0 21px;
          a {
            font-size: 14px !important;
            &.nav_a {
              color: #0cb46a;
            }
            &:hover {
              color: #0cb46a;
            }
          }
        }
      }
    }
  }
  .stra_img {
    height: 100%;
    background-color: #f0f0f0;
    .inside {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 30px;
      form {
        width: 314px;
        height: 420px;
        background-color: rgb(245, 245, 245);
        box-sizing: border-box;
        padding: 40px 20px 20px;
        position: relative;
        .serve {
          background-color: rgb(253, 253, 253);
          position: absolute;
          width: 274px;
          height: 162px;
          bottom: 138px;
          border-radius: 10px;
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
                background-color: #50ac6a;
              }
            }
          }
        }
        .hint {
          display: block;
          width: 200px;
          height: 12px;
          box-sizing: border-box;
          color: red;
          font-size: 16px;
          margin: -20px 0 20px 20px;
        }
        li {
          height: 50px;
          margin-bottom: 30px;

          .apply {
            width: 274px;
            padding: 0;
            background-color: #fbcc66;
          }
          input {
            padding: 0;
            width: 249px;
            height: 48px;
            border-radius: 25px;
            border: 1px solid #eee;
            padding-left: 25px;
            font-size: 16px;
          }
          &:nth-child(1) {
            margin-bottom: 30px;
            input {
              height: 3px;
            }
          }
          &:last-child {
            margin-top: -20px;
            padding-left: 10px;
            margin-bottom: 0;
            input {
              width: 14px;
              vertical-align: middle;
            }
            a {
              color: #50ac6a;
            }
          }
        }
      }
    }
  }
  //流程
  .stra_flow {
    width: 100%;
    margin-bottom: 30px;
    .inside {
      height: 180px;
      ul {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  //装修前中后
  .stra_finish {
    width: 100%;
    height: 487px;
    margin-bottom: 60px;
    .inside {
      ul {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        .bg_icon {
          display: block;
          width: 19px;
          height: 19px;
          background-image: url(../../public/imgs/strategy/xzx_index_two.png);
        }
        .front {
          border: 1px solid #eee;
          background-color: #fefff4;

          .bg_img {
            width: 393px;
            height: 200px;
            background-image: url(../../public/imgs/strategy/download.png);
            background-position: -423px -10px;
          }
          .under {
            width: 393px;
            height: 287px;
            .under_icon {
              display: flex;
              justify-content: flex-start;
              li {
                width: 97px;
                height: 161px;
                text-align: center;
                border-right: 1px solid #eee;
                box-sizing: border-box;
                &:last-child {
                  border: none;
                }
                a:hover,
                a:hover > span {
                  color: rgb(167, 167, 8);
                }
                a {
                  width: 97px;
                  height: 161px;
                  display: inline-block;
                  padding-top: 55px;
                  box-sizing: border-box;
                }
                .bg_icon {
                  overflow: hidden;
                  width: 16px;
                  height: 19px;
                  margin: 0 auto 10px;
                }
                &:nth-child(1) a span {
                  background-position: -48px -603px;
                }
                &:nth-child(2) a span {
                  background-position: -65px -603px;
                }
                &:nth-child(3) a span {
                  background-position: -82px -603px;
                }
                &:nth-child(4) a span {
                  background-position: -99px -603px;
                }
              }
            }
            .under_text {
              width: 391px;
              height: 124px;
              display: flex;
              flex-direction: column;
              padding: 15px 0 5px;
              border-top: 1px solid #eee;
              li {
                margin-bottom: 10px;
                padding-left: 21px;
                a:hover,
                a:hover > span {
                  color: rgb(246, 64, 64);
                }

                span {
                  display: inline-block;
                  padding-right: 5px;
                }
              }
            }
          }
        }
        .between {
          border: 1px solid #eee;
          background-color: #f9fffc;
          .bg_img {
            width: 393px;
            height: 200px;
            background-image: url(../../public/imgs/strategy/download.png);
            background-position: -10px -10px;
          }
          .under {
            width: 393px;
            height: 287px;
            .under_icon {
              display: flex;
              justify-content: flex-start;
              flex-wrap: wrap;
              li {
                width: 98px;
                height: 80px;
                text-align: center;
                line-height: 80px;
                border-right: 1px solid #eee;
                box-sizing: border-box;
                &:nth-child(4n) {
                  border: none;
                }
                a:hover,
                a:hover > span {
                  color: rgb(80, 184, 130);
                }
                a {
                  width: 98px;
                  height: 80px;
                  display: inline-block;
                  padding-top: 20px;
                  box-sizing: border-box;
                }

                .bg_icon {
                  overflow: hidden;
                  height: 19px;
                  margin: 0 auto 10px;
                }
                &:nth-child(1) a span {
                  background-position: -116px -603px;
                  width: 17px;
                }
                &:nth-child(2) a span {
                  background-position: -134px -603px;
                  width: 16px;
                }
                &:nth-child(3) a span {
                  background-position: -151px -603px;
                  width: 18px;
                }
                &:nth-child(4) a span {
                  background-position: -170px -603px;
                  width: 15px;
                }
                &:nth-child(5) a span {
                  background-position: -185px -603px;
                  width: 19px;
                }
                &:nth-child(6) a span {
                  background-position: -205px -603px;
                  width: 16px;
                }
                &:nth-child(7) a span {
                  background-position: -222px -603px;
                  width: 19px;
                }
                &:nth-child(8) a span {
                  background-position: -242px -603px;
                  width: 22px;
                }
                &:nth-child(4) ~ li {
                  border-top: 1px solid #eee;
                }
              }
            }
            .under_text {
              width: 391px;
              height: 124px;
              display: flex;
              flex-direction: column;
              padding: 15px 0 5px;
              border-top: 1px solid #eee;
              li {
                margin-bottom: 10px;
                padding-left: 21px;
                a:hover,
                a:hover > span {
                  color: rgb(246, 64, 64);
                }

                span {
                  display: inline-block;
                  padding-right: 5px;
                }
              }
            }
          }
        }
        .after {
          border: 1px solid #eee;
          background-color: #f5fcff;
          .bg_img {
            width: 393px;
            height: 200px;
            background-image: url(../../public/imgs/strategy/download.png);
            background-position: -10px -230px;
          }
          .under {
            width: 393px;
            height: 287px;
            .under_icon {
              display: flex;
              justify-content: flex-start;
              li {
                width: 195px;
                height: 161px;
                text-align: center;
                line-height: 161px;
                border-right: 1px solid #eee;
                box-sizing: border-box;
                &:last-child {
                  border: none;
                }
                a:hover,
                a:hover > span {
                  color: rgb(79, 178, 193);
                }
                a {
                  width: 195px;
                  height: 161px;
                  display: inline-block;
                  padding-top: 55px;
                  box-sizing: border-box;
                }

                .bg_icon {
                  overflow: hidden;
                  height: 19px;
                  margin: 0 auto 10px;
                }
                &:nth-child(1) a span {
                  background-position: -265px -603px;
                  width: 19px;
                }
                &:nth-child(2) a span {
                  background-position: -285px -603px;
                  width: 17px;
                }
              }
            }
            .under_text {
              width: 391px;
              height: 124px;
              display: flex;
              flex-direction: column;
              padding: 15px 0 5px;
              border-top: 1px solid #eee;
              li {
                margin-bottom: 10px;
                padding-left: 21px;
                a:hover,
                a:hover > span {
                  color: rgb(246, 64, 64);
                }

                span {
                  display: inline-block;
                  padding-right: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
  //手册
  .stra_munual {
    width: 100%;
    margin: 0 0 30px 0;
    .inside {
      width: 1220px;
      height: 637px;
      h2 {
        font-size: 24px;
      }
      .first_ul {
        display: flex;
        justify-content: flex-start;
        margin: 30px 0 20px 0;
        li {
          width: 123px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          border-top: 1px solid #e8e8e8;
          border-left: 1px solid #e8e8e8;
          border-bottom: 1px solid #e8e8e8;
          box-sizing: border-box;
          &:last-child {
            border-right: 1px solid #e8e8e8;
          }
          &:hover {
            border: 1px solid #0cb46a;
          }
          &:hover > a {
            color: #0cb46a;
          }
          a {
            font-size: 14px;
          }
        }
      }
      .third_ul {
        display: flex;
        justify-content: space-between;
        a {
          font-size: 14px;
        }
        a:hover {
          color: red;
        }
        a:hover > span {
          color: red;
        }
        span {
          font-weight: bold;
          margin-right: 5px;
        }
        .th_bor {
          border: 1px solid #eee;
          box-sizing: border-box;
          width: 393px;
          height: 370px;
        }
        .mr12 {
          margin-top: 12px;
        }
        .mr18 {
          margin-bottom: 18px;
        }
        li {
          .order {
            position: absolute;
          }
          &:nth-child(1) {
            div {
              width: 361px;
              height: 335px;
              text-align: left;
              padding: 15px 15px 18px;
              img {
                width: 365px;
                height: 210px;
              }
              .order {
                width: 361px;
                height: 124px;
                li {
                  width: 360px;
                  height: 19px;
                }
              }
            }
          }
          &:nth-child(2) {
            div {
              width: 361px;
              height: 335px;
              text-align: left;
              padding: 15px 15px 18px;
              img {
                width: 365px;
                height: 210px;
              }
              .order {
                width: 361px;
                height: 124px;
                li {
                  width: 360px;
                  height: 19px;
                }
              }
            }
          }
          &:nth-child(3) {
            div {
              width: 361px;
              height: 335px;
              text-align: left;
              padding: 15px 15px 18px;
              a {
                font-size: 12px;
                span {
                  font-size: 14px;
                  display: inline-block;
                  overflow: hidden; /*超出部分隐藏*/
                  text-overflow: ellipsis; /* 超出部分显示省略号 */
                  white-space: nowrap; /*规定段落中的文本不进行换行 */
                  width: 200px; /*需要配合宽度来使用*/
                }
              }
              .mr18 {
                display: flex;
                justify-content: flex-start;
                margin-bottom: 18px;
                img {
                  width: 136px;
                  height: 100px;
                }
                ul {
                  width: 210px;
                  height: 60px;
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
      .four {
        margin: 30px 0 0;
        .four_ul {
          display: flex;
          justify-content: flex-start;
          li {
            width: 244px;
            height: 110px;
          }
        }
      }
    }
  }
  //装修风水
  .stra_augur {
    margin-top: 60px;
    .inside {
      h2 {
        font-size: 24px;
        margin-bottom: 30px;
      }
      width: 1220px;
      height: 436px;
      .two {
        .two_ul {
          margin-top: 30px;
          .third_ul {
            display: flex;
            justify-content: space-between;
            .order {
              position: absolute;
            }
            a {
              font-size: 14px;
            }
            a:hover {
              color: red;
            }
            a:hover > span {
              color: red;
            }
            span {
              font-weight: bold;
              margin-right: 5px;
            }
            .th_bor {
              border: 1px solid #eee;
              box-sizing: border-box;
              width: 393px;
              height: 370px;
            }
            .mr12 {
              margin-top: 12px;
            }
            .mr18 {
              margin-bottom: 18px;
            }
            li {
              &:nth-child(1) {
                div {
                  width: 361px;
                  height: 335px;
                  text-align: left;
                  padding: 15px 15px 18px;
                  img {
                    width: 365px;
                    height: 210px;
                  }
                  .order {
                    width: 361px;
                    height: 124px;
                    li {
                      width: 360px;
                      height: 19px;
                    }
                  }
                }
              }
              &:nth-child(2) {
                div {
                  width: 361px;
                  height: 335px;
                  text-align: left;
                  padding: 15px 15px 18px;
                  img {
                    width: 365px;
                    height: 210px;
                  }
                  .order {
                    width: 361px;
                    height: 124px;
                    li {
                      width: 360px;
                      height: 19px;
                    }
                  }
                }
              }
              &:nth-child(3) {
                div {
                  width: 361px;
                  height: 335px;
                  text-align: left;
                  padding: 15px 15px 18px;
                  a {
                    font-size: 12px;
                    span {
                      font-size: 14px;
                      display: inline-block;
                      overflow: hidden; /*超出部分隐藏*/
                      text-overflow: ellipsis; /* 超出部分显示省略号 */
                      white-space: nowrap; /*规定段落中的文本不进行换行 */
                      width: 200px; /*需要配合宽度来使用*/
                    }
                  }
                  .mr18 {
                    display: flex;
                    justify-content: flex-start;
                    margin-bottom: 18px;
                    img {
                      width: 136px;
                      height: 100px;
                    }
                    ul {
                      width: 210px;
                      height: 60px;
                      margin-left: 10px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  //装修攻略
  .stra_strategy {
    width: 100%;
    margin: 60px 0 60px;
    .inside {
      height: 250px;
      h2 {
        font-size: 24px;
        margin-bottom: 15px;
        text-align: left;
      }
      .strategy_first {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
          width: 20%;
          height: 30px;
          a {
            font-size: 13px;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>