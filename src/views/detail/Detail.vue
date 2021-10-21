<template>
    <div id="detail">
        <DetailNavBar class="nav-bar"
                      :show="1"
                      @title="title" ref="nav"></DetailNavBar>
        <Scroll class="center"
                ref="scroll"
                @showtop="showtop"
                :probe-type="3" >
            <DetailSwiper :item-img="topImgs" ></DetailSwiper>
            <DetailBaseInfo :goods="goods"></DetailBaseInfo>
            <DetailShopInfo :shop="shop"></DetailShopInfo>

            <DetailGoodsInfo :detail-info="detailInfo"
                             @goodImgLoad="goodImgLoad"  ></DetailGoodsInfo>
            <DetailParamInfo :itemParams="paramInfo" ref="canshu"></DetailParamInfo>

            <detail-ping-jia :rate="rate" ref="pingjia" ></detail-ping-jia>

            <div class="tuijian" >推荐商品</div>
            <GoodList :goods="recommend" ref="tuijianshop"></GoodList>
        </Scroll>

        <el-button :plain="true" @click="addCart" ></el-button>
        <BackTop :bottom="70" @click.native="backtop" v-show="showTopBar"></BackTop>
        <DetailTabBar @addCart="addCart"></DetailTabBar>
        <Toast :message="message" :show="show"></Toast>
    </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailPingJia from "./childComps/DetailPingJia";
  import GoodList from "components/content/Goods/GoodList";
  import DetailTabBar from "./childComps/DetailTabBar";

  import Toast from "../../components/common/toast/Toast";

  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backtop/BackTop";

  import {getDetail,Goods,Shop,itemParams,Rate,getRecommend} from "network/detail";
  import {debounce} from "../../common/utils";
  import {itemListenerMixin} from "../../common/mixin"

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      BackTop,
      DetailParamInfo,
      DetailPingJia,
      GoodList,
      DetailTabBar,
      Toast
    },
    data (){
      return {
        iid:null,
        showTopBar:false,
        topImgs:[], //轮播图图片
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        rate:{},
        recommend:[],
        topY:[],
        tabindex:0,
        message:'',
        show:false
      }
    },
    mixins:[itemListenerMixin], //混入
    activated() {
      this.$refs.scroll.refresh()
    },
    updated() {

    },
    mounted() {
      //1.图片加载完成的事件监听
      // const refresh = debounce(this.$refs.scroll.refresh,50)
      // this.$bus.$on('goodImgLoad' ,() =>{
      //   // this.topY = []
      //   // this.topY.push(0)
      //   // this.topY.push(this.$refs.canshu.$el.offsetTop)
      //   // this.topY.push(this.$refs.pingjia.$el.offsetTop)
      //   // this.topY.push(this.$refs.tuijianshop.$el.offsetTop - 80)
      //   // console.log(this.topY);
      //   refresh()
      // })
      //1.图片加载完成的事件监听
      // const refresh = debounce(this.$refs.scroll.refresh,50)
      // this.$bus.$on('detailImgLoad' ,() =>{
      //   refresh(20,30,'abc')
      // })
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2。请求数据
      getDetail(this.iid).then(res =>{
        // console.log(res);
        //1.获取顶部的图片
        const data  = res.result
        this.topImgs = res.result.itemInfo.topImages
        // console.log(this.topImgs);
        //2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // console.log(this.goods);
        //3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)
        //4.保存商品详情穿着效果等信息
        this.detailInfo = data.detailInfo
        //5\保存尺码，图案等信息
        this.paramInfo = new itemParams(data.itemParams.info,data.itemParams.rule)
        //6.保存评论信息
        if(data.rate.cRate!==0){
          this.rate = new Rate(data.rate.list[0].content,
            data.rate.list[0].extraInfo,
            data.rate.list[0].images,
            data.rate.list[0].style,
            data.rate.list[0].user,
            data.rate.list[0].created
          )
        }

        //
        this.$nextTick(() =>{

        })
      })
      getRecommend().then(res =>{
        this.recommend = res.data.list
      })
    },
    methods:{
      addCart(){ //加入购物车

        // 1.获取购物车需要展示的信息
        const product = {}
        product.img = this.topImgs[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.lowNowPrice
        product.iid = this.iid
        product.checked = true
        // console.log(product);
        // this.addCart(product).then(() => {
        //   this.$toast({message: '加入购物车成功'})
        // })
        this.$store.dispatch('addCart',product).then(res =>{
          // this.open2(res),
          this.show = true
          this.message = res
          setTimeout(() =>{
            this.show = false
            this.message = ''
          },1500)
        })

      },
      open2(res) {
        this.$message({
          message: res,
          type: 'success',
          offset:200,
          center:true,
          duration:1000
        });
      },
      title(index){ //点击对应的标题滚动到对应的栏目
        this.$refs.scroll.scrollTo(0,-this.topY[index],1)
      },
      backtop(){  //回到顶部
        this.$refs.scroll.scrollTo(0,0,500)  //500毫秒内回到
      },
      goodImgLoad(){
        this.topY = []
        this.topY.push(0)
        this.topY.push(this.$refs.canshu.$el.offsetTop)
        this.topY.push(this.$refs.pingjia.$el.offsetTop)
        this.topY.push(this.$refs.tuijianshop.$el.offsetTop - 40)
        this.topY.push(Number.MAX_VALUE)  //Number.MAX_VALUE是js能显示的最大值
        // console.log(this.topY);
        this.$refs.scroll.refresh()
      },
      showtop(p){
        if(p<-1500){
          this.showTopBar = true
        }else{
          this.showTopBar = false
        }

        //获取y值
        const positiony = -p

        //2.positiony和主题的值进行对比
        //  [0, 30522, 31478, 31654]

        // positiony 在0和30522之间  index = 0
        // positiony 在30522和31478之间  index = 1
        // positiony 在31478和31654之间  index = 2
        // positiony 在31654和 Number.MAX_VALUE之间 index = 3

        // for(let i in this.topY){ //i是str类型
        //   if(parseInt(i)<this.topY.length-1){   //判断滚动到哪个区间
        //     if((positiony >= this.topY[parseInt(i)] && positiony < this.topY[parseInt(i)+1]) && this.tabindex != i){
        //       this.tabindex = parseInt(i)
        //       this.$refs.nav.showIndex = this.tabindex
        //       console.log(this.$refs.nav.showIndex);
        //     }
        //   }else{
        //     if((positiony >= this.topY[parseInt(i)]) && this.tabindex != i){
        //       this.tabindex = parseInt(i)
        //       this.$refs.nav.showIndex = this.tabindex
        //       console.log(this.$refs.nav.showIndex);
        //     }
        //   }
        // }
        for(let i = 0; i < this.topY.length-1;i++){
          if(this.tabindex !== i &&
            (positiony >= this.topY[i] && positiony < this.topY[i+1] )){
            this.tabindex = i;
            this.$refs.nav.showIndex = this.tabindex
          }
        }
      }
    }
  }
</script>

<style scoped>
    .eltishi{
        position: fixed;
        top :200px;
        bottom: 200px;
    }
    #detail{
        position: relative;
        z-index: 10;
        background-color: #fff;
        height: 100vh;
    }
    .center{
        overflow: hidden;
        position: absolute;
        top:46px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    .nav-bar{
        position: relative;
        z-index: 10;
        background-color: #fff;
    }
    .tuijian{
        border-top: 2px solid #f7f9f2;
        box-sizing: border-box;
        padding: 10px;
        height: 40px;
        margin-left: 30px;
    }
</style>