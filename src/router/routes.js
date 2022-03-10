// 引入一级路由组件
import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Register from "@/pages/Register"
import Login from "@/pages/Login"
import Detail from "@/pages/Detail"
import ShopCart from "@/pages/ShopCart"
import AddCartSuccess from '@/pages/AddCartSuccess'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
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
        meta:{show:true},
        // 路由独享守卫
        beforeEnter:(to,from,next)=>{
            if(from.path='/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        name:'pay',
        path:"/pay",
        component:Pay,
        meta:{show:true},
        beforeEnter:(to,from,next)=>{
            if(from.path='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        name:'paysuccess',
        path:"/paysuccess",
        component:PaySuccess,
        meta:{show:true} 
    },
    {
        name:'center',
        path:'/center',
        component:Center,
        meta:{show:false},
        //二级路由
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    // 重定向
    {
        path:'*',
        redirect:"/home"
    }
]