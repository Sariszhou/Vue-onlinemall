// 当前整个模块：API进行统一管理
import requests from './request'
import mockRequests from './mockAjax'
// 获取三级联动的接口
//  请求地址：/api/product/getBaseCategoryList get 无参数
// 发请求 axios发请求返回的结果为promise对象
export const reqCategoryList = () => requests({ url: 'product/getBaseCategoryList', method: 'get' })
// 获取Banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' })
// 获取Floor组件的数据
export const reqGetFloorList = () => mockRequests({ url: "/floor", method: 'get' })
// 获取搜索模块数据 地址：/api/list 请求方式：post 
// 当前这个函数需不需要接受外部传递参数
// 当前这个接口，给服务器传递参数params 至少为一个空对象
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

// 产品详情信息请求
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

// 将产品加入到购物车中 或者更新某一个产品的个数
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" })

// 获取购物车数据接口
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

// 删除购物车中数据接口
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 修改商品的选中状态接口
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取验证码接口
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

//注册
//url:/api/user/passport/register  method:post    phone code password

export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'});

//登录
//URL:/api/user/passport/login  method:post phone password
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'});

//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get 
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});


//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = ()=> requests({url:'/user/passport/logout',method:'get'});


//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});

//获取商品清单
//URL:/api/order/auth/trade   method:get
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});


//提交订单的接口
//URL:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post

export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});

//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

//获取支付订单状态
//URL:/api/payment/weixin/queryPayStatus/{orderId}  get
export  const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});


//获取个人中心的数据
//api/order/auth/{page}/{limit}  get 
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});