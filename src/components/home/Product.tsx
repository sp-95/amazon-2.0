import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid'

interface ProductProps {
  title: string
  price: number
  description: string
  category: string
  image: string
}

function Product(props: ProductProps): React.ReactElement {
  const { title, price, description, category, image } = props

  const MAX_RATING = 5
  const MIN_RATING = 1
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )
  const [hasPrime] = useState(Math.random() < 0.5)

  return (
    <div className="product__container z-0">
      <div className="product__details">
        <p className="product__category">{category}</p>

        <div className="product__image">
          <Image src={image} height={200} width={200} objectFit="contain" />
        </div>

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

      <button type="button" className="product__add-button">
        Add to basket
      </button>
    </div>
  )
}

export default Product
