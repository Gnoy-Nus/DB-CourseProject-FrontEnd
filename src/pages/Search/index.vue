<template>
  <div>
    <ul class="weather_list">
      <li
        v-for="(item, index) in forecastList"
        :key="item.date"
        :style="{ transitionDelay: index * 100 + 'ms' }"
      >
        <div class="info_type">
          <span class="iconfont">{{ item.type }}</span>
        </div>
        <div class="info_temp">
          <b>{{ item.low }}</b>
          ~
          <b>{{ item.high }}</b>
        </div>
        <div class="info_date">
          <span>{{ item.date }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
      searchParams:{
        keyword:"", //存储搜索的值
      }
    };
  },
  beforeMount() {
    //在发请求之前，把接口需要传递参数，进行整理（在给服务器发请求之前，把参数整理好，服务器就会返回查询的数据）
    Object.assign(this.searchParams,  this.$route.params,this.$route.query,);
  },
  mounted() {
    //在发请求之前咱们需要将searchParams里面参数进行修改带给服务器
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("getWeatherQueryResult", this.searchParams);
    },
  },

  computed: {
    ...mapGetters(["forecastList"]),
  },
};
</script>

<style>
</style>