<template>
    <div class="param-info" v-if="Object.keys(itemParams).length !==0">
        <div class="info">
            <div class="biaoti">尺码信息</div>
            <div>
            <table v-for="item in itemParams.tables" class="tables">
                <tr v-for="i in item" class="item">
                    <td>{{i}}</td>
                </tr>
            </table>
            </div>
            <div class="t2">
            <table v-for="item in itemParams.set" class="tables">
                <tr class="item">
                    <td class="key">{{item.key}}</td>
                    <td class="value">{{item.value}}</td>
                </tr>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      itemParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .param-info {
        background-color: #fff;
    }
    .info {
        padding: 3px;
    }
    .biaoti {
        text-align: center; /*居中*/
        box-sizing: border-box;
    }
    .tables{
        padding: 10px 20px 10px;
        height: 50px;
        border-bottom: 1px solid #fff9c2;
        display: flex;
        font-size: 14px;
        box-sizing: border-box;
    }
    .t2{
        border-top: 1px solid #ff8198;
    }
    .item{
        flex: 1;
        left: 30px;
        padding-left:20px
    }
    .value{
        color: #ff5777;
        padding-left: 60px;
    }
    .key{
        width: 70px;
    }
</style>