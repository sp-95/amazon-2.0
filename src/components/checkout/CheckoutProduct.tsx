import { IItem } from '@/@types/item'
import { addToBasket, removeFromBasket } from '@/slices/basketSlice'
import Image from 'next/image'
import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid4 } from 'uuid'
import ProductDetails from '../product/ProductDetails'

interface CheckoutProductProps {
  item: IItem
}

function CheckoutProduct(props: CheckoutProductProps): ReactElement {
  const { item } = props
  const { title, price, description, image, rating, hasPrime } = item

  const dispatch = useDispatch()

  const addItemToBasket = () => {
    dispatch(addToBasket({ ...item, id: uuid4() }))
  }
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(item))
  }

  return (
    <div className="grid grid-cols-5">
      <div className="product__image">
        <Image src={image} height={200} width={200} objectFit="contain" />
      </div>

      <div className="col-span-3 mx-5">
        <ProductDetails
          title={title}
          description={description}
          price={price}
          rating={rating}
          hasPrime={hasPrime}
        />
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button
          type="button"
          className="amazon-button"
          onClick={addItemToBasket}
        >
          Add to basket
        </button>
        <button
          type="button"
          className="amazon-button"
          onClick={removeItemFromBasket}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
