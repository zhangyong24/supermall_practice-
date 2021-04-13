<template>
 <div class="home">
    <nav_bar class="nav_bar">
      <div class="center" slot="center">购物街</div>
    </nav_bar>
    <tab_control class="tab_control1" :titles='["流行","新款","精选"]' @tabConteol="tabConteol"
        ref="tabConteol2" v-show="tabControlActive">
    </tab_control>
    <scroll class="content" ref="scroll" @pullingUp="showMore"
        @probeType="probeType" :probeType="3" :pullUpLoad="true">
      <home_swiper :banners="banners" class="home_swiper" @swiperLoad="swiperLoad"></home_swiper>  
      <recommend_view :recommends="recommends"></recommend_view>
      <featrue_view></featrue_view>
      <tab_control  :titles='["流行","新款","精选"]' @tabConteol="tabConteol"
        ref="tabConteol1" >
      </tab_control>
      <goods_list :goods="goods[tabClassify].list"></goods_list>
    </scroll>
    <back_top @click.native="backClick"  v-show="contentShow" ></back_top>
 </div>
</template>

<script>
import nav_bar from "components/common/nav_bar/nav_bar.vue"
import tab_control from "components/content/tab_control/tab_control.vue"
import goods_list from "components/content/goods/goods_list.vue"
import scroll from "components/common/scroll/scroll.vue"
import back_top from "components/content/back_top/back_top.vue"


import {getHomeMultidata,getHomeData}  from "network/home.js"
import {debounce} from "common/utils.js"
import {back_top_mixin} from "common/mixin.js"


import home_swiper from "./home_components/home_swiper.vue"
import recommend_view from "./home_components/recommend_view.vue"
import featrue_view from "./home_components/featrue_view.vue"

export default {
  name: 'home',
  props: {},
  components: {
    nav_bar,
    home_swiper,
    recommend_view,
    featrue_view,
    tab_control,
    goods_list,
    scroll,
    back_top
   
  },
  mixins:[back_top_mixin],
  created(){
    this.getHomeMultidata()
    this.getHomeData("pop")
    this.getHomeData("new")
    this.getHomeData("sell")
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on("homeLoad",() =>{
      refresh()
    })

  },
  updated(){
  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.toScroll(0,(this.activatedScrollY),0)
  },
  deactivated(){
    this.activatedScrollY = this.$refs.scroll.getScrollY()
  },
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      tabClassify:"pop",
      
      tabControlOffsetTop:0,
      tabControlActive:false,
      activatedScrollY:0

    }
  },
  computed: {},
  watch: {},
  methods: {
  //事件监听
    tabConteol(index){
      if(index === 0){
        this.tabClassify = "pop"
      }else if(index === 1){
        this.tabClassify = "new"
      }else if(index === 2){
        this.tabClassify = "sell"
      }
      this.$refs.tabConteol1.controlCount = index
      this.$refs.tabConteol2.controlCount = index

    },
    probeType(position){
      this.contentShow = (-position.y) > 600
      this.tabControlActive = (-position.y)-44 > this.tabControlOffsetTop
    },
    showMore(){
      this.getHomeData(this.tabClassify)
    },
    swiperLoad(){
      this.tabControlOffsetTop = this.$refs.tabConteol1.$el.offsetTop
    },
  //网络请求
    getHomeMultidata(){
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeData(type){
      const page = this.goods[type].page + 1
      getHomeData(type,page).then((res) =>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1
      this.$refs.scroll.finishPullUp()

      })
    }  
  }
}
</script> 

<style scoped>
  .home{
    height: 100vh;
    position: relative;
  }
  .nav_bar{
    background-color:var(--color-tint);
    line-height: 44px;
    text-align: center;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3; */

  }
  .nav_bar .center{
    color: #fff;
  }
  .home_swiper{
    margin-top: 44px;
  }
  .tab_control1{
    position:sticky;
    top: 44px;
    z-index: 6;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  
  /* .content{
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>
