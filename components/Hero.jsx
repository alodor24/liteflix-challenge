import Image from 'next/image'
import { Container, Row, Col, Button } from 'react-bootstrap'

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

            <Container className="hero-container">
                <Row>
                    <Col md={8} lg={9}>
                        <section className="hero-content">
                            <h6 className="wow fadeInDown">ORIGINAL DE <strong>LITEFLIX</strong></h6>
                            <h1 className="hero-content-title wow fadeInUp">{ props.featuredFilm }</h1>

                            <div className="hero-container-buttons">
                                <Button className="btn-primary wow slideInUp">
                                    <Image
                                    src="/assets/images/play.png"
                                    alt="icon-play"
                                    width={14}
                                    height={14}
                                    />{' '}
                                    Reproducir
                                </Button>

                                <Button className="btn-secondary wow slideInUp">
                                    <Image
                                    src="/assets/images/plus.png"
                                    alt="icon-plus"
                                    width={14}
                                    height={14}
                                    />{' '}
                                    Mi Lista
                                </Button>
                            </div>
                        </section>
                    </Col>

                    <Col md={4} lg={3}>
                        <section className="list-films">

                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero