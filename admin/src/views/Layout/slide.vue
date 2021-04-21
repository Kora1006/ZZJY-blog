<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="!collapsed"
    >
      <el-submenu v-for="item in sideBars" :key="item.key" :index="item.key">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="citem in item.children"
          :key="citem.key"
          :index="citem.key"
        >
          <template slot="title">
            <router-link :to="citem.link"> {{ citem.title }}</router-link>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import sideBar from "@/views/Layout/side-bar";
import { mapGetters } from "vuex";
export default {
  name: "side-bar",
  data() {
    return {
      sideBars: sideBar, // 导航栏
    };
  },
  computed: {
    ...mapGetters(["collapsed"]),
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.el-aside {
  max-width: 200px !important;
  min-height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>