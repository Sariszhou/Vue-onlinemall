// home的小仓库
import { reqGoodsInfo } from "@/api";

const state ={
    goodInfo:{}
};
const mutations = {
    GETGOODSDETAIL(state,value){
        state.goodInfo = value
    }
}
const actions = {
    async getGoodInfo(context,skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            context.commit('GETGOODSDETAIL',result.data)
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}