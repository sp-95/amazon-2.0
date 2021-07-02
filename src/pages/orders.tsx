import db from '@/../firebase.config'
import Order from '@/components/orders/Order'
import Layout from '@components/layout'
import moment from 'moment'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession, useSession } from 'next-auth/client'
import React from 'react'
import Stripe from 'stripe'

export default function OrdersPage({
  orders,
}: InferGetServerSidePropsType<typeof getServerSideProps>): React.ReactElement {
  const [session] = useSession()

  return (
    <Layout title="Amazon 2.0 | Orders">
      <section className="max-w-screen-2xl mx-auto">
        <div className="p-10 bg-white space-y-5">
          <h1>Your Orders</h1>
          <hr className=" border-amazon-yellow-300" />

          {session ? (
            <h3>{orders.length} Orders</h3>
          ) : (
            <h3>Please sign in to see your orders</h3>
          )}

          <div className="space-y-4">
            {orders.map(
              ({ id, amount, amountShipping, items, timestamp, images }) => (
                <Order
                  key={id}
                  id={id}
                  amount={amount}
                  amountShipping={amountShipping}
                  items={items}
                  timestamp={timestamp}
                  images={images}
                />
              )
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2020-08-27',
    maxNetworkRetries: 2,
    timeout: 5 * 1000,
  })

  const session = await getSession(context)

  if (!session) {
    return {
      props: {},
    }
  }

  const stripeOrders = await db
    .collection('users')
    .doc(session.user?.email || '')
    .collection('orders')
    .orderBy('timestamp', 'desc')
    .get()

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  )

  return {
    props: {
      orders,
      session,
    },
  }
}
