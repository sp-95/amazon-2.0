export interface IItem {
  id: string
  productId: number
  title: string
  price: number
  description: string
  image: string
  rating: number
  hasPrime: boolean
}

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}
