export interface Model{
   id: string | number
   createdAt: Date | string
   updatedAt: Date | string
} 

export interface Author extends Model{
   name: string
   country: string
}
export interface Book extends Model{
   title: string
   cover ?: string
   pages: number
   rating: number
   sysnopsis ?: sting | null
   author:Author
}

export interface ResponseAPI {
   status: boolean
   data ?: Array | Object
   message ?: string
}