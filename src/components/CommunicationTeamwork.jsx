import { Container, Row, Col, Card, Tabs, Tab } from "react-bootstrap";
import { DocumentCard } from "./DocumentViewer";

function CommunicationTeamwork() {
  return (
    <main>
      <Container>
        <section className="content-section">
          <Row>
            <Col>
              <h1 className="text-center mb-4">Communication & Teamwork</h1>
              <p>
                Effective communication and teamwork were essential to the
                success of our project. This section highlights our
                collaborative processes and communication strategies.
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
                    Regular team meetings were conducted to ensure all members
                    were aligned with project objectives and progress. We
                    maintained detailed meeting minutes and action items.
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
                    We utilized various communication platforms to maintain
                    effective collaboration across different aspects of the
                    project.
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
                Our team implemented structured collaborative processes to
                ensure efficient workflow and knowledge sharing throughout the
                project lifecycle.
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

        <section className="content-section">
          <Tabs
            defaultActiveKey="client-documents"
            id="communication-tabs"
            className="mb-4"
          >
            <Tab eventKey="client-documents" title="Client Documents">
              <h2>Client Communication</h2>
              <p>
                Official documentation and communication materials related to
                client interactions and project agreements.
              </p>

              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Client Contract"
                    description="Official contract document outlining project scope, deliverables, timelines, and responsibilities."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Client Contract.docx"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Client Feedback Form"
                    description="Structured feedback form for collecting client input on project progress and deliverables."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Client Feedback Form.docx"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Client Feedback Form (Signed)"
                    description="Completed and signed client feedback form with official project evaluation."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Client Feedback Form_signed.pdf"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Group Details"
                    description="Team composition, contact information, and role assignments for the project."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Group Details.xlsx"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Project Timetables"
                    description="Detailed scheduling and timeline information for project milestones and activities."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Timetables.xlsx"
                  />
                </Col>
              </Row>
            </Tab>

            <Tab eventKey="meeting-agendas" title="Meeting Agendas">
              <h2>Meeting Agendas</h2>
              <p>
                Structured agendas for all team and client meetings to ensure
                productive discussions and clear objectives.
              </p>

              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team-Client Kick-off Meeting Agenda"
                    description="Initial project kick-off meeting agenda with introductions and project overview."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Agendas/Team-Client Kick-off Meeting Agenda.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Meeting Agenda 27-03-25"
                    description="Project status and technical discussion meeting agenda."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Agendas/Team-Client Meeting Agenda 27-03-25.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Meeting Agenda 01-05-25"
                    description="Mid-project review and progress assessment meeting agenda."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Agendas/Team-Client Meeting Agenda 01-05-25.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Meeting Agenda 22-05-25"
                    description="Testing phase discussion and results review meeting agenda."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Agendas/Team-Client Meeting Agenda 22-05-25.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Project Status Meeting Agenda V2"
                    description="Updated project status meeting format and discussion points."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Agendas/Project_Status_Meeting_AgendaV2.doc"
                  />
                </Col>
              </Row>
            </Tab>

            <Tab eventKey="meeting-minutes" title="Meeting Minutes">
              <Tabs
                defaultActiveKey="client-minutes"
                id="minutes-tabs"
                className="mb-3"
              >
                <Tab eventKey="client-minutes" title="Client & Mentor Meetings">
                  <h3>Client & Mentor Meeting Minutes</h3>
                  <p>
                    Detailed records of all client and mentor meetings,
                    including discussions, decisions, and action items.
                  </p>

                  <Row className="mb-4">
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Client Kick-off Meeting (20-03-25)"
                        description="Initial project kick-off meeting with client introductions and project scope discussion."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 20-03-2025 (Client Kick-off).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Supervisor Meeting (27-03-25)"
                        description="Academic supervisor meeting discussing project requirements and expectations."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 27-03-2025 (Supervisor).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Client Meeting (03-04-25)"
                        description="Project progress review and technical requirements clarification."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 03-04-2025 (Client).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Client Meeting (01-05-25)"
                        description="Mid-project review and milestone assessment."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 01-05-2025 (Client).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Client Meeting (22-05-25)"
                        description="Testing methodology review and results discussion."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 22-05-2025 (Client).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Mentor Meeting (29-05-25)"
                        description="Academic mentor guidance session and project evaluation."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 29-05-2025 (Mentor).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Client Meeting (05-06-25)"
                        description="Results analysis and findings presentation."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 05-06-2025 (Client).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Client Meeting (19-06-25)"
                        description="Project finalization and deliverables review."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 19-06-2025 (Client) .docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Client Meeting (31-07-25)"
                        description="Final project review and documentation submission."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 31-07-2025 (Client).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Client Meeting (14-08-25)"
                        description="Project conclusion and final assessments."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 14-08-2025 (Client).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Client Meeting (02-10-25)"
                        description="Post-project evaluation and lessons learned session."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client Meeting Minutes/Meeting Minutes 02-10-2025 (Client).docx"
                      />
                    </Col>
                  </Row>
                </Tab>

                <Tab eventKey="team-minutes" title="Team Meetings">
                  <h3>Team Meeting Minutes</h3>
                  <p>
                    Internal team meeting records documenting collaboration,
                    task assignments, and progress updates.
                  </p>

                  <Row className="mb-4">
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Kick-off (18-03-25)"
                        description="Initial team formation and role assignment meeting."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 18-03-2025 (Team Kick-off).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (20-03-25)"
                        description="Project planning and task distribution session."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 20-03-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (31-03-25)"
                        description="Technical requirements review and planning updates."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 31-03-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (03-04-25)"
                        description="Development progress and technical challenges discussion."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 03-04-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (04-04-25)"
                        description="Configuration setup and testing strategy planning."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 04-04-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (07-04-25)"
                        description="Implementation progress and problem-solving session."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 07-04-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (15-04-25)"
                        description="Testing phase preparation and coordination."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 15-04-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (22-04-25)"
                        description="Mid-project review and quality assurance planning."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 22-04-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (30-04-25)"
                        description="Testing execution and data collection coordination."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 30-04-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (08-05-25)"
                        description="Results analysis and documentation planning."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 08-05-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (15-05-25)"
                        description="Data validation and report preparation session."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 15-05-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (28-05-25)"
                        description="Final testing and documentation completion."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 28-05-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (18-06-25)"
                        description="Project wrap-up and deliverables finalization."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 18-06-2025 (Team).docx"
                      />
                    </Col>
                    <Col md={4} className="mb-3">
                      <DocumentCard
                        title="Team Meeting (28-08-25)"
                        description="Post-project review and lessons learned session."
                        documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team Meeting Minutes/Meeting Minutes 28-08-2025 (Team).docx"
                      />
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </Tab>

            <Tab eventKey="logbooks" title="Logbooks">
              <h2>Individual Logbooks</h2>
              <p>
                Personal development logs and individual contributions to the
                project from each team member.
              </p>

              <Row className="mb-4">
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Charmi Patel's Logbook"
                    description="Weekly reflection and learning log documenting personal growth and project contributions."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Logbook - Charmi Patel.pdf"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Kylie Afable's Logbook"
                    description="Personal development journal tracking technical skills and project involvement."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Logbook - Kylie Afable.xlsx"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Nathan Quai Hoi's Logbook"
                    description="Individual progress log and reflection on project experiences and learning outcomes."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Logbook - Nathan Quai Hoi.pdf"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Thomas Robinson's Logbook"
                    description="Personal development tracking and project contribution documentation."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Logbook - Thomas Robinson.pdf"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Win Phyo's Logbook"
                    description="Weekly learning log and personal reflection on project participation."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Logbook - Win Phyo.pdf"
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <DocumentCard
                    title="Zafar Azad's Logbook"
                    description="Individual project journal documenting growth and contribution throughout the project."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Logbook - Zafar Azad.pdf"
                  />
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>Key Achievements</h2>
              <p>
                Through effective communication and teamwork, we successfully
                delivered a comprehensive network performance evaluation project
                that met all client requirements and academic standards.
              </p>

              <Row>
                <Col md={6} className="mb-3">
                  <h4>Communication Excellence</h4>
                  <ul>
                    <li>100% attendance at scheduled meetings</li>
                    <li>Comprehensive documentation of all interactions</li>
                    <li>Proactive client engagement and feedback collection</li>
                    <li>Clear and timely progress reporting</li>
                  </ul>
                </Col>
                <Col md={6} className="mb-3">
                  <h4>Team Collaboration</h4>
                  <ul>
                    <li>Effective task distribution and coordination</li>
                    <li>Successful integration of diverse skill sets</li>
                    <li>Mutual support and knowledge sharing</li>
                    <li>Collective problem-solving and decision-making</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}

export default CommunicationTeamwork;
