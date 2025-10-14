import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from '/assets/logo.png';

function Navigation() {

    const location = useLocation()

    return (
        <Navbar expand="sm" className="fixed-top justify-content-end">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} alt="Logo" /></Navbar.Brand>
                <Nav variant="tabs">
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/" active={location.pathname === '/'}>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/research-upskilling" active={location.pathname === '/research-upskilling'}>Research & Upskilling</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/planning-control" active={location.pathname === '/planning-control'}>Planning & Control</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/communication-teamwork" active={location.pathname === '/communication-teamwork'}>Communication & Teamwork</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/development-qa" active={location.pathname === '/development-qa'}>Development & Quality Assurance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/poster" active={location.pathname === '/poster'}>Poster</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )

}

export default Navigation