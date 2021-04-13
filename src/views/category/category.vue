<template>
 <div >
   <van-search v-model="value" placeholder="请输入搜索关键词" />
   <van-swipe class="my-swipe"  :autoplay="2000"  >
   <van-swipe-item v-for="(item, index) in banners" :key="index" class="van-swipe-item">
     <a :href="item.link">
       <img v-lazy="item.image" />
     </a>
    
  </van-swipe-item>
  </van-swipe>
  <van-grid :column-num="4">
    <van-grid-item icon="photo-o" text="文字" />
    <van-grid-item icon="photo-o" text="文字" />
    <van-grid-item icon="photo-o" text="文字" />
    <van-grid-item icon="photo-o" text="文字" />
  </van-grid>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to="/home">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item" :title="item" />
</van-list>
  

   
 </div>
</template>

<script>
import {getHomeMultidata}  from "network/home.js"
export default {
  name: 'category',
  props: {},
  created(){
    getHomeMultidata().then((res) =>{
      this.banners = this.banners = res.data.banner.list
      console.log(this.banners)
    })
  },
  components: {},
  data () {
    return {
      banners:[],
      value: '',
      active: 0,
      list: [],
      loading: false,
      finished: false,
    }
  },
  computed: {},
  watch: {},
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};

</script>
 

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 60px;
    line-height: 0px;
    text-align: center;
    background-color: #39a9ed;
     
  }
  .my-swipe{
    height: 100%;

  }
  
  .my-swipe img{
    width: 100%;
   
  }
  

</style>
