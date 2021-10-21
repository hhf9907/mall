import {debounce} from "./utils";

export const itemListenerMixin ={
  methods:{},
  computed:{},
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('homeImgLoad' ,() =>{
      refresh(20,30,'abc')
    })
  }
}