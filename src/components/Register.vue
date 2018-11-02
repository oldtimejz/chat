<template>
  <div class="register fullscreen">
    <div class="header">
      <div class="goBack" @click="goBack"></div>
      <mu-appbar style="width: 100%;" title="注册" color="cyan700"></mu-appbar>
    </div>
    <form class="form">
      <mu-container>
        <mu-text-field v-model="username" label="请输入用户名" label-float  icon="account_circle"></mu-text-field><br/>
        <mu-text-field v-model="password" label="请输入密码" label-float  icon="locked"></mu-text-field><br/>
      </mu-container>
    </form>
    <div class="btn-radius" @click="register">注册账号</div>
    <div class="reg"><span @click="toLogin">已有账号，去登录</span></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toLogin () {
      this.$router.goBack(-1)
    },
    goBack () {
      this.$router.goBack(-1)
    },
    async register () {
      if (this.username !== '' && this.password !== '') {
        var data = {
          username: this.username,
          password: this.password
        }
        const res = this.$store.dispatch('reg', data)
        console.log(res)
      }
    }
  }
}
</script>

<style scoped>
.mu-input.has-label {
  width: 80%;
}
.form {
  margin-top: 40px;
}
.btn-radius{
  width: 80%;
  height: 40px;
  border-radius: 20px;
  background: #0097a7;
  position: relative;
  left: 10%;
  font: 20px/50px 'Microsoft Himalaya';
}
.reg{
  margin-top: 10px;
  font-size: 18px;
}
</style>
