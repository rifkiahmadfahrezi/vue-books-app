import axios from "axios";


const CLIENT = axios.create({
   baseURL: import.meta.env.VITE_API_BASE_URL
})

CLIENT.interceptors.request.use((config)  => {
   const auth = JSON.parse(localStorage.getItem('auth-store') || 'null')
   if(!config.headers.Authorization && auth && auth.token){
      config.headers.Authorization = `Bearer ${auth.token}`

   }
   return config
}, error => Promise.reject(error) )


CLIENT.interceptors.response.use(
   async (response): Promise<any> => {
     return response;
   },
   async (error): Promise<any> => {
     return Promise.reject(error);
   }
 )

export default CLIENT