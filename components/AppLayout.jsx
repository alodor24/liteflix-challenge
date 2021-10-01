import Head from 'next/head'
import Navbar from '../components/Navbar'

import { useEffect } from 'react'

const AppLayout = props => {

    const isServer = typeof window === 'undefined'
    const WOW = !isServer ? require('wow.js') : null

    useEffect(() => {
        new WOW().init()
    }, [])

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
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