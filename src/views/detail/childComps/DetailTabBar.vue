<template>
    <div id="detail-tab-bar">
        <div class="kefu">
            <i class="icon-DMiconzhuanqu- iconfont"></i>
            <div class="kefu-text">客服</div>
        </div>
        <div class="dianpu">
            <i class="icon-dianpu iconfont"></i>
            <div class="dianpu-text">店铺</div>
        </div>
        <div class="shoucang">
            <i class="icon-shoucang iconfont"></i>
            <div class="shoucang-text">收藏</div>
        </div>
        <div class="cart" @click="addCart">
            <div>加入购物车</div>
        </div>
        <div class="shop" @click="goshop">
            <div>购买</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DetailTabBar",
    methods:{
      goshop(){
        this.$router.push('/cart')
      },
      addCart(){
        // console.log('加入购物车');
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_1703679_8zcglkgl7b6.css";
    #detail-tab-bar{
        width: 100%;
        height: 62px;
        background: #f6f6f6;
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
    }
    .shop{
        box-sizing: border-box;
        text-align: center;
        padding-top: 20px;
        width: 20%;
        background: #ff6699;
    }
    .cart{
        box-sizing: border-box;
        padding-top: 20px;
        text-align: center;
        background: yellow;
        width: 25%;
    }
    .shoucang{
        box-sizing: border-box;
        padding: 5px;
        flex: 1;
    }
    .shoucang-text{
        font-size: 14px;
    }
    .icon-shoucang {
        font-size: 24px;
        flex: 1;
    }
    .dianpu{
        box-sizing: border-box;
        padding: 5px;
        flex: 1;
    }
    .dianpu-text{
        font-size: 14px;
    }
    .icon-dianpu {
        font-size: 24px;

    }
    .kefu{

        box-sizing: border-box;
        padding: 5px;
        padding-left: 15px;
        flex: 1;
    }
    .icon-DMiconzhuanqu-  {
        font-size: 24px;
    }
    .kefu-text{
        font-size: 14px;
    }
</style>