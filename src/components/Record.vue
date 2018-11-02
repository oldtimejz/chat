<template>
  <div>
    <mu-paper :z-depth="1" class="demo-list-wrap">
      <mu-list>
        <mu-list-item avatar button :ripple="false" to="/room">
          <mu-list-item-action>
            <mu-avatar>
              <img src="../assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Maco Mai</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item avatar button :ripple="false" to="/room">
          <mu-list-item-action>
            <mu-avatar>
              <img src="../assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Maco Mai</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'Record'
}
</script>

<style scoped>
.demo-list-wrap {
  width: 100%;
}
</style>
