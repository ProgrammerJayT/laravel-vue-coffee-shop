import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import StoreView from "../views/StoreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/products",
      name: "home",
      component: ProductsView,
    },
    {
      path: "/store",
      name: "about",
      component: StoreView,
    },
  ],
});

export default router;
