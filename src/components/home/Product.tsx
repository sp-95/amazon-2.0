import { IProduct } from '@/@types/product'
import { addToBasket } from '@/slices/basketSlice'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid4 } from 'uuid'
import ProductDetails from '../product/ProductDetails'

interface ProductProps {
  product: IProduct
}

function Product(props: ProductProps): React.ReactElement {
  const { product } = props
  const { title, price, description, category, image } = product

  const dispatch = useDispatch()

  const MAX_RATING = 5
  const MIN_RATING = 1
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )
  const [hasPrime] = useState(Math.random() < 0.5)

  const addItemToBasket = () => {
    const item = {
      ...product,
      productId: product.id,
      id: uuid4(),
      rating,
      hasPrime,
    }
    dispatch(addToBasket(item))
  }

  return (
    <div className="home__product__container z-0">
      <p className="product__category">{category}</p>

      <div className="product__image">
        <Image src={image} height={200} width={200} objectFit="contain" />
      </div>

      <ProductDetails
        title={title}
        description={description}
        price={price}
        rating={rating}
        hasPrime={hasPrime}
      />

      <button type="button" className="amazon-button" onClick={addItemToBasket}>
        Add to basket
      </button>
    </div>
  )
}

export default Product
