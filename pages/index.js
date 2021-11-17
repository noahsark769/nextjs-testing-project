import Head from 'next/head'
import Link from 'next/link'
import { Heading1 } from '../src/Heading1'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <Link href="https://shopify.com">Yo hello!!!!!!!</Link>
        </h1>
        <Heading1 />
      </main>
    </div>
  )
}
