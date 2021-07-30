<template>
  <div>
    <my-head></my-head>
    <div class="home">
      <!-- 轮播图 -->
      <div class="block">
        <div class="block_div">
          <el-carousel height="460px">
            <el-carousel-item style="background:#01ac8a">
              <div class="d1">
                <img
                  src="../../public/imgs/index/swip/lunbo1.png"
                  alt=""
                  class="lbt_img"
                />
              </div>
            </el-carousel-item>
            <!-- <el-carousel-item>
              <div class="d1">
                <img
                  src="../../public/imgs/index/swip/lunboo.jpg"
                  alt=""
                  class="lbt_img"
                />
              </div>
            </el-carousel-item> -->
            <el-carousel-item style="background:#4151a2">
              <div class="d1">
                <img
                  src="../../public/imgs/index/swip/lunbo3.png"
                  alt=""
                  class="lbt_img"
                />
              </div>
            </el-carousel-item>
            <el-carousel-item style="background:#676cdc">
              <div class="d1">
                <img
                  src="../../public/imgs/index/swip/lunbo4.png"
                  alt=""
                  class="lbt_img"
                />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 轮播图下五个块 -->
      <div class="row_div">
        <div class="row_div2">
          <ul type="none">
            <li style="margin-left: 0">
              <a href="">
                <div class="col_k">
                  <span class="col_ksp">
                    <h1>免费设计</h1>
                    <span>获取三份设计方案</span>
                  </span>
                  <div>
                    <img
                      src="../../public/imgs/index/logo/row_1.jpg"
                      alt=""
                      class="col_img"
                    />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="col_k">
                  <span class="col_ksp">
                    <h1>免费报价</h1>
                    <span>算算装修要花多少钱</span>
                  </span>
                  <div>
                    <img
                      src="../../public/imgs/index/logo/row_2.jpg"
                      alt=""
                      class="col_img"
                    />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="col_k">
                  <span class="col_ksp">
                    <h1>全屋定制</h1>
                    <span>让家轻松扩大n平米</span>
                  </span>
                  <div>
                    <img
                      src="../../public/imgs/index/logo/row_3.jpg"
                      alt=""
                      class="col_img"
                    />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="col_k">
                  <span class="col_ksp">
                    <h1>装修分期</h1>
                    <span>按月付轻松住新家</span>
                  </span>
                  <div>
                    <img
                      src="../../public/imgs/index/logo/row_4.jpg"
                      alt=""
                      class="col_img"
                    />
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="col_k">
                  <span class="col_ksp">
                    <h1>全程质检</h1>
                    <span>请个质检盯工地</span>
                  </span>
                  <div>
                    <img
                      src="../../public/imgs/index/logo/row_5.jpg"
                      alt=""
                      class="col_img"
                    />
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 郑州装修公司 -->
      <div class="rooms">
        <h1>————郑州装修公司————</h1>
        <div class="rooms_div">
          <div class="rooms_ddiv">
            <a href="javascript:;" @click="goto(0)">小编推荐</a>
            <a href="javascript:;" @click="goto(1)">优选公司</a>
          </div>
          <div id="rooms_dddiv">
            <div v-if="i == 0">
              <div class="rooms_ddddiv">
                <a href="">
                  <div class="rooms_dddddiv">
                    <div class="rooms_divimg">
                      <img
                        class="rooms_img"
                        src="../../public/imgs/index/rooms/room1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="rooms_ddddddiv">
                      <p>轩美装饰 专装饰23年</p>
                      <div class="rooms_wxpl">
                        <img
                          src="../../public/imgs/index/rooms/rate_5.png"
                          alt=""
                          class="wuxing"
                        />
                        <span>482条评论</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div class="rooms_dddddiv">
                    <div class="rooms_divimg">
                      <img
                        class="rooms_img"
                        src="../../public/imgs/index/rooms/room2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="rooms_ddddddiv">
                      <p>鼎美装饰 专注个性化</p>
                      <div class="rooms_wxpl">
                        <img
                          src="../../public/imgs/index/rooms/rate_5.png"
                          alt=""
                          class="wuxing"
                        />
                        <span>2682条评论</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="">
                  <div class="rooms_dddddiv">
                    <div class="rooms_divimg">
                      <img
                        class="rooms_img"
                        src="../../public/imgs/index/rooms/room3.jpg"
                        alt=""
                      />
                    </div>
                    <div class="rooms_ddddddiv">
                      <p>橡树装饰</p>
                      <div class="rooms_wxpl">
                        <img
                          src="../../public/imgs/index/rooms/rate_5.png"
                          alt=""
                          class="wuxing"
                        />
                        <span>1682条评论</span>
                      </div>
                    </div>
                  </div></a
                >
                <a href="">
                  <div class="rooms_dddddiv">
                    <div class="rooms_divimg">
                      <img
                        class="rooms_img"
                        src="../../public/imgs/index/rooms/room4.jpg"
                        alt=""
                      />
                    </div>
                    <div class="rooms_ddddddiv">
                      <p>居众装饰 专业装饰十年</p>
                      <div class="rooms_wxpl">
                        <img
                          src="../../public/imgs/index/rooms/rate_5.png"
                          alt=""
                          class="wuxing"
                        />
                        <span>682条评论</span>
                      </div>
                    </div>
                  </div></a
                >
                <a href="">
                  <div class="rooms_dddddiv">
                    <div class="rooms_divimg">
                      <img
                        class="rooms_img"
                        src="../../public/imgs/index/rooms/room5.jpg"
                        alt=""
                      />
                    </div>
                    <div class="rooms_ddddddiv">
                      <p>美美装饰 专注精品</p>
                      <div class="rooms_wxpl">
                        <img
                          src="../../public/imgs/index/rooms/rate_5.png"
                          alt=""
                          class="wuxing"
                        />
                        <span>4382条评论</span>
                      </div>
                    </div>
                  </div></a
                >
                <a href="">
                  <div class="rooms_dddddiv">
                    <div class="rooms_divimg">
                      <img
                        class="rooms_img"
                        src="../../public/imgs/index/rooms/room6.jpg"
                        alt=""
                      />
                    </div>
                    <div class="rooms_ddddddiv">
                      <p>小强装饰 专注个性化设计</p>
                      <div class="rooms_wxpl">
                        <img
                          src="../../public/imgs/index/rooms/rate_5.png"
                          alt=""
                          class="wuxing"
                        />
                        <span>1582条评论</span>
                      </div>
                    </div>
                  </div></a
                >
                <a href="">
                  <div class="rooms_dddddiv">
                    <div class="rooms_divimg">
                      <img
                        class="rooms_img"
                        src="../../public/imgs/index/rooms/room7.jpg"
                        alt=""
                      />
                    </div>
                    <div class="rooms_ddddddiv">
                      <p>昊天装饰 专注个人设计</p>
                      <div class="rooms_wxpl">
                        <img
                          src="../../public/imgs/index/rooms/rate_5.png"
                          alt=""
                          class="wuxing"
                        />
                        <span>5682条评论</span>
                      </div>
                    </div>
                  </div></a
                >
                <a href="">
                  <div class="rooms_dddddiv">
                    <div class="rooms_divimg">
                      <img
                        class="rooms_img"
                        src="../../public/imgs/index/rooms/room8.jpg"
                        alt=""
                      />
                    </div>
                    <div class="rooms_ddddddiv">
                      <p>天美装饰 专注私人定制</p>
                      <div class="rooms_wxpl">
                        <img
                          src="../../public/imgs/index/rooms/rate_5.png"
                          alt=""
                          class="wuxing"
                        />
                        <span>6682条评论</span>
                      </div>
                    </div>
                  </div></a
                >
              </div>
            </div>
            <div v-else-if="i == 1">
              <div class="rooms_ddddiv">
                <div class="rooms_dddddiv">
                  <div class="rooms_divimg">
                    <img class="rooms_img" src="../../public/imgs/index/rooms/room2.jpg" alt="" />
                  </div>
                  <div class="rooms_ddddddiv">
                    <p>大卫装饰 专注保障</p>
                    <div class="rooms_wxpl">
                      <img
                        src="../../public/imgs/index/rooms/rate_5.png"
                        alt=""
                        class="wuxing"
                      />
                      <span>3332条评论</span>
                    </div>
                  </div>
                </div>
                <div class="rooms_dddddiv">
                  <div class="rooms_divimg">
                    <img class="rooms_img" src="../../public/imgs/index/rooms/room1.jpg" alt="" />
                  </div>
                  <div class="rooms_ddddddiv">
                    <p>布朗装饰 专注私人定制</p>
                    <div class="rooms_wxpl">
                      <img
                        src="../../public/imgs/index/rooms/rate_5.png"
                        alt=""
                        class="wuxing"
                      />
                      <span>11682条评论</span>
                    </div>
                  </div>
                </div>
                <div class="rooms_dddddiv">
                  <div class="rooms_divimg">
                    <img class="rooms_img" src="../../public/imgs/index/rooms/room4.jpg" alt="" />
                  </div>
                  <div class="rooms_ddddddiv">
                    <p>唯美装饰 专注三十年</p>
                    <div class="rooms_wxpl">
                      <img
                        src="../../public/imgs/index/rooms/rate_5.png"
                        alt=""
                        class="wuxing"
                      />
                      <span>7682条评论</span>
                    </div>
                  </div>
                </div>
                <div class="rooms_dddddiv">
                  <div class="rooms_divimg">
                    <img class="rooms_img" src="../../public/imgs/index/rooms/room3.jpg" alt="" />
                  </div>
                  <div class="rooms_ddddddiv">
                    <p>天天装饰 专注性价比</p>
                    <div class="rooms_wxpl">
                      <img
                        src="../../public/imgs/index/rooms/rate_5.png"
                        alt=""
                        class="wuxing"
                      />
                      <span>4682条评论</span>
                    </div>
                  </div>
                </div>
                <div class="rooms_dddddiv">
                  <div class="rooms_divimg">
                    <img class="rooms_img" src="../../public/imgs/index/rooms/room6.jpg" alt="" />
                  </div>
                  <div class="rooms_ddddddiv">
                    <p>奇异装饰 专注个性化</p>
                    <div class="rooms_wxpl">
                      <img
                        src="../../public/imgs/index/rooms/rate_5.png"
                        alt=""
                        class="wuxing"
                      />
                      <span>2282条评论</span>
                    </div>
                  </div>
                </div>
                <div class="rooms_dddddiv">
                  <div class="rooms_divimg">
                    <img class="rooms_img" src="../../public/imgs/index/rooms/room5.jpg" alt="" />
                  </div>
                  <div class="rooms_ddddddiv">
                    <p>文天装饰 专注质量保证</p>
                    <div class="rooms_wxpl">
                      <img
                        src="../../public/imgs/index/rooms/rate_5.png"
                        alt=""
                        class="wuxing"
                      />
                      <span>1522条评论</span>
                    </div>
                  </div>
                </div>
                <div class="rooms_dddddiv">
                  <div class="rooms_divimg">
                    <img class="rooms_img" src="../../public/imgs/index/rooms/room8.jpg" alt="" />
                  </div>
                  <div class="rooms_ddddddiv">
                    <p>浩宇装饰 专注设计</p>
                    <div class="rooms_wxpl">
                      <img
                        src="../../public/imgs/index/rooms/rate_5.png"
                        alt=""
                        class="wuxing"
                      />
                      <span>33332条评论</span>
                    </div>
                  </div>
                </div>
                <div class="rooms_dddddiv">
                  <div class="rooms_divimg">
                    <img class="rooms_img" src="../../public/imgs/index/rooms/room7.jpg" alt="" />
                  </div>
                  <div class="rooms_ddddddiv">
                    <p>元通装饰 专注品质</p>
                    <div class="rooms_wxpl">
                      <img
                        src="../../public/imgs/index/rooms/rate_5.png"
                        alt=""
                        class="wuxing"
                      />
                      <span>15282条评论</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 id="gdgs"><router-link to="/company">查看更多装修公司</router-link></h1>
          </div>
        </div>
      </div>
      <!-- 用户评论  -->
      <div class="discuss">
        <div>
          <a href="">
            <div class="discuss_pl" v-if="z == 1">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img src="../../public/imgs/index/discuss/head1.jpg" alt="" />
                  <span class="bgrgba1_sp1">朴灿烈</span>
                  <span class="bgrgba1_sp2"></span>
                  <p class="bgrgba1_p1">
                    装修太累人了，在装下去都可以干项目经理了
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/1.jpg" alt="" />
                  <img src="../../public/imgs/index/discuss/2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 2">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img src="../../public/imgs/index/discuss/head2.jpg" alt="" />
                  <span class="bgrgba1_sp1">大可爱鸭鸭</span>
                  <p class="bgrgba1_p1">
                    安装地板，卧室应该怎样安装地板还有颜色该怎么选呢？怎么搭配才比较好呀?飘窗怎么设计?
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/3.jpg" alt="" />
                  <img src="../../public/imgs/index/discuss/4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 3">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img src="../../public/imgs/index/discuss/head3.jpg" alt="" />
                  <span class="bgrgba1_sp1">123小兔子</span>
                  <p class="bgrgba1_p1">
                    前段时间工长说已经把家里的大地砖贴完了，自己上班比较忙也没有时间去房子里面看，主要是天气太热了，工长每天都拍了照片发在我们的装修群里，还告诉我们每天的进程是什么，让我随时了解装修进度，感觉还是非常贴心的，尤其是像我这种不想去工地的人来说，简...
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/5.jpg" alt="" />
                  <img src="../../public/imgs/index/discuss/6.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 4">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img src="../../public/imgs/index/discuss/head4.jpg" alt="" />
                  <span class="bgrgba1_sp1">Matata</span>
                  <span class="bgrgba1_sp2"></span>
                  <p class="bgrgba1_p1">
                    全屋油漆结束，还剩各种定制门、背景墙花园地台钢制龙骨全是孩子们爷爷一个人在弄，围栏让孩子们爸爸动手完成了，虽然累点，但参与感强，成就感
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/7.jpg" alt="" />
                  <img src="../../public/imgs/index/discuss/8.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 5">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img src="../../public/imgs/index/discuss/head5.jpg" alt="" />
                  <span class="bgrgba1_sp1">psypig</span>
                  <span class="bgrgba1_sp2"></span>
                  <p class="bgrgba1_p1">
                    陪同签约指的是在业主进行签约时，由土巴兔专业质检员帮业主对合同条款和项目预算等进行全方位的审核。短短一句话的服务内容足以看出陪签师的工作涉及的知识面之广，用通俗一点的话来说就是，陪签师除了必须懂施工项目以外，还要懂设计和法律，能够辨析设计的...
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/9.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 6">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img src="../../public/imgs/index/discuss/head6.jpg" alt="" />
                  <span class="bgrgba1_sp1">Ravitn</span>
                  <span class="bgrgba1_sp2"></span>
                  <p class="bgrgba1_p1">
                    土巴兔质检陪签谭杨钢老师，很专业，对不了解装修行业的很有帮助，可以发现很多风险，同时给出装修建议，包括家电这一块，非常值得，质检老师在装修的过程中帮您发现了如下8个问题：1、合同内附加安全事故责任归属，内容：在乙方施工范围内产生的安全事...
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/10.jpg" alt="" />
                  <img src="../../public/imgs/index/discuss/11.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 7">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img src="../../public/imgs/index/discuss/head7.jpg" alt="" />
                  <span class="bgrgba1_sp1">tony image</span>
                  <p class="bgrgba1_p1"></p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/12.jpg" alt="" />
                  <img src="../../public/imgs/index/discuss/13.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 8">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img src="../../public/imgs/index/discuss/head8.jpg" alt="" />
                  <span class="bgrgba1_sp1">爱天文的大米</span>
                  <p class="bgrgba1_p1">
                    2021.07.06
                    周二今天是个阳光明媚的周二，下午约了维盾窗户直销的公司过来量窗户，工长说这个做窗户的还是挺有经验的，这下就放心了，本来窗户是从装修公司定的，大概一万左右，现在的1.3万整体，质量是确实没的说，之前挑了一家比这个直...
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/14.jpeg" alt="" />
                  <img src="../../public/imgs/index/discuss/15.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 9">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img src="../../public/imgs/index/discuss/head9.jpg" alt="" />
                  <span class="bgrgba1_sp1">花师兄</span>
                  <span class="bgrgba1_sp2"></span>
                  <p class="bgrgba1_p1">
                    布水电的时候就要考虑电视背景墙效果，装修公司参考我的要求给预埋了管道，这样电视机线可以从管道里走到下面的插座，具体插座构造见图五。图六是电视柜背板开孔，几乎所有的带线的小电器都可以放在电视柜里隐藏起来。宜家的贝达电视柜三开门的自带一个顶部开...
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/16.jpeg" alt="" />
                  <img src="../../public/imgs/index/discuss/17.jpeg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 10">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img
                    src="../../public/imgs/index/discuss/head10.jpg"
                    alt=""
                  />
                  <span class="bgrgba1_sp1">马大姐家</span>
                  <p class="bgrgba1_p1">
                    从开工到现在三个多月，每道工序都是没有责任心的。首先拆除拆的一塌糊涂，拆除没有一点含金量，而且整整拆了一个月。其次水电也做的返工。后面就是贴砖和卫生间的排污管。首先谈一下贴砖。本以为找到老师傅做了，谁知道大跌眼镜，没想到老师傅技术也是差的无...
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/18.jpg" alt="" />
                  <img src="../../public/imgs/index/discuss/19.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 11">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img
                    src="../../public/imgs/index/discuss/head11.jpg"
                    alt=""
                  />
                  <span class="bgrgba1_sp1">萌兔_JOB552</span>
                  <p class="bgrgba1_p1">
                    把柜门和移门和灯具等安装完，彻底大变样，请阿姨打扫完，跟之前彻底不同！柜子：柜体是装修公司兔宝宝E0级板材，柜门是自己在外面定的，因为自己想选钢琴烤漆的面板，外面选择的样式多一些，但是这样造成柜体和面板颜色有色差，还能接受。移门：简...
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/20.jpg" alt="" />
                  <img src="../../public/imgs/index/discuss/21.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="discuss_pl" v-else-if="z == 12">
              <div class="bgrgba1">
                <div class="pl_img1">
                  <img
                    src="../../public/imgs/index/discuss/head12.jpg"
                    alt=""
                  />
                  <span class="bgrgba1_sp1">深</span>
                  <p class="bgrgba1_p1">
                    #晒晒我家的质检老师#感谢平台的陪签人员杨伟浩老师。一般陪签时间是上午9点、11点，下午2点、4点，这4个时间段。为了配合我下班过去签约。将时间安排到了晚上的8点。陪签是以线上视频的方式进行的，陪签前已经将合同和相关预算报价发给了陪签...
                  </p>
                </div>
                <div class="pl_img2">
                  <img src="../../public/imgs/index/discuss/22.jpeg" alt="" />
                  <img src="../../public/imgs/index/discuss/23.jpeg" alt="" />
                </div>
              </div></div
          ></a>
          <div class="discuss_head">
            <div class="bgrgba2">
              <div class="zxrj">
                <h1>装修日记</h1>
                <p>
                  业主分享装修历程，还原线下装修体验<br />拆解郑州装修公司服务口碑
                </p>
              </div>
              <ul class="ul_head" type="none">
                <li>
                  <a href="javascript:;" @click="goto2(1)"
                    ><img
                      src="../../public/imgs/index/discuss/head1.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(2)"
                    ><img
                      src="../../public/imgs/index/discuss/head2.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(3)"
                    ><img
                      src="../../public/imgs/index/discuss/head3.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(4)"
                    ><img
                      src="../../public/imgs/index/discuss/head4.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(5)"
                    ><img
                      src="../../public/imgs/index/discuss/head5.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(6)"
                    ><img
                      src="../../public/imgs/index/discuss/head6.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(7)"
                    ><img
                      src="../../public/imgs/index/discuss/head7.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(8)"
                    ><img
                      src="../../public/imgs/index/discuss/head8.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(9)"
                    ><img
                      src="../../public/imgs/index/discuss/head9.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(10)"
                    ><img
                      src="../../public/imgs/index/discuss/head10.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(11)"
                    ><img
                      src="../../public/imgs/index/discuss/head11.jpg"
                      alt=""
                  /></a>
                </li>
                <li>
                  <a href="javascript:;" @click="goto2(12)"
                    ><img
                      src="../../public/imgs/index/discuss/head12.jpg"
                      alt=""
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 服务流程  -->
      <div class="procedure">
        <h1>服务流程</h1>
        <ul>
          <li>
            <img src="../../public/imgs/index/procedure/img1.png" alt="" />
            <p>在线预约</p>
            <p>登记联系方式</p>
            <el-divider><span>①</span></el-divider>
          </li>
          <li>
            <img src="../../public/imgs/index/procedure/img2.png" alt="" />
            <p>在线预约</p>
            <p>登记联系方式</p>
            <el-divider><span>②</span></el-divider>
          </li>
          <li>
            <img src="../../public/imgs/index/procedure/img3.png" alt="" />
            <p>在线预约</p>
            <p>登记联系方式</p>
            <el-divider><span>③</span></el-divider>
          </li>
          <li>
            <img src="../../public/imgs/index/procedure/img4.png" alt="" />
            <p>在线预约</p>
            <p>登记联系方式</p>
            <el-divider><span>④</span></el-divider>
          </li>
          <li>
            <img src="../../public/imgs/index/procedure/img5.png" alt="" />
            <p>在线预约</p>
            <p>登记联系方式</p>
            <el-divider><span>⑤</span></el-divider>
          </li>
          <li>
            <img src="../../public/imgs/index/procedure/img6.png" alt="" />
            <p>在线预约</p>
            <p>登记联系方式</p>
            <el-divider><span>⑥</span></el-divider>
          </li>
          <li>
            <img src="../../public/imgs/index/procedure/img7.png" alt="" />
            <p>在线预约</p>
            <p>登记联系方式</p>
            <el-divider><span>⑦</span></el-divider>
          </li>
        </ul>
      </div>
      <!-- 郑州装修效果图  -->
      <div class="renovation">
        <h1>郑州装修效果图</h1>
        <p>搜索海量郑州装修家居美图，发现新家装修灵感</p>
        <div class="renovation_div">
          <a href="">现代简约</a>/ <a href="">欧式豪华</a>/
          <a href="">美式经典</a>/ <a href="">中式现代</a>/
          <a href="">北欧极简</a>/
          <a href="">全部美图></a>
        </div>
        <div class="renovation_div2">
          <a href="">
            <div class="renovation_ddiv1">
              <img
                src="../../public/imgs/index/renovation/img1.jpeg"
                alt=""
              /></div
          ></a>
          <a href="">
            <div class="renovation_ddiv2">
              <img
                src="../../public/imgs/index/renovation/img2.jpeg"
                alt=""
              /></div
          ></a>
          <a href="">
            <div class="renovation_ddiv3">
              <img
                src="../../public/imgs/index/renovation/img3.jpeg"
                alt=""
              /></div
          ></a>
          <a href="">
            <div class="renovation_ddiv4">
              <img
                src="../../public/imgs/index/renovation/img4.jpeg"
                alt=""
              /></div
          ></a>
          <a href="">
            <div class="renovation_ddiv5">
              <img
                src="../../public/imgs/index/renovation/img5.jpeg"
                alt=""
              /></div
          ></a>
          <a href="">
            <div class="renovation_ddiv6">
              <img
                src="../../public/imgs/index/renovation/img6.jpeg"
                alt=""
              /></div
          ></a>
        </div>
      </div>
      <!-- 学攻略  -->
      <div class="strategy">
        <h1>看攻略</h1>
        <p>学习装修经验与交流郑州装修相关问题，小白晋级达人就靠它</p>
        <div class="strategy_div">
          <div class="strategy_xdiv">
            <div class="strategy_xdiv2" id="strategy_1">
              <img
                src="../../public/imgs/index/strategy/05.png"
                alt=""
                id="1"
              />
              <h1>郑州装修</h1>
            </div>
            <div class="strategy_xdiv3">
              <ul type="none">
                <li>卫生间墙面怎样做防水处...</li>
                <li>房屋墙面出现裂缝怎么处理 具体的处理方法的什么</li>
                <li>房屋装修北欧风格的技巧与特点是什么</li>
                <li>墙面脏如何处理？墙面处理简单小方法</li>
                <li>厨房墙面瓷砖的价格 厨房瓷砖的选择技巧</li>
                <li>家装地暖管种类多，哪种才和我家“天生一对”？</li>
              </ul>
            </div>
          </div>
          <div class="strategy_xdiv">
            <div class="strategy_xdiv2"  id="strategy_2">
              <img src="../../public/imgs/index/strategy/06.png" alt="" />
              <h1>郑州装修日记</h1>
            </div>
            <div class="strategy_xdiv3">
              <ul type="none">
                <li>卫生间墙面怎样做防水处...</li>
                <li>房屋墙面出现裂缝怎么处理 具体的处理方法的什么</li>
                <li>房屋装修北欧风格的技巧与特点是什么</li>
                <li>墙面脏如何处理？墙面处理简单小方法</li>
                <li>厨房墙面瓷砖的价格 厨房瓷砖的选择技巧</li>
                <li>家装地暖管种类多，哪种才和我家“天生一对”？</li>
              </ul>
            </div>
          </div>
          <div class="strategy_xdiv">
            <div class="strategy_xdiv2"  id="strategy_3">
              <img src="../../public/imgs/index/strategy/07.png" alt="" />
              <h1>郑州装修问答</h1>
            </div>
            <div class="strategy_xdiv3">
              <ul type="none">
                <li>卫生间墙面怎样做防水处...</li>
                <li>房屋墙面出现裂缝怎么处理 具体的处理方法的什么</li>
                <li>房屋装修北欧风格的技巧与特点是什么</li>
                <li>墙面脏如何处理？墙面处理简单小方法</li>
                <li>厨房墙面瓷砖的价格 厨房瓷砖的选择技巧</li>
                <li>家装地暖管种类多，哪种才和我家“天生一对”？</li>
              </ul>
            </div>
          </div>
          <div class="strategy_xdiv">
            <div class="strategy_xdiv2"  id="strategy_4">
              <img src="../../public/imgs/index/strategy/08.png" alt="" />
              <h1>装修工具</h1>
            </div>
            <div class="strategy_xdiv3">
              <ul type="none">
                <li>卫生间墙面怎样做防水处...</li>
                <li>房屋墙面出现裂缝怎么处理 具体的处理方法的什么</li>
                <li>房屋装修北欧风格的技巧与特点是什么</li>
                <li>墙面脏如何处理？墙面处理简单小方法</li>
                <li>厨房墙面瓷砖的价格 厨房瓷砖的选择技巧</li>
                <li>家装地暖管种类多，哪种才和我家“天生一对”？</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 广告  -->
      <div class="advertisement">
        <img src="../../public/imgs/index/advertisement.jpg" alt="" />
      </div>
      <!-- 找建材  -->
      <div class="building_material">
        <h1>找建材</h1>
        <p>线上超值低价，线下品质服务</p>
        <div class="building_material_div">
          <a href="">油漆涂料</a>/ <a href="">瓷砖</a>/ <a href="">地板</a>/
          <a href="">衣柜</a>/ <a href="">橱柜</a>/ <a href="">厨电</a>/
          <a href="">全部品类></a>
        </div>
        <div class="building_material_div2">
          <div class="building_material_xdiv building_material_xdiv2">
            <a href="">
              <div class="title title_one">
                <h1>全屋定制</h1>
                <p>空间省心定制，优惠商家严选</p>
              </div>
              <img
                src="../../public/imgs/index/building_material/img1.png"
                alt=""
            /></a>
          </div>
          <div class="building_material_xdiv building_material_xdiv2">
            <a href="">
              <div class="title title_one title_one2">
                <h1>地板</h1>
                <p>板材严控,品质保证</p>
              </div>
              <img
                src="../../public/imgs/index/building_material/img2.png"
                alt=""
            /></a>
          </div>
          <div class="building_material_xddiv">
            <a href="">
              <div class="title title_two">
                <h1>成品家具</h1>
              </div>
              <img
                src="../../public/imgs/index/building_material/img3.png"
                alt=""
            /></a>
          </div>
          <div class="building_material_xddiv">
            <a href="">
              <div class="title title_two">
                <h1>电器</h1>
              </div>
              <img
                src="../../public/imgs/index/building_material/img4.png"
                alt=""
            /></a>
          </div>
        </div>
        <div class="brand">
          <a href="">
            <img
              src="../../public/imgs/index/building_material/img5.png"
              alt=""
          /></a>
          <a href="">
            <img
              src="../../public/imgs/index/building_material/img6.jpg"
              alt=""
          /></a>
          <a href="">
            <img
              src="../../public/imgs/index/building_material/img7.jpg"
              alt=""
          /></a>
          <a href="">
            <img
              src="../../public/imgs/index/building_material/img8.jpg"
              alt=""
          /></a>
          <a href="">
            <img
              src="../../public/imgs/index/building_material/img9.png"
              alt=""
          /></a>
        </div>
        <div class="brand2">
          <div class="brand_div">
            <img
              src="../../public/imgs/index/building_material/img12.png"
              alt=""
              class="img12"
            />
            <div class="brand2_div">
              <h1>土巴兔专注装修13年</h1>
              <br />
              <p>始终为用户创造价值</p>
            </div>
            <img
              src="../../public/imgs/index/building_material/img11.png"
              alt=""
              class="img11"
            />
          </div>
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
      i: 0,
      z: 1,
      change: "1",
    };
  },
  methods: {
    goto(i) {
      this.i = i;
    },
    goto2(z) {
      this.z = z;
    },
  },
};
</script>
<style>
@import "../../public/styles/home.css";
@import "../../public/styles/reset.css";
</style>