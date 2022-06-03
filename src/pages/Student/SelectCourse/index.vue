<template>
  <div class="teacherdata">
    <h1 v-show="!this.$store.state.user.sys_mode">当前时间不允许选课</h1>
    <div v-show="this.$store.state.user.sys_mode">
      <el-form
        :inline="true"
        :model="formInline"
        class="formselect"
        @keydown.enter.native="conditionQuery()"
      >
        <el-form-item>
          <span slot="label">
            <span class="label-black-bold">课程名</span>
          </span>
          <el-input v-model="formInline.name" placeholder="课程名"></el-input>
        </el-form-item>
        
        <el-form-item>
          <span slot="label">
            <span class="label-black-bold">学年</span>
          </span>
          <el-select v-model="formInline.year" placeholder="学年">
            <el-option label="2022" value="2022"></el-option>
            <el-option label="2021" value="2021"></el-option>
            
          </el-select>
        </el-form-item>
        <el-form-item>
          <span slot="label">
            <span class="label-black-bold">学期</span>
          </span>
          <el-select v-model="formInline.semester" placeholder="学期">
            <el-option
              label="1"
              value="1"
            ></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option
              label="4"
              value="4"
            ></el-option>
            
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="conditionQuery">查询</el-button>
          <el-button
            type="primary"
            @click="prevPage"
            :disabled="pageIndex === 1"
            >上一页</el-button
          >
          <span class="label-black-bold">
            {{ pageIndex }}/{{ PageLength }}
          </span>
          <el-button
            type="primary"
            @click="nextPage"
            :disabled="pageIndex >= PageLength"
            >下一页</el-button
          >
        </el-form-item>
      </el-form>

      <el-table :data="CList" border style="width: 100%">
        <el-table-column prop="id" label="课程号" width="65" align="center">
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

        <el-table-column label="操作" align="center" width="100%">
          <template slot-scope="scope">
            <el-popconfirm
              title="确定要申请吗？"
              @confirm="submitApply(scope.row.id)"
            >
              <el-button
                :disabled="scope.row.capacity <= scope.row.size"
                slot="reference"
                type="success"
                >申请</el-button
              >
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next"
        :total="PageLength * 10"
        :current-page="pageIndex"
        @prev-click="prevPage"
        @next-click="nextPage"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>




<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      pageIndex: 1,
      formInline: {
        name: "",
        year: 2022,
        semester: 1,
      },
    };
  },
  computed: {
    ...mapGetters(["CList"]),
    ...mapGetters(["PageLength"]),
  },
  mounted() {
    //页面加载获取初始数据
    this.$store.dispatch("getCourseList", {
      year: 2022,
      semester: 1,
    });
    this.$store.dispatch("getSysMode");
  },
  methods: {
    conditionQuery() {
      //按条件查询
      this.pageIndex = 1;
      this.$store.dispatch("getCourseList", {
       year:this.formInline.year,
       semester:this.formInline.semester,
       key:this.formInline.name||""
      });
      console.log("query!");
    },
    prevPage() {
      //前一页
      this.pageIndex -= 1;
      this.$store.dispatch("getCourseList", {
        type: "search",
        keyword: {
          name: this.formInline.name || null,
          college: this.formInline.college || null,
          title: this.formInline.title || null,
          field: this.formInline.field || null,
        },
        page: this.pageIndex,
        size: 50,
      });
    },
    nextPage() {
      //后一页
      this.pageIndex += 1;
      this.$store.dispatch("getCourseList", {
        type: "search",
        keyword: {
          name: this.formInline.name || null,
          college: this.formInline.college || null,
          title: this.formInline.title || null,
          field: this.formInline.field || null,
        },
        page: this.pageIndex,
        size: 50,
      });
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.$store.dispatch("getCourseList", {
        type: "search",
        keyword: {
          name: this.formInline.name || null,
          college: this.formInline.college || null,
          title: this.formInline.title || null,
          field: this.formInline.field || null,
        },
        page: this.pageIndex,
        size: 50,
      });
    },
    async submitApply(id) {
      //递交申请
      try {
        await this.$store.dispatch("putCourse", {
          id: parseInt(id),
        });
        alert("successs");
        this.pageIndex = 1;
        this.$store.dispatch("getCourseList", {
          type: "search",
          keyword: {
            name: this.formInline.name || null,
            college: this.formInline.college || null,
            title: this.formInline.title || null,
            field: this.formInline.field || null,
          },
          page: 1,
          size: 50,
        });
        location.reload();
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
  left: 2.5%;
  right: 2.5%;
  padding-top: 50px;
  min-height: 85%;
  width: 95%;
  overflow: auto;
}
.label-black-bold {
  color: black;
  font-weight: bold;
}
</style>

