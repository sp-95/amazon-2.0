import LoggedIn from '@/components/checkout/LoggedIn'
import LoggedOut from '@/components/checkout/LoggedOut'
import Subtotal from '@/components/checkout/Subtotal'
import { selectItems } from '@/slices/cartSlice'
import Layout from '@components/layout'
import { useSession } from 'next-auth/client'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Checkout(): React.ReactElement {
  const items = useSelector(selectItems)
  const [session] = useSession()

  return (
    <Layout title="Amazon 2.0 | Shopping Cart">
      <section className="p-5 pt-4 flex flex-col sm:flex-row sm:space-x-5">
        <div className="my-5 w-full bg-white">
          {session ? <LoggedIn /> : <LoggedOut />}
        </div>

        <div
          className={`bg-white p-5 ${
            (!session || !items.length) && 'invisible'
          }`}
        >
          <div className="flex flex-col sm:w-72">
            <Subtotal />

            <button type="button" className="mt-2 mb-4 amazon-button-2">
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
