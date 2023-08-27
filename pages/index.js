import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Homepage/Hero'
import Service from '../components/Homepage/Service'
import Clients from '../components/Homepage/Clients'
import About from '../components/Homepage/About'
import Work from '../components/Homepage/Work'
import Contact from '../components/Homepage/Contact'

export default function Home() {
  return (
    <Layout title={'Ayush Tyagi | Web Developer'}>
      <Hero />
      <Service />
      <Clients />
      <About />
      <Work />
      {/* <Contact /> */}
    </Layout>
  )
}
