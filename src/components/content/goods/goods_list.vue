<template>
 <div class="goods_list">
    <goods_list_item v-for="(item,index) in goods " :key='index' :goodsItem="item">
      
    </goods_list_item>
 </div>
</template>

<script>
import goods_list_item from "./goods_list_item.vue"
export default {
  name: 'goods_list',
  props: {
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    goods_list_item
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
  .goods_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
