<template>
    <tabbar>
        <tabbarCpn path="/home" activeColor="red">
            <img src="../../../assets/img/tabbar/home.png" alt="" slot="icon">
            <img src="../../../assets/img/tabbar/home1.png" alt="" slot="icon1">
            <div slot="text">首页</div>
        </tabbarCpn >
        <tabbarCpn path="/fenlei" activeColor="red">
            <img src="../../../assets/img/tabbar/fenlei.png" alt="" slot="icon">
            <img src="../../../assets/img/tabbar/fenlei1.png" alt="" slot="icon1">
            <div slot="text">分类</div>
        </tabbarCpn>
        <tabbarCpn path="/cart" activeColor="red">
            <img src="../../../assets/img/tabbar/cart.png" alt="" slot="icon">
            <img src="../../../assets/img/tabbar/cart1.png" alt="" slot="icon1">
            <div slot="text">购物车</div>
        </tabbarCpn>
        <tabbarCpn path="/user" activeColor="red">
            <img src="../../../assets/img/tabbar/me.png" alt="" slot="icon">
            <img src="../../../assets/img/tabbar/me1.png" alt="" slot="icon1">
            <div slot="text">我的</div>
        </tabbarCpn>
    </tabbar>
</template>

<script>
    import tabbar from "../../common/tabbar/TabBar";
    import tabbarCpn from '../../common/tabbar/TabBar-cpn'
  export default {
    name: "MainTabBar",
    components:{
      tabbar,
      tabbarCpn
    },
    data (){
      return {
        imgurl:'~accimg/tabbar/home.png'
      }
    }
  }
</script>

<style scoped>

</style>