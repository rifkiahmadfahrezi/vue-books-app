<script lang="ts" setup >
import { Button } from './ui/button';
import { RouterLink } from 'vue-router';
import { Menu } from 'lucide-vue-next';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/sheet'
import ThemeSwitcher from './ThemeSwitcher.vue';


import useAuth from '../stores/auth';
import { useRouter } from 'vue-router';

const dashboardLinks = [
   {
      label: 'Books',
      href: '/dashboard/books',
   },
   {
      label: 'Authors',
      href: '/dashboard/authors',
   },
   {
      label: 'Users',
      href: '/dashboard/users',
   },
]

const auth = useAuth()
const router = useRouter()

function logout(){
   auth.$reset()
   router.replace({ path: '/' })
}

</script>

<template>
   <header class="bg-background border-b py-3 px-4 left-0 sticky top-0 w-full">
      <nav class="flex items-center justify-between" >
         <Sheet>
            <SheetTrigger as-child class="md:hidden" >
               <Button variant="outline" size="icon" >
                  <Menu />
               </Button>
            </SheetTrigger>
            <SheetContent side="left" class="flex flex-col gap-3 pt-10" >
               <Button variant="ghost" as-child v-for="link of dashboardLinks" :key="link.href" >
                  <RouterLink :to="link.href" >
                     {{ link.label }}
                  </RouterLink>
               </Button>
            </SheetContent>
         </Sheet>
         <Button variant="ghost" as-child>
            <RouterLink to="/" >
               Home
            </RouterLink>
         </Button>

         <div class="flex items-center gap-3">
            <ThemeSwitcher />
            <Button
               class="max-w-fit mx-2" 
               @click="logout" variant="destructive" >
               Logout
            </Button>
         </div>
      </nav>
   </header>
</template>