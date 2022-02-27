<template>
  <div class="studentdata">
    <el-table :data="OwnStudentList" border style="width: 100%">
      <el-table-column prop="id" label="学号" width="180" align="center"> </el-table-column>
      <el-table-column prop="gender" label="性别" align="center"> </el-table-column>
      <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
      <el-table-column prop="college" label="院系" align="center"> </el-table-column>
      <el-table-column prop="major" label="专业" align="center"> </el-table-column>
      <el-table-column prop="telephone" label="手机号" align="center"> </el-table-column>
      <el-table-column prop="email" label="邮箱" align="center"> </el-table-column>
      <el-table-column prop="website" label="个人网站" align="center"> <template slot-scope="scope1">
          <el-link :href="scope1.row.website" target="_blank">{{ scope1.row.website }}</el-link>
        </template></el-table-column>
      <el-table-column prop="info" label="个人介绍" align="center"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  beforeMount() {},
  mounted() {
    this.$store.dispatch("getOwnedStudentList");
  },
  methods: {},

  computed: {
    ...mapGetters(["OwnStudentList"]),
  },
};
</script>

<style scoped>
.studentdata {
  position: relative;
  top: 0;
  left: 250px;
  padding-top: 50px;
  min-height: 90%;
  width: 1500px;
  overflow: auto;
}
</style>

