<template>
 <div class="tab_bar_item" @click="itemClick">
    <div v-if="isActive"><slot name="item_icon"></slot></div>
    <div v-else><slot name="item_icon_action"></slot></div>
    <div :style="colorActive"><slot name="item_text"></slot></div>
 </div>
</template>
<script>
export default {
  name: 'tab_bar_item',
  props: {
    path:String,
    activeColor:{
      type:String,
      default:function(){
        return "#000"
      }
    }
  },
  components: {},
  data () {
    return {
    
    }
  },
  computed: {
    isActive(){
      return  this.$route.path.indexOf(this.path)
    },
    colorActive(){
      return this.isActive?{}:{color:this.activeColor}

    }
  },
  watch: {},
  methods: {
    itemClick(){
      this.$router.replace(this.path)
       
    }
  }
}
</script> 

<style scoped>
.tab_bar_item{
    flex: 1;
    font-size: 14px;
  }
.tab_bar_item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}


</style>
