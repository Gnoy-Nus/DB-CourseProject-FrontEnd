import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
//导入fa|jquery|Element-UI库

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//注册全局组件
import Header from '@/components/Header'
Vue.component(Header.name,Header);

Vue.use(ElementUI);

new Vue({
  //注册路由
  router,
  store,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
