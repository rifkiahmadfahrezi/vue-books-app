import { defineStore } from "pinia";


const useAuth = defineStore('auth', {
   state: () => ({
      token: ''
   }),
   actions: {
      saveToken(token : string) {
         this.token = token
      }
   },
   persist: {
      key: "auth-store",
      debug: true
   }
})

export default useAuth