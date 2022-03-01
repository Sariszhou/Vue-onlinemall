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

const getters = {
    // 路径导航简化的数据
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }
    
}

export default {
    state,
    mutations,
    actions,
    getters
}