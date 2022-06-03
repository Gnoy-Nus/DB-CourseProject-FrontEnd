<template>
  <div>
    <Header></Header>

    <div class="navbar">
      <section>
        <ul align="left">
          <div
            style="
              padding: 30px 0px 0px 2px;
              background: #8ac3f0 50% 50% repeat-x;
              color: black;
            "
          >
            <span style="font-weight: bold"> 教师信息</span>
            <div style="line-height: 23px">工号：{{ TeaInfo.id }}</div>
            <div style="line-height: 23px">姓名：{{ TeaInfo.name }}</div>
            <div style="line-height: 23px">学院：{{ TeaInfo.college }}</div>
            <br />
            <div style="color: indianred; font-weight: bold; line-height: 23px">
              完成操作后请点击&nbsp;<a
                href="#/login"
                style="color: red"
                @click="logOut"
                >[安全退出]</a
              >
            </div>
            <br />
            <br />
          </div>

          <li>
            <ul class="treeview-menu">
              <el-row class="tac">
                <el-col :span="100">
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    background-color="#2c3e50"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                  >
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>操作</span>
                      </template>
                      <el-menu-item-group>
                        <router-link to="/teacher/ManageStudent">
                          <el-menu-item index="1-1">管理学生</el-menu-item>
                        </router-link>
                        <router-link to="/teacher/CheckStudentRequests">
                          <el-menu-item index="1-2"
                            >查看申请中的学生</el-menu-item
                          >
                        </router-link>
                        <router-link to="/teacher/TeacherModify">
                          <el-menu-item index="1-3"
                            >查看/修改个人信息</el-menu-item
                          >
                        </router-link>
                        <router-link to="/teacher/TeacherAccount">
                          <el-menu-item index="1-4">账号管理</el-menu-item>
                        </router-link>
                      </el-menu-item-group>
                    </el-submenu>
                  </el-menu>
                </el-col>
              </el-row>
            </ul>
          </li>
        </ul>
      </section>
    </div>

    <div class="main">
      <div>
        <router-view></router-view>
      </div>
    </div>
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
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("getTeaInfo");
    },
    logOut() {
      this.$store.dispatch("userLogout");
    },
  },

  computed: {
    ...mapGetters(["TeaInfo"]),
  },
};
</script>

<style scoped>
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 80px;
  background-color: #3c8dbc;
}

/* 左侧样式 */
.navbar {
  position: absolute;
  width: 230px;
  top: 80px; /* 距离上面50像素 */
  left: 0px;
  bottom: 0px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  overflow-x: hidden;
  background-color: #2c3e50;
}

/* 主区域 */
.main {
  position: absolute;
  top: 80px;
  left: 230px;
  bottom: 0px;
  right: 0px; /* 距离右边0像素 */
  padding: 10px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  overflow-x: auto;
  background-color: rgb(236, 235, 235);
}

.tac {
  position: absolute;
  left: 15px;
}

.title {
  position: fixed;
  color: white;
  top: 18px;
  left: 43%;
}

.logo {
  position: fixed;
  left: 3%;
  width: 180px;
  height: 78px;
}
</style>

