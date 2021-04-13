<template>
 <div class="shopcart_bottom_bar">
   <check_button class="check_button" :isActive="getActive"  @click.native="checkBtnClick"></check_button>
   <span>全选</span>
   <div class="price">合计:{{getPrice}}</div>
   <div class="calculate" @click="calculateClick">去结算({{getCount}})</div> 
 </div>
</template>

<script>
import {mapGetters} from "vuex"
import check_button from "components/content/check_button/check_button.vue"
export default {
  name: 'shopcart_bottom_bar',
  props: {},
  components: {
    check_button
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(["getProduct"]),
    getPrice(){
      return "¥" + this.getProduct.filter((item) =>{return item.checked}
      ).reduce((pre,item) => { return pre + item.realPrice * item.count},0)
    },
    getCount(){
      return this.getProduct.filter((item) =>{return item.checked}).length
    },
    getActive(){
      if (this.getProduct.length === 0) {return false}
      else{
        return !(this.getProduct.find((item) =>{return !item.checked}))
      }
    }
    
  },
  watch: {},
  methods: {
    checkBtnClick(){
      if(this.getActive){
        return this.getProduct.forEach(item => {item.checked = false })
      }else{
        return this.getProduct.forEach(item => {item.checked = true })
      }
      

    },
    calculateClick(){
      if(!this.getActive){
        return this.$toast.show("购物车内无商品",2000)
      }
    }
    
  }
}
</script> 

<style scoped>
.shopcart_bottom_bar{
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 49px;
  right: 0;
  left: 0;
  display: flex;
  font-weight: 700;
  

}
.check_button{
  width: 30px;
  margin-left: 10px;
  margin-top: 3px;
}
.price{
  flex: 1;
  padding-right: 85px;
}
.calculate{
  width: 90px;
  background:var(--color-high-text);
  color: #fff;
  

}
</style>
