import Image from 'next/image'
import featuredImage from '../public/assets/images/Bkg.png'

const Hero = () => {
    return (
        <div className="hero">
            <Image
            className="hero-featured-image"
            src={ featuredImage }
            alt="hero-featured-image"
            />
        </div>
    )
}

export default Hero