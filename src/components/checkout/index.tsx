import Layout from '@components/layout'
import React from 'react'

export default function Checkout(): React.ReactElement {
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
          <h1 className="text-2xl border-b pb-4">Your Shopping Basket</h1>
        </div>
      </main>
    </Layout>
  )
}
