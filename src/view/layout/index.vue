<template>
  <div class="layout">
    <Aside />

    <div class="layout-container">
      <Header />
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
  flex-direction: row;

  .layout-container {
    flex: 1;
    // width: 100%;
    // height: 100vh;
  }
}
</style>
