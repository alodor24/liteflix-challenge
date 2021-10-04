import { useState } from 'react'
import { Container, Row, Dropdown } from 'react-bootstrap'
import PopularFilms from './PopularFilms'
import MyMovies from './MyMovies'

const Sidebar = (props) => {
    const [showPopularFilms, setShowPopularFilms] = useState(true)
    const [showMyMovies, setShowMyMovies] = useState(false)
    const [titleDropdown, setTitleDropdown] = useState('PELÍCULAS')

    const handleShowPopularFilms = () => {
        setShowPopularFilms(true)
        setShowMyMovies(false)
        setTitleDropdown('PELÍCULAS')
    }

    const handleShowMyMovies = () => {
        setShowPopularFilms(false)
        setShowMyMovies(true)
        setTitleDropdown('MIS PELÍCULAS')
    }

    return (
        <Container className="p-3">
            <Row className="mt-4 mb-4">
                <Dropdown className="wow zoomIn">
                    <Dropdown.Toggle id="dropdown-basic" className="dropdown-movies">
                        <span className="dropdown-title-left">VER: </span> 
                        <span className="dropdown-title-right">{ titleDropdown }</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={ handleShowPopularFilms }>POPULARES</Dropdown.Item>
                        <Dropdown.Item onClick={ handleShowMyMovies }>MIS PELÍCULAS</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>

            <div className={ 'popular-movies ' + (showPopularFilms ? 'active' : '') }>
                <PopularFilms popularFilms={ props.popularFilms } />
            </div>

            <div className={ 'my-movies ' + (showMyMovies ? 'active' : '') }>
                <MyMovies />
            </div>
        </Container>
    )
}

export default Sidebar