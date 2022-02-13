//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//引入路由
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'

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
            path: "/home",
            component: Home,
            meta: { show: true }
        }
        ,
        {
            path: "/search/:keyword?",
            component: Search,
            name: "search",
            props: ($route) => {
                return { keyword: $route.params.keyword, k: $route.query.k };
            }
        }
        ,
        {
            path: "/login",
            component: Login,
        }
        ,
        //重定向
        {
            path: '*',
            redirect: '/login',
            meta: { show: true }
        }
    ]
})