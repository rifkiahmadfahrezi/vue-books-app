<script lang="ts" setup >
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'

import { useForm } from 'vee-validate';

import { Plus } from 'lucide-vue-next';
import { toTypedSchema } from '@vee-validate/zod';
import { createBookSchema } from '../../schemas/book';
import { toast } from 'vue-sonner';
import CLIENT from '../../service/apiClient';

const form = useForm({
   validationSchema: toTypedSchema(createBookSchema)
})

const onSubmit = form.handleSubmit( async (values) => {
  try{
   const req = await CLIENT.post('/books', values)
   toast.success(req.data.message)
  }catch(err){
   console.error(err)
   toast.error((err as any)?.response?.data?.message || "An error is occured")
  }
})

</script>

<template>
   <Dialog>
      <DialogTrigger as-child >
         <Button class="flex items-center gap-2" >
            <Plus />  Add
         </Button>
      </DialogTrigger>
      <DialogContent>
         <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
               Make changes to your profile here. Click save when you're done.
            </DialogDescription>
         </DialogHeader>
         <form @submit="onSubmit" >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
               <FormField v-slot="{ componentField }" name="title">
                  <FormItem>
                     <FormLabel>Title</FormLabel>
                     <FormControl>
                        <Input type="text" placeholder="Title..." v-bind="componentField" />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               </FormField>
               <FormField v-slot="{ componentField }" name="cover">
                  <FormItem>
                     <FormLabel>Cover</FormLabel>
                     <FormControl>
                        <Input type="text" placeholder="Cover..." v-bind="componentField" />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               </FormField>
               <FormField v-slot="{ componentField }" name="pages">
                  <FormItem>
                     <FormLabel>Pages</FormLabel>
                     <FormControl>
                        <Input type="number" placeholder="Pages..." v-bind="componentField" />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               </FormField>
               <FormField v-slot="{ componentField }" name="rating">
                  <FormItem>
                     <FormLabel>Rating</FormLabel>
                     <FormControl>
                        <Input type="number" placeholder="Rating..." v-bind="componentField" />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               </FormField>
            </div>
            <FormField v-slot="{ componentField }" name="author">
               <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                     <Input type="text" placeholder="Author..." v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            </FormField>
            
            <FormField  v-slot="{ componentField }" name="synopsis">
               <FormItem  >
                  <FormLabel>Synopsis</FormLabel>
                  <FormControl>
                     <Input type="text" placeholder="Synopsis..." v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
               </FormItem>
            </FormField>
            
            <DialogFooter>
               <Button type="submit">
                  Add
               </Button>
            </DialogFooter>
         </form>
         </DialogContent>
   </Dialog>
</template>