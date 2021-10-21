
const actions = {
  // addToCart({state, commit}, info) {
  //   return new Promise((resolve) => {
  //     // 1.查看该商品是否已经添加到cartList中
  //     const oldInfo = state.cartlist.find(item => item.iid === info.iid)
  //
  //     // 2.如果oldInfo存在, 那么原来的数量加1
  //     if (oldInfo) {
  //       const index = state.cartlist.indexOf(oldInfo)
  //       commit(types.INCREMENT_COUNT, index)
  //     } else {
  //       info.count = 1
  //       info.checked = true
  //       commit(types.ADD_TO_CART, info)
  //     }
  //
  //     resolve()
  //   })
  // },
  addCart({state,commit},payload){
    return new Promise( resolve => {
      let f = null
      for (let i in state.cartlist){
        if (state.cartlist[i].iid === payload.iid){
          f = i
          break;
        }
      }
      if (f){
        commit('addcount',f)
      }else{
        payload.count = 1
        // state.cartlist.push(payload)
        commit('add',payload)
      }
      resolve('加入购物车成功')
    })

  }
}

export default actions
