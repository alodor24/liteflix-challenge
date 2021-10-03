import AppLayout from '../components/AppLayout'
import Hero from '../components/Hero'

const Home = (props) => {
    const dataFeaturedFilm = props.featuredFilm
    const featuredFilm = dataFeaturedFilm.slice(-1)

    const dataPopularFilms = props.popularFilms
    const popularFilms = dataPopularFilms.slice(0, 4)

    return (
        <AppLayout
        description='Liteflix is ​​a new movie and video streaming app.'
        title='Liteflix | Home'
        >
            <Hero 
            featuredFilm={ featuredFilm[0].title } 
            urlImage={ featuredFilm[0].backdrop_path }
            popularFilms={ popularFilms }
            />
        </AppLayout>
    )
}

export async function getServerSideProps(context) {
    const urlFeaturedFilm = 'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20'

    const urlPopularFilms = 'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20'

    const resFeaturedFilm = await fetch(urlFeaturedFilm)
    const dataFeaturedFilm = await resFeaturedFilm.json()

    const resPopularFilms = await fetch(urlPopularFilms)
    const dataPopularFilms = await resPopularFilms.json()

    return {
      props: {
        featuredFilm: dataFeaturedFilm.results,
        popularFilms: dataPopularFilms.results
      }
    }
}

export default Home