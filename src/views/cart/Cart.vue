<template>
    <div id="cart">
        <CartNavBar></CartNavBar>
        <Scroll class="content" ref="scroll">
            <CartGood></CartGood>
        </Scroll>
        <JieSuan></JieSuan>
    </div>
</template>

<script>
    import CartNavBar from "./childComps/CartNavBar";
    import CartGood from "./childComps/CartGood";
    import Scroll from "components/common/scroll/Scroll";
    import JieSuan from "./childComps/JieSuan";
  export default {
    name: "Cart",
    data(){
      return {
      }
    },
    components:{
      CartNavBar,
      CartGood,
      Scroll,
      JieSuan
    },
    methods:{
    },

  }
</script>

<style scoped>
    .content{
        overflow: hidden;
        position: absolute;
        top:46px;
        bottom: 95px;
        left: 0;
        right: 0;
    }
    #cart{
        height: 100vh;
        /*padding-top: 46px;*/
        position: relative;
    }

</style>