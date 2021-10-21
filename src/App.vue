<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <MainTabBar class="main-tabbar"></MainTabBar>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
  .main-tabbar {
    z-index: 9;
  }
</style>
