import '@styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider as AuthProvider } from 'next-auth/client'
import { Provider } from 'react-redux'
import { store } from '@app/store'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}
export default MyApp
