<template>
  <div class="StudentInfoList">
        <el-descriptions title="个人信息" direction="vertical" :column="3" border>
            <el-descriptions-item label="备注">
                <el-tag>导师信息</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="姓名">{{ TeaInfo.name }}</el-descriptions-item>
            <el-descriptions-item label="性别">{{ TeaInfo.gender }}</el-descriptions-item>
            <el-descriptions-item label="出生日期">{{ TeaInfo.birth }}</el-descriptions-item>
            <el-descriptions-item label="学院">{{ TeaInfo.college }}</el-descriptions-item>
            <el-descriptions-item label="职称">{{ TeaInfo.title }}</el-descriptions-item>
            <el-descriptions-item label="手机号">
                <el-input v-model="TeaInfo.telephone" placeholder="请输入内容"></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="邮箱">
                <el-input v-model="TeaInfo.email" placeholder="请输入内容"></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="个人网站">
                <el-input v-model="TeaInfo.website " placeholder="请输入内容"></el-input>
            </el-descriptions-item>
            <el-descriptions-item label="科研方向">
                <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="TeaInfo.field">
                </el-input>
            </el-descriptions-item>
        </el-descriptions>

        <el-row>
            <el-button type="primary" @click="submitForm">保存提交</el-button>
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
    };
  },
  mounted() {
    this.$store.dispatch("getTeaInfo");
  },
  methods: {
    async submitForm() {
      try {
        await this.$store.dispatch("changeTeaInfo", {
          data: {
            telephone: this.TeaInfo.telephone || null,
            email: this.TeaInfo.email || null,
            website: this.TeaInfo.website || null,
            field: this.TeaInfo.field || null,
          },
          type:"modify"
        });
        alert("successs");
      } catch (error) {
        alert(error.message);
      }
    },
  },

  computed: {
    ...mapGetters(["TeaInfo"]),
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