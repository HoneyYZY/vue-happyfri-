export default {
  addNum({commit,state},id){
    //点击下一题，记录答案，判断是否为最后一题，如果不是，跳转到下一题；
    commit('REMBER_ANSWER',id);
    if(state.itemNum<state.itemDetail.length){
      commit('ADD_ITEMNUM',1);
    }
  },
  //初始化信息
  initializeData({commit}){
    commit('INITIALIZE_DATA');
  }
}
