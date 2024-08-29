<script lang="ts" setup>
import { Card } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';
import { RouterLink } from 'vue-router';
import { Button } from '../components/ui/button';

import CLIENT from '../service/apiClient';
import { ref } from 'vue'
import type { Author, ResponseAPI } from '../types';

const loading = ref(false)
const authors = ref<Author[] | null>(null)
const error = ref('')


async function fetchData() {
  error.value = ''
  authors.value = null
  loading.value = true
  
  try {
    const req = await CLIENT.get('/authors') 

    authors.value = (req.data as ResponseAPI).data as Author[]

  } catch (err) {
      console.error(err)
    error.value = (err as string).toString()
  } finally {
    loading.value = false
  }
}

fetchData()
</script>

<template>
  <main class="main-container my-10">
   <div class="author">
    <section v-if="loading" class="grid grid-cols-2 px-4 md:grid-cols-3 xl:grid-cols-4 gap-3">
      <Card class="p-3 flex flex-col gap-2" v-for="item of [1,2,3,4]" :key="item" >
         <Skeleton class="h-6 w-full" />
         <Skeleton class="h-4 w-2/4" />
         <Skeleton class="h-7 w-1/4 mt-5" />
      </Card>
    </section>

    <Card v-if="error" class="bg-destructive text-destructive-content p-3 max-w-fit mx-auto">{{ error }}</Card>

    <section v-if="authors" id="autors" class="grid grid-cols-2 px-4 md:grid-cols-3 xl:grid-cols-4 gap-3" >
      <Card class="p-3 shadow-sm" v-for="author of authors" :key="author.id" >
         <h1 class="text-xl md:text-xl font-bold">{{ author.name }}</h1>
         <p>{{ author.country }}</p>

         <Button as-child size="xs" class="mt-5" >
            <RouterLink :to="`/authors/${author.id}`">
               View books
            </RouterLink>
         </Button>
      </Card>
    </section>
  </div>
  </main>
</template>