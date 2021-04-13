<template>
   <swiper >
     <swiper_item v-for="(item,index) in banners" :key='index'>
      <a :href="item.link">
        <img :src="item.image" alt="" @load="homeSwiperLoad">
      </a>
     </swiper_item>
   </swiper>
</template>

<script>
import {swiper,swiper_item} from "components/common/swiper/index.js"
export default {
  name: 'home_swiper', 
  props: {
    banners:{
      type:Array,
      defaule(){
        return []
      }
    }
  },
  components: {
    swiper,
    swiper_item
  },
  data () {
    return {
      swiperImgLoad:false
    }
  },
  computed: {},
  watch: {},
  methods: {
    homeSwiperLoad(){
      if(!this.swiperImgLoad){
        this.$emit("swiperLoad")
        this.swiperImgLoad = true
      }
    }
   
  }
}
</script> 

<style scoped>

</style>
