<template>
 <div class="nav_bar">
   <div class="left"><slot name="left"></slot></div>
   <div class="center"><slot name="center"></slot></div>
   <div class="right"><slot name="right"></slot></div>
 </div>
</template>

<script>
export default {
  name: 'nav_bar',
  props: {},
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
.nav_bar{
  width: 100%;
  display:flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,0.1);
}
.nav_bar .center{
  flex:1;
}
.nav_bar .left,.right{
  width:60px;
}
</style>
