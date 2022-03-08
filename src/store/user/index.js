// 登录与注册的模块
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/api"
import {setToken, getToken, removeToken} from "@/utils/token"
const state = {
    code: '',
    token: getToken(),
    userInfo: {}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    // 清除本地数据
    USERLOGOUT(state){
        // 帮仓库中相关用户信息清空
        state.token = ''
        state.userInfo = {}
        // 本地存储数据清空
        removeToken()
    }
}
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        // 获取验证码的这个接口 直接把验证吗返回 但是正常情况 后台把验证码发到手机上
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit("GETCODE", result.data)
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user)
        console.log(result)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 登陆业务
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data)
        // 服务器下发token 用户唯一标识符
        // 将来经常通过token找服务器要用户信息进行展示
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 退出登录
    // 只是向服务器发起一次请求 通知服务器清除token
    async userLogout({commit}){
        let result =  await reqLogout()
        if (result.code == 200) {
            commit('USERLOGOUT')
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
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