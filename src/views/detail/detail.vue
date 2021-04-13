<template>
 <div class="detail">
   <detail_nav_bar class="nav_bar" @itemIndex="itemIndex" ref="navBar"></detail_nav_bar>
   <scroll class="content" :probeType="3" :pullUpLoad="true" ref="scroll" 
   @probeType="probeType"
   >
    <datail_swiper :swiperImages="swiperImages"></datail_swiper>
    <datail_base_info :detailInfo="detailInfo" ></datail_base_info>
    <datail_shop_info :shopInfo="shopInfo" ></datail_shop_info>
    <datail_goods_info :goodsInfo="goodsInfo" @infoLoad="infoLoad"></datail_goods_info>
    <datail_Params_info :itemParams="itemParams" ref="Params"></datail_Params_info>
    <datail_comment_info :commentInfo="commentInfo" ref="comment"></datail_comment_info>
    <goods_list :goods="recommends" ref="goods"></goods_list >
   </scroll>
   <detail_bottom_bar @addCart="addCart"></detail_bottom_bar>
   <back_top @click.native="backClick"  v-show="contentShow" ></back_top>

 </div>
</template>

<script>
import {getDetailData,detailData,shopData,getRecommend} from "network/detail.js"

import scroll from "components/common/scroll/scroll.vue"

import goods_list from "components/content/goods/goods_list.vue"
import back_top from "components/content/back_top/back_top.vue"


import {debounce} from "common/utils.js"
import {back_top_mixin} from "common/mixin.js"


import detail_nav_bar from "./detail_components/detail_nav_bar.vue"
import datail_swiper from "./detail_components/datail_swiper.vue"
import datail_base_info from "./detail_components/datail_base_info.vue"
import datail_shop_info from "./detail_components/datail_shop_info.vue"
import datail_goods_info from "./detail_components/datail_goods_info.vue"
import datail_comment_info from "./detail_components/datail_comment_info.vue"
import detail_bottom_bar from "./detail_components/detail_bottom_bar.vue"
import datail_Params_info from "./detail_components/datail_Params_info"

export default {
  name: 'detail',
  props: {},
  components: {
   detail_nav_bar,
   datail_swiper,
   datail_base_info,
   datail_shop_info,
   datail_goods_info,
   datail_Params_info,
   datail_comment_info,
   detail_bottom_bar,
   goods_list,
   back_top,
   scroll
  },
  mixins:[back_top_mixin],
  data(){
    return {
      iid:null,
      swiperImages:[],
      detailInfo:{},
      shopInfo:{},
      goodsInfo:{},
      itemParams:{},
      commentInfo:{},
      recommends:[],
      jumpY:[]
    }
  },
  created(){
    this.iid = this.$route.params.iid
    getDetailData(this.iid).then((res) => {
      
      this.swiperImages = res.result.itemInfo.topImages
      let data = res.result
     
      this.detailInfo = new detailData(data.itemInfo,data.columns,data.shopInfo.services,)
      this.shopInfo = new shopData(data.shopInfo)
      this.goodsInfo = data.detailInfo
      this.itemParams = data.itemParams
      this.commentInfo = data.rate.list[0]

    })
    getRecommend().then(res => {
       this.recommends = res.data.list
    })

  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on("detailLoad",() =>{
      refresh()
    })

   
  },
  updated(){
    
   
  },
  computed: {
    
  },
  watch: {},
  methods: {
   infoLoad(){
    debounce(this.$refs.scroll.refresh)

    this.jumpY = []
    this.jumpY.push(0)
    this.jumpY.push(-this.$refs.Params.$el.offsetTop)
    this.jumpY.push(-this.$refs.comment.$el.offsetTop)
    this.jumpY.push(-this.$refs.goods.$el.offsetTop)
   
   
   
   },
   itemIndex(index){
      if(index === 0){
        this.$refs.scroll.toScroll(0,this.jumpY[index],100)
      }else if(index === 1){
        this.$refs.scroll.toScroll(0,this.jumpY[index],100)
      }else if(index === 2){
        this.$refs.scroll.toScroll(0,this.jumpY[index],100)
      }else if(index === 3){
        this.$refs.scroll.toScroll(0,this.jumpY[index],100)
      }


   },
   probeType(position){
     const Dindex = -position.y
     if(Dindex > 0 && Dindex < -this.jumpY[1]){
       this.$refs.navBar.currentIndex = 0
     }else if(Dindex > -this.jumpY[1] && Dindex < -this.jumpY[2]){
       this.$refs.navBar.currentIndex = 1
     }else if(Dindex > -this.jumpY[2] && Dindex < -this.jumpY[3]){
        this.$refs.navBar.currentIndex = 2
     }else if(Dindex > -this.jumpY[3]){
       this.$refs.navBar.currentIndex = 3
     }
     this.contentShow = (-position.y) > 600
   
   },
   addCart(){
      const product = {};
      product.image = this.swiperImages[0];
      product.title = this.detailInfo.title;
      product.desc = this.detailInfo.desc;
      product.oldPrice = this.detailInfo.oldPrice;
      product.realPrice = this.detailInfo.newPrice
      product.iid = this.iid;
      this.$store.dispatch("addCart",product).then(
        res => this.$toast.show(res,2000)
      )
   }
  }
}
</script> 

<style scoped>
.detail{
  height: 100vh;
  position: relative;
  z-index: 8;
  background-color: #fff;
}
.nav_bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
}
.content{
  height: calc(100% - 93px);
  margin-top: 44px;
}

</style>
