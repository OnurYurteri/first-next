import Analytics from '../core/analytics'

export default function App({ Component, pageProps }) {
  return (
    <Analytics Component={Component} pageProps={pageProps}>
      <Component {...pageProps} />
    </Analytics>
  )
}
