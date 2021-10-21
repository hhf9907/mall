import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>import('../views/home/Home')
const Fenlei = () =>import('../views/category/Fenlei')
const Cart = () =>import('../views/cart/Cart')
const User = () =>import('../views/profile/User')
const Detail = () =>import('../views/detail/Detail')
Vue.use(Router)


const router = new Router({
  mode:'hash',
  routes: [
    {
      path:'',
      // component:Home
      //redirect重定向
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/fenlei',
      component: Fenlei,
      meta:{
        title:'分类'
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta:{
        title:'购物车'
      }
    },
    {
      path: '/user',
      component: User,
      meta:{
        title:'我的'
      }
    },
    {
      path: '/detail/:iid',
      component: Detail,
      meta:{
        title:'详情'
      }
    }
  ]
})

router.beforeEach((to,from,next) =>{
  //从from跳转到to
  document.title = to.meta.title
  next()

})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router

