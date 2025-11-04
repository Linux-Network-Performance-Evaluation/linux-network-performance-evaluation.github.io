import { Card, Col, Container, Row } from "react-bootstrap";

function Home() {
  const teamMembers = [
    {
      name: "Thomas Robinson",
      github: "https://github.com/TankedThomas",
      linkedin: "",
    },
    {
      name: "Win Phyo",
      github: "https://github.com/cyber-wpmm",
      linkedin: "https://www.linkedin.com/in/winphyo-it/",
    },
    {
      name: "Nathan Quai Hoi",
      github: "https://github.com/OPSTARGAMER",
      linkedin: "https://www.linkedin.com/in/nathan-quai-hoi-99a254301/",
    },
    {
      name: "Zafar Azad",
      github: "https://github.com/jaf12345",
      linkedin: "https://www.linkedin.com/in/zafar-a-742134267/",
    },
    {
      name: "Larissa Goh",
      github: "https://github.com/larissagoh",
      linkedin: "https://www.linkedin.com/in/larissa-goh/",
    },
    {
      name: "Charmi Patel",
      github: "https://github.com/charrrrmi",
      linkedin: "",
    },
    {
      name: "Kylie Afable",
      github: "https://github.com/kylieafablee",
      linkedin: "",
    },
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
                This portfolio presents our project evaluating the network
                performance of Linux-based operating systems in a physical
                environment. Explore each section using the navigation above to
                learn about our research, planning, teamwork, development, and
                more.
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
                evaluations. The tool{" "}
                <strong>
                  <a href="https://traffic.comics.unina.it/software/ITG/">
                    D-ITG
                  </a>
                </strong>{" "}
                will be used to generate evaluation traffic.
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
                          Each evaluation will range from 128 Bytes to 1536
                          Bytes
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
              <p className="text-center mb-4 text-muted">
                Connect with our team members on their professional platforms
              </p>
              <div className="team-grid">
                {teamMembers.map((member, index) => (
                  <div key={index} className="team-member-card">
                    <div className="team-member-name">{member.name}</div>
                    <div className="team-member-links">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link github-link"
                          title={`${member.name}'s GitHub`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link linkedin-link"
                          title={`${member.name}'s LinkedIn`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          LinkedIn
                        </a>
                      )}
                      {!member.github && !member.linkedin && (
                        <span className="no-links">No links available</span>
                      )}
                    </div>
                  </div>
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
