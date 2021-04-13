<template>
 <div class="recommends">
   <div v-for="(item,index) in recommends" :key="index" class="recommends_item">
     <a :href="item.link">
       <img :src="item.image" alt="">
       <div>{{item.title}}</div>
     </a>
   </div>
 </div>
</template>

<script>
export default {
  name: 'recommend_view',
  props: {
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script> 

<style scoped>
  .recommends{
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    padding: 10px 0 20px 0;
    border-bottom:8px solid #eee ;

  }
  .recommends_item div{
    text-align: center;
    padding-top: 5px;
  }
  .recommends_item img{
    flex: 1;
    height: 70px;
    width: 70px;
  }
</style>
