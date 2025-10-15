import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    const CurrentYear = () => <>{new Date().getFullYear()}</>;

    return (
        <footer className="mt-5 py-4 border-top">
            <Container>
                <Row>
                    <Col md={8}>
                        <small className="text-muted">
                            &copy; <CurrentYear /> Linux Network Performance Evaluation Physical Team
                        </small>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <small className="text-muted">
                            Built with React & Bootstrap
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer