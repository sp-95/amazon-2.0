import { StarIcon } from '@heroicons/react/solid'
import React, { ReactElement } from 'react'
import { v4 as uuid4 } from 'uuid'

interface ProductDetailsProps {
  title: string
  description: string
  price: number
  rating: number
  hasPrime: boolean
}

function ProductDetails(props: ProductDetailsProps): ReactElement {
  const { title, description, price, rating, hasPrime } = props

  return (
    <div className="product__details">
      <h4 className="product__title">{title}</h4>

      <div className="product__rating-container">
        {Array(rating)
          .fill(0)
          .map(() => (
            <StarIcon key={uuid4()} className="product__rating" />
          ))}
      </div>

      <p className="product__description">{description}</p>

      <div className="product__price">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price)}
      </div>

      {hasPrime && (
        <div className="product__prime">
          <img
            src="/assets/images/prime-tag.png"
            alt="Prime"
            className="product__prime__image"
          />
          <p className="product__prime__text">FREE Next-day delivery</p>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
