import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
//导入fa|jquery库
import 'font-awesome/css/font-awesome.min.css'
import 'jquery/dist/jquery.slim'
import 'jquery/dist/jquery'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//注册全局组件
import Header from '@/components/Header'
Vue.component(Header.name,Header);
//注册全局函数
import {selectTutorKeyword} from '@/api'
Vue.prototype.selectTutorKeyword=selectTutorKeyword;


//测试api
// var Testdata =
// {
//   keyword:{
//     college:"计算机工程与科学学院",
//   },
//   sort:{
//     tid: null,
//   }
// };

// selectTutorKeyword(Testdata).then(res=>{
//   if(res){
//     console.log(res);
//   }
// });

Vue.use(ElementUI);

new Vue({
  //注册路由
  router,
  store,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
