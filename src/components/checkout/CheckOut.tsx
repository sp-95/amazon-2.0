import { selectItems } from '@/slices/cartSlice'
import { useSession } from 'next-auth/client'
import React from 'react'
import { useSelector } from 'react-redux'
import Subtotal from './Subtotal'

function CheckOut(): React.ReactElement {
  const items = useSelector(selectItems)
  const [session] = useSession()

  return (
    <div
      className={`bg-white p-5 ${(!session || !items.length) && 'invisible'}`}
    >
      <div className="flex flex-col sm:w-72">
        <Subtotal />

        <button role="link" type="button" className="mt-2 mb-4 amazon-button-2">
          Proceed to checkout
        </button>
      </div>
    </div>
  )
}

export default CheckOut
