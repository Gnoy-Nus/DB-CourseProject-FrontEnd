//login模块的仓库

import {
    reqTeaInfo,
    reqClassInfo,
    reqClassMember,
    uploadScore
} from "@/api";

//登录与注册的模块
const state = {
    teaInfo: {},
    class_list: [],
    class_member_list:[],
    query_id:''
};

//mutations:修改state的唯一手段
const mutations = {
    TEA_INFO(state, result) {
        state.teaInfo = result;
    },
    CLASS_LIST(state, result) {
        state.class_list = result;
    },
    CLASS_MEMBER_LIST(state, result) {
        state.class_member_list = result;
    },
    QUERY_ID(state, result) {
        state.query_id = result;
    },
};

const actions = {
    //获取用户信息
    async getTeaInfo({ commit }) {
        let result = await reqTeaInfo();
        if (result.code == 1) {
            commit("TEA_INFO", result.info);
            console.log(result);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },
   
    //获取上课班级列表
    async reqClassInfo({ commit }, data) {
        console.log(data);
        let result = await reqClassInfo(data);
        console.log(result);
        if (result.code == 1) {
            commit("CLASS_LIST", result.info);
            return "ok";
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },
    
    //获取班级学生列表
    async reqClassMember({ commit }, data) {
        console.log(data);
        let result = await reqClassMember(data);
        console.log(result);
        if (result.code == 1) {
            commit("CLASS_MEMBER_LIST", result.info);
            return "ok";
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },
    //上传分数
    async uploadScore({ commit }, data) {
        console.log(data);
        let result = await uploadScore(data);
        console.log(result);
        if (result.code == 1) {
            return "ok";
            alert("success");
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },
};



//getters:提供给组件计算好的数据
const getters = {
    TeaInfo(state) {
        return state.teaInfo || {};
    },
    CLASSLIST(state) {
        return state.class_list || [];
    },
    CLASSMEMEBERLIST(state) {
        return state.class_member_list || [];
    },
};

export default {
    state,
    mutations,
    actions,
    getters
};