<template>
  <div>
    <my-head></my-head>
    <div>
      <div class="search">
        <div class="navitem">
          <ul>
            <li><a href="javascript:;">效果图</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
            <li>
              <a href="javascript:;">免费设计</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            </li>
            <li>
              <a href="javascript:;">定制设计</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            </li>
            <li><a href="javascript:;">图满意</a></li>
          </ul>
        </div>
        <div class="container">
          <div class="crumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/rendering' }"
                >装修效果图</el-breadcrumb-item
              >
              <el-breadcrumb-item>家居美图</el-breadcrumb-item>
              <el-breadcrumb-item>{{
                this.$route.query.msg
              }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="select-type">
            <dl>
              <dt>空间</dt>
              <dd>
                <router-link to="" :class="selected1=='全部'?'selcolor':''" @click.native="screen1({ rtittle: 1, txt: '全部' })"
                  >全部</router-link
                >
                <router-link to="" :class="selected1=='客厅'?'selcolor':''" @click.native="screen1({ rtittle: 'rtittle', txt: '客厅' })"
                  >客厅</router-link
                >
                <router-link to="" :class="selected1=='卧室'?'selcolor':''" @click.native="screen1({ rtittle: 'rtittle', txt: '卧室' })"
                  >卧室</router-link
                >
                <router-link to="" :class="selected1=='厨房'?'selcolor':''" @click.native="screen1({ rtittle: 'rtittle', txt: '厨房' })"
                  >厨房</router-link
                >
                <router-link to="" :class="selected1=='卫生间'?'selcolor':''" @click.native="screen1({ rtittle: 'rtittle', txt: '卫生间' })"
                  >卫生间</router-link
                >
                <router-link to="" :class="selected1=='餐厅'?'selcolor':''" @click.native="screen1({ rtittle: 'rtittle', txt: '餐厅' })"
                  >餐厅</router-link
                >
                <router-link to="" :class="selected1=='玄关'?'selcolor':''" @click.native="screen1({ rtittle: 'rtittle', txt: '玄关' })"
                  >玄关</router-link
                >
                <router-link to="" :class="selected1=='阳台'?'selcolor':''" @click.native="screen1({ rtittle: 'rtittle', txt: '阳台' })"
                  >阳台</router-link
                >
                <router-link to="" :class="selected1=='功能区'?'selcolor':''" @click.native="screen1({ rtittle: 'rtittle', txt: '功能区' })"
                  >功能区</router-link 
                >
              </dd>
            </dl>
            <dl>
              <dt>风格</dt>
              <dd>
                <router-link to="" :class="selected2=='全部'?'selcolor':''" @click.native="screen2({ rtype: 1, txt: '全部' })"
                  >全部</router-link
                >
                <router-link to="" :class="selected2=='北欧极简'?'selcolor':''" @click.native="screen2({ rtype: 'rtype', txt: '北欧极简' })"
                  >北欧极简</router-link
                >
                <router-link to="" :class="selected2=='现代简约'?'selcolor':''" @click.native="screen2({ rtype: 'rtype', txt: '现代简约' })"
                  >现代简约</router-link
                >
                <router-link to="" :class="selected2=='美式田园'?'selcolor':''" @click.native="screen2({ rtype: 'rtype', txt: '美式田园' })"
                  >美式田园</router-link
                >
                <router-link to="" :class="selected2=='日式'?'selcolor':''" @click.native="screen2({ rtype: 'rtype', txt: '日式' })"
                  >日式</router-link
                >
                <router-link to="" :class="selected2=='中式现代'?'selcolor':''" @click.native="screen2({ rtype: 'rtype', txt: '中式现代' })"
                  >中式现代</router-link
                >
                <router-link to="" :class="selected2=='美式经典'?'selcolor':''" @click.native="screen2({ rtype: 'rtype', txt: '美式经典' })"
                  >美式经典</router-link
                >
                <router-link to="" :class="selected2=='欧式豪华'?'selcolor':''" @click.native="screen2({ rtype: 'rtype', txt: '欧式豪华' })"
                  >欧式豪华</router-link
                >
                <router-link to="" :class="selected2=='潮流混搭'?'selcolor':''" @click.native="screen2({ rtype: 'rtype', txt: '潮流混搭' })"
                  >潮流混搭</router-link
                >
                <router-link to="" :class="selected2=='其他'?'selcolor':''" @click.native="screen2({ rtype: 'rtype', txt: '其他' })"
                  >其他</router-link
                >
              </dd>
            </dl>
            <dl>
              <dt>空间</dt>
              <dd>
                <router-link to="" :class="selected3=='全部'?'selcolor':''" @click.native="screen3({ rcolor: 1, txt: '全部' })"
                  >全部</router-link
                >
                <router-link to="" :class="selected3=='白色'?'selcolor':''" @click.native="screen3({ rcolor: 'rcolor', txt: '白色' })"
                  >白色</router-link
                >
                <router-link to="" :class="selected3=='灰色'?'selcolor':''" @click.native="screen3({ rcolor: 'rcolor', txt: '灰色' })"
                  >灰色</router-link
                >
                <router-link to="" :class="selected3=='蓝色'?'selcolor':''" @click.native="screen3({ rcolor: 'rcolor', txt: '蓝色' })"
                  >蓝色</router-link
                >
                <router-link to="" :class="selected3=='绿色'?'selcolor':''" @click.native="screen3({ rcolor: 'rcolor', txt: '绿色' })"
                  >绿色</router-link
                >
                <router-link to="" :class="selected3=='橙色'?'selcolor':''" @click.native="screen3({ rcolor: 'rcolor', txt: '橙色' })"
                  >橙色</router-link
                >
                <router-link to="" :class="selected3=='红色'?'selcolor':''" @click.native="screen3({ rcolor: 'rcolor', txt: '红色' })"
                  >红色</router-link
                >
                <router-link to="" :class="selected3=='粉色'?'selcolor':''" @click.native="screen3({ rcolor: 'rcolor', txt: '粉色' })"
                  >粉色</router-link
                >
                <router-link to="" :class="selected3=='紫色'?'selcolor':''" @click.native="screen3({ rcolor: 'rcolor', txt: '紫色' })"
                  >紫色</router-link
                >
              </dd>
            </dl>
          </div>
          <!-- <div class="con-context">
            <div class="divlists" v-for="(item, i) of searchres" :key="i">
              <router-link :to="`/detailsimg/${item.rid}`">
                <img :src="item.raddress" alt="" />
              </router-link>
              <router-link :to="`/detailsimg/${item.rid}`">{{
                item.rtittle
              }}</router-link>
            </div>
          </div> -->
          <div class="con-context">
            <div class="divlists" v-for="(item, i) of clickres" :key="i">
              <router-link :to="`/detailsimg/${item.rid}`">
                <img :src="item.raddress" alt="" />
              </router-link>
              <router-link :to="`/detailsimg/${item.rid}`">{{
                item.rtittle
              }}</router-link>
            </div>
          </div>
                <el-empty
                v-if="emptyval"
        style="height: 600px"
        :image-size="300"
        description="暂时找不到相关内容"
      ></el-empty>
          <!-- <p v-if="pshow">加载中...</p>
      <p v-else>抱歉给不了更多了...</p> -->
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
      searchres: {},
      clickres:{},
      emptyval: false,
      obj1:{},
      obj2:{},
      obj3:{},
      obj:{},
      // selres:true
      selected1:'全部',
      selected2:'全部',
      selected3:'全部',
    };
  },
  methods: {
    screen1(obj) {
      this.selected1=obj.txt;
      if(this.obj.rtittle){
          delete this.obj.rtittle;
        }
      if(obj.rtittle!=1){
        this.obj1='';
        this.obj1=obj;
        this.obj.rtittle=this.obj1;
      }
      this.clickaxios(this.obj);
    },
    screen2(obj) {
      this.selected2=obj.txt;
      if(this.obj.rtype){
          delete this.obj.rtype;
        }
      if(obj.rtype!=1){
        
        this.obj2='';
        this.obj2=obj;
        this.obj.rtype=this.obj2;
      }
       this.clickaxios(this.obj);
    },
    screen3(obj) {
      this.selected3=obj.txt;
      if(this.obj.rcolor){
          delete this.obj.rcolor;
        }
      if(obj.rcolor!=1){
        this.obj3='';
        this.obj3=obj;
        this.obj.rcolor=this.obj3;
      }
        this.clickaxios(this.obj);
    },
    //筛选点击发送请求
    clickaxios(obj){
      this.$router.push({path:`/search`,query:{obj:obj['txt']}});
      this.axios
        .get("/clickres", { params: { obj:obj } })
        .then((result) => {
          this.clickres = result.data;
          console.log(this.clickres);
          if (this.clickres.length > 0) {
           this.emptyval=false;
            this.clickres.forEach((item) => {
              item.raddress = require(`../../public/imgs/rendering/${item.raddress}`);
            });
          } else {
            this.emptyval = true;
          }
        });
    },
    //搜索-》发送请求
    loadsearch() {
      this.selres=true;
      if(this.$route.query.msg==false){
        this.selected1="全部";
      }else{
        this.selected1=this.$route.query.msg;
      }
      this.axios
        .get("/search", { params: { msg: this.$route.query.msg } })
        .then((result) => {
          this.clickres = result.data;
          console.log(this.clickres);
          if (this.clickres.length > 0) {
            this.emptyval = false;
            this.clickres.forEach((item) => {
              item.raddress = require(`../../public/imgs/rendering/${item.raddress}`);
            });
          } else {
            this.emptyval = true;
          }
        });
        
    }
  },
  //监听地址栏变化
