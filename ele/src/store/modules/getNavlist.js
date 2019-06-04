import {nav,toplist,find} from "@/api/index"
const state = {
    list:[],
    toplists:[]
}
const actions = {
        async nav(){
            var a=await nav()
            state.list=a
        },
        async toplist(){
            var data=await toplist()
            state.toplists=data
        },
        async find(c,payload){
            state.list=[]
            var producter=await find(payload)
            state.list=producter
        }
}
export default {
    namespaced: true,
    state,
    actions
}