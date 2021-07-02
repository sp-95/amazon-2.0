import CheckOut from '@/components/checkout/CheckOut'
import LoggedIn from '@/components/checkout/LoggedIn'
import LoggedOut from '@/components/checkout/LoggedOut'
import { selectItems } from '@/slices/cartSlice'
import Layout from '@components/layout'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/client'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CheckoutPage(): React.ReactElement {
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
          <CheckOut />
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
