import { AnalyticsBrowser } from '@segment/analytics-next'

const analytics = AnalyticsBrowser.load({
  writeKey: 'AWMBqiU0iLuFhbXDL4Ba3POuJOyzQlkg',
})

const track = (page) => {
  analytics.track('Navigate', { ...page })
}

export default function Analytics({ Component, pageProps }) {
  track({ Component: Component.name, pageProps })
  return <Component {...pageProps} />
}
