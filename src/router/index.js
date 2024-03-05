import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import FaqView from "../views/FaqView.vue";
import CareerView from "../views/CareerView.vue";
import CartView from "../views/CartView.vue";
import ResourceView from "../views/ResourceView.vue";
import ProductView from "../views/ProductView.vue";
import RecommendationView from "../views/RecommendationView.vue";

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
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/faq",
      name: "faq",
      component: FaqView,
    },
    {
      path: "/career",
      name: "career",
      component: CareerView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/resource",
      name: "resource",
      component: ResourceView,
    },
    {
      path: "/product",
      name: "product",
      component: ProductView,
    },
    {
      path: "/recommendation",
      name: "recommendation",
      component: RecommendationView,
    },
  ],
});

export default router;
