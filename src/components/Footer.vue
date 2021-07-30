<template>
  <div class="footer">
    <div class="center">
      <div class="foot-t">
        <el-tabs
          v-model="activeName"
          type="card"
          @tab-click="handleClick"
          style="position: relative"
        >
          <el-tab-pane label="热门城市" name="first">
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
            <a href="javascript:;">装修攻略</a>
          </el-tab-pane>
          <el-tab-pane label="热门公司" name="second">
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
            <a href="javascript:;">热门公司</a>
          </el-tab-pane>
          <el-tab-pane label="热门专题" name="third">
            <a href="javascript:;">热门专题</a>
            <a href="javascript:;">热门专题</a>
            <a href="javascript:;">热门专题</a>
            <a href="javascript:;">热门专题</a>
            <a href="javascript:;">热门专题</a>
            <a href="javascript:;">热门专题</a>
            <a href="javascript:;">热门专题</a>
            <a href="javascript:;">热门专题</a>
            <a href="javascript:;">热门专题</a>
            <a href="javascript:;">热门专题</a>
          </el-tab-pane>
          <el-tab-pane label="装修美图" name="fourth">
            <a href="javascript:;">装修美图</a>
            <a href="javascript:;">装修美图</a>
            <a href="javascript:;">装修美图</a>
            <a href="javascript:;">装修美图</a>
            <a href="javascript:;">装修美图</a>
            <a href="javascript:;">装修美图</a>
            <a href="javascript:;">装修美图</a>
            <a href="javascript:;">装修美图</a>
            <a href="javascript:;">装修美图</a>
          </el-tab-pane>
          <el-tab-pane label="热门攻略" name="fifth">
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
            <a href="javascript:;">热门攻略</a>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="foot-b">
        <ul>
          <li><a href="javascript:;">关于我们</a></li>
          <li><a href="javascript:;">联系我们</a></li>
          <li><a href="javascript:;">公示公告</a></li>
          <li><a href="javascript:;">商务合作</a></li>
          <li><a href="javascript:;">侵权投诉</a></li>
        </ul>
        <p>免责声明：本网站部分内容由用户自行上传，如权利人发现存在误传其作品情形，请及时与本站联系。© 2008-现在 Tubatu.com 土巴兔装修网和设计师社区 保留所有权利</p>
        <p>土巴兔装修网&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a href="javascript:;">增值电信业务许可证：合字B2-20200129 粤ICP备08125558号</a> 
        </p>
        <div class="pdiv">
          <span></span>
          <span>粤公网安备 44030502001463号</span>
          <span></span>
        </div>
        <div class="fimg">
          <div>
             <img src="../../public/imgs/rendering/fer1.png" alt="">
             <p>土巴兔APP</p>
          </div>
         <div>
             <img src="../../public/imgs/rendering/fer2.jpg" alt="">
             <p>微信公众号</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.footer {
  width: 100%;
  height: 365px;
  margin-top: 60px;
  background-color: #1f1f1f;
  min-width: 1460px;
  .center {
    width: 1460px;
    margin: 0 auto;
    .foot-t {
      width: 100%;
      height: 114px;
      padding-top: 40px;
      margin-left: 21.5px;
      .el-tabs__header {
        border: none;
        .el-tabs__nav {
          border: none;
          .el-tabs__item {
            border: none;
            background-color: #121212;
            margin-right: 10px;
            color: #828789;
          }
          .is-active {
            color: #fff;
            background-color: #384144;
          }
        }
      }
      .el-tab-pane {
        display: flex;
        flex-wrap: wrap;
        margin-top: 21px;
        border-bottom: 1px solid #313131;
        a {
          margin-right: 14px;
          margin-bottom: 11px;
          font-size: 12px;
          color: #83888a;
        }
      }
    }
    .foot-b{
      margin: 30px 0;
      height: 149px;
      width: 100%;
      position: relative;
      
      ul{
        display: flex;
        margin-left: 21.5px;
        justify-content: left;
        li{
          margin-right: 17px;
          a{
            color: #fff;
            font-size: 13px;
          }
        }
      }
      &>p{
        font-size: 12px;
        margin-top: 23px;
        margin-left: 21.5px;
        text-align: left;
        color: #83888a;
        a{
          color:#666
        }
      }
      .pdiv{
        height: 20px;
        margin-top: 23px;
        margin-left: 21.5px;
        text-align: left;
        font-size: 12px;
        span:nth-child(1){
          display: inline-block;
          width: 20px;
          height: 20px;
          background-image: url(../../public/imgs/rendering/f1.png);
          margin-right: 5px;
        }
        span:nth-child(2){
          display: inline-block;
          color: #939393;
        }
        span:nth-child(3){
          display: inline-block;
          width: 130px;
          height: 20px;
          background-image: url(../../public/imgs/rendering/f2.png);
          background-position: -365px -500px;
        }
      }
      .fimg{
        position: absolute;
        width: 230px;
        display: flex;
        top: 30px;
        right: 10%;
        &>div{
          margin-right: 30px;
          img{
          width: 100px;
        }
        p{
          color: #fff;
          font-size: 12px;
          margin-top: 10px;
        }
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
