import { Container, Row, Col, Card } from "react-bootstrap";

function CommunicationTeamwork() {
    return (
        <main>
            <Container>
                <section className="content-section">
                    <Row>
                        <Col>
                            <h1 className="text-center mb-4">Communication & Teamwork</h1>
                            <p>
                                Effective communication and teamwork were essential to the success of our 
                                project. This section highlights our collaborative processes and communication strategies.
                            </p>
                        </Col>
                    </Row>
                </section>

                <section className="content-section">
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card className="h-100 border-0 bg-light">
                                <Card.Body>
                                    <Card.Title className="h3">Team Meetings</Card.Title>
                                    <Card.Text>
                                        Regular team meetings were conducted to ensure all members were 
                                        aligned with project objectives and progress. We maintained detailed 
                                        meeting minutes and action items.
                                    </Card.Text>
                                    <ul className="mb-0">
                                        <li>Weekly progress meetings</li>
                                        <li>Technical discussion sessions</li>
                                        <li>Problem-solving workshops</li>
                                        <li>Milestone review meetings</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100 border-0 bg-light">
                                <Card.Body>
                                    <Card.Title className="h3">Communication Tools</Card.Title>
                                    <Card.Text>
                                        We utilized various communication platforms to maintain effective 
                                        collaboration across different aspects of the project.
                                    </Card.Text>
                                    <ul className="mb-0">
                                        <li>Project management platforms</li>
                                        <li>Video conferencing for remote meetings</li>
                                        <li>Shared documentation systems</li>
                                        <li>Real-time messaging for quick updates</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                <section className="content-section">
                    <Row>
                        <Col>
                            <h2>Collaborative Processes</h2>
                            <p>
                                Our team implemented structured collaborative processes to ensure efficient 
                                workflow and knowledge sharing throughout the project lifecycle.
                            </p>
                            
                            <Row>
                                <Col lg={4} className="mb-3">
                                    <h4>Planning & Coordination</h4>
                                    <ul>
                                        <li>Task allocation and scheduling</li>
                                        <li>Resource sharing agreements</li>
                                        <li>Progress tracking mechanisms</li>
                                    </ul>
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <h4>Knowledge Sharing</h4>
                                    <ul>
                                        <li>Technical documentation</li>
                                        <li>Best practices documentation</li>
                                        <li>Lessons learned sessions</li>
                                    </ul>
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <h4>Quality Assurance</h4>
                                    <ul>
                                        <li>Peer reviews and feedback</li>
                                        <li>Cross-team validation</li>
                                        <li>Continuous improvement processes</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default CommunicationTeamwork