import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
//导入fa|jquery库
import 'font-awesome/css/font-awesome.min.css'
import 'jquery/dist/jquery.slim'
import 'jquery/dist/jquery'

//注册全局组件
import Header from '@/components/Header'
Vue.component(Header.name,Header);
//注册全局函数
import {WeatherQuery} from '@/api'
Vue.prototype.WeatherQuery=WeatherQuery;
import {LoginRequest} from '@/api'
Vue.prototype.LoginRequest=LoginRequest;

//测试api
// WeatherQuery("宁波").then(res =>{
//   if(res){
//     console.log(res);
//   }
// })

// var Testdata =
// {
//   usr:'zhujie',
//   pwd:123456,
// };

// LoginRequest(Testdata).then(res=>{
//   if(res){
//     console.log(res);
//   }
// });

new Vue({
  //注册路由
  router,
  store,
  render: h => h(App),
}).$mount('#app')
