import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
Vue.config.productionTip = false
// 三级联动组件 --注册为全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 三级联动接口请求
// import {reqCategoryList} from '@/api'
// import { reqGetSearchInfo } from './api'
// 引入仓库
import store from './store'
// 第一个参数:全局组件的名字 第二个参数:哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
import '@/mock/mockServe'

// 引入swiper样式
import 'swiper/css/swiper.css'
// 测试axios接口
// reqCategoryList()
// console.log(reqGetSearchInfo({}))
new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  // 注册路由：底下的写法KV一致 省略V
  // 注册路由信息：这里写router时 组件身上都拥有$route,$router属性
  router,
  // 注册store仓库 组件实例的身上会拥有$store属性
  store
}).$mount('#app')
