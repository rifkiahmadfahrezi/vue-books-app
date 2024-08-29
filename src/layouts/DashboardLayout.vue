 <script lang="ts" setup >
 import Sidebar from '../components/Sidebar.vue';
 import DashboardNav from '../components/DashboardNav.vue';
 import { RouterView } from 'vue-router'
 </script>
<template>
   <main class="grid md:grid-cols-[300px_1fr]">
     <div class="col-span-1">
      <Sidebar />
     </div>
     <div class="">
      <DashboardNav />
      <main>
        <RouterView />
      </main>
     </div>
   </main>
 </template>
 
 