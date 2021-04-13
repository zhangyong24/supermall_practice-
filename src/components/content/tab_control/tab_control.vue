<template>
 <div class="tab_control">
  <div v-for="(item,index) in titles" :key="index" class="conterol_item" 
  @click="itemClick(index)">
    <span :class="{active:controlCount === index}" >{{item}}</span>
  </div>
 </div>
</template>

<script>
export default {
  name: 'tab_control',
  props: {
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {},
  data () {
    return {
      controlCount:0
    }
  },
  computed: {},
  watch: {},
  methods: {
    itemClick(index){
     this.controlCount = index
     this.$emit("tabConteol",index)


    }
  }
}
</script> 

<style scoped>
  .tab_control{
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    height: 40px;
    background-color: #fff;
  }
  .conterol_item{
    flex: 1;
  }
  .conterol_item span{
    padding: 3px;
  }
  .active{
    color:var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);

  }
</style>
