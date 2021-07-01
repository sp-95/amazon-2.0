import React from 'react'
import Subtotal from './Subtotal'

function CheckOut(): React.ReactElement {
  return (
    <div className="flex flex-col sm:w-72">
      <Subtotal />

      <button role="link" type="button" className="mt-2 mb-4 amazon-button-2">
        Proceed to checkout
      </button>
    </div>
  )
}

export default CheckOut
