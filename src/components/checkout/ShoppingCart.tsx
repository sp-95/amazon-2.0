import CheckoutProduct from '@/components/product/CheckoutProduct'
import { selectItems } from '@/slices/basketSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import Subtotal from './Subtotal'

function ShoppingCart(): React.ReactElement {
  const items = useSelector(selectItems)

  return (
    <div className="p-5">
      <h1>Shopping Cart</h1>
      <button type="button" className="amazon-link">
        Deselect all items
      </button>
      <p className="text-right hidden lg:block">Price</p>
      <hr />

      {items.map((item) => (
        <CheckoutProduct key={item.id} item={item} />
      ))}

      <div className="text-right">
        <Subtotal />
      </div>
    </div>
  )
}

export default ShoppingCart
