import { Container, Row, Col, Card, Tabs, Tab } from "react-bootstrap";
import { DocumentCard } from "./DocumentViewer";

function PlanningControl() {
  return (
    <main>
      <Container>
        <section className="content-section">
          <Row>
            <Col>
              <h1 className="text-center mb-4">Planning & Control</h1>
              <p>
                This section contains our project planning documents, control
                processes, and management artifacts that guided our project
                execution.
              </p>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>Proposal Documents</h2>
              <p>View our comprehensive project proposal documents:</p>

              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Project Proposal v2.4 (PDF)"
                    description="The latest version of our project proposal document containing detailed objectives, methodology, and timeline."
                    documentPath="/Portfolio/02-Planning-and-Control/Proposal/Proposal-Document/Proposal_v2.4.pdf"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Project Proposal v2.4 (Word)"
                    description="The same proposal document in Word format for better editing and collaboration capabilities."
                    documentPath="/Portfolio/02-Planning-and-Control/Proposal/Proposal-Document/Proposal_v2.4.docx"
                  />
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Proposal Presentation"
                    description="PowerPoint presentation summarizing our project proposal and key deliverables."
                    documentPath="/Portfolio/02-Planning-and-Control/Proposal/Proposal-Presentation/Proposal Powerpoint.pptx"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Project Brief"
                    description="Concise project brief document outlining the core objectives and scope of our work."
                    documentPath="/Portfolio/02-Planning-and-Control/Project Brief.docx"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>Planning Documents</h2>
              <p>
                Access our comprehensive planning documentation including Gantt
                charts, risk registers, and quality assurance plans:
              </p>

              <Tabs defaultActiveKey="timeline" className="mb-3">
                <Tab eventKey="timeline" title="Project Timeline">
                  <Row>
                    <Col md={6} className="mb-3">
                      <DocumentCard
                        title="Gantt Chart v3 (MS Project)"
                        description="Comprehensive project timeline with milestones, dependencies, and resource allocation."
                        documentPath="/Portfolio/02-Planning-and-Control/Proposal/Planning-Documents/Current/09. Gantt Chart v3.mpp"
                      />
                    </Col>
                    <Col md={6} className="mb-3">
                      <DocumentCard
                        title="Work Breakdown Structure"
                        description="Detailed breakdown of project tasks and deliverables organized in a hierarchical structure."
                        documentPath="/Portfolio/02-Planning-and-Control/Proposal/Planning-Documents/Current/08. Work Breakdown Structure v3.1.docx"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mb-3">
                      <DocumentCard
                        title="WBS Diagram"
                        description="Visual representation of the work breakdown structure showing project hierarchy and task relationships."
                        documentPath="/Portfolio/02-Planning-and-Control/Proposal/Planning-Documents/Current/08. Work Breakdown Structure Diagram v3.png"
                        documentType="image"
                      />
                    </Col>
                    <Col md={6} className="mb-3">
                      <DocumentCard
                        title="Network Diagram"
                        description="Visual representation of the project network architecture and system connections."
                        documentPath="/Portfolio/02-Planning-and-Control/Proposal/Planning-Documents/Current/Network Diagram.png"
                        documentType="image"
                      />
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="risk" title="Risk Management">
                  <Row>
                    <Col md={6} className="mb-3">
                      <DocumentCard
                        title="Risk Register v3"
                        description="Comprehensive risk assessment including identification, analysis, and mitigation strategies."
                        documentPath="/Portfolio/02-Planning-and-Control/Proposal/Planning-Documents/Current/15. Risk Register v3.xlsx"
                      />
                    </Col>
                    <Col md={6} className="mb-3">
                      <DocumentCard
                        title="Issue Log v3"
                        description="Track and management of project issues, their status, and resolution actions."
                        documentPath="/Portfolio/02-Planning-and-Control/Proposal/Planning-Documents/Current/16. Issue Log v3.docx"
                      />
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="quality" title="Quality Assurance">
                  <Row>
                    <Col md={6} className="mb-3">
                      <DocumentCard
                        title="Quality Assurance Plan v4"
                        description="Comprehensive quality assurance framework including standards, procedures, and validation methods."
                        documentPath="/Portfolio/02-Planning-and-Control/Proposal/Planning-Documents/Current/21. Quality Assurance Plan v4.docx"
                      />
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>Mid-Term Review</h2>
              <p>
                Mid-term project evaluation documents including status reports
                and progress presentations:
              </p>

              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Mid-Term Status Report (PDF)"
                    description="Comprehensive mid-term status report documenting project progress, achievements, and upcoming milestones."
                    documentPath="/Portfolio/02-Planning-and-Control/Mid-Term Review/Linux Network Evaluation (Physical) Mid-Term Status Report.pdf"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Status Report v1.4 (Word)"
                    description="Detailed status report in Word format covering project progress, challenges, and future plans."
                    documentPath="/Portfolio/02-Planning-and-Control/Mid-Term Review/Status Report v1.4.docx"
                  />
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Status Report Presentation"
                    description="PowerPoint presentation summarizing mid-term project status, key findings, and next steps."
                    documentPath="/Portfolio/02-Planning-and-Control/Mid-Term Review/Status Report.pptx"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>Project Management</h2>
              <p>
                Our project follows established project management principles
                with regular milestone reviews, risk assessments, and quality
                control measures.
              </p>

              <h3>Key Planning Activities</h3>
              <ul>
                <li>Project scope definition and requirements analysis</li>
                <li>Resource allocation and timeline planning</li>
                <li>Risk identification and mitigation strategies</li>
                <li>Quality assurance planning</li>
                <li>Milestone tracking and progress monitoring</li>
              </ul>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}

export default PlanningControl;
