<template>
  <div>
    <my-head></my-head>
    <div class="detailsimg">
      <div class="crumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/rendering' }"
            >装修效果图</el-breadcrumb-item
          >
          <el-breadcrumb-item>家居美图</el-breadcrumb-item>
          <el-breadcrumb-item>{{ detailsimg.rtype }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ detailsimg.rtittle }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="concenter">
        <div class="detailsright">
          <div class="author">
            <h3>图片信息</h3>
            <p>图片名称：{{ detailsimg.rtittle }}设计图片赏析</p>
            <p>图片分类：{{ detailsimg.rtittle }}</p>
            <p>上传者：未知</p>
            <p>作品描述：暂无描述暂无描述</p>
            <p style="color: #bbb">上述内容图片由用户自行上传</p>
          </div>
          <div class="companyr">
            <p>擅长该风格的装企</p>
            <div class="companyr-lists">
              <div>
                <div class="lists-n">
                  <div class="companyr-lists-icon">
                    <img
                      src="../../public/imgs/rendering/detailsimg/xyzs.jpg"
                      alt=""
                    />
                  </div>
                  <div class="com-text">
                    <span>轩逸装饰</span>
                    <p>深圳市龙华新区</p>
                    <p>案例：1734 工地：5005</p>
                  </div>
                </div>
                <router-link to="/company">向TA咨询</router-link>
              </div>
              <div>
                <div class="lists-n">
                  <div class="companyr-lists-icon">
                    <img
                      src="../../public/imgs/rendering/detailsimg/ldjzz.jpg"
                      alt=""
                    />
                  </div>
                  <div class="com-text">
                    <span>乐杜鹃整装</span>
                    <p>深圳市南山区</p>
                    <p>案例：1435 工地：153</p>
                  </div>
                </div>
                <router-link to="/company">向TA咨询</router-link>
              </div>
              <div>
                <div class="lists-n">
                  <div class="companyr-lists-icon">
                    <img
                      src="../../public/imgs/rendering/detailsimg/dyrs.jpg"
                      alt=""
                    />
                  </div>
                  <div class="com-text">
                    <span>东易日盛</span>
                    <p>深圳市福田区</p>
                    <p>案例：613 工地：1704</p>
                  </div>
                </div>
                <router-link to="/company">向TA咨询</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="detailsleft">
          <div class="lefta">
            <div class="boximg">
              <div class="img">
                <img :src="detailsimg.raddress" alt="" />
                <ul>
                  <li>
                    <a href="javascript:;">{{ detailsimg.rtype }}</a>
                  </li>
                  <li>
                    <a href="javascript:;">{{ detailsimg.rtittle }}</a>
                  </li>
                  <li>
                    <a href="javascript:;">{{ detailsimg.rcolor }}</a>
                  </li>
                </ul>
                <div class="all360" @click="vrclick">
                  <img src="../../public/imgs/rendering/detailsimg/imgsVR/360all.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="leftb"></div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
export default {
  props: ["rid"],
  data() {
    return {
      detailsimg: {},
    };
  },
  methods:{
vrclick(){
  this.$router.push('/vrroom')
}
  },
  mounted() {
    this.axios
      .get("/detailsimg", { params: { rid: this.rid } })
      .then((result) => {
        this.detailsimg = result.data[0];

        // console.log(this.detailsimg);
        this.detailsimg.raddress = require(`../../public/imgs/rendering/${this.detailsimg.raddress}`);
      });
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@keyframes move {
  0%{
    transform: translateY(0px);
  }
  25%{
    transform: translateY(-5px);
  }
  50%{
    transform: translateY(-10px);
  }
  75%{
    transform: translateY(-5px);
  }
  100%{
    transform: translateY(0px);
  }
}
.detailsimg {
  background-color: #f4f4f4;
  .crumb {
    box-sizing: border-box;
    min-width: 400px;
    width: 100%;
    height: 39px;
    padding-left: 30px;
    .el-breadcrumb {
      padding-top: 10px;
      line-height: 39px;
    }
  }
  .concenter {
    width: 100%;
    min-width: 1220px;
    box-sizing: border-box;
    padding: 0 30px;
    display: flex;
    position: relative;
    padding-bottom: 100px;
    .detailsleft {
      width: 100%;
      min-width: 881px;
      margin-right: 265px;
      // position: relative;
      .lefta {
        width: 100%;
        height: 753px;
        padding: 20px;
        box-sizing: border-box;
        background-color: #fff;
        .boximg {
          // width: 100%;
          // height: 100%;
          text-align: center;
          .img {
            display: inline-block;
            margin: 0 auto;
            position: relative;
            &>img {
              height: 713px;
            }
            ul {
              position: absolute;
              display: flex;
              top: 20px;
              left: 20px;
              li {
                margin-right: 10px;
                a {
                  display: inline-block;
                  width: 70px;
                  height: 25px;
                  background-color: rgba(51, 51, 51, 0.5);
                  line-height: 25px;
                  text-align: center;
                  border-radius: 10px;
                  font-size: 14px;
                  color: #fff;
                  &:hover {
                    background-color: #333;
                  }
                }
              }
            }
            &>div{
              // width: 100px;
              // height: 50px;
              position: absolute;
              right: -110px;
              bottom: 0px;
              animation: move 1s linear 0s infinite;

              img{
                width: 100px;
                height: 50px;
              }
              &:hover{
                cursor: pointer;
                // transform: translateY(-1px);
                animation-play-state: paused;
              }
            }
          }
        }
      }
    }
    .detailsright {
      position: absolute;
      right: 30px;
      top: 0;
      width: 245px;
      height: 1000px;
      .author {
        padding: 15px;
        background-color: #fff;
        margin-bottom: 15px;
        & > h3 {
          display: block;
          margin-bottom: 10px !important;
          font-size: 16px;
        }
        p {
          display: block !important;
          margin-top: 10px !important;
          font-size: 14px !important;
          color: #666;
        }
      }
      .companyr {
        background-color: #fff;
        & > p {
          color: #333;
          font-size: 16px;
          line-height: 54px;
          padding: 0px 15px;
        }
        .companyr-lists {
          & > :last-child {
            border: none;
          }
          & > div {
            margin-bottom: 20px;
            border-bottom: 1px solid #f6f6f6;
            display: flex;
            flex-direction: column;
            padding: 0 15px 15px;
            .lists-n {
              display: flex;
              justify-content: space-between;
              .companyr-lists-icon {
                width: 70px;
                height: 70px;
                border: 1px solid #f6f6f6;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .com-text {
                span {
                  color: #333;
                  font-size: 14px;
                  font-weight: bold;
                  display: block;
                  margin-bottom: 5px;
                }
                p {
                  color: #666;
                }
                & > :nth-child(2) {
                  display: block;
                  padding: 4px 0;
                }
              }
            }
            & > a {
              margin-top: 20px;
              width: 217px;
              height: 36px;
              color: #ff5a00;
              border: 1px solid #ff5a00;
              border-radius: 5px;
              font-size: 12px;
              line-height: 36px;
              text-align: center;
              &:hover {
                background-color: #ff5a00;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
}
</style>