import { Container, Row, Col, Card } from "react-bootstrap";
import { DocumentCard } from "./DocumentViewer";

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
                  href="/Portfolio/04-Development-and-Quality-Assurance/Poster/Network Performance Evaluation of Linux Based Operating Systems in a Physical Environment.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-block"
                >
                  <img
                    src="/Portfolio/04-Development-and-Quality-Assurance/Poster/Network Performance Evaluation of Linux Based Operating Systems in a Physical Environment.png"
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
      </Container>
    </main>
  );
}

export default Poster;
