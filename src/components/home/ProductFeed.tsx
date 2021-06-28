import { IProduct } from '@/@types/product'
import React from 'react'
import Product from './Product'

interface ProductFeedProps {
  products: IProduct[]
}

export default function ProductFeed(
  props: ProductFeedProps
): React.ReactElement {
  const { products } = props

  return (
    <section className="product__section">
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </section>
  )
}
