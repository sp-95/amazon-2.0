import CheckoutProduct from '@/components/product/CheckoutProduct'
import { selectItems, updateInCart } from '@/slices/cartSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Subtotal from './Subtotal'

function ShoppingCart(): React.ReactElement {
  const items = useSelector(selectItems)
  const dispatch = useDispatch()

  const handleSelectAll = () => {
    const allSelected = items.every((item) => item.checked)
    items.forEach((item) =>
      dispatch(updateInCart({ ...item, checked: !allSelected }))
    )
  }

  return (
    <div className="p-5">
      <h1>Shopping Cart</h1>
      <button type="button" className="amazon-link" onClick={handleSelectAll}>
        {items.every((item) => item.checked)
          ? 'Deselect all items'
          : 'Select all items'}
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
