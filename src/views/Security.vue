<template>
  <div>
    <my-head></my-head>

    <div class="security">
      <div id="hideobj" v-show="gai"></div>
      <div class="success" v-show="cang2">
        <div class="chahao2">
          <span class="guantan2" @click="guantan2">×</span>
        </div>
        <img src="../../public/imgs/security/success.png" />
      </div>
      <div class="tan" id="tan" v-show="cang">
        <div class="chahao">
          <span class="guantan" @click="guantan">×</span>
        </div>
        <p class="shangp">预约 土巴兔先装修后支付服务</p>
        <input
          id="input"
          type="text"
          placeholder="输入手机号,装修顾问稍后会联系你"
          v-model="taninput"
          @blur="inyanzheng"
          @focus="jujiao"
        />
        <div class="dome-main">
          <div class="city-picker-selector" id="city-picker-search"></div>
          <div class="agree">
            <input
              type="checkbox"
              v-model="able"
              @change="agree"
            />我已阅读并接受 <a href="javascript:;">《隐私政策》</a> 与
            <a href="javascript:;">《服务条款》</a>
          </div>
          <button
            class="yuyue"
            @click="yuyue"
            :disabled="!able"
            :style="orderbtn"
          >
            立即预约
          </button>
          <p class="zixun">免费咨询400-6900-288</p>
        </div>
      </div>
      <div class="bigimg content">
        <div class="center imgwai">
          <img src="../../public/imgs/security/banner.jpg" />
        </div>
      </div>
      <div class="v content">
        <div class="center">
          <el-row>
            <el-col :span="15"
              ><div class="grid-content bg-purple">
                <video
                  src="../assets/video/jieshao.mp4"
                  controls
                  poster="../../public/imgs/security/video.png"
                  width="772px"
                  height="433px"
                ></video></div
            ></el-col>
            <el-col :span="9"
              ><div class="videoR">
                <div class="h1">
                  <h1>一分钟了解</h1>
                  <h1>先装修后支付</h1>
                </div>
                <hr style="width: 100px; position: relative; left: -40px" />
                <p>全新装修支付方式</p>
              </div></el-col
            >
          </el-row>
        </div>
      </div>
      <div class="order content">
        <div class="center">
          <h1>面对传统装修行业付款方式</h1>
          <img
            src="../../public/imgs/security/order.jpg"
            style="width: 100%; margin-bottom: 25px"
          />
          <button @click="order" class="orderbtn">立即预约</button>
        </div>
      </div>
      <div class="advan1 content">
        <div class="center">
          <h1 class="youshi">优势一 装修款托管，不怕装修公司跑路</h1>
          <img src="../../public/imgs/security/pay.png" style="width: 100%" />
        </div>
      </div>
      <div class="advan2 content">
        <div class="center">
          <h1 class="youshi">优势二 先装修后支付，业主更有话语权</h1>
          <img
            src="../../public/imgs/security/advan2.jpg"
            style="width: 100%"
          />
        </div>
      </div>
      <div class="advan3 content">
        <div class="center">
          <h1 class="youshi">优势三 尾款托管最长30天，装修过程不被动</h1>
          <div style="position: relative">
            <img
              src="../../public/imgs/security/advan3_1.jpg"
              style="width: 48%; float: left"
            />
            <div class="textL text" style="top: 270px; left: 25px">
              <h3>传统付款方式</h3>
              <p>
                泥工完工前，已收取您大部分装修款，仅保留很少部分尾款<br />
                发现问题，装修公司处理迟缓
              </p>
            </div>
          </div>
          <div style="position: relative">
            <img
              src="../../public/imgs/security/advan3_2.jpg"
              style="width: 48%; float: right"
            />
            <div class="textR text" style="top: 270px; right: 25px">
              <h3>土巴兔先装修后支付</h3>
              <p>
                20%装修尾款，最晚可在竣工30天后支付<br />
                发现问题，装修公司积极解决
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="advan4 content">
        <div class="center" style="padding: 30px 0">
          <h1 class="youshi">优势四 出现争议，平台介入公正地进行争议判断</h1>
          <p
            style="
              margin-top: 2px;
              font-size: 18px;
              color: #999;
              margin-bottom: 40px;
            "
          >
            如果您对施工交付有争议，业主可以驳回装企的返款申请
          </p>
          <div class="ad4L ad4">
            <p class="ad4topp">传统付款方式</p>
            <p class="ad4bottomp">工地出现争议，双方各执一词，争议难以解决</p>
            <img
              src="../../public/imgs/security/ad4L.png"
              style="width: 227px"
            />
          </div>
          <div class="ad4R ad4">
            <p class="ad4topp">土巴兔先装修后支付</p>
            <p class="ad4bottomp">平台公正调查，业主可以驳回装企的返款申请</p>
            <img
              src="../../public/imgs/security/ad4R.png"
              style="width: 227px"
            />
          </div>
        </div>
      </div>
      <div class="serveflow content">
        <div class="center">
          <h1 class="youshi">先装修后支付服务流程</h1>
          <p style="margin-top: 2px; font-size: 18px; color: #999">
            装企为土巴兔业主提供相应保障服务的承诺
          </p>
          <img
            src="../../public/imgs/security/flowchart2.jpg"
            style="width: 100%; margin-top: 60px"
          />
          <p
            style="
              margin-top: 50px;
              font-size: 12px;
              color: #aaa;
              margin-bottom: 20px;
            "
          >
            以上仅针对整体家装服务
          </p>
        </div>
      </div>
      <div class="moreserve content">
        <div class="center">
          <h1 class="youshi">更多服务</h1>
          <p>装企为土巴兔业主提供相应保障服务的承诺</p>
          <p>点亮相应标签即表示，装企自愿为土巴兔用户提供该保障服务。</p>
          <div class="morebao">
            <div class="zuo more">
              <img src="../../public/imgs/security/zuo.png" />
              <div class="morebao2">
                <span class="bspan">延期保赔</span><br />
                <span>工地延期,获取赔偿</span>
              </div>
            </div>
            <div class="zhong more">
              <img src="../../public/imgs/security/zhong.png" />
              <div class="morebao2">
                <span class="bspan">装修分期</span><br />
                <span>按月付款,轻松住新家</span>
              </div>
            </div>
            <div class="you more">
              <img src="../../public/imgs/security/you.png" />
              <div class="morebao2">
                <span class="bspan">全屋定制</span><br />
                <span>扩空间享生活</span>
              </div>
            </div>
          </div>
          <button class="orderbtn" @click="order">立即预约</button>
          <p style="font-size: 12px; color: #aaa; margin-top: 50px">
            具体内容以标签说明为准
          </p>
        </div>
      </div>
      <div class="question content">
        <div class="center">
          <h1 class="youshi">常见问题</h1>
          <el-collapse v-model="activeNames" @change="handleChange" accordion>
            <el-collapse-item name="1" style="text-align: left">
              <template slot="title">
                <span style="font-size: 30px">01</span>
                <span style="font-size: 18px; font-weight: bold"
                  >问:为什么将装修款托管?</span
                >
              </template>
              <div style="background-color: #eee; padding: 30px">
                <p style="font-size: 16px">
                  装修款进行托管而不是直接打给装修公司，具体有四个好处：
                </p>
                <p class="why">
                  第一:资金安全，装修款由第三方全国性银行专项管理，没有线下交易被卷款的风险
                </p>
                <p class="why">
                  第二:干完一部分活才付一部分钱，装修更有话语权；
                </p>
                <p class="why">
                  第三:一旦装修期间业主与装修公司争议不下，业主可驳回装企的返款申请；
                </p>
                <p class="why">
                  第四:20%装修尾款，最晚可在竣工30天后支付，足够您仔细检查。
                </p>
              </div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title">
                <span style="font-size: 30px">02</span>
                <span style="font-size: 18px; font-weight: bold"
                  >问：什么时候将装修款项托管？</span
                >
              </template>
              <div style="background-color: #eee; padding: 30px" class="wen02">
                <table
                  border="1"
                  cellspacing="0"
                  cellpadding="10"
                  width="1100px"
                >
                  <thead>
                    <tr
                      style="
                        height: 56px;
                        color: #666;
                        font-size: 18px;
                        background-color: #f1f7f9;
                        line-height: 24px;
                        font-weight: 900;
                      "
                    >
                      <td
                        style="font-weight: 900; color: #666; font-size: 18px"
                      >
                        托管方式
                      </td>
                      <td
                        style="font-weight: 900; color: #666; font-size: 18px"
                      >
                        托管时间点
                      </td>
                      <td
                        style="font-weight: 900; color: #666; font-size: 18px"
                      >
                        托管款项比例
                      </td>
                    </tr>
                  </thead>
                  <tbody style="background-color: #fff">
                    <tr>
                      <td>
                        <h5>方式一：一次性托管</h5>
                        一次性将装修合同款全部托管
                      </td>
                      <td>业主、土巴兔、装修公司签完三方协议后3日内</td>
                      <td>托管全部装修合同款</td>
                    </tr>
                    <tr>
                      <td rowspan="3">
                        <h5>方式二：5-3-2分批托管</h5>
                        分3次将装修合同款托管
                      </td>
                      <td>业主、土巴兔、装修公司签完三方协议后3日内</td>
                      <td>托管装修合同款的50%</td>
                    </tr>
                    <tr>
                      <td>水电验收后3日内</td>
                      <td>托管装修合同款的30%</td>
                    </tr>
                    <tr>
                      <td>泥工验收后3日内</td>
                      <td>托管装修合同款的20%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template slot="title">
                <span style="font-size: 30px">03</span>
                <span style="font-size: 18px; font-weight: bold"
                  >问：托管的装修款什么时候支付给装修公司？</span
                >
              </template>
              <div style="background-color: #eee; padding: 30px" class="wen03">
                <table>
                  <tr>
                    <td>水电进度款</td>
                    <td>
                      水管、电线等开槽布线但还未封槽，同时泥瓦工和木工所需材料进场
                    </td>
                  </tr>
                  <tr>
                    <td>泥工进度款</td>
                    <td>地面找平施工、瓦工活（瓷砖铺贴等）均已完成</td>
                  </tr>
                  <tr>
                    <td>木作进度款</td>
                    <td>
                      木工活（基本的门套、木工吊顶、柜体等）都已施工完毕，第三方定制木作产品除外。
                    </td>
                  </tr>
                  <tr>
                    <td>油漆进度款</td>
                    <td>墙及顶面乳胶漆、木器漆均已施工完毕</td>
                  </tr>
                  <tr>
                    <td>竣工尾款</td>
                    <td>墙面漆涂刷完毕，五金、开关面板、灯具、洁具安装完毕</td>
                  </tr>
                </table>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <div class="about content">
        <div class="center">
          <h1 class="youshi">关于土巴兔</h1>
          <p>土巴兔互联网家装平台，13年累计登记业主需求4100多万</p>
          <div class="intro">
            <div class="intro1 aboutspan">
              <div class="topspan">
                <span class="zuo">11</span>
                <span class="you">万+</span>
              </div>
              <div class="botospan">装修公司</div>
            </div>
            <div class="intro2 aboutspan">
              <div class="topspan">
                <span class="zuo">130</span>
                <span class="you">万+</span>
              </div>
              <div class="botospan">室内设计师</div>
            </div>
            <div class="intro3 aboutspan">
              <div class="topspan">
                <span class="zuo">4100</span>
                <span class="you">多万</span>
              </div>
              <div class="botospan">累计需求</div>
            </div>
          </div>
          <div class="map">
            <div class="mapL">
              <div class="city">
                <div class="diquL">
                  <p>华北地区</p>
                  <p>华东地区</p>
                  <p>中南地区</p>
                  <p>西南地区</p>
                  <p>西北地区</p>
                </div>
                <div class="diquR">
                  <p>北京，天津，廊坊，石家庄，太原，沈阳，大连</p>
                  <p>
                    上海，南昌，杭州，嘉兴，昆山，张家港，南京，宁波，南通，苏州，常州，常熟，太仓，无锡，泰州，扬州，徐州，温州，镇江，福州，泉州，厦门，济南，合肥，芜湖，青岛，烟台
                  </p>
                  <p>
                    郑州，长沙，襄阳，武汉，东莞，佛山，广州，惠州，海口，深圳，中山，珠海，南宁
                  </p>
                  <p>重庆，成都，绵阳，昆明，贵阳</p>
                  <p>西安，兰州</p>
                </div>
              </div>
            </div>
            <div class="mapR" id="allmap" ref="allmap"></div>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<style scoped>
