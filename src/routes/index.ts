import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
   {
      path: "/",
      component: HomePage
   },
   {
      path: '/books',
      component: import("../pages/BooksPage.vue")
   },
   {
      path: '/authors',
      component: import("../pages/AuthorsPage.vue")
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router