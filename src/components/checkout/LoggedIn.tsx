import Product from '@/components/checkout/Product'
import { selectItems } from '@/slices/basketSlice'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

function LoggedIn(): React.ReactElement {
  const items = useSelector(selectItems)

  return (
    <>
      {items.length ? (
        <div className="flex flex-col p-5 space-y-10">
          <h1 className="text-2xl border-b pb-4">
            {items.length === 0 ? 'Your Amazon Cart is empty' : 'Shopping Cart'}
          </h1>

          {items.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="p-5 flex flex-col md:flex-row items-center space-x-5">
          <img
            src="/assets/images/svgs/rolling-cart.svg"
            alt="Kettle"
            height={160}
            width={160}
          />
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">Your Amazon Cart is empty</h2>
            <div>
              <Link href="/">
                <button
                  type="button"
                  className="text-green-700 hover:text-amazon-orange-600 hover:underline focus:outline-none focus:ring ring-green-700 rounded-md"
                >
                  See recommendations
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LoggedIn
