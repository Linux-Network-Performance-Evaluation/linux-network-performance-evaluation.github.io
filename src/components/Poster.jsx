import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function Poster() {
  // Step 1: Create a state variable to track if lightbox is open
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Step 2: Function to open the lightbox
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  // Step 3: Function to close the lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <main>
      <Container>
        <section className="content-section">
          <Row>
            <Col>
              <h1 className="text-center mb-4">Project Poster</h1>
              <p className="text-center mb-4">
                This poster summarises our research, methodology, results, and conclusions.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="poster-container text-center">
                {/* Step 4: Add onClick handler to image */}
                <img
                  src="/Portfolio/04-Development-and-Quality-Assurance/Poster/poster_v4.png"
                  alt="Linux Network Performance Evaluation Research Poster"
                  className="poster img-fluid shadow-lg rounded"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "scale(1)")
                  }
                  onClick={openLightbox}
                />
                <p className="mt-3 text-muted text-align text-center">
                  <small>Click to view in full size</small>
                </p>
              </div>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <Card className="border-0 bg-light">
                <Card.Body>
                  <Card.Title className="h3">About This Poster</Card.Title>
                  <Card.Text>
                    This academic poster presents a comprehensive overview of
                    our Linux Network Performance Evaluation project. It
                    summarises the key findings from our comparative analysis of
                    network performance across Ubuntu, Fedora, and Kali Linux
                    distributions, highlighting differences in latency,
                    throughput, jitter, and packet loss between IPv4 and IPv6
                    protocols.
                  </Card.Text>
                  <Card.Text>
                    The poster was designed for presentation at academic
                    conferences and serves as a visual summary of our research
                    methodology, experimental setup, data analysis techniques,
                    and significant findings. It demonstrates the practical
                    applications of our research in network optimisation and
                    Linux distribution selection for performance-critical
                    applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>

      {/* Step 5: Lightbox overlay - only shows when isLightboxOpen is true */}
      {isLightboxOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              fontSize: "40px",
              fontWeight: "bold",
              cursor: "pointer",
              zIndex: 10000,
            }}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* Full-size image */}
          <img
            src="/Portfolio/04-Development-and-Quality-Assurance/Poster/poster_v4.png"
            alt="Linux Network Performance Evaluation Research Poster - Full Size"
            style={{
              maxWidth: "95%",
              maxHeight: "95%",
              objectFit: "contain",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default Poster;