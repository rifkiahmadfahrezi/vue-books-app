<script lang="ts" setup>
import { Card, CardContent, CardTitle } from '../components/ui/card';
import { Skeleton } from '../components/ui/skeleton';
import { RouterLink } from 'vue-router';
import { Star, BookAudioIcon,PencilLine } from 'lucide-vue-next';

import CLIENT from '../service/apiClient';
import { ref } from 'vue'
import type { Book, ResponseAPI } from '../types';

const loading = ref(false)
const books = ref<Book[] | null>(null)
const error = ref('')


async function fetchData() {
  error.value = ''
  books.value = null
  loading.value = true
  
  try {
    const req = await CLIENT.get('/books') 

    books.value = (req.data as ResponseAPI).data as Book[]

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
   <div class="book">
    <section v-if="loading" class="grid grid-cols-2 px-4 md:grid-cols-3 xl:grid-cols-4 gap-3">
      <Card class="flex flex-col gap-2  " v-for="item of [1,2,3,4]" :key="item" >
        <Skeleton class="h-48 w-full" />
         <div class="p-3 flex flex-col gap-2">
          <Skeleton class="h-6 w-full" />
          <Skeleton class="h-4 w-2/4" />
         </div>

         <Skeleton class="h-6 w-1/4" />
      </Card>
    </section>

    <Card v-if="error" class="bg-destructive text-destructive-content p-3 max-w-fit mx-auto">{{ error }}</Card>

    <Card v-if="(!books || books.length == 0) && !loading" class="p-3 max-w-fit mx-auto" >
      <h1 class="text-xl md:text-xl">There is no books to display yet</h1>
    </Card>

    <section v-if="books" id="books" class="grid grid-cols-2 px-4 md:grid-cols-3 xl:grid-cols-4 gap-3" >
      <Card class="shadow-sm overflow-hidden" v-for="book of books" :key="book.id" >
        <RouterLink :to="`/books/${book.id}`">
         <figure class="aspect-square mx-auto" >
            <img :src="book.cover" alt="" class="w-full object-cover object-center h-full">
         </figure>
         <CardContent>
            <CardTitle class="capitalize mt-2 text-xl line-clamp-2 " >{{ book.title }}</CardTitle>
            <div class="flex justify-start gap-4 flex-wrap mt-2">
              <p class="flex items-center gap-1"> 
                <Star class="size-5 "  />
                <span>
                  {{ book.rating }}
                </span>
              </p>
              <p class="flex items-center gap-1"> 
                <BookAudioIcon class="size-5 "  />
                <span>
                  {{ book.pages }}
                </span>
              </p>
              <p class="flex items-center gap-1"> 
                <PencilLine class="size-5 "  />
                <span>
                  {{ book.author.name }}
                </span>
              </p>
            </div>
         </CardContent>
        </RouterLink>
      </Card>
    </section>
  </div>
  </main>
</template>