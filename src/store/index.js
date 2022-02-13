import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);


import home from './home';
import search from "./search";
import login from "./login";
export default new Vuex.Store({
    modules:{
        home,
        search,
        login
    }
});