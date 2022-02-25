//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
//store
import store from '@/store'
//引入路由
import Login from '@/pages/Login'
import Student from '@/pages/Student'
import Teacher from '@/pages/Teacher'
import StudentSelect from '@/pages/Student/StudentSelect'
import StudentCheck from '@/pages/Student/CheckSelected'
import StudentAccount from '@/pages/Student/StudentAccount'
import StudentModify from '@/pages/Student/StudentModify'
import ManageStudent from '@/pages/Teacher/ManageStudent'
import CheckStudentRequests from '@/pages/Teacher/CheckRequest'
import TeacherAccount from '@/pages/Teacher/TeacherAccount'
import TeacherModify from '@/pages/Teacher/TeacherModify'
//解决重复访问路由地址报错
let originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject);
    } else {
        originalPush.call(this, location, () => { }, () => { });
    }
    //return originalPush.call(this, location).catch(err => err)
};

export default new VueRouter({
    routes: [
        {
            path: "/login",
            component: Login,
        }
        ,
        {
            path: "/student",
            component: Student,
            children: [
                {
                    // path: '/student/StudentSelect',
                    path: 'StudentSelect',
                    component: StudentSelect,
                },
                {
                    // path: '/student/StudentCheck',
                    path: 'StudentCheck',
                    component: StudentCheck,
                },
                {
                    // path: '/student/StudentAccount',
                    path: 'StudentAccount',
                    component: StudentAccount,
                },
                {
                    // path: '/student/StudentModify',
                    path: 'StudentModify',
                    component: StudentModify,
                },
            ],
            beforeEnter: (to, from, next) => { // 路由前置守卫
                // 如果有token且login状态正常，放行
                if (store.state.user.token&&store.state.user.loginType=="s") {
                    next()
                } else {
                    //否则跳转至默认页面
                    next('/')
                }
            }
        }
        ,
        {
            path: "/teacher",
            component: Teacher,
            children: [
                {
                    // path: '/teacher/ManageStudent',
                    path: 'ManageStudent',
                    component: ManageStudent,
                },
                {
                    // path: '/teacher/CheckRequests',
                    path: 'CheckStudentRequests',
                    component: CheckStudentRequests,
                },
                {
                    // path: '/teacher/TeacherAccount',
                    path: 'TeacherAccount',
                    component: TeacherAccount,
                },
                {
                    // path: '/teacher/TeacherModify',
                    path: 'TeacherModify',
                    component: TeacherModify,
                },
            ],
            beforeEnter: (to, from, next) => { // 路由前置守卫
                // 如果有token且login状态正常，放行
                if (store.state.user.token&&store.state.user.loginType=="t") {
                    next()
                } else {
                    //否则跳转至默认页面
                    next('/')
                }
            }
        }
        ,
        //重定向
        {
            path: '*',
            redirect: '/login',
        }
    ]
})