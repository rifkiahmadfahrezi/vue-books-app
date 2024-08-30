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
</script>

<template>
   <Dialog>
      <DialogTrigger as-child >
         <Button variant="outline" size="xs" >
            Update
         </Button>
      </DialogTrigger>
      <DialogContent>
         <DialogHeader>
         <DialogTitle>Edit profile</DialogTitle>
         <DialogDescription>
            Make changes to your profile here. Click save when you're done.
         </DialogDescription>
         </DialogHeader>

         <DialogFooter>
         Save changes
         </DialogFooter>
      </DialogContent>
   </Dialog>
</template>