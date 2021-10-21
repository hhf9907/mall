<template>
    <div class="Recommend">
        <div v-for="item in recommends" class="Recommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .Recommend {
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
    }
    .Recommend-item {
        flex: 1;
    }
    .Recommend-item img {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }
</style>