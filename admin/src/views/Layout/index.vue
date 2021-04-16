<template>
  <el-container>
    <Header />
    <el-container>
      <Slide />
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
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

<style>
</style>