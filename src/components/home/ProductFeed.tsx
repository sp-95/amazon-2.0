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
    <section className="home__product__grid">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <img
        src="/assets/images/banners/promo-banner.jpg"
        alt="AD"
        className="col-span-full"
      />

      <div className="sm:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {products.slice(5, products.length).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  )
}
