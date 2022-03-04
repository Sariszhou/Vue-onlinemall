import Vue from "vue";
import Vuex from 'vuex'
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
// 需要使用插件一次
Vue.use(Vuex);
// // state是仓库存储数据的地方
// const state ={};
// // mutations修改state的唯一手段
// const mutations = {}
// // actions 处理action 可以书写自己的业务逻辑 也可以处理异步
// const actions = {}
// // getters:理解为计算属性 用于简化仓库数据 组件身上都有$route $router属性
// const getters = {}
export default new Vuex.Store({
    // 实现vuex仓库模块式开发存储数据
    modules:{
        home,
        search,
        detail,
        shopcart
    }
})