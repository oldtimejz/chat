<template>
  <div class="record-item">
    <div class="name">江震</div>
    <div class="head">
      <mu-avatar>
        <img src="../assets/logo.png">
      </mu-avatar>
    </div>
    <div class="content">
      在vue-router内部会检测window.Vue对象是否存在，如果存在就会自动调用Vue.use()方法，否则需要手动调用Vue.use(VueRouter)来确保路由插件注册到Vue中。在支持AMD环境中，Vue对象并不会暴露到全局window对象中，而是会通过define()形式输出和引入，因此需要手动注册
    </div>
  </div>
</template>

<script>
export default {
  name: 'other-record'
}
</script>

<style scoped>
.record-item{
  width: 100%;
  position: relative;
  float: left;
  padding: 20px 10px 20px 45px;
  margin: 5px 10px;
}
.name{
  position: absolute;
  left: 20px;
  top: 0;
  color: #78909c;
}
.head{
  position: absolute;
  left: 0;
}
.content{
  position: relative;
  display: inline-block;
  background: #26c6da;
  padding: 10px 10px 10px 20px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  max-width: 90%;
  text-align: left;
}
.content::after{
  content: '';
  position: absolute;
  left: -10px;
  top: -2px;
  width: 22px;
  height: 0;
  border-bottom: 12px solid #26c6da;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-radius: 20px;
}
</style>
