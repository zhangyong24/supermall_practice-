<template>
   <swiper class="datail_swiper">
     <swiper_item v-for="(item,index) in swiperImages" :key="index">
       <img :src="item" alt="">
     </swiper_item>
   </swiper>
</template>

<script>
import {swiper,swiper_item} from "components/common/swiper/index.js"

export default {
  name: 'datail_swiper',
  props: {
    swiperImages:{
      type:Array,
      default(){
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
      
    }
  },
  computed: {},
  watch: {},
  methods: {}
}
</script> 

<style scoped>
.datail_swiper{
  height: 350px;
}

</style>
