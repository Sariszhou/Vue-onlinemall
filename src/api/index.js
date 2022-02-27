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
/*
    参数:
    {
        "category3Id": "61",
        "categoryName": "手机",
        "keyword": "小米",
        "order": "1:desc",
        "pageNo": 1,
        "pageSize": 10,
        "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
        "trademark": "4:小米"
    }
*/
// 当前这个函数需不需要接受外部传递参数
// 当前这个接口，给服务器传递参数params 至少为一个空对象
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

// 产品详情信息请求
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get'})