<!--<template>-->
<!--    <div class="div">-->
<!--    <el-carousel indicator-position="outside">-->
<!--        <el-carousel-item v-for="item in banners">-->
<!--            <a :href="item.link">-->
<!--                <img :src="item.image" alt="">-->
<!--            </a>-->
<!--        </el-carousel-item>-->
<!--    </el-carousel>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--  import {getHomeMultidata} from "network/home";-->
<!--  export default {-->
<!--    name: "Zmd",-->
<!--    data (){-->
<!--      return {-->
<!--        banners:[],-->
<!--        recommends:[]-->
<!--      }-->
<!--    },-->
<!--    components:{-->
<!--      NavBar,-->
<!--      Zmd,-->
<!--      // Swiper,-->
<!--      // SwiperItem-->
<!--    },-->
<!--    created() {-->
<!--      getHomeMultidata().then(res =>{-->
<!--        this.banners = res.data.banner.list,-->
<!--          this.recommends = res.data.recommend.list-->
<!--      })-->
<!--    }-->
<!--  }-->
<!--</script>-->
<!--<style>-->
<!--    .div {-->
<!--        height: 100px;-->
<!--    }-->
<!--    .el-carousel__item h3 {-->

<!--        color: #475669;-->
<!--        font-size: 2px;-->
<!--        opacity: 0.75;-->
<!--        line-height: 300px;-->
<!--        margin: 0;-->
<!--    }-->

<!--    .el-carousel__item:nth-child(2n) {-->
<!--        height: 200px;-->
<!--        background-color: #99a9bf;-->
<!--    }-->

<!--    .el-carousel__item:nth-child(2n+1) {-->
<!--        height: 200px;-->
<!--        background-color: #d3dce6;-->
<!--    }-->
<!--</style>-->