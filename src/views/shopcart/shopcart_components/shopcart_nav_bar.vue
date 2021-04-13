<template>
 <div>
   <nav_bar>
     <div slot="center">购物车({{length}})</div>
   </nav_bar>
 </div>
</template>

<script>
import nav_bar from "components/common/nav_bar/nav_bar.vue"
import {mapGetters} from "vuex"
export default {
  name: 'shopcart_nav_bar',
  props: {},
  components: {
    nav_bar
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      length:"getLength" 
    })
  },
  watch: {},
  methods: {}
}
</script> 

<style scoped>
.nav_bar{
    background-color:var(--color-tint);
    line-height: 44px;
    text-align: center;
    color: #fff;
   

  }
  

</style>
