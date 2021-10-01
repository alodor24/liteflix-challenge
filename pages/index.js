import AppLayout from '../components/AppLayout'

const Home = () => {
  return (
    <AppLayout
    description = 'Liteflix is ​​a new movie and video streaming app.'
    title = 'Liteflix | Home'
    >
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </AppLayout>
  )
}

export default Home