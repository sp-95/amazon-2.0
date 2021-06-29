import Product from '@/components/checkout/Product'
import { selectItems } from '@/slices/basketSlice'
import React from 'react'
import { useSelector } from 'react-redux'

function LoggedIn(): React.ReactElement {
  const items = useSelector(selectItems)

  return (
    <div className="flex flex-col p-5 space-y-10">
      <h1 className="text-2xl border-b pb-4">
        {items.length === 0 ? 'Your Amazon Cart is empty' : 'Shopping Cart'}
      </h1>

      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  )
}

export default LoggedIn
