//login模块的仓库

import {
    reqStuInfo,
    reqCourseInfo,
    reqStuCourse,
    reqStuScore,
    delCourse,
    putCourse,

    changeStudentAccount,
    modStuInfo,
} from "@/api";

//登录与注册的模块
const state = {
    stuInfo: {},
    courseList: [],
    selectedCourseList: [],
    pageLength: 1,
    grade_list: [],
};

//mutations:修改state的唯一手段
const mutations = {
    STU_INFO(state, result) {
        state.stuInfo = result;
    },
    COURSE_LIST(state, result) {
        state.courseList = result;
    },
    SELECTED_CLIST(state, result) {
        state.selectedCourseList = result;
    },
    PAGE_LENGTH(state, result) {
        state.pageLength = result;
    },
    GRADE_LIST(state, result) {
        state.grade_list = result;
    },
};

const actions = {
    //获取用户信息
    async getStuInfo({ commit }) {
        let result = await reqStuInfo();
        console.log(result);
        if (result.code == 1) {
            commit("STU_INFO", result.info);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },
    //获取开课表
    async getCourseList({ commit }, data) {
        console.log(data);
        let result = await reqCourseInfo(data);
        console.log(result);
        if (result.code == 1) {
            commit("COURSE_LIST", result.info);
            //commit("PAGE_LENGTH",result.length);
            return "ok";
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },
    //获取已申请的课程列表
    async getStuCourseList({ commit }, data) {
        console.log(data);
        let result = await reqStuCourse(data);
        console.log(result);
        if (result.code == 1) {
            commit("SELECTED_CLIST", result.info);
            return "ok";
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },
    //获取学生成绩
    async getStuScore({ commit }, data) {
        console.log(data);
        let result = await reqStuScore(data);
        console.log(result);
        if (result.code == 1) {
            commit("GRADE_LIST", result.info);
            return "ok";
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },
    //删除选课
    async deleteCourse({ commit }, data) {
        console.log(data);
        let result = await delCourse(data);
        console.log(result);
        if (result.code == 1) {
            return 'ok';
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },
    //递交导师申请
    async putCourse({ commit }, data) {
        console.log(data);
        let result = await putCourse(data);
        console.log(result);
        if (result.code == 1) {
            return 'ok';
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },

    //修改用户信息
    async changeStuInfo({ commit }, data) {
        console.log(data);
        let result = await modStuInfo(data);
        console.log(result);
        if (result.code == 1) {
            console.log(result);
            return 'ok';
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },


    //更改账户密码
    async changeAccountPwd({ commit }, data) {
        console.log(data);
        let result = await changeStudentAccount(data);
        console.log(result);
        if (result.status == 1) {
            //用户已经登录成功且获取到token
            console.log("ok");
            return "ok";
        } else {
            return Promise.reject(new Error(result.msg));
        }
    },


};



//getters:提供给组件计算好的数据
const getters = {
    StuInfo(state) {
        return state.stuInfo || {};
    },
    CList(state) {
        return state.courseList || [];
    },
    SelectedCourseList(state) {
        return state.selectedCourseList || [];
    },
    PageLength(state) {
        return state.pageLength;
    },
    Grade_List(state) {
        return state.grade_list;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};