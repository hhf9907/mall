import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
//安装插件
Vue.use(Vuex)
const state = {
  cartlist:[]
}

//创建store对象
 const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})

export default store