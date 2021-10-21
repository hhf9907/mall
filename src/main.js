import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import Element from 'element-ui'
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
Vue.config.productionTip = false

//使用懒加载
Vue.use(VueLazyload,{
  // loading:require('') //加载时显示的图片
})

//解决移动端300ms延迟
Fastclick.attach(document.body)

Vue.prototype.$bus = new Vue()   //用vue实例当做事件总线

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
