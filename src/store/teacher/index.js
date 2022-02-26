//login模块的仓库

import {
    reqTeaInfo,
    changeTeacherAccount,
    modTeaInfo,
    checkApplyingStudents,
} from "@/api";

//登录与注册的模块
const state = {
    teaInfo: {},
    applyList: [],
};

//mutations:修改state的唯一手段
const mutations = {
    TEA_INFO(state, result) {
        state.teaInfo = result;
    },
    APPLY_TLIST(state, result) {
        state.applyList = result;
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
            return Promise.reject(new Error(result.message));
        }
    },
    //更改账户密码
    async T_changeAccountPwd({ commit }, data) {
        console.log(data);
        let result = await changeTeacherAccount(data);
        console.log(result);
        if (result.status == 1) {
            //用户已经登录成功且获取到token
            console.log("ok");
            return "ok";
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    //修改用户信息
    async changeTeaInfo({ commit }, data) {
        console.log(data);
        let result = await modTeaInfo(data);
        console.log(result);
        if (result.status == 1) {
            console.log(result);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    //获取已申请的学生列表
    async getApplyStudentList({ commit }) {
        let result = await checkApplyingStudents();
        console.log(result);
        if (result.status == 1) {
            //用户已经登录成功且获取到token
            commit("APPLY_TLIST", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
};



//getters:提供给组件计算好的数据
const getters = {
    TeaInfo(state) {
        return state.teaInfo || {};
    },
    APPLYLIST(state) {
        return state.applyList || [];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};