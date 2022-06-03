<template>
  <div class="studentdata">
    <el-table :data="CLASSLIST" border style="width: 100%">
      <el-table-column prop="id" label="课程号" width="85" align="center">
               <template slot-scope="scope">
                  <router-link to="/teacher/CheckClass/CheckMember" > 
                      <el-button @click="handleRedirect(scope.row.id)"> {{scope.row.id}}</el-button>
                  </router-link>
                </template> 
      </el-table-column>
      <el-table-column prop="name" label="课程名" width="100" align="center">
      </el-table-column>
      <el-table-column prop="time" label="时间" align="center">
      </el-table-column>
      <el-table-column prop="teacher" label="教师" width="65" align="center">
      </el-table-column>
      <el-table-column prop="year" label="学年" width="80" align="center">
      </el-table-column>
      <el-table-column prop="semester" label="学期" width="50" align="center">
      </el-table-column>
      <el-table-column prop="capacity" label="容量" width="80" align="center">
      </el-table-column>
      <el-table-column prop="size" label="已选人数" width="80" align="center">
      </el-table-column>
      <el-table-column prop="credit" label="学分" width="80" align="center">
      </el-table-column>
    </el-table>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["CLASSLIST"]),
  },
  mounted() {
    this.$store.dispatch("reqClassInfo",{year:2022,semester:1});
  },
  methods: {
     handleRedirect(id){
       this.$store.commit('QUERY_ID', parseInt(id));
         this.$store.dispatch("reqClassMember", {
          id:this.$store.state.teacher.query_id
        });
    },
  },
};
</script>

<style scoped>
.studentdata {
  position: relative;
  top: 0;
  min-height: 90%;
  left: 2.5%;
  right: 2.5%;
  padding-top: 50px;
  width: 95%;
  overflow: auto;
}
</style>

