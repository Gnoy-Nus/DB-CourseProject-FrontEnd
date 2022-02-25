<template>
  <div class="StudentInfoList">
        <el-descriptions title="个人信息" direction="vertical" :column="3" border>
            <el-descriptions-item label="备注">
                <el-tag>学生信息</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="姓名">{{ StuInfo.name }}</el-descriptions-item>
            <el-descriptions-item label="性别">{{ StuInfo.gender }}</el-descriptions-item>
            <el-descriptions-item label="出生日期">{{ StuInfo.birth }}</el-descriptions-item>
            <el-descriptions-item label="学院">{{ StuInfo.college }}</el-descriptions-item>
            <el-descriptions-item label="专业">{{ StuInfo.major }}</el-descriptions-item>
            <el-descriptions-item label="手机号">{{ StuInfo.telephone }}
                <el-input v-model="input1" placeholder="请输入内容"></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="邮箱">{{ StuInfo.email }}
                <el-input v-model="input2" placeholder="请输入内容"></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="个人网站">{{ StuInfo.website }}
                <el-input v-model="input3" placeholder="请输入内容"></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="个人介绍">{{ StuInfo.info }}
                <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="textarea">
                </el-input>
            </el-descriptions-item>
        </el-descriptions>

        <el-row>
            <el-button type="primary">保存提交</el-button>
            <el-button type="danger">重置</el-button>
        </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "",
  data() {
    return {
        input1 :'',
        input2 :'',
        input3 :'',
        textarea :''
    };
  },
  beforeMount() {
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("getStuInfo");
      this.$store.dispatch("getTeacherList",{keyword:{college:this.StuInfo.college}});
    },
    logOut() {
      this.$store.dispatch("userLogout");
    },
  },

  computed: {
    ...mapGetters(["StuInfo"]),
    ...mapGetters(["TeacherList"]),
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