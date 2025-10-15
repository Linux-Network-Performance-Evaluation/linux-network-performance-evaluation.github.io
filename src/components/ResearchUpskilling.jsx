import { Container, Row, Col, Card, Tabs, Tab } from "react-bootstrap";
import { DocumentCard } from "./DocumentViewer";

function ResearchUpskilling() {
  return (
    <main>
      <Container>
        <section className="content-section">
          <Row>
            <Col>
              <h1 className="text-center mb-4">Research & Upskilling</h1>
              <p>
                This section contains information about our research activities
                and the upskilling efforts undertaken during the project.
              </p>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Tabs
            defaultActiveKey="skills"
            id="research-upskilling-tabs"
            className="mb-4"
          >
            <Tab eventKey="skills" title="Skills Assessment">
              <h2>Skills Matrix</h2>
              <p>
                Our comprehensive skills assessment and development tracking
                document showing team capabilities and learning progression
                throughout the project.
              </p>

              <Row className="mb-4">
                <Col md={6}>
                  <DocumentCard
                    title="Skills Matrix v1"
                    description="Detailed skills assessment matrix tracking team member capabilities across technical areas including Linux administration, networking, testing tools, and project management."
                    documentPath="/Portfolio/01-Research-and-Upskilling/01. Skills Matrix.xlsx"
                  />
                </Col>
              </Row>
            </Tab>

            <Tab eventKey="upskilling" title="Upskilling Resources">
              <h2>Upskilling Documentation</h2>
              <p>
                Training resources, guides, and documentation used for skill
                development during the project.
              </p>

              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Upskilling Management Plan"
                    description="Comprehensive plan outlining the upskilling strategy, learning objectives, and progression tracking for team members."
                    documentPath="/Portfolio/01-Research-and-Upskilling/Upskilling/02. Upskilling Management Plan.docx"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="D-ITG Manual"
                    description="Complete technical manual for the D-ITG (Distributed Internet Traffic Generator) tool used for network performance testing."
                    documentPath="/Portfolio/01-Research-and-Upskilling/Upskilling/D-ITG-2.8.1-manual.pdf"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Ubuntu CLI Cheat Sheet"
                    description="Reference guide for Ubuntu command line interface operations and system administration tasks."
                    documentPath="/Portfolio/01-Research-and-Upskilling/Upskilling/Ubuntu CLI Cheat Sheet 2025.pdf"
                  />
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>Research Activities</h2>
              <p>
                Our research focused on understanding the performance
                characteristics of different Linux distributions when used as
                software routers. We conducted comprehensive literature reviews
                and analyzed existing benchmarking methodologies.
              </p>

              <h2>Upskilling Areas</h2>
              <ul>
                <li>Linux system administration and configuration</li>
                <li>Network performance testing tools (D-ITG, iPerf)</li>
                <li>Software router configuration</li>
                <li>Statistical analysis and data interpretation</li>
                <li>QEMU virtualization technologies</li>
              </ul>

              <h2>Key Learning Outcomes</h2>
              <p>
                Through our research and upskilling activities, we developed
                expertise in network performance evaluation, gained hands-on
                experience with Linux distributions, and enhanced our
                understanding of network protocols and routing technologies.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}

export default ResearchUpskilling;
