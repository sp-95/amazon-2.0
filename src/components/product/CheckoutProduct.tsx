import type IItem from '@/@types/item'
import { removeFromCart, updateInCart } from '@/slices/cartSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { sendInfoNotification } from '../notifications/Notification'

interface CheckoutProductProps {
  item: IItem
}

function CheckoutProduct(props: CheckoutProductProps): React.ReactElement {
  const { item } = props
  const { title, price, description, image, hasPrime, quantity } = item

  const itemQuantity = React.useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()

  const updateQuantityInCart = () => {
    const qty = parseInt(itemQuantity.current?.value || '1', 10)
    dispatch(
      updateInCart({
        ...item,
        quantity: qty,
      })
    )
  }

  const removeItemFromCart = () => {
    dispatch(removeFromCart(item))
    sendInfoNotification('Item removed from Cart')
  }

  return (
    <div
      style={{
        gridTemplateColumns: 'fit-content(180px) 1fr fit-content(180px)',
      }}
      className="flex flex-col lg:grid gap-5 py-3.5 border-b"
    >
      <Image
        src={image}
        height={180}
        width={180}
        objectFit="contain"
        className="product__image"
      />

      <div className="space-y-1">
        <h3>{title}</h3>

        <p className="product__description">{description}</p>

        <div className="flex items-end justify-between lg:hidden">
          <p>Price</p>
          <h3 className="font-bold">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(price)}
          </h3>
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

        <div className="space-x-4">
          <input
            type="number"
            min="1"
            max="10"
            className="number-input"
            value={quantity}
            ref={itemQuantity}
            onChange={updateQuantityInCart}
          />
          <span className="text-gray-300">|</span>
          <button
            type="button"
            className="amazon-link text-sm"
            onClick={removeItemFromCart}
          >
            Delete
          </button>
          <span className="text-gray-300">|</span>
        </div>
      </div>

      <h3 className="font-bold text-right hidden lg:block">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(price)}
      </h3>
    </div>
  )
}

export default CheckoutProduct
