<template>
    <div class="header">

      <div class="header-bg">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="header-img">
        <img src="../assets/logo.png" alt="">
      </div>
      <p class="name_text">江震</p>
    </div>
</template>

<script>
export default {
  name: 'Self'
}
</script>

<style scoped>
.header{
  position: relative;
}
.header-bg{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 200px;
  -ms-filter: blur(7px);
  filter: blur(7px);
  overflow: hidden;
}
.header-bg img{
  width: 100%;
}
.header-img{
  padding-top: 50px;
  text-align: center;
}
.header-img img{
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 4px solid #fff;
  border-radius: 50%;
}
.name_text{
  color: #fff;
  font-size: 18px;
}
</style>
