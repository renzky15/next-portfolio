import Head from 'next/head'
import NavHeader from "@/components/ui/NavHeader";
import WorkPage from "@/components/content/WorkPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | Sample Works</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/static/favicon.png"/>
            </Head>
            <main>
                <NavHeader defaultPage={1} />
                <WorkPage/>
            </main>
        </>
    )
}
