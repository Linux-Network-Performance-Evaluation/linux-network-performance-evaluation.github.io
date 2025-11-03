import { Card, Col, Container, Row } from "react-bootstrap";

function Home() {
  const teamMembers = [
    { name: "Thomas Robinson", url: "https://github.com/TankedThomas" },
    { name: "Win Phyo", url: "https://github.com/cyber-wpmm" },
    { name: "Nathan Quai Hoi", url: "https://github.com/OPSTARGAMER" },
    { name: "Zafar Azad", url: "" },
    { name: "Larissa Goh", url: "https://github.com/larissagoh" },
    { name: "Charmi Patel", url: "https://github.com/charrrrmi" },
    { name: "Kylie Afable", url: "https://github.com/kylieafablee" },
  ];

  return (
    <main>
      <Container>
        {/* Project Overview Section */}
        <section className="content-section">
          <Row>
            <Col>
              <h2>Project Overview</h2>
              <p>
                This portfolio presents our project evaluating the network performance
                of Linux-based operating systems in a physical environment.
                Explore each section using the navigation above to learn about
                our research, planning, teamwork, development, and more.
              </p>
            </Col>
          </Row>
        </section>

        {/* Project Objectives Section */}
        <section className="content-section">
          <Row>
            <Col>
              <h2>Project Objectives</h2>
              <p>
                The goal of this project is to evaluate the performance of three
                latest Linux-based Operating System distributions –{" "}
                <strong>Fedora, Ubuntu, and Kali Linux</strong>. These operating
                systems need to be configured as software routers before running
                evaluations. The tool <strong><a href="https://traffic.comics.unina.it/software/ITG/">D-ITG</a></strong> will be used
                to generate evaluation traffic.
              </p>

              <h3>Objectives to be achieved include:</h3>
              <Row>
                <Col lg={6}>
                  <Card className="h-100 border-0 bg-light">
                    <Card.Body>
                      <Card.Title className="h5">Network Setup</Card.Title>
                      <ul>
                        <li>
                          Setup a network with four computers: two clients and
                          two servers (servers configured as routers)
                        </li>
                        <li>
                          Set up physical machines with Fedora, Ubuntu, and Kali
                          Linux distributions
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Card className="h-100 border-0 bg-light">
                    <Card.Body>
                      <Card.Title className="h5">Protocol Testing</Card.Title>
                      <ul>
                        <li>Use TCP and UDP as transmission protocols</li>
                        <li>Evaluate on IPv4</li>
                        <li>Evaluate on IPv6</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col lg={6}>
                  <Card className="h-100 border-0 bg-light">
                    <Card.Body>
                      <Card.Title className="h5">
                        Performance Evaluation
                      </Card.Title>
                      <ul>
                        <li>
                          Each evaluation should run a minimum of ten times
                        </li>
                        <li>
                          Evaluate for throughput, delay, jitter, and packet
                          loss
                        </li>
                        <li>
                          Any evaluation that falls outside the 95% confidence
                          interval needs to be re-run
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Card className="h-100 border-0 bg-light">
                    <Card.Body>
                      <Card.Title className="h5">
                        Testing Methodology
                      </Card.Title>
                      <ul>
                        <li>
                          Each evaluation will range from 128 Bytes to 1536 Bytes
                        </li>
                        <li>
                          Follow the Software Testing Life Cycle (STLC)
                          methodology
                        </li>
                        <li>
                          Include Requirement Analysis, Planning, Case
                          Development, Environment Setup, Execution, and Closure
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* Team Members Section */}
        <section className="content-section">
          <Row>
            <Col>
              <h2 className="text-center mb-4">Team Members</h2>
              <div className="team-grid">
                {teamMembers.map((member, index) => (
                  <a
                    key={index}
                    className="team-member"
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {member.name}
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}

export default Home;
