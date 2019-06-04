import {getCateList, getCode, getLogin} from "@/api/index"

const state = {
  code: ''
}

const mutations = {
  classif(state, payload) {
    // console.log('payload...',payload)
    if (payload) {
      // console.log('payload852...',payload)
      for (const key in payload) {
        state[key] = payload[key]
      }
    }
  }
}

const actions = {
  async getCateList(){
    let data = await getCateList();
    // console.log('data...', data);
  },
  async getCode({ commit }){
    let code = await getCode();
    commit('classif',{ code:code.code })
    // console.log('data...',code.code)
    // console.log(state.code)
  },
  async getLogin({commit},payload){
    let login = await getLogin(payload);
    console.log(login)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
