<template>
  <div>
    <el-switch
      class="middle"
      v-model="value"
      size="large"
      active-text="开启选课"
      inactive-text="关闭选课"
      @change="handle"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    async handle() {
      await this.$store.dispatch("altSysMode");
      this.value = this.$store.state.user.sys_mode;
      console.log(this.value)
    },
  },
  mounted(){
    this.value = this.$store.state.user.sys_mode;
    console.log(this.value)
  }
};
</script>


<style scoped>
.middle {
  position: absolute;
  top: 50%;
  right: 50%;
  height: 5vh;
  background-color: rgb(212, 27, 27) f;
  box-shadow: 5px 5px 5px rgba(191, 16, 16, 0.1);
}
</style>