import '@styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider as AuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <AuthProvider session={pageProps.session}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default MyApp
