import {getCateList,getSearchList} from "@/api/index"

const state = {
  list: [1,2,3,4],
  SearchList:[]
}

const mutations = {
  upDataSearchList(state,payload){
    state.SearchList=payload
  }
}

const actions = {
  async getCateList(){
    let data = await getCateList();
  },
  async getSearchList({commit},payload){
    let data = await getSearchList(payload);
    commit('upDataSearchList',data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
