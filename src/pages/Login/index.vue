<template>
  <div class="module">
    <div class="container">
      <div class="form-box">
        <!-- 教师登录页面 -->
        <div class="register-box hidden">
          <h1>login</h1>
          <input type="text" placeholder="工号" v-model="tea_id" />
          <input type="password" placeholder="密码" v-model="tea_pwd" @keydown.13='teacherLogin' />
          <button @click.prevent="teacherLogin">登录</button>
        </div>
        <!-- 学生登录页面 -->
        <div class="login-box">
          <h1>login</h1>
          <input type="text" placeholder="学号" v-model="stu_id" />
          <input type="password" placeholder="密码" v-model="stu_pwd" @keydown.13='studentLogin'/>
          <button @click.prevent="studentLogin">登录</button>
        </div>
      </div>
      <div class="con-box left">
        <h2>教师<span>登录界面</span></h2>
        <p>快来挑选你的<span>学生</span>吧</p>
        <img src="./img/logo_shu.png" alt="" zoom="66%" />
        <p>不是老师？</p>
        <button @click="LoginS">我是学生</button>
      </div>
      <div class="con-box right">
        <h2>学生<span>登录界面</span></h2>
        <p>快来选择你的<span>导师</span>吧</p>
        <img src="./img/logo_shu.png" alt="" />
        <p>不是学生？</p>
        <button @click="LoginT">我是老师</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stu_id: "",
      stu_pwd: "",
      tea_id: "",
      tea_pwd: "",
    };
  },
  methods: {
    enterEvent(){
      console.log("OK");
    },
    //换成学生的登录页面切换
    LoginS() {
      var login_box = document.getElementsByClassName("login-box")[0];
      var form_box = document.getElementsByClassName("form-box")[0];
      var register_box = document.getElementsByClassName("register-box")[0];
      form_box.style.transform = "translateX(0%)";
      register_box.classList.add("hidden");
      login_box.classList.remove("hidden");
    },
    LoginT() {
      var login_box = document.getElementsByClassName("login-box")[0];
      var form_box = document.getElementsByClassName("form-box")[0];
      var register_box = document.getElementsByClassName("register-box")[0];
      form_box.style.transform = "translateX(80%)";
      login_box.classList.add("hidden");
      register_box.classList.remove("hidden");
    },
    //登录的回调函数
    async studentLogin() {
      try {
        //登录成功
        const { stu_id, stu_pwd } = this;
        stu_id &&
          stu_pwd &&
          (await this.$store.dispatch("userLogin", {
            usr: stu_id,
            pwd: stu_pwd,
            type: "s",
          }));
        let toPath = "/student";
        this.$router.push(toPath);
      } catch (error) {
        alert(error.message);
      }
    },

    async teacherLogin() {
      try {
        //登录成功
        const { tea_id, tea_pwd } = this;
        tea_id &&
          tea_pwd &&
          (await this.$store.dispatch("userLogin", {
            usr: tea_id,
            pwd: tea_pwd,
            type: "t",
          }));
        let toPath = "/teacher";
        this.$router.push(toPath);
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

<style >
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
/* scoped:局部样式 */
.module {
  margin: 0;
  padding: 0;
  /* 100%窗口高度 */
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 渐变背景 */
  background: linear-gradient(200deg, #e7eff3, #e3eeff);
}
.container {
  background-color: #fff;
  width: 650px;
  height: 415px;
  border-radius: 5px;
  /* 阴影 */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  /* 相对定位 */
  position: relative;
}
.form-box {
  /* 绝对定位 */
  position: absolute;
  top: -10%;
  left: 5%;
  background-color: #b7bcd8;
  width: 320px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  /* 动画过渡 加速后减速 */
  transition: 0.5s ease-in-out;
}
.register-box,
.login-box {
  /* 弹性布局 垂直排列 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.hidden {
  display: none;
  transition: 0.5s;
}
h1 {
  text-align: center;
  margin-bottom: 25px;
  /* 大写 */
  text-transform: uppercase;
  color: #fff;
  /* 字间距 */
  letter-spacing: 5px;
}
input {
  background-color: transparent;
  width: 70%;
  color: #fff;
  border: none;
  /* 下边框样式 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 0;
  text-indent: 10px;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 2px;
}
input::placeholder {
  color: #fff;
}
input:focus {
  color: #a262ad;
  outline: none;
  border-bottom: 1px solid #a262ad80;
  transition: 0.5s;
}
input:focus::placeholder {
  opacity: 0;
}
.form-box button {
  width: 70%;
  margin-top: 35px;
  background-color: #f6f6f6;
  outline: none;
  border-radius: 8px;
  padding: 13px;
  color: #a262ad;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
}
.form-box button:hover {
  background-color: #a262ad;
  color: #f6f6f6;
  transition: background-color 0.5s ease;
}
.con-box {
  width: 50%;
  /* 弹性布局 垂直排列 居中 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* 绝对定位 居中 */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.con-box.left {
  left: -2%;
}
.con-box.right {
  right: -2%;
}
.con-box h2 {
  color: #8e9aaf;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  margin-bottom: 4px;
}
.con-box p {
  font-size: 12px;
  letter-spacing: 2px;
  color: #8e9aaf;
  text-align: center;
}
.con-box span {
  color: #d3b7d8;
}
.con-box img {
  width: 150px;
  height: 150px;
  opacity: 0.9;
  margin: 40px 0;
}
.con-box button {
  margin-top: 3%;
  background-color: #fff;
  color: #a262ad;
  border: 1px solid #d3b7d8;
  padding: 6px 10px;
  border-radius: 5px;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
}
.con-box button:hover {
  background-color: #d3b7d8;
  color: #fff;
}
</style>
