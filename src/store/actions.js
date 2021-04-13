export default {
  addCart(context,payload){
    return new Promise (function(resolve,reject){
      let oldCartList = context.state.cartList.find(item => item.iid === payload.iid)
    if(oldCartList){
      context.commit('addCount',oldCartList)
      resolve("当前商品+1")
    }else{
      context.commit('addCartVar',payload)
      resolve("此商品添加成功")
    }
     reject("Errors")
    })
    
  }
}