export interface IItem {
  id: number
  title: string
  price: number
  description: string
  image: string
  hasPrime: boolean
  quantity: number
}

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}