.security {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-width: 1460px;
  color: #2c3e50;
}
.youshi {
  margin: 70px auto 10px;
  font-size: 36px;
  color: #333;
}
.content {
  width: 100%;
  position: relative;
}
.center {
  height: 100%;
  width: 1220px;
  margin: 0 auto;
  clear: both;
}
.security {
  min-height: 100%;
  clear: both;
}
.bigimg {
  overflow: hidden;
}
.imgwai {
  width: 1220px;
  margin: 0 auto;
}
.imgwai img {
  display: block;
  width: 1920px;
  height: 400px;
  margin-left: -350px;
}
.v {
  margin: 100px 0;
}
.videoR {
  height: 433px;
  background-color: #eee;
  padding-top: 100px;
  box-sizing: border-box;
}
.order {
  background-color: #eee;
  padding: 50px 0;
}
.order h1 {
  font-size: 36px;
  color: #333333;
  margin-top: 70px;
  margin-bottom: 10px;
}
.orderbtn {
  border: 0;
  width: 180px;
  height: 46px;
  background-color: #fe8e20;
  /* box-shadow: 0px 0px 12px 2px rgb(255,147,51); */
  border-radius: 10px;
  margin: 0 auto;
  font-size: 16px;
  color: #fff;
  line-height: 46px;
  cursor: pointer;
}
.advan1 {
  padding: 50px 0;
}
.advan2 {
  background-color: #eee;
  padding: 50px 0;
}
.advan3 {
  height: 487px;
  padding: 50px 0;
  background-color: #fff;
}
.text {
  width: 534px;
  height: 120px;
  background-color: #fff;
  position: absolute;
  text-align: left;
  box-shadow: 2px 2px 10px 1px #666;
  padding: 10px;
}
.text h3 {
  margin-top: 22px;
  margin-left: 20px;
  font-size: 20px;
  color: #333;
  font-weight: 700;
}
.text p {
  margin-top: 3px;
  margin-left: 20px;
  font-size: 14px;
  color: #666;
}
.advan4 {
  background-color: #eee;
  height: 765px;
}
.ad4 {
  width: 49%;
  background-color: #fff;
  height: 450px;
  padding-top: 30px;
}
.ad4R {
  float: right;
}
.ad4L {
  float: left;
}
.ad4topp {
  font-size: 26px;
  color: #666;
  font-weight: 700;
  margin-top: 65px;
}
.ad4bottomp {
  font-size: 16px;
  color: #999;
  margin-top: 17px;
  margin-bottom: 28px;
}
.serveflow {
  padding: 30px 0;
}
.moreserve {
  height: 525px;
  background-color: #eee;
  padding: 50px 0;
}
.moreserve p {
  margin-top: 15px;
  font-size: 18px;
  color: #999;
  text-align: center;
}
.more img {
  width: 44px;
  vertical-align: middle;
  float: left;
}
.more {
  box-sizing: border-box;
  width: 284px;
  height: 120px;
  background-color: #fff;
  float: left;
  padding: 30px 20px;
  text-align: left;
}
.more .morebao2 {
  margin-left: 63px;
}
.bspan {
  font-size: 20px;
}
.morebao {
  width: 950px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  margin: 40px auto 50px;
}
.question {
  padding: 50px 0;
}
.question >>> .el-collapse-item__header {
  height: 80px;
}
.why {
  margin-top: 12px;
  margin-left: 38px;
  font-size: 14px;
  color: #666;
}
.intro {
  width: 530px;
  height: 142px;
  margin: 0 auto;
}
.aboutspan {
  width: 140px;
  height: 140px;
  border: 1px solid #e8e8e8;
  border-radius: 50%;
  float: left;
  margin-right: 49px;
}
.topspan {
  margin-top: 22px;
  font-size: 44px;
  color: #01ac8a;
  text-align: center;
  height: 66px;
}
.topspan .zuo {
  font-size: 44px;
  color: #01ac8a;
}
.topspan .you {
  color: #01ac8a;
  text-align: center;
  margin-top: -5px;
  font-size: 16px;
}
.intro3 {
  margin-right: 0;
}
.botospan {
  font-size: 16px;
  color: #999;
  text-align: center;
}
.about p {
  margin-top: 2px;
  font-size: 18px;
  color: #999;
  margin-bottom: 50px;
}
.map {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
}
.map::after {
  display: block;
  content: "";
  clear: both;
}
.mapL {
  width: 350px;
  height: 374px;
  float: left;
}
#allmap {
  width: 800px;
  height: 500px;
  float: left;
  margin-left: 70px;
}
.diquL {
  float: left;
  width: 70px;
}
.diquL p {
  background: #edeff6;
  padding: 5px;
  font-size: 15px;
  color: #666;
  float: left;
}
.diquR {
  margin-left: 20px;
  width: 260px;
  float: left;
  font-size: 15px;
  color: #666;
}
.diquR p {
  font-size: 15px;
  color: #666;
  float: left;
}
.diquL p:nth-child(1) {
  margin-bottom: 10px;
}
.diquL p:nth-child(2) {
  margin-bottom: 61px;
}
.diquL p:nth-child(3) {
  margin-bottom: 30px;
}
.diquL p:nth-child(4) {
  margin-bottom: 13px;
}
.diquR p:nth-child(1) {
  margin-bottom: 7px;
}
.diquR p:nth-child(2) {
  margin-bottom: 10px;
}
.diquR p:nth-child(3) {
  margin-bottom: 11px;
}
.diquR p:nth-child(4) {
  margin-bottom: 23px;
}
.tan {
  width: 340px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -170px 0 0 -160px;
  background-color: #fff;
  z-index: 100;
}
.tan p {
  font-size: 18px;
  color: #333;
  margin: 0px;
}
#input {
  width: 255px;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.city-picker-selector .selector-item{
  height: 25px !important;
}
.tan span {
  text-align: left;
}
.tan .agree {
  width: 255px;
  margin-top: 20px;
  text-align: left;
}
.tan .agree a {
  color: #01ac8a;
}
.tan .yuyue {
  width: 257px;
  height: 36px;
  margin: 18px auto 0;
  line-height: 36px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  background-color: #fe8e20;
  border: 0;
}
.tan .zixun {
  font-size: 14px;
  color: #666;
  margin-top: 20px;
}
.tan .shangp {
  margin-top: 15px;
}
#hideobj {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0.6;
  z-index: 2;
  background-color: #000;
}
.tan .chahao {
  font-size: 30px;
  width: 320px;
  text-align: right;
}
.tan .guantan {
  cursor: pointer;
  font-size: 28px;
}
.success {
  width: 800px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -250px 0 0 -400px;
  background-color: #fff;
  z-index: 100;
}
.success .guantan2 {
  cursor: pointer;
  font-size: 36px !important;
}
.videoR h1 {
  font-size: 36px;
  color: #333333;
  margin-bottom: 20px;
}
.videoR .h1 {
  text-align: left;
  margin-left: 135px;
}
.videoR p {
  font-size: 20px;
  color: #666666;
}
.wen02 table {
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: #666;
  background-color: #fff;
  border: 1px solid #dae5e8;
  border-collapse: collapse;
  border-spacing: 0;
}
.wen02 table td {
  border: 1px solid #dae5e8;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: #666;
  height: 45px;
  vertical-align: middle;
}
.wen03 table {
  width: 1140px;
  height: 261px;
  margin: 41px auto 0;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  color: #666;
  background-color: #fff;
  border: 1px solid #dae5e8;
  border-collapse: collapse;
  border-spacing: 0;
}
.wen03 table td {
  border: 1px solid #dae5e8;
  padding-left: 20px;
  vertical-align: middle;
}
html,
body,
div,
applet,
object,
iframe,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  font: 12px/1.5 "Source Han Sans SC", "HanHei SC", "PingFang SC",
    "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei",
    "微软雅黑", Arial, sans-serif;
  color: #333;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

