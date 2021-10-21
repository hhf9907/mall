<template>
    <div class="Toast" v-show="show">
        <div>{{message}}</div>
    </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      message:{
        type:String,
        default:''
      },
      show:{
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
    .Toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 8px;
        padding: 8px 10px;
        color: #fff;
        background-color: rgba(0,0,0,.6);
    }
</style>