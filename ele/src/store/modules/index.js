import {getCateList, getCode, getLogin, getshoplist, getSearchList,getshopList} from "@/api/index"

const state = {
  code: '',
  list: [],
  List:[],
  SearchList:[],
  SearchShopList:[]
}

const mutations = {
  classif(state, payload) {
    console.log('payload',payload)
      if (payload) {
        for (const key in payload) {
          state[key] = payload[key]
          console.log('state[key]',state[key])
        }
      }
  }
}

const actions = {
  // nav列表
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
    commit('classif',{list:res})
  },
  // 验证码
  async getCode({ commit }){
    let code = await getCode();
    commit('classif',{ code:code.code })
  },
  // 登录
  async getLogin({commit},payload){
    let login = await getLogin(payload);
  },
  // 商品列表
  async getShoplist({commit},payload){
    let data = await getshoplist();
    commit('classif',{List:data})
  },
  // 搜索
  async getSearchList({commit},payload){
    let data = await getSearchList(payload);
    commit('classif',{SearchList:data})
  },
  //搜索结果出来的店铺
  async getSearchShopList({commit},payload){
    let data = await getshopList(payload);
    console.log('getSearchShopList',data)
    commit('classif',{SearchShopList:data})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
