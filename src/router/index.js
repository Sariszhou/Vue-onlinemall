//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
// 使用插件
Vue.use(VueRouter)


// 先把VueRouter原型对象的push 先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push|replace
// 第一个参数：告诉原来的push方法 往哪里跳转
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        // call||apply区别
    // 相同点:二者都可以调用函数一次,都可以篡改函数的this一次
    // 不同点:call传递参数需要用逗号隔开,apply则传递数组
    originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
    originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
// 配置路由
let router =  new VueRouter({
    // 配置路由 key value 一致 省略v
    routes,
    // 滚动行为
    scrollBehavior (to, from, savedPosition) {
        // 返回的y等于0 代表滚动条在最顶部
        return {y:0}
    }
})

// 全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to,from,next)=>{
    // to:可以获取到你要跳转到哪个路由信息
    // from:可以获取到从哪个路由而来的信息
    // next:放行函数  
    //     next(false)中断当前的导航 如果浏览器的URL改变了(可能时用户手动或者浏览器后退按钮),那么URL地址会重置到from路由对应的地址
    next()
    //用户登录了 才会有token 未登录一定不会有token
    let token = store.state.user.token
    // 用户信息
    let name = store.state.user.userInfo.name
    // 用户已经登陆了
    if(token){
        // 用户已经登陆了 不需要再去login[不能去，停留在首页]
        if(to.path=='/login'){
            next('/')
        }else{
            //登录了但去的不是login
            // 如果已经有用户名 不需要再派发 直接放行
            if(name){
                next()
            }else{
                // 没有用户信息 派发action 让仓库存储用户信息在跳转
                try {
                    // 获取用户信息成功
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // token失效了 获取不到用户信息 给用户跳转到login页面重新登录
                    // 清除token
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    }else{
        // 未登录 不能去交易相关页面
        next()
    }
})

export default router