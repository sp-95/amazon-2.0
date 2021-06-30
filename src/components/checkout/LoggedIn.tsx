import { selectItems } from '@/slices/cartSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from './EmptyCart'
import ShoppingCart from './ShoppingCart'

function LoggedIn(): React.ReactElement {
  const items = useSelector(selectItems)

  return <>{items.length ? <ShoppingCart /> : <EmptyCart />}</>
}

export default LoggedIn
