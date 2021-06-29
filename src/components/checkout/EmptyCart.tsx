import Link from 'next/link'
import React from 'react'

function EmptyCart(): React.ReactElement {
  return (
    <div className="p-5 flex flex-col md:flex-row items-center space-x-5">
      <img
        src="/assets/images/svgs/rolling-cart.svg"
        alt="Rolling Cart"
        height={160}
        width={160}
      />

      <div className="space-y-3">
        <h2>Your Amazon Cart is empty</h2>
        <div>
          <Link href="/">
            <button type="button" className="amazon-link">
              See recommendations
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmptyCart
