<template>
  <div>
    <my-head></my-head>
  <div class="details">
    <div class="up">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/strategy' }">装修攻略</el-breadcrumb-item>
        <el-breadcrumb-item >{{article.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <div class="details_left">
        <!-- 文本内容 -->
        <div class="text">
          <div v-html="article.content"></div>
          <!-- <div class="content">
            <h1>家有爱宠、敏感人士？满足各种需求的涂料大全</h1>
            <p class="time"><span>时间 : 2020-08</span></p>
            <p class="dy">
              <i>导语：</i>
              节省空间，所有衣柜均可根据您的需求进行设计。将它放入房屋后，您会感觉衣柜嵌在墙上。订做的衣柜好吗？它不仅可以在悬挂空间中，而且还可以放置在上部空间中，把室内空间很好的分开了。
            </p>
            <p class="p">
              购买房子以后，开始<a href="javascript:;">装修</a
              >，装修之后开始购买所需要的家具和电器，家具的选购很重要，这与我们的生活息息相关，而且还能提高生活品质和档次，现在人们已经不在购买成品家具，而是定做，那<strong>顶做的衣柜好吗</strong>？为什么现在人都追求订做家具呢？另外订做家具是要看什么？
            </p>
            <h2>一、订做的衣柜好吗</h2>
            <p class="p">
              1、经济实用，一般衣柜在目前流行，不仅因为它非常实用，而且因为合理利用空间，还有很多经济方面。其成本根据衣柜所选的材料面积计算，不同内部配置的价格也不同。
            </p>
            <p class="p">
              2、时尚和保护环境，在以前的家居装修，主要是通过木工现场制造成品。对于木工制造，虽然也是可以量身定做，但质量不易控制，专业化程度不够，所购产品质量稳定，而且不能与房屋空间相匹配。一般的衣柜虽有优点，但会有的尺寸会变化，并不能完全适合自己的室内。<strong>订做的衣柜好吗</strong>？这就不得不说，工厂制造，安装会简单快捷，省去许多时间和制造的问题，如果年轻人非常忙碌，那为我们提供了便利。
            </p>
            <p class="p">
              3、节省空间，所有衣柜均可根据您的需求进行设计。将它放入房屋后，您会感觉衣柜嵌在墙上。<strong>订做的衣柜好吗</strong>？它不仅可以在悬挂空间中，而且还可以放置在上部空间中，把室内空间很好的分开了。
            </p>
            <p class="p">
              4、通过选择衣柜推拉门的颜色，它可以与整个房间的装饰融为一体。如果您的房间足够大，您还可以设计一个带衣柜的更衣室，外面有一个优雅的推拉门，并创造一个私人空间。
            </p>
            <p class="p"><img src="../assets/xiao.png" alt="" /></p>
            <h2>二、订做的衣柜好吗-订做衣柜要看什么</h2>
            <p class="p">
              1、尺寸，定做那就要测量，对于衣柜定做要实地测量合适的尺寸。
            </p>
            <p class="p">
              3、颜色，在定做衣柜的时候，颜色如何选择呢？设计师给出的建议是与整体家装风格相近或者相搭配的衣柜颜色，这样才能体显出完整的装修风格。
            </p>
            <p class="p">
              3、颜色，在定做衣柜的时候，颜色如何选择呢？设计师给出的建议是与整体家装风格相近或者相搭配的衣柜颜色，这样才能体显出完整的装修风格。
            </p>
            <p class="p">
              以上内容介绍的是<strong>订做的衣柜好吗</strong>和订做衣柜要看什么，大家在订做前先来学习一下方法。
            </p>
            <p class="p">
              上述内容来自用户自行上传或互联网，如有版权问题，请联系zxcq@corp.to8to.com
              。
            </p>
          </div> -->
           <div class="zan">
              <div @click="detNum">
                <i></i>
                <span>{{article.num}}</span>
              </div>
            </div>
        </div>
        <!-- 攻略码 -->
        <div class="gl_ma">
          <div class="gl_inside">
            <div><img src="../../public/imgs/strategy/details/a03fb05faf79f283d4f1cad6c847378b.png" alt=""></div>
            <div><img src="../../public/imgs/strategy/details/6b7e6986475050c81eec0cfda2130d4560028.png" alt=""></div>
          </div>
        </div>
        <!-- 左侧咨询 -->
        <div class="left_zx">
          <div class="head">没有满意的答案，向专业人士咨询</div>
          <div class="firm">
            <div class="first">
              <div>
                <ul class="inlayer">
                  <li><img src="../../public/imgs/strategy/details/headphoto_s_804636_s (1).jpg" alt="" class="img"/></li>
                  <li class="content">
                    <ul>
                      <li class="font14">圳星整装</li>
                      <li class="second_padding">深圳市南山区</li>
                      <li>回答数：1954 被采纳数：2</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <a href="#" class="consult">向TA咨询</a>
            </div>
            <div class="first">
              <div>
                <ul class="inlayer">
                  <li><img src="../../public/imgs/strategy/details/headphoto_s_804636_s (1).jpg" alt="" class="img"/></li>
                  <li class="content">
                    <ul>
                      <li class="font14">圳星整装</li>
                      <li class="second_padding">深圳市南山区</li>
                      <li>回答数：1954 被采纳数：2</li>
                    </ul>
                  </li>
                </ul>
              </div>
            <a href="#" class="consult">向TA咨询</a>  
            </div>
            <div class="first">
              <div>
                <ul class="inlayer">
                  <li><img src="../../public/imgs/strategy/details/headphoto_s_804636_s (1).jpg" alt="" class="img"/></li>
                  <li class="content">
                    <ul>
                      <li class="font14">圳星整装</li>
                      <li class="second_padding">深圳市南山区</li>
                      <li>回答数：1954 被采纳数：2</li>
                    </ul>
                  </li>
                </ul>
              </div>
            <a href="javascript:;" class="consult">向TA咨询</a>  
            </div>
        </div>
        </div>
        <!-- 评论 -->
        <!-- <div class="comment">
          <div>
            <div class="head">发表评论</div>
            <div class="content">
              <div class="text_field">
                <textarea maxlength="300" id="" placeholder="说说你的看法~~~"></textarea>
              </div>
              <div class="add_comment"></div>
              <div class="user_comment"></div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="details_right">
        <div class="firm">
          <div class="first">
            <div>擅长该问题的装企</div>
            <ul class="ul_first">
              <li><img src="../../public/imgs/strategy/details/headphoto_s_804636_s (1).jpg" alt="" class="img"/></li>
              <li class="content">
                <ul>
                  <li>圳星整装</li>
                  <li>深圳市南山区</li>
                  <li>回答数：1954 被采纳数：2</li>
                  <li><a href="#">向TA咨询</a></li>
                </ul>
              </li>
            </ul>
            <ul class="ul_first">
              <li><img src="../../public/imgs/strategy/details/797ce498784175b3573f96b3bec1e17c_s (1).jpg" alt="" class="img"/></li>
              <li class="content">
                <ul>
                  <li>乐蜂整装</li>
                  <li>深圳市南山区</li>
                  <li>回答数：3975 被采纳数：9</li>
                  <li><a href="#">向TA咨询</a></li>
                </ul>
              </li>
            </ul>
            <ul class="ul_first">
              <li><img src="../../public/imgs/strategy/details/headphoto_470907_s (1).jpg" alt="" class="img"/></li>
              <li class="content">
                <ul>
                  <li></li>
                  <li>弘之高装饰</li>
                  <li>回答数：1954 被采纳数：2</li>
                  <li><a href="#">向TA咨询</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="r_bottom">
          <div class="r_title"><span>相关攻略标签</span></div>
          <div class="r_label">
            <a href="" v-for="(item,i) of label" :key="i">{{item}}</a>
          </div>
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
      str_address: '',
      article: {},
      label: ["南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱","南宁装修多少钱",]
    };
  },
  methods: {
    detNum(){
      this.article.num++;      
    }
  },
  mounted(){
    // 传过来的id值
    let id = this.$route.query.id;
    console.log(`输出从列表页传过来的id，如果是undefined那就是没传：`+id)
    this.axios.get('/str_details?id='+id).then(result=>{
      console.log(result);
      this.article = result.data[0];
      // 图片地址
      this.str_address = require(`../../public/imgs/strategy/${this.article.str_address}`);
      console.log(this.str_address);
      // let a = this.str_address.split("/");
      // console.log(a);
      // let address = a[2];
      // console.log(address);
    })
    window.scrollTo(0, 0);
  }
 
};
</script>
<style lang="scss">
.details {
  width: 100%;
  background-color: #f5f5f5;
  min-width: 1498px;
  .up {
    width: 1220px;
    height: 20px;
    padding: 12px 0 12px 0;
    margin: 0 auto;
    color: #eee;
    .el-breadcrumb__inner{
      color: #999999;
      &:hover {
        color: #fa6e23;
      }
    }
  }
  .main {
    width: 1220px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .details_left {
      width: 900px;
      .text {
        width: 740px;
        padding: 30px 80px 0 80px;
        background-color: white;
        .content {
          h1 {
            font-size: 24px;
            color: #333;
            font-weight: 400;
          }
          h2 {
            font-size: 16px;
            color: #666;
            font-weight: 300;
          }
          .time {
            display: block;
            border-bottom: 1px solid #eee;
            margin-bottom: 30px;
            padding-bottom: 11px;
            span {
              font-size: 14px;
              color: #999;
            }
          }
          .dy {
            position: relative;
            background-color: #f8f8f8;
            margin-bottom: 26px;
            padding: 24px 40px 24px 83px;
            font-size: 14px;
            color: #666;
            i {
              font-size: 20px;
              color: rgb(119, 119, 119);
              position: absolute;
              left: 28px;
              top: 18px;
            }
          }
          .img_content {
            margin-bottom: 15px;
            img {
              width: 100%;
              height: 100%;
              margin: 25px 0 18px;
            }
          }
          .p {
            font-size: 16px;
            color: #777;
            line-height: 30px;
            word-break: break-all;
            margin-bottom: 15px;
            a {
              font-size: 16px;
              color: #0cb46a;
            }
            strong {
              color: #666666;
              font-size: 16px;
              font-weight: bold;
            }
            
          }
         
        }
        .zan {
            height: 155px;
            padding: 30px 0 60px;
            box-sizing: border-box;
            cursor: pointer;
            div {
              display: flex;
              height: 48px;
              font-size: 20px;
              width: 106px;
              margin: 0 auto;
              border-radius: 24px;
              color: #ff811b;
              border: 1px solid #ff9037;
              position: relative;
              i {
                position: absolute;
                left: 30px;
                top: 10px;
                width: 28px;
                height: 27px;
                background-image: url(../../public/imgs/strategy/detail_common_s.png);
                background-position: -1px -33px;
              }
              span {
                font-size: 20px;
                margin-left: 70px;
                color: #ff9037;
                line-height: 48px;
              }
              &:hover {
                background-color: #ff9037ad;
              }
              &:hover > span {
                color: white;
              }
              &:hover > i {
                background-image: url(../../public/imgs/strategy/detail_common_s.png);
                background-position: -1px -65px;
              }
            }
          }
      }
      //攻略码
      .gl_ma {
        margin-top: 15px;
        .gl_inside {
          width: 900px;
          height: 135px;
          display: flex;
          justify-content: space-between;
            box-sizing: border-box;

          div {
            width: 432px;
            img {
              width: 432px;
              height: 130px;
            }
          }
        }
      }
      //咨询
      .left_zx {
        margin-top: 20px;
        margin-bottom: 60px;
        width: 900px;
        padding: 0 0 30px 30px;
        box-sizing: border-box;
        background-color: white;
        .head {
          height: 24px;
          font-size: 16px;
          padding-top: 30px;
          font-weight: 700;
          color: #333;
        }
        .firm {
          display: flex;
          justify-content: flex-start;
          .first {
          width: 275px;
          height: 128px;
          margin: 20px 15px 0 0;
          padding: 10px;
          box-sizing: border-box;
          border-right: 1px solid #F6F6F6;
          &:last-child {
            border: none;
          }
          .consult {
            display: block;
            width: 242px;
            height: 28px;
            text-align: center;
            border: 1px solid #ff5a00;
            border-radius: 3px;
            line-height: 30px;
            font-size: 12px;
            color: #ff5a00;
            &:hover {
              background-color: #ff5a00;
              color: white;
            }
            &:hover{
              color: white;
            }

          }
          .inlayer {
            display: flex;
            justify-content: flex-start;
            height: 80px;
            .img {
              width: 72px;
              height: 72px;
              margin-right: 10px;
              border: 1px solid #F6F6F6;
            }
            .second_padding {
              padding: 7px 0 3px;
            }
            .font14 {
              font-size: 14px;
              font-weight: 700;
            }
          }
        }
        }
      }
      //评论
      // .comment {
      //   margin-top: 20px;
      //   background-color: white;
      //   margin-bottom: 60px;
      //   .head {
      //     width: 900px;
      //     height: 60px;
      //     border-bottom: 1px solid #eee;
      //     line-height: 60px;
      //     font-size: 20px;
      //     padding: 0 40px;
      //   }
      //   .content {
      //     padding: 40px;
      //     .text_field {
      //       textarea {
      //         width: 790px;
      //         height: 90px;
      //         padding: 15px;
      //         font-size: 14px;
      //         border: 1px solid #d8d8d8;
      //         resize: none;
      //         &:focus {
      //           border: 1px solid #0cb469;
      //         }
      //       }
      //     }
      //   }
      // }
    }
    .details_right {
      width: 300px;
      background-color: white;
      .firm{
        .first {
          width: 300px;
          div {
            box-sizing: border-box;
            width: 300px;
            height: 39px;
            font-size: 16px;
            padding: 15px 15px 0 15px;
          }
          .ul_first {
            padding: 15px 14px 15px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #eee;

            .img {
              width: 94px;
              height: 94px;
              background-color: rgb(215, 243, 229);
              border: 1px solid #eee;
            }
            .content {
              width: 160px;
              display: flex;
              align-items: flex-start;
              li {
                font-size: 12px;
                margin-bottom: 1px;
                &:nth-child(1) {
                  height: 19px;
                  font-size: 14px;
                  font-weight: bold;
                  margin-top: 5px;
                }
                &:last-child {
                  height: 28px;
                  margin-top: 3px;
                  text-align: center;
                  line-height: 28px;
                  border: 1px solid #ff5a00;
                  border-radius: 3px;
                  &:hover {
                    background-color: #ff5a00;
                    color: white;
                  }
                  &:hover > a {
                    color: white;
                  }
                }
              }
            }
          }
        }
      }
      .r_bottom {
        padding: 0 20px;
        margin-top: 30px;
        .r_title {
          span {
            font-size: 16px;
          }
        }
        .r_label {
          display: flex;
          flex-wrap: wrap;
          a {
            display: block;
            box-sizing: border-box;
            width: 108px;
            height: 42px;
            background-color: #F8F8F8;
            padding: 12px;
            margin: 10px 10px 0 0;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>