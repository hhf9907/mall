<template>
    <Swiper>
        <swiper-item class="swiper-item"
                     v-for="item in itemImg">
                <img :src="item" alt="" @load="detailSwiperImg">
        </swiper-item>
    </Swiper>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";
  export default {
    name: "DetailSwiper",
    data(){
      return {
        imgshow:false
      }
    },
    props:{
      itemImg:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      detailSwiperImg(){
        if(!this.imgshow){
          this.$emit('dswiperimg')
          this.imgshow = true
        }

      }
    }
  }
</script>

<style scoped>
.swiper-item {
    height: 250px;
    overflow: hidden;
}
</style>