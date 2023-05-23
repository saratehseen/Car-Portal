import Head from 'next/head'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Contact from '../components/contact'

export default function Home() {
  return (
    <Layout>
     <Head>
        <title>Car Portal</title>
        <meta name="description" content="carportal" />
      </Head>
      <Banner/>
      <Contact/>
    </Layout>
  )
}
