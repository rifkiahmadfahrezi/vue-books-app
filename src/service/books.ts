const API_BASE = import.meta.env.VITE_API_BASE_URL

export const  getAllBooks = async () => {
   const req = await fetch(API_BASE + '/books')
   return await req.json()
}