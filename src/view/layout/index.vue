<template>
  <div class="layout">
    <Header />
    <div class="layout-container">
      <Aside />
      <Main />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/header/index.vue";
import Aside from "./components/aside/index.vue";
import Main from "./components/main/index.vue";
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .layout-container {
    width: 100%;
    height: calc(100vh - 62px);
    display: flex;
    justify-content: space-between;
  }
}
</style>
