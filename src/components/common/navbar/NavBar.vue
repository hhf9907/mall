<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
       <div class="center"><slot name="center"></slot></div>
       <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
    .nav-bar {
        display: flex;
        height: 46px;
        line-height: 46px;
        text-align: center;
        box-shadow: 0 1px 1px rgb(247, 249, 242);
    }
    .left,.right {
        width: 60px;
    }
    .center {
        flex: 1;
    }
</style>