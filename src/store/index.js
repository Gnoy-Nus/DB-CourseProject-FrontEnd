import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

import user from "./user";
import student from './student';
import teacher from "./teacher";
export default new Vuex.Store({
    modules:{
        user,
        student,
        teacher
    }
});