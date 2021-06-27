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
    <div className="relative flex flex-col m-5 bg-white p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill(0)
          .map(() => (
            <StarIcon key={uuid4()} className="h-5 text-amazon-orange-300" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price)}
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            src="/assets/images/prime-tag.png"
            alt="Prime"
            className="w-12"
          />
          <p className="text-xs text-gray-500">FREE Next-day delivery</p>
        </div>
      )}

      <button type="button" className="mt-auto button">
        Add to basket
      </button>
    </div>
  )
}

export default Product
