import Layout from '@components/layout'
import React from 'react'
import Banner from './Banner'

const Home: React.FunctionComponent = () => {
  return (
    <Layout title="Amazon 2.0">
      <main className="absolute h-full max-w-screen-2xl mx-auto bg-gray-200">
        <Banner />
      </main>
    </Layout>
  )
}

export default Home
