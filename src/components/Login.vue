<template>
  <div class="login fullscreen">
    <div class="header">
      <div class="goBack" @click="goBack"></div>
      <mu-appbar style="width: 100%;" title="登录" color="cyan700"></mu-appbar>
    </div>
    <form class="form" name="form">
      <mu-container>
        <mu-text-field name="username" v-model="username" label="请输入用户名" label-float  icon="account_circle"></mu-text-field><br/>
        <mu-text-field name="password" v-model="password" label="请输入密码" label-float  icon="locked"></mu-text-field><br/>
      </mu-container>
      <div class="btn-radius" @click="submit">登录</div>
    </form>
    <div class="reg"><span @click="toReg">没有账号，注册一个</span></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toReg () {
      this.$router.push('/reg')
    },
    goBack () {
      this.$router.goBack(-1)
    },
    async submit () {
      let username = document.form.username.value.trim()
      let password = document.form.username.value.trim()
      if (username !== '' && password !== '') {
        const data = {
          username: username,
          password: password
        }
        const res = await this.$store.dispatch('login', data)
        if (res.status === 'success') {
          console.log('我成功了')
        }
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
