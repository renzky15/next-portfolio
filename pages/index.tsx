import Head from 'next/head'
import LandingPage from "@/components/content/LandingPage";
import NavHeader from "@/components/ui/NavHeader";

export default function Home() {
  return (
      <>
        <Head>
          <title>Portfolio | Landing</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/static/favicon.png"/>
        </Head>
        <main>
            <NavHeader defaultPage={0}/>
          <LandingPage/>
        </main>
      </>
  )
}
