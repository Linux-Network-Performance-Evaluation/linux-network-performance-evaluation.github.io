import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function DevelopmentQA() {
    const technologies = [
        "Linux (Fedora, Ubuntu, Kali)",
        "D-ITG Traffic Generator",
        "iPerf Network Testing",
        "QEMU Virtualization",
        "Python Scripting",
        "Network Configuration",
        "Statistical Analysis"
    ];

    return (
        <main>
            <Container>
                <section className="content-section">
                    <Row>
                        <Col>
                            <h1 className="text-center mb-4">Development & Quality Assurance</h1>
                            <p>
                                This section covers our development methodologies, testing frameworks, 
                                and quality assurance processes throughout the project lifecycle.
                            </p>
                        </Col>
                    </Row>
                </section>

                <section className="content-section">
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title className="h3">Development Process</Card.Title>
                                    <Card.Text>
                                        Our development approach followed industry best practices with 
                                        emphasis on reproducibility and reliability.
                                    </Card.Text>
                                    <ul>
                                        <li>Environment setup and configuration</li>
                                        <li>Script development for automation</li>
                                        <li>Network testing implementation</li>
                                        <li>Data collection and processing</li>
                                        <li>Performance analysis tools</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title className="h3">Quality Assurance</Card.Title>
                                    <Card.Text>
                                        Rigorous testing and validation processes ensured the 
                                        reliability and accuracy of our results.
                                    </Card.Text>
                                    <ul>
                                        <li>Test case development and validation</li>
                                        <li>Automated testing procedures</li>
                                        <li>Statistical validation methods</li>
                                        <li>95% confidence interval compliance</li>
                                        <li>Reproducibility verification</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                <section className="content-section">
                    <Row>
                        <Col>
                            <h2>Technologies & Tools</h2>
                            <p className="mb-3">
                                Our project utilized a comprehensive set of technologies and tools 
                                for network performance evaluation:
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <Badge key={index} bg="secondary" className="fs-6 p-2">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="content-section">
                    <Row>
                        <Col>
                            <h2>Testing Methodology</h2>
                            <Row>
                                <Col lg={4} className="mb-3">
                                    <h4>Network Configuration</h4>
                                    <p>
                                        Setup and configuration of Linux systems as software routers 
                                        with proper network interfaces and routing protocols.
                                    </p>
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <h4>Performance Testing</h4>
                                    <p>
                                        Systematic evaluation of throughput, delay, jitter, and packet 
                                        loss across different packet sizes and protocols.
                                    </p>
                                </Col>
                                <Col lg={4} className="mb-3">
                                    <h4>Data Analysis</h4>
                                    <p>
                                        Statistical analysis of results with confidence intervals and 
                                        comparative performance metrics across distributions.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default DevelopmentQA