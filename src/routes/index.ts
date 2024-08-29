import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";


const routes : Array<RouteRecordRaw> = [

   {
      path: "/",
      component: MainLayout,
      children: [
         {
            path: '',
            component: () => import("../pages/HomePage.vue")
         },
         {
            path: 'books',
            component: () => import("../pages/BooksPage.vue")
         },
         {
            path: 'authors',
            component: () => import("../pages/AuthorsPage.vue")
         },
         {
            path: 'login',
            component: () => import("../pages/LoginPage.vue")
         },
      ]
   },
   {
      path: "/:pathMatch(.*)*",
      name: 'NotFound',
      component: () => import("../pages/NotfoundPage.vue")
   },
   {
      path: '/dashboard',
      component: () => import('../layouts/DashboardLayout.vue'),
      children: [
         {
            path: '',
            redirect: '/dashboard/books',
         },
         {
            path: 'books',
            component: () => import("../pages/BooksPage.vue"),
         }
      ]
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

router.beforeEach((to, _) => {
   const authStore = localStorage.getItem('auth-store')
   const isLogin = authStore ? JSON.parse(authStore).token : null
   
   if (!isLogin && to.path.startsWith("/dashboard")) {
      return { path: '/login' }
   }

   if(isLogin && to.path.startsWith("/login") || to.path.startsWith("/register")){
      return { path : '/' }
   }
});


export default router