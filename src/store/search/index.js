import { reqGetSearchInfo } from "@/api";
// search的小仓库
const state = {
    searchInfo:{}
};
const mutations = {
    REQGETSEARCHINFO(state,searchInfo){
        state.searchInfo = searchInfo
    }
}
const actions = {
    // 获取search模块数据
    // params形参 是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    async getSearchList(context,params={}) {
        // 在调用获取服务器数据的时候，至少传递一个空对象参数
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            context.commit("REQGETSEARCHINFO",result.data)
        }
    }
}
// 计算属性 在项目当中，为了简化数据而生
// 可以把我们将来在组件当中需要用的数据简化一下【将来组件来获取数据时较为简单】
const getters = {
    // 当前仓库中的state，并非大仓库中的那个state
    goodsList(state){
        // 假如没有网络 应该返回的是undefined
        return state.searchInfo.goodsList||[]
    },
    trademarkList(state){
        return state.searchInfo.trademarkList||[]
    },
    attrsList(state){
        return state.searchInfo.attrsList||[]
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}