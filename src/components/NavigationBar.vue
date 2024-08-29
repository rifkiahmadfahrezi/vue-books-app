<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

import useAuth from '../stores/auth';

import Button from '../components/ui/button/Button.vue';
import ThemeSwitcher from '../components/ThemeSwitcher.vue';

   const navLinks = ref([
      {
         label: 'Home',
         href: '/'
      },
      {
         label: 'Books',
         href: '/books'
      },
      {
         label: 'Authors',
         href: '/authors'
      },
   ])
const auth = useAuth()

function logout(){
   auth.$reset()
}

</script>


<template>
   <header class="sticky top-0 bg-background border-b px-3">
      <div class="px-5 py-3 flex items-center justify-between main-container">
         <nav class="flex items-center gap-3">
            <Button variant="ghost" as-child v-for="link of navLinks" :key="link.href" >
               <RouterLink :to="link.href">
                  {{ link.label }}
               </RouterLink>
            </Button>
            <Button v-if="auth.token" variant="ghost" as-child>
               <RouterLink to="/dashboard" >
                 Dashboard
               </RouterLink>
            </Button>
         </nav>

         <nav class="flex items-center gap-3">
            <Button v-if="!auth.token" as-child >
               <RouterLink to="/login" >
                  Login
               </RouterLink>
            </Button>
            <Button @click="logout"  v-if="auth.token" variant="destructive" >
               Logout
            </Button>
            <ThemeSwitcher />
         </nav>
      </div>
   </header>
</template>