<template>
    <NavBar id="fenleiNavBar">
        <div slot="center">
            <div class="title">分类</div>
        </div>
    </NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "FenleiNavBar"
    ,components:{
      NavBar
    }
  }
</script>

<style scoped>
    #fenleiNavBar{
        background: #FF8198;
    }
    .title{
        color: #ffffff;
    }
</style>