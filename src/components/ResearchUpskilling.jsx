import { Container, Row, Col } from "react-bootstrap";

function ResearchUpskilling() {
    return (
        <main>
            <Container>
                <section className="content-section">
                    <Row>
                        <Col>
                            <h1 className="text-center mb-4">Research & Upskilling</h1>
                            <p>
                                This section contains information about our research activities and the 
                                upskilling efforts undertaken during the project.
                            </p>
                            
                            <h2>Research Activities</h2>
                            <p>
                                Our research focused on understanding the performance characteristics of 
                                different Linux distributions when used as software routers. We conducted 
                                comprehensive literature reviews and analyzed existing benchmarking 
                                methodologies.
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
                                Through our research and upskilling activities, we developed expertise in 
                                network performance evaluation, gained hands-on experience with Linux 
                                distributions, and enhanced our understanding of network protocols and 
                                routing technologies.
                            </p>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    )
}

export default ResearchUpskilling