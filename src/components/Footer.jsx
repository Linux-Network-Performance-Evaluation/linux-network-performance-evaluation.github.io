import { Container } from "react-bootstrap";

function Footer() {

    const CurrentYear = () => <>{new Date().getFullYear()}</>;

    return (
        <footer>
            <Container>
                <small>&copy; <CurrentYear /> Linux Network Performance Evaluation Physical Team</small>
            </Container>
        </footer>
    )

}

export default Footer