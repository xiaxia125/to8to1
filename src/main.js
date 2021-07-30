import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import './assets/style/reset.css'
//引入elment-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//创建导航栏全局组件
import Head from './components/Head'
Vue.component("my-head",Head)
//创建footer全局组件
import Footer from './components/Footer'
Vue.component("my-footer",Footer)
//引入axios
import axios from 'axios'
axios.defaults.baseURL='http://localhost:3000/pro/'
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
