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
import SelectCourse from '@/pages/Student/SelectCourse'
import CheckSelected from '@/pages/Student/CheckSelected'
import CheckScore from '@/pages/Student/CheckScore'
import StudentAccount from '@/pages/Student/StudentAccount'
import StudentModify from '@/pages/Student/StudentModify'
import CheckMember from '@/pages/Student/CheckSelected/CheckMember'
//
import UpdateScore from '@/pages/Teacher/UpdateScore'
import ScoreList from '@/pages/Teacher/UpdateScore/ScoreList'
import CheckClass from '@/pages/Teacher/CheckClass'
import TeacherAccount from '@/pages/Teacher/TeacherAccount'
import TeacherModify from '@/pages/Teacher/TeacherModify'
import TeaCheckMember from '@/pages/Teacher/CheckClass/CheckMember'
//
import AdminLogin from '@/pages/Admin';




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
            path: "/adminlogin",
            component: AdminLogin,
        }
        ,
        {
            path: "/student",
            component: Student,
            children: [
                {
                    // path: '/student/SelectCourse',
                    path: 'SelectCourse',
                    component: SelectCourse,
                },
                {
                    // path: '/student/CheckSelected',
                    path: 'CheckSelected',
                    component: CheckSelected,
                   children: [
                       {
                           path: 'CheckMember',
                           component:CheckMember,
                       }
                   ]
                },
                {
                    // path: '/student/StudentCheck',
                    path: 'CheckScore',
                    component: CheckScore,
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
                if (store.state.user.token && store.state.user.loginType == "s") {
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
                    // path: '/teacher/UpdateScore',
                    path: 'UpdateScore',
                    component: UpdateScore,
                    children:[
                        {
                            path:'ScoreList',
                            component:ScoreList
                        }
                    ]
                },
                {
                    // path: '/teacher/CheckClass',
                    path: 'CheckClass',
                    component: CheckClass,
                    children:[
                        {
                            path:'CheckMember',
                            component:TeaCheckMember
                        }
                    ]
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
                if (store.state.user.token && store.state.user.loginType == "t") {
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