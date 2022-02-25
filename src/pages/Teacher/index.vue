<template>
  <div class="wrapper">
    <Header></Header>
    <aside class="main-sidebar">
      <section class="sidebar">
        <ul class="sidebar-menu" data-widget="tree">
          <div
            id="divstuinfo"
            class="ui-accordion-header ui-helper-reset ui-state-default"
            style="padding: 1px 0px 0px 2px"
          >
            <span style="font-weight: bold"> 教师信息</span>
            <div style="line-height: 23px">工号：{{ TeaInfo.id }}</div>
            <div style="line-height: 23px">姓名：{{ TeaInfo.name }}</div>
            <div style="line-height: 23px">学院：{{ TeaInfo.college }}</div>
            <div style="color: Red; font-weight: bold; line-height: 23px">
              完成操作后请点击&nbsp;<a href="#/login" style="color: Red" @click="logOut"
                >[安全退出]</a
              >
            </div>
          </div>

          <li name="menuapptype" id="menuapptype0" class="treeview">
            <ul class="treeview-menu">
              <el-row class="tac">
                <el-col :span="100">
                  <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#2c3e50"
                    text-color="#fff"
                    active-text-color="#ffd04b">
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
                        <el-menu-item index="1-2">查看申请中的学生</el-menu-item>
                        </router-link>
                        <router-link to="/teacher/TeacherModify">
                        <el-menu-item index="1-3">查看/修改个人信息</el-menu-item>
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
    </aside>

    <!-- content路由出口 -->
    <div class="wrapper">
      <div class="content-wrapper">
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
    return {
       
    };
  },
  beforeMount() {
  },
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
.wrapper {
  margin: 0;
  padding: 0;
  /* 100%窗口高度 */
  height: 100vh;
  /* 渐变背景 */
  /*background: linear-gradient(200deg, #f3e8e7, #ebffe3);*/
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  /*字体：白色 */
  color: white;
}

.main-sidebar {
  background-color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 50px;
  min-height: 100%;
  width: 230px;
  z-index: 2;
  -webkit-transition: -webkit-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
}
.content-wrapper {
  color: black;
  background-color: rgb(240, 241, 255);
  overflow:auto;
  height: 95%;
  z-index: 1;
}

.sidebar {
  display: block;
  padding-bottom: 10px;
}
.sidebar-menu,
.sidebar-menu > li.header {
  white-space: nowrap;
  overflow: hidden;
}

.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.tac {
  position: absolute;
  left: 15px;
}
</style>

