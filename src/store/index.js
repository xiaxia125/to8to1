import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:sessionStorage.getItem("islogin"),
    username:sessionStorage.getItem("username"),
    islogin2:sessionStorage.getItem("islogin2"),
    username2:sessionStorage.getItem("username2"),
  },
  mutations: {
    
    loginOK(state,newname){
      state.islogin=true;
      state.username=newname;
    },
    loginOK2(state,newname){
      state.islogin2=true;
      state.username2=newname;
    }
  },
  actions: {
  },
  modules: {
  }
})
