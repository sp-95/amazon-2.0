import { selectItems, selectTotal } from '@/slices/basketSlice'
import Layout from '@components/layout'
import React from 'react'
import { useSelector } from 'react-redux'
import { useSession } from 'next-auth/client'
import LoggedIn from '@/components/checkout/LoggedIn'
import LoggedOut from '@/components/checkout/LoggedOut'

export default function Checkout(): React.ReactElement {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const [session] = useSession()

  return (
    <Layout title="Amazon 2.0 | Shopping Cart">
      <section className="p-5 pt-4 flex flex-col sm:flex-row space-x-5">
        <div className="my-5 w-full bg-white">
          {session ? <LoggedIn /> : <LoggedOut />}
        </div>

        <div className={`bg-white p-10 ${!items.length && 'invisible'}`}>
          <div className="flex flex-col">
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
      </section>
    </Layout>
  )
}
