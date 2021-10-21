<template>
    <div class="good">
        <CartGoodsItem v-for="item in this.goodlist" :goods="item"></CartGoodsItem>
    </div>
</template>

<script>
    import CartGoodsItem from "./CartGoodsItem";
  export default {
    name: "CartGoods",
    data(){
      return {
        goodlist:[],
      }
    },
    components:{
      CartGoodsItem
    },
    created() {
      this.goodlist = this.$store.state.cartlist
    }
  }
</script>

<style scoped>

</style>