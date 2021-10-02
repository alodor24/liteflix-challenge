import Image from 'next/image'

const Hero = (props) => {

    return (
        <div className="hero">
            <Image
            className="hero-featured-image"
            src={ 'https://image.tmdb.org/t/p/original' + props.urlImage }
            alt="hero-featured-image"
            layout='fill'
            />

            <div className="hero-overlay"></div>

            <section className="hero-content">
                <h1 className="hero-title">{ props.featuredFilm }</h1>
            </section>
        </div>
    )
}

export default Hero