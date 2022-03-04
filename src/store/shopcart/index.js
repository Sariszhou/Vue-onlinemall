import { reqCartList } from "@/api";


const state = {
    cartList:[]
};
const mutations = {
    GETCARTLIST(state,cartlist){
        state.cartList = cartlist
    }
}
const actions = {
    // 获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList();
        console.log(result)
        if(result.code==200){
            commit('GETCARTLIST',result.data)
        }
    }
}

const getters = {
    cartList(state){
        return state.cartList[0]||{}
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}