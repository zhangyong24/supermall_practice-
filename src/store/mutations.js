export default {
  // addCart(state,payload){
    //   let oldCartList = state.cartList.find(item => item.iid === payload.iid)
    //   if(oldCartList){
    //     oldCartList.count++
    //   }else{
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }
    addCount(state,payload){
      payload.count++
    },
    addCartVar(state,payload){
      payload.count = 1
      payload.checked = true
      state.cartList.push(payload)
    }

}