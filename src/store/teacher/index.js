//login模块的仓库

import {
    reqTeaInfo,
} from "@/api";

//登录与注册的模块
const state = {
    teaInfo: {},
};

//mutations:修改state的唯一手段
const mutations = {
    TEA_INFO(state, result) {
        state.teaInfo = result;
    },
};

const actions = {
    //获取用户信息
    async getTeaInfo({ commit }) {
        let result = await reqTeaInfo();
        if (result.status == 1) {
            commit("TEA_INFO", result.data);
            console.log(result);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
};



//getters:提供给组件计算好的数据
const getters = {
    TeaInfo(state) {
        return state.teaInfo || {};
    },
};

export default {
    state,
    mutations,
    actions,
    getters
};