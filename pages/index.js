import AppLayout from '../components/AppLayout'
import Hero from '../components/Hero'

const Home = (props) => {
    const data = props.data
    const films = data.slice(0, 4)

    return (
        <AppLayout
        description='Liteflix is ​​a new movie and video streaming app.'
        title='Liteflix | Home'
        >
            <Hero />
            { 
                films.map(item => {
                    console.log(item)
                })
            }
        </AppLayout>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20')
    const resJSON = await res.json()

    return {
      props: {
        data: resJSON.results
      }
    }
}

export default Home