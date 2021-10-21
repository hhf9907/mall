<template>
    <div class="pingjia" v-if="Object.keys(rate).length!==0">
        <div class="navbar">
            <div >用户评价</div>
            <span>更多 ></span>
        </div>
        <div class="user">
            <img :src="rate.user.avatar" alt="">
            <div>{{rate.user.uname}}</div>
        </div>
        <div class="discuss">
            {{rate.content}}
        </div>
        <div class="xinghao" >
            <span class="date">{{rate.created | showDate}}</span>
            <span>{{rate.style}}</span>
        </div>
        <div class="tupian">
            <div class="tupian-item" v-for="item in rate.images">
                <img :src="item" alt="" @load="pingjiaimg">
            </div>
        </div>
    </div>
</template>

<script>
// <!--  如何将时间戳转换成时间格式化(1535674719秒)
// 1.将时间戳转换成Date对象   const date = new Date(1535674719*1000)(传入的是毫秒)
//  2.将date进行格式化，转换成对应的字符串  date ->FormatString()常用
//  fmt.format(data,'yyyy/MM/dd')(一定是y(四个y表示年份是四位),M一定大写，d小写)
//  fmt.format(data,'yyyy/MM/dd hh:mm:ss')//如果显示时分秒
//   y:年 year  M：Month 月  d：day 日  h:hours小时   mm：minutes分  s：秒
// -->
import {formatDate} from '../../../common/utils'
  export default {
    name: "DetailPingJia",
    props:{
      rate:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{ //过滤器
      showDate(value){
        //1将时间戳转换成date对象
        const date = new Date(value*1000)
        //2.将date进行格式化
        return formatDate(date,'yyyy/MM/dd hh:mm')
      }
    },
    methods:{
      pingjiaimg(){
        this.$emit('pingjiaimg')
      }
    }
  }
</script>

<style scoped>
    .xinghao span{
        margin-right: 10px;
    }
    .tupian{
        margin-left: 30px;
        margin-right: 30px;
        display: inline-block;
    }
    .tupian-item{
        float: left;
        margin-left: 10px;
    }
    .tupian img{
        width: 70px;
        height: 70px;
    }
    .xinghao{
        font-size: 13px;
        padding: 5px;
        padding-left: 30px;

    }
    .navbar {
        display: flex;
        height: 50px;
        padding-top: 15px;
        border-top: 2px solid #f2f5f8;
        border-bottom: 1px solid #6f6d65;
    }
    .navbar div {
        flex: 1;
        padding-left: 20px;
    }
    .navbar span {
        flex: 1;
        padding-left: 60%;
        font-size: 13px;
    }
    .discuss {
        padding: 10px;
        padding-left: 30px;
        font-size: 14px;
        color: #222;
    }
    .user {
        padding: 15px;
        padding-left: 30px;
        display: flex;
    }
    .user img {
        height: 42px;
        width: 42px;
        border-radius:50%;
        overflow: hidden;
    }
    .user div {
        padding-left: 10px;
        padding-top: 3%;
        color: #222222;
    }
</style>