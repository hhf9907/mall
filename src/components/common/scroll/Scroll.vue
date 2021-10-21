<template>
<!-- 通过ref拿到准确的组件   -->
    <div class="wrapper" ref="war">
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll:null,
        isShow:false,

      }
    },
    mounted() {
      //这种方式拿到div可能不准确
      // this.scroll = new BScroll(document.querySelector('.wrapper'),{
      //
      // })
      //this.$refs.war
      //创建BScroll
      this.scroll = new BScroll(this.$refs.war,{
        click:true,
        probeType: this.probeType,
        pullUpLoad:this.pullUpLoad
      })

      //监听滚动的位置
      if(this.probeType===2||this.probeType===3) {
        this.scroll.on('scroll', (position) => {
          // console.log(position.y);
          this.$emit('showtop', position.y)
        })
      }
      //监听scroll滚动到底部的位置
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',() =>{
          this.$emit('pullingUp')
        })
      }
    },
    methods:{
      scrollTo(x,y,time=200){
        this.scroll  && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      finishPullUp(){
        this.scroll &&this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>