import { IProduct } from '@/@types/product'
import Layout from '@components/layout'
import React from 'react'
import Banner from './Banner'
import ProductFeed from './ProductFeed'

interface HomeProps {
  products: IProduct[]
}

export default function Home(props: HomeProps): React.ReactElement {
  const { products } = props

  return (
    <Layout title="Amazon 2.0">
      <main className="max-w-screen-2xl mx-auto bg-gray-200">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </Layout>
  )
}
