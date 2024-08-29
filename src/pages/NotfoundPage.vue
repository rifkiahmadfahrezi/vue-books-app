<script lang="ts" setup >
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { RouterLink } from 'vue-router';
</script>

<template>
   <Card class="mt-10 p-4 mx-auto w-full max-w-md ">
      <h1 class="text-2xl md:text-4xl font-bold">404</h1>
      <p>The page you're looking for is not exist</p>

      <Button class="mt-3" as-child>
         <RouterLink to="/" >
            Back To home
         </RouterLink>
      </Button>
   </Card>
</template>