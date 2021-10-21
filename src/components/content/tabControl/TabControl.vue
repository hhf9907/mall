<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" class="tab-control-div">
            <span @click="btnColor(index,data[index])" :class="{active:index===isColor}">{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data (){
      return {
        isColor:0,
        isData:true,
        data:['pop','new','sell']
      }
    },
    methods:{
      btnColor(index,item){
        this.isColor = index
        this.$emit('Tdata',item,index)
      }
    }
  }
</script>

<style scoped>
    .tab-control {
        width: 100%;
        display: flex;
        text-align: center;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    .tab-control-div {
        flex: 1;
    }
    .tab-control-div span {
        padding: 5px;
    }
    .active {
        color: #ff2634;
        border-bottom: 3px solid #ff2634;
    }
</style>