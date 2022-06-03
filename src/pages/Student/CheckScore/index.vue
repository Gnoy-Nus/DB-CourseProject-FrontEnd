<template>
  <div class="teacherdata">
    <el-table
      :data="Grade_List"
      border
      style="width: 80%"
      show-summary
      :summary-method="getSummaries"
    >
      <el-table-column prop="name" label="课程名" align="center">
      </el-table-column>
      <el-table-column prop="credit" label="学分" align="center">
      </el-table-column>
      <el-table-column prop="score" label="成绩" width="80" align="center">
      </el-table-column>
      <el-table-column prop="grade" label="绩点" width="80" align="center">
        <template slot-scope="scope">
            {{calGrade(scope.row.score)}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      pageIndex: 1,
    };
  },
  computed: {
    ...mapGetters(["Grade_List"]),
  },
  mounted() {
    this.$store.dispatch("getStuScore",{
      year: 2022,
      semester:1
    });
  },
  methods: {
    calGrade(score){
      if(score<=0)
        return 0;
      if(score>=90)
        return 4.0;
      if(score>=80)
        return 3.0;
      if(score>=70)
        return 2.0;
      if(score>=60)
        return 1.0;
    }
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

