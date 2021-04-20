<template>
  <div>
    <Header />
    <el-container>
      <Slide />
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import Slide from "./slide";
import Header from "./header";
export default {
  components: {
    Slide,
    Header,
  },
};
</script>

<style lang="less" scoped>
.el-header {
  min-height: 60px !important;
}
</style>