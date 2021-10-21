<template>
    <div id="home">

        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <TabControl @Tdata="tdata"
                    :titles="['流行','新款','精选']"
                    ref="tabControl1"
                    class="tab-Control"
                    v-show="tabshow"></TabControl>
        <scroll class="content"
                ref="scroll"
                :probe-type="3"
                @showtop="showtop"
                :pull-up-load="true"
                @pullingUp="againGoods"
        >
            <!--            通过ref拿到组件对象 this.$refs-->
            <HomeSwiper :banners="banners" @swiperImgLoad="swiperImgLoad"></HomeSwiper>
            <HomeRecommend :recommends="recommends"></HomeRecommend>
            <HomeFeature></HomeFeature>
            <TabControl @Tdata="tdata"
                        :titles="['流行','新款','精选']"
                        ref="tabControl2"></TabControl>
            <GoodList :goods="goods[type1].list"></GoodList>
        </scroll>
        <!--    监听组件点击时 @click.native    -->
        <BackTop @click.native="backtop" ref="show" v-show="show1"></BackTop>

    </div>
</template>

<script>
  import {getHomeMultidata,gethomegoods} from "network/home";
  import {debounce} from "../../common/utils";
  import {itemListenerMixin} from "../../common/mixin"

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomeFeature from "./childComps/HomeFeature";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodList from "components/content/Goods/GoodList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backtop/BackTop";


  import homedata from "../../json/home/homedata";
  import homepop from "../../json/home/homepop";
  import homenew from "../../json/home/homenew";
  import homesell from "../../json/home/homesell";

  export default {
    name: "Home",

    data (){
      return {
        banners:[],
        recommends:[],
        keywords:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        type1:'pop',
        show1:false,
        tabOffsetTop:0,
        isTabFixed:false,
        tabshow:false,
        savaY:0,  //保存首页位置的Y值
      }
    },
    mixins:[itemListenerMixin],
    destroyed() {
      console.log('销毁');
    },
    activated() {  //进入组件时
      // console.log(this.$store.state.sy);
      console.log(this.savaY);
      this.$refs.scroll.scroll.scrollTo(0, this.savaY,1)
      this.$refs.scroll.refresh()

    },
    deactivated() {  //离开组件时
      this.savaY = this.$refs.scroll.scroll.y
      // console.log(this.savaY);
      // console.log(this.$store.state.sy);
    },
    components:{
      Scroll,
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    mounted() {  //组件挂载时
      //1.图片加载完成的事件监听

      //2.获取tabControl的offsetTop
      //所有的组件都有一个属性$el:用于获取组件中的元素


    },
    created() {  //组件创建完成时

      this.getMultidata()
      //请求商品数据
      this.getgoods('pop')
      this.getgoods('new')
      this.getgoods('sell')

      //监听图片是否加载完成
    },
    methods:{
      swiperImgLoad(){  //swiper图片加载完成发出的事件
        this.tabOffsetTop =  this.$refs.tabControl2.$el.offsetTop
      },
      showtop(position){     // 回到顶部按钮显示监听
                             // console.log(position);
        //1.判断backtop是否显示
        if(position<-1500){
          this.show1 = true
        }else{
          this.show1 = false
        }
        // console.log(position);
        //2.巨顶tabControl是否吸顶（position:fixed）
        this.isTabFixed = (-position) > this.tabOffsetTop
        // console.log(this.isTabFixed );
        this.tabshow = this.isTabFixed
      },
      againGoods(){  //再次请求数据   上拉加载
        this.getgoods(this.type1)
        // this.$refs.scroll.scroll.refresh() //刷新可滚动高度
      },

      getMultidata(){ //请求首页数据
        getHomeMultidata().then(res =>{
          this.banners = res.data.banner.list,
            this.recommends = res.data.recommend.list
          this.keywords = res.data.keywords.list
        })
        // this.banners = homedata.data.banner.list,
        //     this.recommends = homedata.data.recommend.list
        //   this.keywords = homedata.data.keywords.list
      },
      getgoods(type){  //请求数据并保存到goods数组中
        const page = this.goods[type].page + 1
        // if(type==='pop'){
        //   this.goods[type].list.push(...homepop.data.list)
        // }else if(type==='new'){
        //   this.goods[type].list.push(...homenew.data.list)
        // }else {
        //   this.goods[type].list.push(...homesell.data.list)
        // }
        gethomegoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
          //完成上拉加载更多
          this.finishPullUp()
        })
      },
      tdata(item,index){  //显示的数据类型
        this.type1 = item
        this.$refs.tabControl2.isColor = index
        this.$refs.tabControl1.isColor = index
      },
      backtop(){  //回到顶部
        this.$refs.scroll.scrollTo(0,0,500)  //500毫秒内回到
      },
      finishPullUp(){
        this.$refs.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>
    #home {
        height: 100vh;
        /*padding-top: 46px;*/
        position: relative;
    }
    .home-nav {
        background-color: var(--color-tint);
        color: #FFF;
        /*position: fixed;*/
        /*left: 0;*/
        /*right: 0;*/
        /*top:0;*/
        /*z-index: 9;*/
    }
    /*.tab-control {*/
    /*    position: sticky;*/
    /*    top: 46px;*/
    /*    z-index: 9;*/
    /*}*/
    .content {
        /*height: 300px;*/
        overflow: hidden;
        position: absolute;
        top:46px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    .tab-Control {
        position: relative;
        z-index: 9;
    }
    /*.content {*/
    /*    height: calc(100% - 95px);*/
    /*    overflow: hidden;*/
    /*    margin-top: 48px;*/
    /*}*/
</style>