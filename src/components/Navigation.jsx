import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "/assets/logo.png";
import ThemeToggle from "./ThemeToggle";

function Navigation() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      className="fixed-top"
      variant="light"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Network Performance Evaluation Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={handleNavClick}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/research-upskilling"
                className={
                  location.pathname === "/research-upskilling" ? "active" : ""
                }
                onClick={handleNavClick}
              >
                Research & Upskilling
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/planning-control"
                className={
                  location.pathname === "/planning-control" ? "active" : ""
                }
                onClick={handleNavClick}
              >
                Planning & Control
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/communication-teamwork"
                className={
                  location.pathname === "/communication-teamwork"
                    ? "active"
                    : ""
                }
                onClick={handleNavClick}
              >
                Communication & Teamwork
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/development-qa"
                className={
                  location.pathname === "/development-qa" ? "active" : ""
                }
                onClick={handleNavClick}
              >
                Development & QA
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/poster"
                className={location.pathname === "/poster" ? "active" : ""}
                onClick={handleNavClick}
              >
                Poster
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex align-items-center">
            <ThemeToggle />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
