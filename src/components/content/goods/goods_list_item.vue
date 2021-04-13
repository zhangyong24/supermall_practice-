<template>
 <div class="goods_list_item" @click="homeSwiperClick" >
      <img v-lazy="showImg" alt="" @load="imgLoad">
    <div class="text">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price }}</span>
      <img src="~assets/img/common/collect.svg" alt="">
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
 </div>
</template>

<script>
import {debounce} from "common/utils.js"
export default {
  name: 'goods_list_item', 
  props: {
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {},
  data () {
    return {
      
    }
  },
  computed: {
    showImg(){
      // return this.goodsItem.image || this.goodsItem.show.img
      return this.goodsItem.image?this.goodsItem.image:this.goodsItem.show.img
    }
   
  },
  
  watch: {
    itemImgCount(){

    }
  },
  methods: {
     imgLoad(){
      if(this.$route.path.includes("/home")){
        debounce(this.$bus.$emit("homeLoad"),100)
      }else if(this.$route.path.includes("/detail")){
        debounce(this.$bus.$emit("detailLoad"),100)
      }
       },
    homeSwiperClick(){
      this.$router.push("/detail/" + this.goodsItem.iid)
  
    }
  }
}
</script> 

<style scoped>
  .goods_list_item{
    width: 46%;
    font-size: 12px;
    
  }
  .goods_list_item  img {
    width:100%;
    border-radius: 8px;
  }
  .goods_list_item .text{
    height: 32px;
    text-align: center;
    line-height:16px;

  }
  .goods_list_item .text .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods_list_item .text img{
    width: 14px;
    padding-left: 3px;
    padding-right: 1px;
  }
  .goods_list_item .text .price{
    padding-right: 3px;
    color: var(--color-tint);
  }
  
</style>
