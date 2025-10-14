import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function Navigation() {

    return (
        <Navbar expand="sm" className="fixed-top justify-content-end">
            <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Nav variant="tabs" defaultActiveKey="/">
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/research-upskilling">Research & Upskilling</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/planning-control">Planning & Control</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/communication-teamwork">Communication & Teamwork</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/development-qa">Development & Quality Assurance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mx-2 mx-md-1">
                        <Nav.Link as={Link} to="/poster">Poster</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )

}

export default Navigation