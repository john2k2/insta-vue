import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { layout: "Default" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: { layout: "EmptyLayout" },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: { layout: "EmptyLayout" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
