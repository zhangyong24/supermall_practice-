export const back_top_mixin = {
  data(){
    return{
      contentShow:false,
    }
  },
  methods:{
   backClick(){
      this.$refs.scroll.toScroll(0,-20)
    }
  }
 
} 