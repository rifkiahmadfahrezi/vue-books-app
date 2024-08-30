import * as z from 'zod'


export const createBookSchema = z.object({
   title: z.string().min(1, { message: "Book title is required" }),
   cover: z.string().min(1 , { message: "Book cover is required" }),
   pages: z.number().min(1, { message: "Book pages is required" }),
   rating: z.number().min(1 , { message: "Book Rating minimim is 1" })
      .max(5, { message: "Book max rating is 5" }),
   synopsis: z.string().optional(),
   authorId: z.number().min(1, { message: "Book's author is required" }),
}).strict()
export const updateBookSchema = createBookSchema.partial()