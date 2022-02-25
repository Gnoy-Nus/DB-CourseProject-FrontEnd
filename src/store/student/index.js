//login模块的仓库

import {
    reqStuInfo,
    selectTutorKeyword
} from "@/api";

//登录与注册的模块
const state = {
    stuInfo: {},
    teacherList:[]
};

//mutations:修改state的唯一手段
const mutations = {
    STU_INFO(state, result) {
        state.stuInfo = result;
    },
    TEACHER_LIST(state, result) {
        state.teacherList = result;
    },
};

const actions = {
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
    async getTeacherList({ commit },data) {
        console.log(data);
        let result = await selectTutorKeyword(data);
        console.log(result);
        if (result.status == 1) {
            //用户已经登录成功且获取到token
            commit("TEACHER_LIST", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
};



//getters:提供给组件计算好的数据
const getters = {
    StuInfo(state) {
        return state.stuInfo || {};
    },
    TeacherList(state){
        return state.teacherList||[];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};