<template>
  <el-aside class="aside">
    <div class="logo flex-center">
      <img src="@/assets/vite.svg" alt="" />
      <span>Vite+Vue</span>
    </div>
  </el-aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.aside {
  width: 300px;
  height: 100%;
  background-color: $white-color;
  border-right: $border;
  .logo {
    padding: 30px;
    color: $title-color;
    font-weight: 700;
    font-size: 30px;
    cursor: pointer;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
    }
  }
}
</style>
