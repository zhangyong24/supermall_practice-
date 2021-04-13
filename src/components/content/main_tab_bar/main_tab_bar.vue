<template>
 <div>
   <tab_bar class="tab_bar">
     <tab_bar_item path='/home' activeColor="#ff5777">
          <img slot="item_icon" src="~assets/img/tabbar/home.svg" alt="">
          <img slot="item_icon_action" src="~assets/img/tabbar/home_active.svg" alt="">
          <div slot="item_text">首页</div>
      </tab_bar_item>
      <tab_bar_item path= '/category' activeColor="#ff5777">
          <img slot="item_icon" src="~assets/img/tabbar/category.svg" alt=""> 
          <img slot="item_icon_action" src="~assets/img/tabbar/category_active.svg" alt=""> 
          <div slot="item_text">分类</div>
      </tab_bar_item >
      <tab_bar_item path='/shopcart' activeColor="#ff5777">
          <img slot="item_icon" src="~assets/img/tabbar/shopcart.svg" alt=""> 
          <img slot="item_icon_action" src="~assets/img/tabbar/shopcart_active.svg" alt=""> 
          <div slot="item_text">购物车</div> 
      </tab_bar_item>
      <tab_bar_item path='/profile' activeColor="#ff5777">
          <img slot="item_icon" src="~assets/img/tabbar/profile.svg" alt=""> 
          <img slot="item_icon_action" src="~assets/img/tabbar/profile_active.svg" alt=""> 
          <div slot="item_text">我的</div>
      </tab_bar_item>
    </tab_bar>
 </div>
</template>

<script>
import tab_bar from "components/common/tab_bar/tab_bar.vue"
import tab_bar_item from "components/common/tab_bar/tab_bar_item.vue"
export default {
  name: 'main_tab_bar',
  props: {},
  components: {
    tab_bar,
    tab_bar_item
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
  .tab_bar{
    background-color: #fff;
  }

</style>
