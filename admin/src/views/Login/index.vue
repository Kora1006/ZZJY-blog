<template>
  <div class="login-wrapper">
    <div class="login-form">
      <div class="form-content">
        <div class="logo">
          <img src="../../assets/logo.png" class="logo-img" />
          <p>ZZJY-blog Background Management System</p>
        </div>
        <el-form ref="loginForm" :model="form" :rules="rules">
          <el-form-item prop="username">
            <el-input
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
              v-model="form.username"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="form.password"
              show-password
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="login-btn" @click="login">登录</div>
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
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    // 登录
    login() {
      console.log(this.form);
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
  .login-form {
    padding: 20px 40px;
    box-shadow: 0 0 10px 2px #abc9e2;
    border-radius: 10px;
    .form-content {
      .logo {
        margin-bottom: 30px;
        text-align: center;
        .logo-img {
          width: 300px;
        }
        p {
          font-size: 12px;
          color: #ccc;
        }
      }
      .login-btn {
        display: inline-block;
        margin-left: 65px;
        padding: 5px 60px;
        border-radius: 10px;
        background-color: #4389c7;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  /deep/.el-form-item__content {
    margin-left: 0 !important;
  }
}
</style>