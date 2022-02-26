<template>
  <div class="studentdata">
    <el-table :data="APPLYLIST" border style="width: 100%">
      <el-table-column prop="id" label="学号" width="180"> </el-table-column>
      <el-table-column prop="gender" label="性别"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="college" label="院系"> </el-table-column>
      <el-table-column prop="major" label="专业"> </el-table-column>
      <el-table-column prop="telephone" label="手机号"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="website" label="个人网站"> </el-table-column>
      <el-table-column prop="info" label="个人介绍"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-popconfirm
            title="确定要接收吗？"
            @confirm="confirmRequest(scope.row.id)"
          >
            <el-button slot="reference">接收</el-button>
          </el-popconfirm>
          <el-popconfirm
            title="确定要接收吗？"
            @confirm="rejectRequest(scope.row.id)"
          >
            <el-button slot="reference">拒绝</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="100">
    </el-pagination>
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
    ...mapGetters(["APPLYLIST"]),
  },
  mounted() {
    console.log("start");
    this.$store.dispatch("getApplyStudentList");
  },
  methods: {
    async confirmRequest(id) {
      try {
        await this.$store.dispatch("manageStuApply", {
          id: id,
          status: 1,
          type: "select",
        });
        alert("successs");
        this.$store.dispatch("getApplyStudentList");
      } catch (error) {
        alert(error.message);
      }
    },

    async rejectRequest(id) {
      try {
        await this.$store.dispatch("manageStuApply", {
          id: id,
          status: 0,
          type: "select",
        });
        alert("successs");
        this.$store.dispatch("getApplyStudentList");
      } catch (error) {
        alert(error.message);
      }
    },
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

