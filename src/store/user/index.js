//login模块的仓库

import {
    reqUserLogin,
} from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";
//登录与注册的模块
const state = {
    token: getToken(),
    loginType: JSON.parse(sessionStorage.getItem(`loginType`))||"",
};

//mutations:修改state的唯一手段
const mutations = {
    USERLOGIN(state, result) {
        setToken(result);
        state.token = result;
    },
    LOGINTYPE(state, result){
        sessionStorage.setItem(`loginType`, JSON.stringify(result))
        state.loginType=result;
    },
    //清除本地数据
    CLEAR(state) {
        //帮仓库中用户信息清空
        state.token = '';
        state.loginType = "";
        //本地存储数据清空
        sessionStorage.removeItem("loginType");
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
            commit("LOGINTYPE",data.type);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },

      //退出登录
      async userLogout({commit}) {
        commit("CLEAR");
        return 'ok';
      },
};

//getters:提供给组件计算好的数据
const getters = {
};

export default {
    state,
    mutations,
    actions,
    getters
};