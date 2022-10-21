import Analytics from '../core/analytics'

export default function App({ Component, pageProps }) {
  debugger
  return (
    <Analytics Component={Component} pageProps={pageProps}>
      <Component {...pageProps} />
    </Analytics>
  )
}
