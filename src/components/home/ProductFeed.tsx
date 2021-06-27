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
    <section className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
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