/* make sure to set some focus styles for accessibility */
:focus {
  outline: 0;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type="search"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

textarea {
  overflow: auto;
  vertical-align: top;
  resize: vertical;
}

/**
 * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.
 */

audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  max-width: 100%;
}

/**
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
 * Known issue: no IE 6 support.
 */

[hidden] {
  display: none;
}

/**
 * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using
 *    `em` units.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *    user zoom.
 */



/**
 * Address `outline` inconsistency between Chrome and other browsers.
 */

/**
 * Improve readability when focused and also mouse hovered in all browsers.
 */

/**
 * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.
 * 2. Improve image quality when scaled in IE 7.
 */

img {
  border: 0; /* 1 */
  -ms-interpolation-mode: bicubic; /* 2 */
}

/**
 * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.
 */

figure {
  margin: 0;
}

/**
 * Correct margin displayed oddly in IE 6/7.
 */

form {
  margin: 0;
}

/**
 * Define consistent border, margin, and padding.
 */

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

/**
 * 1. Correct color not being inherited in IE 6/7/8/9.
 * 2. Correct text not wrapping in Firefox 3.
 * 3. Correct alignment displayed oddly in IE 6/7.
 */

legend {
  border: 0; /* 1 */
  padding: 0;
  white-space: normal; /* 2 */
  *margin-left: -7px; /* 3 */
}

