<template>
    <div class="cart-item">
        <div class="input">
            <div class="checkbox" @click="checkedChange" v-model="goods.checked">
                <i class="icon-danxuankuangxuanzhong iconfont" v-show="goods.checked" />
                <i class="icon-Check iconfont" v-show="!goods.checked" />
            </div>
        </div>
        <div class="img">
            <img :src="goods.img" alt="">
        </div>
        <div class="title">
            <div class="title-item">{{goods.title}}</div>
            <div class="title-item1">{{goods.desc}}</div>
            <div class="price">￥{{goods.price}}</div>
            <div class="add" @click="add">+</div>
            <div class="count">{{goods.count}}</div>
            <div class="sub" @click="sub">-</div>
        </div>
<!--        // 1.获取购物车需要展示的信息
        const product = {}
        product.img = this.topImgs[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.lowNowPrice
        product.iid = this.iid
        console.log(product);-->
    </div>
</template>

<script>
  export default {
    name: "CartGoodsItem",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      checkedChange: function () {
         this.goods.checked = !this.goods.checked;
        this.$store.commit('updateInfo',this.goods.checked)
      },
      add(){
        this.$store.commit('countadd',this.goods.iid)
      },
      sub(){
        this.$store.commit('countsub',this.goods.iid)
      }
    }
  }
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_1703679_8zcglkgl7b6.css";
    .add {
        display: inline-block;
        width: 22px;
        height:22px;
        background: #f7f9f2;
        text-align: center;
    }
    .sub{
        display: inline-block;
        width: 22px;
        height: 22px;
        background: #f7f9f2;
        text-align: center;
    }
    .img img{
        width: 86px;
        height: 106px;
        border-radius: 5px;
    }
    .checkbox{
        position: absolute;
        top:35%;
        left: 5px;
    }
    .checkbox i{
        font-size: 20px;
    }
    .icon-danxuankuangxuanzhong {
        color: red;
    }
    .input{
        width: 5%;
        height: 129px;
        position: absolute;
        top: 10px;
        bottom: 10px;
        display: inline-block;
        /*height: 129px;*/
    }

    .cart-item {
        position: relative;
        height: 129px;
        width: 100%;
        border-bottom: 1px solid #999999;
    }
    .img {
        position: absolute;
        left: 5%;
        width: 25%;
        padding: 10px;
         display: inline-block;
     }
    .title {
        position: absolute;
        left: 30%;
        padding: 10px;
        display: inline-block;
        width: 274px;
        height: 120px;

        /*font-size: 17px;*/
        /*color: #333;*/
        /*padding: 5px 10px;*/
        /*position: relative;*/
        /*overflow: hidden;*/
    }
    .title-item{

        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .title-item1{
        margin-top: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .price{
        margin-top: 20px;
        width: 160px;
        font-size: 20px;
        color: #ff5777;
        display: inline-block;
    }
    .count{
        display: inline-block;
        margin-left: 3px;
        margin-right: 3px;
        width: 30px;
        height: 22px;
        font-size: 15px;
        text-align: center;
        margin-top: 2px;
    }
</style>