watch:{
  $route:{
    immediate:true,
    handler(){
      if(this.$route.query.msg){
        this.axios
        .get("/search", { params: { msg: this.$route.query.msg } })
        .then((result) => {
          this.clickres = result.data;
          console.log(this.clickres);
          if (this.clickres.length > 0) {
            this.emptyval = false;
            this.selected1=this.$route.query.msg,
            this.selected2='全部',
           this.selected3='全部',
            this.clickres.forEach((item) => {
              item.raddress = require(`../../public/imgs/rendering/${item.raddress}`);
            });
          } else {
            this.emptyval = true;
          }
        });
      }
    }
  }
},
  mounted() {
    // this.clickaxios(this.obj);
    if (this.$route.query.msg) {
      this.loadsearch();
    }else{
      window.addEventListener('load', () =>{
        this.clickaxios(this.obj);
        
      } )
    }
  },
};
</script>
<style lang="scss" scoped>
.selcolor{
  color: #0cb46a;
}
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
.container {
  width: 100%;
  //   background-color: #f8f8f8;
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
    }
  }
  .crumb {
    box-sizing: border-box;
    min-width: 400px;
    width: 100%;
    height: 39px;
    .el-breadcrumb {
      padding-top: 10px;
      line-height: 39px;
      width: 1220px;
      margin: 0 auto;
    }
  }
  .select-type {
    width: 1220px;
    margin: 0 auto;
    border: 1px solid #eaeaea;
    position: relative;
    border-top: 0;

    dl {
      width: 1218px;
      height: 40px;
      position: relative;
      border-top: 1px solid #eaeaea;
      dt {
        line-height: 40px;
        position: absolute;
        text-align: center;
        width: 77px;
        color: #666;
        background-color: #f8f8f8;
        top: 0;
        left: 0;
      }
      dd {
        float: left;
        display: inline;
        line-height: 40px;
        margin-left: 110px;
        a {
          margin-right: 40px;
          &:hover {
            color: #0cb46a;
          }
        }
      }
    }
  }
}
</style>