import { selectItems } from '@/slices/basketSlice'
import Layout from '@components/layout'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from './CheckoutProduct'

export default function Checkout(): React.ReactElement {
  const items = useSelector(selectItems)

  return (
    <Layout title="Amazon 2.0">
      <main>
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
            <CheckoutProduct key={item.id} item={item} />
          ))}
        </div>
      </main>
    </Layout>
  )
}
