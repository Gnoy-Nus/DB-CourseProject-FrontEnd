<template>
  <div>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>StudentSelect test</h1>
    <h1>{{StuInfo.name}}</h1>
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
      this.$store.dispatch("getStuInfo");
    },
  },

  computed: {
    ...mapGetters(["StuInfo"]),
  },
};
</script>

<style scoped>

</style>