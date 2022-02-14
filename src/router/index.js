//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//引入路由
import Login from '@/pages/Login'
import Student from '@/pages/Student'
import StudentSelect from '@/pages/Student/StudentSelect'
import StudentCheck from '@/pages/Student/CheckSelected'
//解决重复访问路由地址报错
let originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location,resolve,reject) {
    if(resolve && reject){
        originalPush.call(this,location,resolve,reject);
    }else{
        originalPush.call(this,location,()=>{},()=>{});
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
            ]
        }
        ,
        //重定向
        {
            path: '*',
            redirect: '/login',
        }
    ]
})