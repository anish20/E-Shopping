import Head from 'next/head'
import Image from 'next/image'
import { Mulish } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageComponent from '@/components/Home/MainPage'

const inter = Mulish({ 
  weight: ['200','300','400','500','600', '700','800','900','1000'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
 })

export default function Home() {
  return (
    <>
      <Head>
        <title>E-Shopping App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main className={`${styles.main} ${inter.className}`}>
        <MainPageComponent />
      </main>
      </Layout>
    </>
  )
}
