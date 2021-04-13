<template>
 <div id="app">
   <keep-alive exclude="detail">
      <router-view></router-view>
   </keep-alive>
   <main_tab_bar></main_tab_bar>
 </div>
</template>

<script>
import main_tab_bar from "components/content/main_tab_bar/main_tab_bar.vue"
export default {
  name: 'App',
  props: {},
  components: {
   main_tab_bar
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script> 

<style>
 @import "assets/css/base.css" ;
  

</style>
