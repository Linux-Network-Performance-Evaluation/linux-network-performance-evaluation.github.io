import { Card, Col, Container, Row } from "react-bootstrap";

function Poster() {
  return (
    <main>
      <Container>
        <section className="content-section">
          <Row>
            <Col>
              <h1 className="text-center mb-4">Project Poster</h1>
              <p className="text-center mb-4">
                Click on the poster below to view it in full size. This poster
                summarizes our research, methodology, results, and conclusions.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="poster-container text-center">
                <a
                  href="/Portfolio/04-Development-and-Quality-Assurance/Poster/poster_v3.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-block"
                >
                  <img
                    src="/Portfolio/04-Development-and-Quality-Assurance/Poster/poster_v3.png"
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
                  />
                </a>
                <p className="mt-3 text-muted">
                  <small>Click to open in new tab for full resolution</small>
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
                    summarizes the key findings from our comparative analysis of
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
                    applications of our research in network optimization and
                    Linux distribution selection for performance-critical
                    applications.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}

export default Poster;
