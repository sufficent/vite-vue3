<template>
  <el-main class="main">
    <router-view></router-view>
  </el-main>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 62px);
  flex: 1;
  color: $title-color;
}
</style>
