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
      <Container fluid className="px-3">
        <div className="d-flex w-100 align-items-center position-relative">
          <Navbar.Brand as={Link} to="/" className="position-absolute start-0">
            <img src={logo} alt="Network Performance Evaluation Logo" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="position-absolute end-0"
          />

          <div className="position-absolute end-0 d-none d-lg-block">
            <ThemeToggle />
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="w-100">
            <div className="w-100 d-flex justify-content-center">
              <Nav>
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
                      location.pathname === "/research-upskilling"
                        ? "active"
                        : ""
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
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/file-structure"
                    className={
                      location.pathname === "/file-structure" ? "active" : ""
                    }
                    onClick={handleNavClick}
                  >
                    File Structure
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="d-lg-none text-center mt-2">
              <ThemeToggle />
            </div>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
