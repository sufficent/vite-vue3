import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

// 定义路由
const routes = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("../view/layout/index.vue"),
  },
  {
    path: "/left",
    name: "left",
    component: () => import("../view/left/index.vue"),
  },
  {
    path: "/right",
    name: "right",
    component: () => import("../view/right/index.vue"),
  },
];

//  创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 内部提供了 history 模式的实现
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
