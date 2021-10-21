<template>
    <div class="tab-bar-item" @click="btnClick">
        <div v-if="isActive"><slot name="icon"></slot></div>
        <div v-else><slot name="icon1"></slot></div>
       <div :style="astyle"><slot name="text" ></slot></div>
    </div>
</template>

<script>
  export default {
    name: "TabBar-con",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)
      },
      astyle(){
        return !this.isActive ? {color:this.activeColor}: {}
      }
    },
    methods:{
      btnClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
    @import "../../../assets/css/base.css";

    .tab-bar-item img {
        height: 24px;
        width: 24px;
    }
    .tab-bar-item{
        font-size: 13px;
        margin-top: 3px;
        flex: 1; /*进行均等分*/
        text-align: center; /*对齐方式*/
        height: 49px; /*一般情况下tabbar是49*/
        vertical-align: middle;
    }
    .active{
        color: red;
    }
</style>