/**
 * 1. Correct font size not being inherited in all browsers.
 * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
 *    and Chrome.
 * 3. Improve appearance and consistency in all browsers.
 */


/**
 * Address Firefox 3+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */

button,
input {
  line-height: normal;
}

/**
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.
 * Correct `select` style inheritance in Firefox 4+ and Opera.
 */

button,
select {
  text-transform: none;
}

/**
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    `input` and others.
 * 4. Remove inner spacing in IE 7 without affecting normal text inputs.
 *    Known issue: inner spacing remains in IE 6.
 */

button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button; /* 2 */
  cursor: pointer; /* 3 */
  *overflow: visible; /* 4 */
}

/**
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled] {
  cursor: default;
}

/**
 * 1. Address box sizing set to content-box in IE 8/9.
 * 2. Remove excess padding in IE 8/9.
 * 3. Remove excess padding in IE 7.
 *    Known issue: excess padding remains in IE 6.
 */

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
  *height: 13px; /* 3 */
  *width: 13px; /* 3 */
}

/**
 * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.
 * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome
 *    (include `-moz` to future-proof).
 */

input[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box; /* 2 */
  box-sizing: content-box;
}

/**
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Remove inner padding and border in Firefox 3+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

/**
 * 1. Remove default vertical scrollbar in IE 6/7/8/9.
 * 2. Improve readability and alignment in all browsers.
 */

