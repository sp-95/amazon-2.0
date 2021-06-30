import ProductCategory from '../constants/ProductCategory'

export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: ProductCategory
  image: string
}
