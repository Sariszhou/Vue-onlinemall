// home的小仓库
import { reqGetBannerList } from "@/api";
import { reqCategoryList } from "@/api";
import {reqGetFloorList} from '@/api'
const state ={
    // 根据接口的返回值进行初始化
    categoryList:[],
    bannerList : [],
    floorList : []
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerlist){
        state.bannerList = bannerlist
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
}
const actions = {
    async categoryList(context){
        // 通过API里面的接口函数调用,向服务器发请求,获取服务器的数据
        let result = await reqCategoryList();
        if(result.code==200){
            context.commit("CATEGORYLIST",result.data)
        }
    },
    // 获取首页轮播图的数据
    async getBannerList(context){
       let result =  await reqGetBannerList();
       if(result.code == 200){
           context.commit('GETBANNERLIST',result.data)  
       }
    },
    async getFloorList(context){
        let result = await reqGetFloorList();
        if(result.code == 200){
            context.commit('GETFLOORLIST',result.data)  
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