<template>
 <div>
   <nav_bar class="nav_bar" >
    <div slot="left" class="leftBack" @click="leftBack">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="center" >
      <div v-for="(item,index) in navBarTitle" :key="index" 
        class="center_item" @click="itemClick(index)" :class="{action:index === currentIndex}">
         {{item}}
      </div>
    </div>
  </nav_bar>

 </div>
</template>

<script>
import nav_bar from "components/common/nav_bar/nav_bar.vue"

export default {
  name: 'detail_nav_bar',
  props: {},
  components: {
    nav_bar
  },
  data () {
    return {
      navBarTitle:["商品","参数","评论","推荐"],
      currentIndex:0
    }
  },
  computed: {},
  watch: {},
  methods: {
     itemClick(index){
      this.currentIndex = index
      this.$emit("itemIndex",index)
      
    },
    leftBack(){
      this.$router.back()
     
    }
  }
}
</script> 

<style scoped>
  .nav_bar{
    display: flex;
     
  }
  .nav_bar .leftBack img{
    margin-top: 12px;
  }
  .center{
    display: flex;
    flex: 1;
    font-size: 12px;
  }
  .center .center_item{
    flex: 1;
  }
  .action{
    color: #ff5777;
  }
</style>
