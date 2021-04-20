<template>
  <div class="nav">
      <span class="login">登录</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.nav{
    height: 100%;
    width: 100%;
    background-color: rgb(39, 175, 130);
    color: #fff;
    padding: 0 20px;
    display: flex;
    align-items: center;
    .login{
        cursor: pointer;
        position: absolute;
        right: 20px;
    }
}
</style>