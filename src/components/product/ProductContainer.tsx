import { IProduct } from '@/@types/product'
import { addToBasket } from '@/slices/basketSlice'
import { StarIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid4 } from 'uuid'

interface ProductProps {
  product: IProduct
}

function ProductContainer(props: ProductProps): React.ReactElement {
  const { product } = props
  const { title, price, description, category, image } = product

  const dispatch = useDispatch()
  const [session] = useSession()

  const MAX_RATING = 5
  const MIN_RATING = 1
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )
  const [hasPrime] = useState(Math.random() < 0.5)

  const addItemToBasket = () => {
    const item = {
      ...product,
      hasPrime,
      quantity: 1,
    }
    dispatch(addToBasket(item))
  }

  return (
    <div className="home__product__container z-0">
      <p className="product__category">{category}</p>

      <div className="product__image">
        <Image src={image} height={200} width={200} objectFit="contain" />
      </div>

      <div className="product__details">
        <h4>{title}</h4>

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

      <button
        type="button"
        className={session ? 'amazon-button' : 'amazon-button--disabled'}
        disabled={!session}
        onClick={addItemToBasket}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductContainer
