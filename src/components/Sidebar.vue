<script lang="ts" setup >

import { RouterLink } from 'vue-router';

import { Book, PencilLine, UserCheck2 } from 'lucide-vue-next';

const dashboardLinks = [
   {
      label: 'Books',
      href: '/dashboard/books',
      icon: Book
   },
   {
      label: 'Authors',
      href: '/dashboard/authors',
      icon: PencilLine
   },
   {
      label: 'Users',
      href: '/dashboard/users',
      icon: UserCheck2
   },
]


</script>

<template>
   <aside class="hidden md:block border-r min-h-svh" >
      <nav class="flex flex-col gap-3" >
         <div class="mt-10"></div>
         <RouterLink 
            class="py-3 px-4 hover:bg-foreground/10 flex items-center gap-2"
            v-for="link of dashboardLinks" 
            :key="link.href" 
            :to="link.href" >
            <component :is="link.icon" class="size-5"  />
            {{ link.label }}
         </RouterLink>
      </nav>
   </aside>
</template>