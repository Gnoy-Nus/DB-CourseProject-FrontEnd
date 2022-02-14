//login模块的仓库

import {
    reqUserLogin,
    reqStuInfo,
} from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";
//登录与注册的模块
const state = {
    token: getToken(),
    stuInfo: {},
    teaInfo: {}
};

//mutations:修改state的唯一手段
const mutations = {
    USERLOGIN(state, result) {
        state.token = result;
    },
    STU_INFO(state, result) {
        state.stuInfo = result;
    },
    TEA_INFO(state, result) {
        state.teaInfo = result;
    },
    //清除本地数据
    CLEAR(state) {
        //帮仓库中先关用户信息清空
        state.token = '';
        state.stuInfo = {};
        state.teaInfo = {};
        //本地存储数据清空
        removeToken();
    }
};

//actions:处理业务逻辑,但不能直接修改state
const actions = {
    //登录
    async userLogin({ commit }, data) {
        console.log(data);
        let result = await reqUserLogin(data);
        console.log(result);
        if (result.status == 1) {
            //用户已经登录成功且获取到token
            commit("USERLOGIN", result.token);
            //持久化存储token
            setToken(result.token);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //获取用户信息
    async getStuInfo({ commit }) {
        let result = await reqStuInfo();
        if (result.status == 1) {
            commit("STU_INFO", result.data);
            console.log(result);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },

    //   //退出登录
    //   async userLogout({commit}) {
    //     //只是向服务器发起一次请求，通知服务器清除token
    //     let result = await reqLogout();
    //     //action里面不能操作state，提交mutation修改state
    //     if(result.code==200){
    //       commit("CLEAR");
    //       return 'ok';
    //     }else{
    //       return Promise.reject(new Error('faile'));
    //     }
    //   },
};

//getters:提供给组件计算好的数据
const getters = {
    StuInfo(state) {
        return state.stuInfo || {};
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};