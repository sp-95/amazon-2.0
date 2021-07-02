import Layout from '@components/layout'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

export default function SuccessPage(): React.ReactElement {
  const router = useRouter()

  return (
    <Layout title="Amazon 2.0 | Checkout Success">
      <section className="max-w-screen-2xl mx-auto">
        <div className="p-10 bg-white space-y-5">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="text-green-500 h-10 flex-none" />
            <h1>Thank you, your order has been confirmed!</h1>
          </div>
          <p>
            Thank you for shopping with us. We&apos;ll send a confirmation once
            your item has shipped, if you would like to check the status of your
            orders(s) please press the link below.
          </p>
          <button
            type="button"
            className="amazon-button w-full"
            onClick={() => router.push('/orders')}
          >
            Go to my orders
          </button>
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
