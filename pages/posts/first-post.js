import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

const YourComponent = () => (
  <Image
    src="/images/profile.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

export default function FirstPost() {

  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <YourComponent />
        <h2>
          <Link href="/">Go back⏪</Link>
        </h2>
      </Layout>
    </>
  )
}
