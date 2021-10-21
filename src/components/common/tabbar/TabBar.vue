<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>

  export default {
    name: "TabBar"
  }
</script>

<style scoped>
    #tab-bar{
        display: flex;  /*水平分布*/
        background-color: #f6f6f6; /*背景颜色*/
        position: fixed; /*在最底部显示*/
        left: 0; /*在最底部显示*/
        right: 0; /*在最底部显示*/
        bottom: 0; /*在最底部显示*/
        box-shadow: 0px -2px 0px rgba(100,100,100,.1);  /*x正往右偏移，y正往下偏移*/
    }
</style>