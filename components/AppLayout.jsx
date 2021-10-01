import Head from 'next/head'
import Navbar from '../components/Navbar'

const AppLayout = props => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content={ props.description } />
                <title>{ props.title }</title>
            </Head>

            <Navbar />

            <main>
                { props.children }
            </main>
        </>
    )
}

export default AppLayout