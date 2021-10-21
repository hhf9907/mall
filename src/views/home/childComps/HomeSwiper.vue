<template>
    <Swiper>
        <swiper-item v-for="item in banners">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imgeLoad">
            </a>
        </swiper-item>
    </Swiper>

</template>

<script>

  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad:false  //获取img轮播图状态
      }
    }
    ,
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      imgeLoad() {
        if(!this.isLoad){
        this.$emit('swiperImgLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>