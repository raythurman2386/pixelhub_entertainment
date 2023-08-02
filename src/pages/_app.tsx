import '~/styles/global.css'

import type { AppProps } from 'next/app'
import { lazy } from 'react'
import ReactGA from 'react-ga4'

ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_GTAG)

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
