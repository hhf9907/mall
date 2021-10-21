<template>
    <div class="jiesuan">
        <div class="quanxuan">
            <div class="icon" @click="iconquanxuan">
                <i class="icon-CombinedShape-copy iconfont" v-if="isShow"></i>
                <i class="icon-select--copy-copy iconfont" v-else></i>
            </div>
            <div class="box">全选</div>
        </div>
        <div class="price">合计:￥{{price | showPrice}}</div>
        <div class="shop">
            <div>购买({{sum}})</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "JieSuan",
    data(){
      return {
        goodlist:[],
        isShow:true
      }
    },
    created() {
      this.goodlist = this.$store.state.cartlist
    },
    methods:{
      iconquanxuan(){
        this.isShow = !this.isShow
        if(this.isShow){
          this.$store.commit('quanxuan')
        }else{
          this.$store.commit('unquanxuan')
        }
      }
    },
    computed:{
      sum(){
        let s = 0;
        for (let item of this.$store.state.cartlist){
          if(item.checked){
            s++
          }
        }
        return s
      },
      price(){
        let s=0
        let f = 0
        for(let item of this.goodlist){
          if(item.checked){
            // console.log(item.checked);
            s =s +  parseFloat(item.price)*item.count
          }else{
            f++
          }
        }
        if(f>0){
          this.isShow = false
        }else{
          this.isShow= true
        }
        return s
      }
    },
    filters:{
      showPrice(price){
        return price.toFixed(2);
      }
    }
  }
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_1703679_0dvgzwa34qcs.css";
    .box{
        display: inline-block;
        margin-left: 3px;
    }
    .icon{
        display: inline-block;
    }
    .jiesuan{
        height: 46px;
        width: 100%;
        position: fixed;
        bottom: 49px;
        z-index: 9;
        background: #f7f9f2;
    }
    .shop{
        display: inline-block;
        width: 30%;
        height: 46px;
        position: absolute;
        left: 70%;
        background: RGB(255,69,0);
        border-radius: 20px;
        box-sizing: border-box;
    }
    .shop div{
        font-size: 20px;
        text-align: center;
        padding-top: 10px;
        color: #f6f6f6;
    }
    .price{
        width: 40%;
        height: 46px;
        display: inline-block;
        box-sizing: border-box;
        position: absolute;
        left: 30%;
        padding-top: 10px;
        font-size: 20px;
    }
    .quanxuan{
        width: 30%;
        height: 46px;
        display: inline-block;
        position: absolute;
        padding-top: 13px;
        padding-left: 40px;
        box-sizing: border-box;
    }
</style>