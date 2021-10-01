import AppLayout from '../components/AppLayout'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <AppLayout
        description='Liteflix is ​​a new movie and video streaming app.'
        title='Liteflix | Home'
        >
            <Hero />
        </AppLayout>
    )
}

export default Home