import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import PriceView from "../views/PriceView.vue";
import BelanjaView from "../views/BelanjaView.vue";
import BelanjaCarouselView from "../views/BelanjaCarouselView.vue";
import ArtikelView from "../views/ArtikelView.vue";

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
      path: "/price",
      name: "price",
      component: PriceView,
    },
    {
      path: "/belanja",
      name: "belanja",
      component: BelanjaView,
    },
    {
      path: "/belanjacarousel",
      name: "belanjacarousel",
      component: BelanjaCarouselView,
    },
    {
      path: "/artikel",
      name: "artikel",
      component: ArtikelView,
    },
  ],
});

export default router;
