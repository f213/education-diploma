import Vue from "vue";
import VueRouter from "vue-router";
import Diploma from "@/views/Diploma.vue";
import DiplomaRedirect from "@/views/DiplomaRedirect.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:slug/:language",
    name: "diplomaWithLanguage",
    component: Diploma,
  },
  {
    path: "/:slug",
    name: "diploma",
    component: DiplomaRedirect,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
