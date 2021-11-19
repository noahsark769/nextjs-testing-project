import Head from 'next/head'
import Link from 'next/link'
import { Heading1 } from '../src/Heading1'
import Image from 'next/image'
import alchemy from '../public/alchemy.png'

const justReturnUrlLoader = ({ src, width, quality }) => {
  return `http://localhost:3001${src}`
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Sup this is the first page
        </h1>
        <Heading1 />
        <div>
          <h1>Content to push the link down 1</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down 2</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down3 </h1>
          <div style={{ width: "300px", height: "300px", position: "relative" }}>
            <Image
              loader={justReturnUrlLoader}
              src={alchemy}
              alt="Alchemy"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down</h1>
          <h1>Content to push the link down LAST</h1>
          <h1><Link href="/second-page">Link to second page</Link></h1>
        </div>
      </main>
    </div>
  )
}
