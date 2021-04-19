<template>
  <div class="header-wrapper">
    <div class="wrapper-l">
      <img src="../../assets/logo.png" class="aside-logo" />
      <i
        class="el-icon-s-fold"
        v-if="collapsed"
        @click="changeCollapsed(false)"
      ></i>
      <i class="el-icon-s-unfold" v-else @click="changeCollapsed(true)"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "blog-header",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["collapsed"]),
  },
  methods: {
    ...mapActions(["setCollapsed"]),
    changeCollapsed(check) {
      this.setCollapsed(check);
    },
  },
};
</script>

<style lang="less" scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 0;
  border-bottom: 1px solid #eee;
  .wrapper-l {
    display: flex;
    align-items: center;
    .aside-logo {
      height: 50px;
      margin-right: 10px;
    }
  }
}
</style>