textarea {
  overflow: auto; /* 1 */
  vertical-align: top; /* 2 */
}

/**
 * Remove most spacing between table cells.
 */

table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
button,
input,
select,
textarea {
  color: #222;
}

::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}

::selection {
  background: #b3d4fc;
  text-shadow: none;
}

img {
  vertical-align: middle;
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

.chromeframe {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}
.success .chahao2 {
  font-size: 30px !important;
  text-align: right;
}
</style>
<script>
export default {
  name: "App",
  data() {
    return {
      activeNames: ["0"],
      taninput: "",
      cang: false,
      able: false,
      orderbtn: { backgroundColor: "#eee" },
      cang2: false,
      gai: false,
      oname:'预约用户'
    };
  },
  methods: {
    guantan2() {
      this.cang2 = false;
      this.gai = false;
    },
    guantan() {
      this.cang = false;
      this.gai = false;
    },
    agree() {
      if (this.able) {
        this.orderbtn = { backgroundColor: "#fe8e20" };
      } else {
        this.orderbtn = { backgroundColor: "#eee" };
      }
    },
    yuyue() {
      if (this.inyanzheng()) {
        var ophone = this.taninput; //用变量保存输入的手机号
        this.axios.get(`/isorder/${ophone}`).then((result)=>{
          console.log(result);
          if(result.data==1){
        console.log("预约成功");
        this.cang = false; //遮挡的大div不显示
        this.cang2 = true; //显示预约成功的div
this.axios.post("/order", `oname=${this.oname}&ophone=${ophone}`).then((result) => {
          console.log(result);
          // if (result.data > 0) {
          //   ({
          //     title: "预约成功",
          //     message: "通知",
          //     type: "success",
          //   });
          // }
        });
          }else{alert('请勿重复预约，您已经预约过了!')}
        })
      
        
      }
    },

    order() {
      let hideobj = document.getElementById("hideobj");
      // console.log(document.body.offsetHeight);
      //   console.log(hideobj.)
      hideobj.style.height = document.body.offsetHeight + 108 + "px";
      this.cang = true;
      this.gai = true;
    },
    inyanzheng() {
      let input = document.getElementById("input");
      let reg = new RegExp(/^[1][3-9]\d{9}$/);
      if (input.value === "") {
        input.style.color = "red";
        input.value = "请输入手机号";
        return false;
      } else if (!reg.test(input.value)) {
        input.style.color = "red";
        input.value = "请输入正确的手机号";
        return false;
      } else {
        return true;
      }
    },
    jujiao() {
      let input = document.getElementById("input");
      input.style.color = "black";
      if (input.value == "请输入手机号" || input.value == "请输入正确的手机号")
        input.value = "";
    },
    handleChange(val) {
      console.log(val);
    },
    map() {
      let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
      map.centerAndZoom(new BMap.Point(104.3, 30.6), 5); // 初始化地图,设置中心点坐标（经纬度/城市的名称）和地图级别
      map.addControl(
        new BMap.MapTypeControl({
          //添加地图类型控件
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        })
      );
      map.setCurrentCity("武汉"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      //map.setMapStyle({style:'midnight'});//地图风格
      var points = [
        { lat: 116.71, lng: 39.51, city: "廊坊" },
        { lat: 116.39, lng: 39.91, city: "北京" },
        { lat: 113.64, lng: 34.72, city: "郑州" },
        { lat: 120.21, lng: 30.2, city: "杭州" },
        { lat: 120.21, lng: 30.2, city: "杭州" },
        { lat: 114.53, lng: 38.03, city: "石家庄" },
        { lat: 123.46, lng: 41.8, city: "沈阳" },
        { lat: 121.48, lng: 31.4, city: "上海" },
        { lat: 115.94, lng: 28.54, city: "南昌" },
        { lat: 120.78, lng: 30.74, city: "嘉兴" },
        { lat: 120.39, lng: 36.3, city: "青岛" },
        { lat: 112.98, lng: 28.25, city: "长沙" },
        { lat: 113.88, lng: 22.55, city: "深圳" },
        { lat: 108.27, lng: 22.78, city: "南宁" },
        { lat: 106.62, lng: 26.67, city: "贵阳" },
        { lat: 102.82, lng: 24.88, city: "昆明" },
        { lat: 104.1, lng: 30.65, city: "成都" },
        { lat: 108.93, lng: 34.23, city: "西安" },
        { lat: 103.71, lng: 36.1, city: "兰州" },
        { lat: 106.24, lng: 38.47, city: "银川" },
        { lat: 101.76, lng: 36.65, city: "西宁" },
        { lat: 91.13, lng: 29.65, city: "拉萨" },
        { lat: 88.31, lng: 43.36, city: "乌鲁木齐" },
      ];
      for (let i = 0; i < points.length; i++) {
        let point = new BMap.Point(points[i].lat, points[i].lng);
        let marker = new BMap.Marker(point);
        map.addOverlay(marker);
        let infoWindow = new BMap.InfoWindow(
          "<h4>土巴兔" +
            points[i].city +
            "分公司</h4>" +
            "<p>客服电话:</p>" +
            parseInt(Math.random() * 10000000)
        );
        marker.addEventListener("click", function () {
          this.openInfoWindow(infoWindow);
        });
      }
    }, //地图方法
    //预约按钮
  },
  mounted() {
    //页面挂载后
    //调用上面个的函数
    this.map();
    var selector3 = $("#city-picker-search").cityPicker({
      dataJson: cityData,
      renderMode: true,
      search: true,
      autoSelected: true,
      keyboard: true,
      level: 2,
      onChoiceEnd: function () {
        console.log(this.values);
      },
    });
  },
};
</script>
