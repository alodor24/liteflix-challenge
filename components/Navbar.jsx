import { 
    Navbar, 
    Nav, 
    Container 
} from 'react-bootstrap'

const NavbarTop = () => {
    return (
        <Navbar className="navbar" bg="light" expand="lg">
            <Container>
                <Navbar.Brand className="wow slideInUp">
                <svg width="111" height="24" viewBox="0 0 111 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.36 24H10.254V20.6H4.1V0.199998H0.36V24ZM15.8815 24H19.6215V0.199998H15.8815V24ZM25.2681 3.6H29.1781V24H32.9181V3.6H36.8281V0.199998H25.2681V3.6ZM46.2152 3.6H52.6752V0.199998H42.4752V24H52.6752V20.6H46.2152V13.63H51.3492V10.23H46.2152V3.6ZM60.5568 11.794V1.628H68.0368V0.199998H58.9928V24H60.5568V13.222H66.7108V11.794H60.5568ZM83.4587 24V22.572H75.9787V0.199998H74.4147V24H83.4587ZM89.8034 0.199998V24H91.3674V0.199998H89.8034ZM108.967 24H110.633L105.295 11.658L110.293 0.199998H108.797L104.275 10.434L99.7866 0.199998H98.1546L103.153 11.658L97.7806 24H99.3106L104.139 12.916L108.967 24Z" fill="#64EEBC"/>
                </svg>
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarTop