import {getCateList,getshoplist,Detail,shopping} from "@/api/index"

const state = {
  list: [],
  List:[],
  Details:{},
  shopinglist:[]
}

const mutations = {
  elm(state, payload) {
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
    // console.log(res);
    commit('elm',{list:res})
  },
  async getShoplist({commit},payload){
    let data = await getshoplist(); 
    // console.log('123...',data)
    commit('elm',{List:data})
  },
  async detail({commit},payload){
    let data = await Detail(payload)
    console.log('123...',data)
    commit('elm',{Details:data})
  },
  async Shopping({commit},payload){
    let data = await shopping(payload)
    commit('elm',{shopinglist:data})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
