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

        <section className="content-section">
          <Row>
            <Col>
              <h2>Poster Resources</h2>
              <p>
                Access the poster in different formats and view supporting
                design resources used in the creation of our research
                presentation.
              </p>

              <Row>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Research Poster (PNG)"
                    description="High-resolution PNG image of our research poster summarizing the Linux network performance evaluation project, methodology, and key findings."
                    documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Network Performance Evaluation of Linux Based Operating Systems in a Physical Environment.png"
                    documentType="image"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title>Poster Design File (InDesign)</Card.Title>
                      <Card.Text>
                        Adobe InDesign source file for the research poster,
                        containing all design elements, text, and layout
                        information.
                      </Card.Text>
                      <a
                        href="/Portfolio/04-Development-and-Quality-Assurance/Poster/Network Performance Evaluation of Linux Based Operating Systems in a Physical Environment.indd"
                        className="btn btn-outline-primary"
                        download
                      >
                        Download (.indd)
                      </a>
                      <small className="text-muted d-block mt-2">
                        Requires Adobe InDesign to edit
                      </small>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Research Poster (PNG)"
                    description="High-resolution PNG version of the complete research poster for viewing and printing."
                    documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Network Performance Evaluation of Linux Based Operating Systems in a Physical Environment.png"
                    documentType="image"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Poster Design File (InDesign)"
                    description="Adobe InDesign source file for the research poster design with editable layouts and elements."
                    documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Network Performance Evaluation of Linux Based Operating Systems in a Physical Environment.indd"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="AUT Logo Tab (JPG)"
                    description="AUT University tab logo version in JPG format."
                    documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/AUT-logo-tab(4).jpg"
                    documentType="image"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="QR Code"
                    description="QR code linking to the digital version of our project portfolio and research materials."
                    documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/qr_code.jpg"
                    documentType="image"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="AUT Logo (Block Format)"
                    description="AUT University logo in block format used in the poster design and project materials."
                    documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/AUT-logo-block(4).jpg"
                    documentType="image"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}

export default Poster;
