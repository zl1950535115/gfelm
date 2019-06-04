import {getCateList, getCode, getLogin, getshoplist} from "@/api/index"

const state = {
  code: '',
  list: [],
  List:[]
}

const mutations = {
  classif(state, payload) {
      if (payload) {
        for (const key in payload) {
          state[key] = payload[key]
        }
      }
  }
}

const actions = {
  async getCateList({commit},payload){
    let data = await getCateList();
    let len  = data.length
    let n = 8; //假设每行显示4个
    let lineNum = len % 8 === 0 ? len / 8 : Math.floor( (len / 8) + 1 );
    let res = [];
    for (let i = 0; i < lineNum; i++) {
    // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
    let temp = data.slice(i*n, i*n+n);
    res.push(temp);
    }
    console.log(res);
    commit('classif',{list:res})
  },
  async getCode({ commit }){
    let code = await getCode();
    commit('classif',{ code:code.code })
  },
  async getLogin({commit},payload){
    let login = await getLogin(payload);
    console.log(login)
  },
  async getShoplist({commit},payload){
    let data = await getshoplist();
    console.log('123...',data)
    commit('classif',{List:data})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
