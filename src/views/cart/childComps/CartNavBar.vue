<template>
    <NavBar id="cart-nav-bar">
        <div slot="center" >
            <div class="title">购物车({{sum}})</div>
        </div>
    </NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "CartNavBar",
    components:{
      NavBar
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
      }
    }
  }
</script>

<style scoped>
 #cart-nav-bar{
     background: #FF8198;
 }
    .title{
        color: #ffffff;
    }
</style>