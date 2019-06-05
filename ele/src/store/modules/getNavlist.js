import {nav,toplist,find} from "@/api/index"
const state = {
    list:[],
    toplists:[]
}
const mutations={
    Theclosest(){
        var ok=state.list.sort((a,b)=>{
           return parseInt(a.distance)-parseInt(b.distance)
        })
       state.list=ok
    },
    song(){
        var ok=state.list.sort((a,b)=>{
           return a.float_minimum_order_amount-b.float_minimum_order_amount
        })
       state.list=ok
    }
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
    actions,
    mutations
}