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

export async function getServerSideProps(context) {
  return {
    props: {
      test: 123,
    },
  }
}

export default function FirstPost({ test }) {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post, {test}</h1>
        <YourComponent />
      </Layout>
    </>
  )
}
