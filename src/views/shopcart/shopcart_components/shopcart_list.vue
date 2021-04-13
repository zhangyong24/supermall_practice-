<template>
    <div class="list" >
      <shopcart_list_item v-for="(item,index) in product" :key="index" :itemProduct='item'></shopcart_list_item>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import shopcart_list_item from "./shopcart_list_item.vue"
export default {
  name: 'shopcart_list',
  props: {},
  components: {
    shopcart_list_item

  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      product:"getProduct" 
    })
  },
  watch: {},
  methods: {
    
  }
}
</script> 

<style scoped>


</style>