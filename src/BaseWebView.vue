<template>
  <div class="webview">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BaseWebView',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-left'
    } else {
      this.transitionName = 'slide-right'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style scoped>
.webview{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.child-view{
  width: 100%;
  height: 100%;
  transition: all .4s cubic-bezier(.55, 0, .1, 1);
}
.slide-left-enter{
  -webkit-transform: translate(100%, 0);
 transform: translate(100%, 0);
}
.slide-left-leave-active{
  -webkit-transform: translate(-100%, 0);
 transform: translate(-100%, 0);
}
.slide-right-enter{
  -webkit-transform: translate(-100%, 0);
 transform: translate(-100%, 0);
}
.slide-right-leave-active{
  -webkit-transform: translate(100%, 0);
 transform: translate(100%, 0);
}
</style>
