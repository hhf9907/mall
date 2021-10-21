export default {
  add(state,payload){
    state.cartlist.push(payload)
  },
  addcount(state,f){
    state.cartlist[f].count++
  },
  updateInfo(state,aname){
    state.cartlist.checked = aname
    console.log(state.cartlist);
  },
  quanxuan(state){
    for (let item of state.cartlist){
      item.checked = true
    }
  },
  unquanxuan(state){
    for (let item of state.cartlist){
      item.checked = false
    }
  },
  countadd(state,iid){
    for (let i in state.cartlist){
      if(state.cartlist[i].iid === iid){
        state.cartlist[i].count++
      }
    }
  },
  countsub(state,iid){
    for (let i in state.cartlist){
      if(state.cartlist[i].iid === iid &&state.cartlist[i].count>0){
        state.cartlist[i].count--
      }
    }
  }
}