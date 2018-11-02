<template>
  <div class="room fullscreen">
    <div class="goBack" @click="goBack"></div>
    <mu-appbar style="width: 100%;" title="聊天室" color="cyan700"></mu-appbar>
    <div class="chat-record-container" >
      <div class="chat-record">
        <my-record></my-record>
        <my-record></my-record>
        <other-record></other-record>
      </div>
    </div>

    <div class="chat-bottom">
      <mu-text-field   multi-line :rows="1" :rows-max="6"></mu-text-field>
      <mu-button color="info">发送</mu-button>
    </div>
  </div>
</template>

<script>
import MyRecord from './MyRecord'
import OtherRecord from './OtherRecord'
export default {
  name: 'Room',
  methods: {
    goBack () {
      this.$router.goBack(-1)
    }
  },
  components: {
    MyRecord,
    OtherRecord
  }
}
</script>

<style scoped>
.chat-record-container{
  height: 85%;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
}
.chat-record{
  width: 100%;

}
.chat-bottom{
  width: 100%;
  height: auto;
  position: fixed;
  bottom: -10px;
  left: 0;
  background: #efefef;
}
.mu-input{
  width: 65%;
  margin-bottom: 0;
}
</style>
