<template>
  <div class="teacherdata">

      <el-table :data="SelectedCourseList" border style="width: 100%">
        <el-table-column prop="id" label="课程号" width="85" align="center">
                <template slot-scope="scope">
                  <router-link to="/student/CheckSelected/CheckMember" > 
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
        <el-table-column
          fixed="right"
          label="操作"
          width="150"
          align="center"
          v-if="this.$store.state.user.sys_mode"
        >
          <template slot-scope="scope">
            <el-popconfirm
              title="确定要删除选课吗？"
              @confirm="cancelApply(scope.row.id)"
            >
              <el-button slot="reference" type="danger">删除选课</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table-column>
      </el-table>

      <router-view></router-view>
  </div>
</template>



<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["SelectedCourseList"]),
  },
  mounted() {
    this.$store.dispatch("getStuCourseList", {
      year: 2022,
      semester: 1,
    });
    this.$store.dispatch("getSysMode");
  },
  methods: {
    handleRedirect(id){
       this.$store.commit('QUERY_ID', parseInt(id));
         this.$store.dispatch("reqClassMember", {
          id:this.$store.state.teacher.query_id
        });
    },
    async cancelApply(id) {
      try {
        await this.$store.dispatch("deleteCourse", {
          id: parseInt(id),
        });
        alert("successs");
        this.$store.dispatch("getStuCourseList", {
          year: 2022,
          semester: 1,
        });
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style scoped>
.teacherdata {
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

