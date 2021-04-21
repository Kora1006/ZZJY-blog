<template>
  <div class="login-wrapper">
    <div class="login-form">
      <div class="form-content">
        <div class="form-title">
          <div class="logo">
            <img src="../../assets/logo.png" />
            <span>"Welcome!"</span>
          </div>
          <div class="title-tips">
            <p>ZZJY-blog Background Management System</p>
          </div>
        </div>
        <el-form ref="loginForm" :model="form" label-width="80px">
          <el-form-item>
            <el-input
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
              v-model="form.username"
            >
            </el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}, // 登录数据
    };
  },
};
</script>

<style>
</style>