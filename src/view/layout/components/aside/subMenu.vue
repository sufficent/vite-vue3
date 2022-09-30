<template>
  <div>
    <!-- 无子目录 -->
    <template v-if="mainRoute.children.length <= 1">
      <router-link :to="mainRoute.children[0].path">
        <el-menu-item :index="mainRoute.children[0].path">
          <!-- <el-icon><location /></el-icon> -->
          <el-icon
            ><component :is="mainRoute.children[0].meta.icon" />
          </el-icon>
          <span>{{ mainRoute.children[0].name }}</span>
        </el-menu-item>
      </router-link>
    </template>
    <!-- 存在子目录 -->
    <template v-else>
      <el-sub-menu :index="mainRoute.path" popper-append-to-body>
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ mainRoute.name }}</span>
        </template>
        <!-- <sub-menu
          v-for="subRoute in mainRoute.children"
          :mainRoute="subRoute"
          :key="subRoute.path"
        >
        </sub-menu> -->
        <el-menu-item-group
          v-for="subRoute in mainRoute.children"
          :key="subRoute.path"
        >
          <router-link :to="subRoute.path">
            <el-menu-item :index="subRoute.path">{{
              subRoute.name
            }}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
defineProps({
  mainRoute: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
// * 更改 a 标签默认样式
a {
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}
</style>
