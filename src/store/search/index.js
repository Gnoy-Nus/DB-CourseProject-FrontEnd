//search模块的仓库

import { WeatherQuery } from "@/api";

//state:仓库存数据的地方
const state = {
    QueryResult: {}, //查询结果
};

//mutations:修改state的唯一手段
const mutations = {
    QUERY_RESULT(state, result) {
        state.QueryResult = result;
    }
};

//actions:处理业务逻辑,但不能直接修改state
const actions = {
    //调用api获取天气信息
    async getWeatherQueryResult({ commit }, params = {}) {
        let result = await WeatherQuery(params.keyword);
        if (result.status == 1000) {
            commit("QUERY_RESULT", result.data);
        }
    },
};

//getters:提供给组件计算好的数据
const getters = {
    forecastList(state) {
        return state.QueryResult.forecast || [];
    }
};


export default {
    state,
    mutations,
    actions,
    getters
};