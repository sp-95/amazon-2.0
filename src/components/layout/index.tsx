import NotificationContainer from '@components/notifications/NotificationContainer'
import Head from 'next/head'
import React from 'react'
import Disclaimer from './Disclaimer'
import Footer from './Footer'
import Header from './header'

export interface LayoutProps {
  children: React.ReactElement | React.ReactElement[]
  title?: string
  description?: string
}

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  const { children, title, description } = props

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Header />
      <main className="flex-grow">
        <Disclaimer />
        <div className="relative">
          <NotificationContainer />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
