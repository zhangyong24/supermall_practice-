<template>
 <div class="shopcart">
   <shopcart_nav_bar></shopcart_nav_bar>
   <scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true">
    <shopcart_list></shopcart_list>
   </scroll>
   <shopcart_bottom_bar></shopcart_bottom_bar>
 </div>
</template>

<script>
import scroll from "components/common/scroll/scroll.vue"
import shopcart_nav_bar from "./shopcart_components/shopcart_nav_bar.vue"
import shopcart_list from "./shopcart_components/shopcart_list.vue"
import shopcart_bottom_bar from "./shopcart_components/shopcart_bottom_bar.vue"
export default {
  name: 'shopcart',
  props: {},
  components: {
    shopcart_nav_bar,
    scroll,
    shopcart_list,
    shopcart_bottom_bar
  },
  activated(){
    this.$refs.scroll.refresh()
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script> 

<style scoped>
  .shopcart{
    height: 100vh;
    width: 100%;
    position: relative;
  }
  .content{
    position: absolute;
    bottom: 89px;
    left: 0;
    right: 0;
    top: 44px;
    overflow: hidden;

  }

</style>
