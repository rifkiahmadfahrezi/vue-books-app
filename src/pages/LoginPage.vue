<script lang="ts" setup >
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form'
import { Input } from '../components/ui/input';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useRouter } from 'vue-router';
import { Loader } from 'lucide-vue-next';

import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod'
import { useForm } from 'vee-validate';
import useAuth from '../stores/auth';
import CLIENT from '../service/apiClient';
import type { ResponseAPI } from '../types';
import { toast } from 'vue-sonner';
import { ref } from 'vue';

const schema = toTypedSchema(z.object({
   username: z.string({ required_error: "Username is required" })
      .min(1, { message: "Username is required" }),
   password: z.string({ required_error: "Password is required" })
      .min(1, { message: "Password is required" }),
}))

const auth = useAuth()
const router = useRouter()

const form = useForm({
   validationSchema: schema
})

const isLoading = ref<boolean>(false)

const onSubmit = form.handleSubmit(async (values) => {
   try{
      isLoading.value = true
      const req = await CLIENT.post('/auth/login', values)

      const token = (req.data as ResponseAPI).data.token
      auth.saveToken(token)

      toast.success('Login success', {
        description: new Date().toLocaleString(),
        action: {
          label: 'close',
          onClick: () => console.log('close'),
        },
      })
      router.replace({ path: '/dashboard' })
   }catch(error){
      console.error(error)
      toast.error((error as any).response?.data?.message || "Someting went wrong, please try again!" )
   }finally{
      isLoading.value = false
   }
})

</script>


<template>
   <Card class="p-5 mx-auto max-w-md mt-10 shadow-lg">

      <article class="my-3">
         <h1 class="tex-xl md:text-2xl font-bold">Login</h1>
         <p class="text-muted-foreground text-xs" >Login to get your access</p>
      </article>

      <form @submit="onSubmit">
         <FormField v-slot="{ componentField }" name="username">
            <FormItem>
               <FormLabel>Username</FormLabel>
               <FormControl>
                  <Input type="text" placeholder="Username.." v-bind="componentField" />
               </FormControl>
               <FormMessage />
            </FormItem>
         </FormField>
         <FormField v-slot="{ componentField }" name="password">
            <FormItem>
               <FormLabel>Password</FormLabel>
               <FormControl>
                  <Input type="text" placeholder="Password.." v-bind="componentField" />
               </FormControl>
               <FormMessage />
            </FormItem>
         </FormField>


         <Button class="mt-5" :disabled="isLoading" type="submit">
            <span v-if="isLoading" class="flex items-center gap-2 " >
               Loading <Loader class="animate-spin size-5" />
            </span> 
            <span v-else >
               Login
            </span>
         </Button>
      </form>
   </Card>
</template>