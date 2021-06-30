import { selectItems, selectTotal } from '@/slices/cartSlice'
import React from 'react'
import { useSelector } from 'react-redux'

function Subtotal(): React.ReactElement {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)

  return (
    <h3 className="whitespace-nowrap">
      Subtotal ({items.length} items):{' '}
      <span className="font-bold">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(total)}
      </span>
    </h3>
  )
}

export default Subtotal
