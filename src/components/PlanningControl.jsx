import { Container, Row, Col, Card, Button } from "react-bootstrap";

function PlanningControl() {
    return (
        <main>
            <Container>
                <section className="content-section">
                    <Row>
                        <Col>
                            <h1 className="text-center mb-4">Planning & Control</h1>
                            <p>
                                This section contains our project planning documents, control processes, 
                                and management artifacts that guided our project execution.
                            </p>
                        </Col>
                    </Row>
                </section>

                <section className="content-section">
                    <Row>
                        <Col>
                            <h2>Proposal Documents</h2>
                            <p>Below are links to the current proposal documents:</p>
                            
                            <Row>
                                <Col md={6} className="mb-3">
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title>Project Proposal v2.4</Card.Title>
                                            <Card.Text>
                                                The latest version of our project proposal document 
                                                containing detailed objectives, methodology, and timeline.
                                            </Card.Text>
                                            <Button 
                                                variant="outline-primary" 
                                                href="/Portfolio/02-Planning-and-Control/Proposal/Proposal-Document/Proposal_v2.4.pdf"
                                                target="_blank"
                                            >
                                                View Proposal
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Card className="h-100">
                                        <Card.Body>
                                            <Card.Title>Proposal Presentation</Card.Title>
                                            <Card.Text>
                                                PowerPoint presentation summarizing our project 
                                                proposal and key deliverables.
                                            </Card.Text>
                                            <Button 
                                                variant="outline-primary" 
                                                href="/Portfolio/02-Planning-and-Control/Proposal/Proposal-Presentation/Proposal Powerpoint.pptx"
                                                target="_blank"
                                            >
                                                View Presentation
                                            </Button>
                                        </Card.Body>
                                    </Card>
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
                                Our project follows established project management principles with 
                                regular milestone reviews, risk assessments, and quality control measures.
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
    )
}

export default PlanningControl