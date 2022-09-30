import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Layout from "../view/layout/index.vue";
console.log(Layout);
// 定义路由
const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashbord",
        component: () => import("@/view/dashboard/index.vue"),
        meta: { title: "首页", icon: "House" },
        children: [],
      },
    ],
  },
  {
    path: "/project",
    name: "Project",
    component: Layout,
    redirect: "/project",
    children: [
      {
        path: "/project",
        name: "project",
        component: () => import("@/view/project/index.vue"),
        meta: { title: "课题", icon: "Document" },
        children: [],
      },
    ],
  },
  {
    path: "/permission",
    name: "Permission",
    component: Layout,
    redirect: "/permission/user",
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("@/view/permission/user.vue"),
        meta: { title: "用户", icon: "Document" },
        children: [],
      },
      {
        path: "/admin",
        name: "Admin",
        component: () => import("@/view/permission/admin.vue"),
        meta: { title: "管理员", icon: "Document" },
        children: [],
      },
      {
        path: "/roles",
        name: "Roles",
        component: () => import("@/view/permission/roles.vue"),
        meta: { title: "角色", icon: "Document" },
        children: [],
      },
    ],
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
