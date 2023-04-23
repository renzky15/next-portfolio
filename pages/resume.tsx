import Head from 'next/head'
import ResumePage from "@/components/content/ResumePage";
import NavHeader from "@/components/ui/NavHeader";

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | CV / Resume </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/static/favicon.png"/>
            </Head>
            <main>
                <NavHeader defaultPage={2} />
                <ResumePage/>
            </main>
        </>
    )
}
