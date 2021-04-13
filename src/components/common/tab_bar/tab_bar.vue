<template>
 <div class="tab_bar">
    <slot></slot>
 </div>
</template>

<script>
export default {
  name: 'tab_bar',
  props: {},
  components: {
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
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    height: 49px;
    box-shadow: 0 -1.5px 1.5px rgba(1,1,1,0.05) ;

  }
</style>
