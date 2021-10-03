import { Container, Row, Dropdown } from 'react-bootstrap'

const Sidebar = (props) => {

    console.log(props.popularFilms)

    return (
        <Container className="p-3">
            <Row className="mt-4 mb-4">
                <Dropdown className="wow zoomIn">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            
            {
                props.popularFilms.map((item) => (
                    <Row key={ item.id } className="mb-4 wow zoomIn">
                        <div style={{ height: '140px', backgroundColor: 'red', }}></div>
                    </Row>
                ))
            }
        </Container>
    )
}

export default Sidebar