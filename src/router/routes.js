// 引入路由组件
import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Register from "@/pages/Register"
import Login from "@/pages/Login"
import Detail from "@/pages/Detail"
import ShopCart from "@/pages/ShopCart"
import AddCartSuccess from '@/pages/AddCartSuccess'
import Trade from '@/pages/Trade'
// 路由配置信息
export default [
    {
        path:"/home",
        component:Home,
        meta:{show:true}
    },
    {
        path:"/search/:keyword?",
        component:Search,
        meta:{show:true},
        name:'search',
        // 路由组件能不能传递props数据？
        // 布尔值写法:只有prams参数
        props:true,
    },
    {
        path:"/register",
        component:Register,
        meta:{show:false}
    },
    {
        path:"/login",
        component:Login,
        meta:{show:false}

    },
    {
        path:"/detail/:skuId",
        component:Detail,
        meta:{show:true}
        
    },
    {
        name:'addcartsuccess',
        path:"/addcartsuccess",
        component:AddCartSuccess,
        meta:{show:true} 
    },
    {
        name:'shopcart',
        path:"/shopcart",
        component:ShopCart,
        meta:{show:true} 
    },
    {
        name:'trade',
        path:"/trade",
        component:Trade,
        meta:{show:true} 
    },
    // 重定向
    {
        path:'*',
        redirect:"/home"
    }
]