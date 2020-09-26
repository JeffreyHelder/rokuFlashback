import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/music",
    name: "Music",
    component: () => import("../views/Music.vue")
  },
  {
    path: "/series",
    name: "Series",
    component: () => import("../views/Series.vue")
  },
  {
    path: "/movies",
    name: "Movies",
    component: () => import("../views/Movies.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/editUsers",
    name: "EditUsers",
    component: () => import("../views/EditUsers.vue")
  },
  {
    path: "/userSettings",
    name: "UserSettingsPage",
    component: () => import("../views/UserSettings.vue")
  },
  {
    path: "/userHistory",
    name: "UserHistoryPage",
    component: () => import("../views/UserHistory.vue")
  },
  {
    path: "/accountSettings",
    name: "AccountSettingsPage",
    component: () => import("../views/AccountSettings.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
