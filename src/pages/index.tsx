import { IProduct } from '@/@types/product'
import Home from '@components/home'
import { GetServerSideProps } from 'next'
import React from 'react'

interface HomePageProps {
  data: IProduct[]
}

export default function HomePage(props: HomePageProps): React.ReactElement {
  const { data } = props

  return <Home products={data} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  // try {
  //   const response = await fetch('https://fakestoreapi.com/products')
  //   const data = await response.json()

  //   return {
  //     props: {
  //       data,
  //     },
  //   }
  // } catch {
  try {
    const response = await fetch('http://localhost:3000/api/products')
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
    // }
  }
}
