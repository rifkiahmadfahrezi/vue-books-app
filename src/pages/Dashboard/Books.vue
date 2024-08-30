<script lang="ts" setup >
import { 
   Table, 
   TableBody, 
   TableCell, 
   TableHead, 
   TableHeader, 
   TableRow } from '../../components/ui/table';
import { Card } from '../../components/ui/card';
import { useQuery } from '@tanstack/vue-query';
import { getAllBooks } from '../../service/books';

import UpdateBook from '../../components/forms/UpdateBook.vue';
import DeleteBook from '../../components/forms/DeleteBook.vue';
import AddBook from '../../components/forms/AddBook.vue';

const { data, isSuccess } = useQuery({
   queryKey: ['books'],
   queryFn: getAllBooks
})

</script>

<template>
   <Card class="p-5" >

      <article class="my-5 flex items-center justify-between " >
         <h1 class="text-2xl font-bold" >Books</h1>

         <AddBook />
      </article>

      <Table>
         <TableHeader>
            <TableRow>
               <TableHead>Title</TableHead>
               <TableHead>Author</TableHead>
               <TableHead>Pages</TableHead>
               <TableHead>Rating</TableHead>
               <TableHead>Action</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            <TableRow v-if="isSuccess" v-for="book in data.data" :key="book.id">
               <TableCell>{{ book.title }}</TableCell>
               <TableCell>{{ book.author.name }}</TableCell>
               <TableCell>{{ book.pages }}</TableCell>
               <TableCell>{{ book.rating }}</TableCell>
               <TableCell class="space-x-2" >
                  <UpdateBook />
                  <DeleteBook />
               </TableCell>
            </TableRow>
         </TableBody>
      </Table>
   </Card>
</template>