import Head from 'next/head'

const AppLayout = props => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content={ props.description } />
                <title>{ props.title }</title>
            </Head>

            <nav>
                
            </nav>

            <main>
                { props.children }
            </main>
        </>
    )
}

export default AppLayout