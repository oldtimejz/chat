<template>
  <div id="app">
    <mu-appbar style="width: 100%;" :title="titleValue" color="cyan700"></mu-appbar>
    <div class="pos-btn">
      <mu-button flat color="blue900" @click="login">登录</mu-button>
    </div>
    <router-view/>
    <div class="footer">
      <mu-container>
        <mu-bottom-nav :value="navValue" @change="handlechange">
          <mu-bottom-nav-item value="首页" title="首页" icon="home" to="/"></mu-bottom-nav-item>
          <mu-bottom-nav-item value="聊天" title="聊天" icon="chat" to="/chat"></mu-bottom-nav-item>
          <mu-bottom-nav-item value="我的" title="我的" icon="settings" to="/self"></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navValue: '首页',
      titleValue: '首页'
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    handlechange (val) {
      this.navValue = val
      this.titleValue = this.navValue
    }
  }
}
</script>

<style>
#app .container{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
.button-wrapper {
  text-align: center;
}
.mu-button{
  margin: 8px;
}
.pos-btn{
  position: absolute;
  top: 2px;
  right: 0px;
}
</style>
