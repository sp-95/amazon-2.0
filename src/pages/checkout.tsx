import { selectItems, selectTotal } from '@/slices/basketSlice'
import Layout from '@components/layout'
import React from 'react'
import { useSelector } from 'react-redux'
import Product from '@/components/checkout/Product'
import { useSession } from 'next-auth/client'

export default function Checkout(): React.ReactElement {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const [session] = useSession()

  return (
    <Layout title="Amazon 2.0">
      <main className="lg:flex justify-between">
        <div className="p-5 w-full shadow-sm">
          <div className="flex justify-center">
            <img
              src="/assets/images/banners/prime-day-banner.png"
              alt="Prime Day"
            />
          </div>

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-2xl border-b pb-4">
              {items.length === 0
                ? 'Your Amazon Basket is empty'
                : 'Shopping Basket'}
            </h1>

            {items.map((item) => (
              <Product key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="bg-white p-10 shadow-md">
          <div className={`flex flex-col ${!items.length && 'invisible'}`}>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items):{' '}
              <span className="font-bold">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(total)}
              </span>
            </h2>

            <button
              type="button"
              className={`mt-2 ${
                session ? 'amazon-button' : 'amazon-button--disabled'
              }`}
              disabled={!session}
            >
              {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
            </button>
          </div>
        </div>
      </main>
    </Layout>
  )
}
