import { IProduct } from '@/@types/product'
import Banner from '@components/home/Banner'
import ProductFeed from '@components/home/ProductFeed'
import Layout from '@components/layout'
import { GetServerSideProps } from 'next'
import React from 'react'

interface HomePageProps {
  data: IProduct[]
}

export default function HomePage(props: HomePageProps): React.ReactElement {
  const { data } = props

  return (
    <Layout title="Amazon 2.0">
      <main>
        <Banner />

        <ProductFeed products={data} />
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(process.env.API_URL || '')
    const data = await response.json()

    return {
      props: {
        data,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
