import LoggedIn from '@/components/checkout/LoggedIn'
import LoggedOut from '@/components/checkout/LoggedOut'
import Layout from '@components/layout'
import { useSession } from 'next-auth/client'
import React from 'react'

export default function Checkout(): React.ReactElement {
  const [session] = useSession()

  return (
    <Layout title="Amazon 2.0 | Shopping Cart">
      <section className="p-5 pt-4 flex flex-col sm:flex-row sm:space-x-5">
        <div className="my-5 w-full bg-white">
          {session ? <LoggedIn /> : <LoggedOut />}
        </div>

        <Checkout />
      </section>
    </Layout>
  )
}
