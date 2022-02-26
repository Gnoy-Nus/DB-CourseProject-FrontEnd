//login模块的仓库

import {
    reqStuInfo,
    selectTutorKeyword,
    changeStudentAccount,
    checkApplyingTutors,
    modStuInfo,
    submitApply,
    cancelApply
} from "@/api";

//登录与注册的模块
const state = {
    stuInfo: {},
    teacherList:[],
    selectedTeacherList:[]
};

//mutations:修改state的唯一手段
const mutations = {
    STU_INFO(state, result) {
        state.stuInfo = result;
    },
    TEACHER_LIST(state, result) {
        state.teacherList = result;
    },
    SELECTED_TLIST(state, result) {
        state.selectedTeacherList = result;
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
            return Promise.reject(new Error(result.message));
        }
    },
    //修改用户信息
    async changeStuInfo({ commit },data) {
        console.log(data);
        let result = await modStuInfo(data);
        console.log(result);
        if (result.status == 1) {
            console.log(result);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    //递交导师申请
    async submitTutorApply({ commit },data) {
        console.log(data);
        let result = await submitApply(data);
        console.log(result);
        if (result.status == 1) {
            console.log(result);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    //获取导师信息表
    async getTeacherList({ commit },data) {
        console.log(data);
        let result = await selectTutorKeyword(data);
        console.log(result);
        if (result.status == 1) {
            //用户已经登录成功且获取到token
            commit("TEACHER_LIST", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    //更改账户密码
    async changeAccountPwd({ commit },data) {
        console.log(data);
        let result = await changeStudentAccount(data);
        console.log(result);
        if (result.status == 1) {
            //用户已经登录成功且获取到token
            console.log("ok");
            return "ok";
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    //获取已申请的导师列表
    async getApplyTeacherList({ commit }) {
        let result = await checkApplyingTutors();
        console.log(result);
        if (result.status == 1) {
            //用户已经登录成功且获取到token
            commit("SELECTED_TLIST", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error(result.message));
        }
    },
    //撤销申请
    async cancelTutorApply({ commit },data) {
        console.log(data);
        let result = await cancelApply(data);
        console.log(result);
        if (result.status == 1) {
            console.log(result);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.message));
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
    },
    SelectedTeacherList(state){
        return state.selectedTeacherList || [];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};