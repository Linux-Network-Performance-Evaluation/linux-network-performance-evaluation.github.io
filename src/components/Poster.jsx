import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ImageLightbox from "./ImageLightbox";

function Poster() {
  // State variable to track if lightbox is open
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Function to open the lightbox
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  // Function to close the lightbox
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
                This poster summarises our research, methodology, results, and
                conclusions.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="poster-container text-center">
                {/* Add onClick handler to image */}
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
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
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

      {/* ImageLightbox component */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        imageUrl="/Portfolio/04-Development-and-Quality-Assurance/Poster/poster_v4.png"
        altText="Linux Network Performance Evaluation Research Poster - Full Size"
      />
    </main>
  );
}

export default Poster;
