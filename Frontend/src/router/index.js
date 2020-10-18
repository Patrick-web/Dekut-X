import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import CoursePage from "../views/CoursePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/coursePage",
    name: "coursePage",
    component: CoursePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
