// 引入一级路由组件
// import Home from "@/pages/Home"
// import Search from "@/pages/Search"
// import Register from "@/pages/Register"
// import Login from "@/pages/Login"
// import Detail from "@/pages/Detail"
// import ShopCart from "@/pages/ShopCart"
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'
// // 引入二级路由组件
// import MyOrder from '@/pages/Center/myOrder'
// import GroupOrder from '@/pages/Center/groupOrder'


// 路由配置信息
export default [
    {
        path:"/home",
        component:()=>import('@/pages/Home'),
        meta:{show:true}
    },
    {
        path:"/search/:keyword?",
        component:()=>import('@/pages/Search'),
        meta:{show:true},
        name:'search',
        // 路由组件能不能传递props数据？
        // 布尔值写法:只有prams参数
        props:true,
    },
    {
        path:"/register",
        component:()=>import('@/pages/Register'),
        meta:{show:false}
    },
    {
        path:"/login",
        component:()=>import('@/pages/Login'),
        meta:{show:false}

    },
    {
        path:"/detail/:skuId",
        component:()=>import('@/pages/Detail'),
        meta:{show:true}
        
    },
    {
        name:'addcartsuccess',
        path:"/addcartsuccess",
        component:()=>import('@/pages/AddCartSuccess'),
        meta:{show:true} 
    },
    {
        name:'shopcart',
        path:"/shopcart",
        component:()=>import('@/pages/ShopCart'),
        meta:{show:true} 
    },
    {
        name:'trade',
        path:"/trade",
        component:()=>import('@/pages/Trade'),
        meta:{show:true},
        // 路由独享守卫
        beforeEnter:(to,from,next)=>{
            if(from.path=='/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        name:'pay',
        path:"/pay",
        component:()=>import('@/pages/Pay'),
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
        component:()=>import('@/pages/PaySuccess'),
        meta:{show:true} 
    },
    {
        name:'center',
        path:'/center',
        component:()=>import('@/pages/Center'),
        meta:{show:false},
        //二级路由
        children:[
            {
                path:'myorder',
                component:()=>import('@/pages/Center/myOrder')
            },
            {
                path:'grouporder',
                component:()=>import('@/pages/Center/groupOrder')
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