<template>
    <NavBar>
        <div slot="left" class="back" @click="imgClick">
            <img src="~assets/img/detail/fanhui.png" alt="">
        </div>
        <div slot="center" class="title">
            <div  v-for="(item,index) in Navbar"
                  class="title-item"
                  :class="{active:showIndex===index}" @click="itemClick(index)">{{item}}</div>
        </div>
    </NavBar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    components:{
      NavBar
    },
    props:{
      show:{
        type:Number
      }
    },
    data (){
      return {
        Navbar:['商品','参数','评论','推荐'],
        showIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.showIndex = index
        this.$emit('title',index)
      },
      imgClick() {
        // this.$router.push('/home')
        this.$router.back() //返回
      }
    }
  }
</script>

<style scoped>
    .title {
        display: flex;
        font-size: 14px;
    }
    .title-item{
        flex: 1;
    }
    .active {
        color: red ;
    }
    .back img{
        margin-top: 8px;
    }
</style>