<template>
    <div class="back-top" :style="{bottom:bottom+'px'}">
        <img src="~assets/img/backtop.png" alt="">
    </div>
</template>

<script>
  export default {
    name: "BackTop",
    props:{
      bottom:{
        type:Number,
        default() {
          return 55;
        }
      }
    }
  }
</script>

<style scoped>
    .back-top {
        position: fixed;
        right: 8px;
    }
    .back-top img {
        width: 43px;
        height: 43px;
    }
</style>