<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <sub-menu
      v-for="mainRoute in router.options.routes"
      :mainRoute="mainRoute"
      :key="mainRoute.path"
    ></sub-menu>
    <!-- <el-sub-menu
      :index="item.path"
      v-for="(item, index) in router.options.routes"
      :key="index"
    >
      <template #title>
        <el-icon><component :is="item.children[0].meta.icon" /></el-icon>
        <span>{{ item.name }} {{ item.children[0].meta.icon }}</span>
      </template>
      <el-menu-item-group v-for="son in item.children" :key="son.key">
        <el-menu-item
          :index="son.key"
          :route="son.router"
          @click="selectMenu(son)"
          >{{ son.title }}
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu> -->
  </el-menu>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
import SubMenu from "./subMenu";

let isCollapse = ref(false);
console.log("router:", router);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

console.log(router.options.routes);
const selectMenu = (info) => {
  console.log("info:", info);
};
</script>

<style lang="scss" scoped></style>
