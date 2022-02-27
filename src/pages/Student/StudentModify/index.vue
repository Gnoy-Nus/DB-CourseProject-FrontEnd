<template>
  <div class="StudentInfoList">
    <el-descriptions title="个人信息" direction="vertical" :column="3" border>
      <el-descriptions-item label="备注">
        <el-tag>学生信息</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="姓名">{{
        StuInfo.name
      }}</el-descriptions-item>
      <el-descriptions-item label="性别">{{
        StuInfo.gender
      }}</el-descriptions-item>
      <el-descriptions-item label="出生日期">{{
        StuInfo.birth
      }}</el-descriptions-item>
      <el-descriptions-item label="学院">{{
        StuInfo.college
      }}</el-descriptions-item>
      <el-descriptions-item label="专业">{{
        StuInfo.major
      }}</el-descriptions-item>
      <el-descriptions-item label="手机号"
        >
        <el-input v-model="StuInfo.telephone" placeholder="请输入内容"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="邮箱"
        >
        <el-input v-model="StuInfo.email" placeholder="请输入内容"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="个人网站"
        >
        <el-input v-model="StuInfo.website" placeholder="请输入内容"></el-input>
      </el-descriptions-item>
      <el-descriptions-item label="个人介绍"
        >
        <el-input
          type="textarea"
          :rows="8"
          placeholder="请输入内容"
          v-model="StuInfo.info"
        >
        </el-input>
      </el-descriptions-item>
    </el-descriptions>

    <el-row>
      <el-button type="success" @click="submitForm">保存提交</el-button>
      <el-button type="danger" @click="resetForm">重置</el-button>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch("getStuInfo");
  },
  methods: {
    async submitForm() {
      try {
        await this.$store.dispatch("changeStuInfo", {
          data: {
            telephone: this.StuInfo.telephone || null,
            email: this.StuInfo.email || null,
            website: this.StuInfo.website || null,
            info: this.StuInfo.info || null,
          },
          type:"modify"
        });
        alert("successs");
      } catch (error) {
        alert(error.message);
      }
    },
    resetForm() {
      this.StuInfo.telephone="",
      this.StuInfo.email="",
      this.StuInfo.website="",
      this.StuInfo.info=""
    },
  },

  computed: {
    ...mapGetters(["StuInfo"]),
  },
};
</script>

<style scoped>
.StudentInfoList {
  position: relative;
  top: 0px;
  left: 250px;
  padding-top: 100px;
  min-height: 100%;
  width: 1500px;
}
</style>