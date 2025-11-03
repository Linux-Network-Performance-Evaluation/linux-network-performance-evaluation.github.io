import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
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
                    We utilised various communication platforms to maintain
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
              </Row>
            </Tab>

            <Tab eventKey="team-meetings" title="Team Meetings">
              <h2>Team Meeting Minutes</h2>
              <p>
                Comprehensive record of all team meetings showing collaborative
                work, decision-making processes, and progress tracking.
              </p>

              <h4>Recent Team Meetings</h4>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Meeting - Oct 28, 2025"
                    description="Latest team meeting covering final project preparations and deliverable reviews."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-10-28 (Team).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Meeting - Oct 27, 2025"
                    description="Pre-final meeting discussing presentation preparation and last-minute adjustments."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-10-27 (Team).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Meeting - Oct 16, 2025"
                    description="Progress review meeting focusing on testing completion and data analysis."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-10-16 (Team).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Meeting - Oct 15, 2025"
                    description="Coordination meeting for final testing phases and documentation completion."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-10-15 (Team).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Meeting - Oct 2, 2025"
                    description="Monthly progress review and planning for final project phases."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-10-02 (Team).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Meeting - Sep 25, 2025"
                    description="Testing methodology finalisation and resource allocation discussions."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-09-25 (Team).docx"
                  />
                </Col>
              </Row>

              <h4>Additional Team Meetings</h4>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Meeting - Sep 17, 2025"
                    description="Technical review and data collection methodology discussion."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-09-17 (Team).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Meeting - Aug 28, 2025"
                    description="Mid-project milestone review and progress assessment."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-08-28 (Team).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Meeting - Aug 14, 2025"
                    description="Summer progress update and technical coordination."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-08-14 (Team).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Meeting - Jun 18, 2025"
                    description="Mid-term project review and scope refinements."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-06-18 (Team).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team Kick-off Meeting"
                    description="Initial team formation meeting establishing goals, roles, and project approach."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Team-Meetings/Meeting Minutes 2025-03-18 (Team Kick-off).docx"
                  />
                </Col>
              </Row>
            </Tab>

            <Tab eventKey="client-meetings" title="Client Meetings">
              <h2>Client & Mentor Meeting Minutes</h2>
              <p>
                Records of all stakeholder meetings including client
                consultations and mentor guidance sessions.
              </p>

              <h4>Recent Client Meetings</h4>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Client Meeting - Oct 18, 2025"
                    description="Final client consultation before project completion and presentation."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client-Meetings/Meeting Minutes 2025-10-18 (Client).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Client Meeting - Oct 16, 2025"
                    description="Progress review and final deliverable discussions with client."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client-Meetings/Meeting Minutes 2025-10-16 (Client).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Client Meeting - Oct 2, 2025"
                    description="Monthly client check-in covering project progress and upcoming milestones."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client-Meetings/Meeting Minutes 2025-10-02 (Client).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Client Meeting - Sep 4, 2025"
                    description="September progress review and testing phase planning."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client-Meetings/Meeting Minutes 2025-09-04 (Client).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Client Meeting - Aug 14, 2025"
                    description="Mid-August progress update and methodology validation."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client-Meetings/Meeting Minutes 2025-08-14 (Client).docx"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Client Meeting - Jul 31, 2025"
                    description="Summer progress review and technical approach validation."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Minutes/Mentor-Client-Meetings/Meeting Minutes 2025-07-31 (Client).docx"
                  />
                </Col>
              </Row>

              <h4>Meeting Agendas</h4>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Team-Client Kick-off Agenda"
                    description="Structured agenda for initial project kick-off meeting with all stakeholders."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Agendas/Team-Client Kick-off Meeting Agenda.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Meeting Agenda - May 22, 2025"
                    description="Mid-project review meeting agenda covering progress assessment and planning."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Agendas/Team-Client Meeting Agenda 22-05-25.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Project Status Meeting Agenda"
                    description="Template agenda for regular project status review meetings."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Meetings/Agendas/Project_Status_Meeting_AgendaV2.doc"
                  />
                </Col>
              </Row>
            </Tab>

            <Tab eventKey="logbooks" title="Individual Logbooks">
              <h2>Team Member Logbooks</h2>
              <p>
                Individual contribution records showing personal work, learning,
                and project involvement for each team member.
              </p>

              <h4>Current Logbooks (v2)</h4>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Thomas Robinson - Logbook v2"
                    description="Updated personal logbook documenting technical contributions, research activities, and final project involvement."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Logbook - Thomas Robinson v2.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Nathan Quai Hoi - Logbook v2"
                    description="Updated documentation of data analysis work, scripting contributions, and final project participation."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Logbook - Nathan Quai Hoi v2.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Charmi Patel - Logbook v2"
                    description="Updated personal contribution documentation including research, analysis, and final project management activities."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Logbook - Charmi Patel v2.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Kylie Afable - Logbook v2"
                    description="Updated individual documentation of project contributions, learning activities, and final collaborative work."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Logbook - Kylie Afable v2.pdf"
                  />
                </Col>
              </Row>

              <h4>Version History (v1)</h4>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Thomas Robinson - Logbook v1"
                    description="Initial version of personal logbook documenting early technical contributions and research activities."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Version-History/Logbook - Thomas Robinson v1.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Win Phyo - Logbook v1"
                    description="Original individual contribution record including testing activities and technical development work."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Version-History/Logbook - Win Phyo v1.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Nathan Quai Hoi - Logbook v1"
                    description="Initial documentation of data analysis work, scripting contributions, and project participation."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Version-History/Logbook - Nathan Quai Hoi v1.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Zafar Azad - Logbook v1"
                    description="Original record of configuration work, testing activities, and collaborative contributions."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Version-History/Logbook - Zafar Azad v1.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Charmi Patel - Logbook v1"
                    description="Initial personal contribution documentation including research, analysis, and project management activities."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Version-History/Logbook - Charmi Patel v1.pdf"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Kylie Afable - Logbook v1"
                    description="Original individual documentation of project contributions, learning activities, and collaborative work."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Version-History/Logbook - Kylie Afable v1.pdf"
                  />
                </Col>
              </Row>
            </Tab>

            <Tab eventKey="evidence" title="Team Evidence">
              <h2>Individual Contribution Evidence</h2>
              <p>
                Specific work samples and evidence demonstrating individual team
                member contributions to the project.
              </p>

              <h4>Thomas - Technical Implementation</h4>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Network Testing Scripts"
                    description="IPv4 and IPv6 testing scripts for network performance evaluation."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Evidence/Thomas/ipv4.sh"
                    documentType="code"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Log Export Automation"
                    description="Script for automated log file export and data collection."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Evidence/Thomas/export_logs.sh"
                    documentType="code"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Testing Methodology Documentation"
                    description="Detailed methodology documentation for network performance testing procedures."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Evidence/Thomas/methodology.txt"
                    documentType="text"
                  />
                </Col>
              </Row>

              <h4>Nathan - Data Analysis</h4>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Data Converter Script"
                    description="Python script for converting and processing network performance data."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Evidence/Nathan/dat-converter.py"
                    documentType="code"
                  />
                </Col>
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Git Commit History"
                    description="Complete Git commit history showing Nathan's code contributions and development timeline."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Evidence/Nathan/git_commits.txt"
                    documentType="text"
                  />
                </Col>
              </Row>

              <h4>Win - Automation</h4>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Environment Setup Script"
                    description="Script for automated testing environment creation and configuration."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Evidence/Win/create_script.sh"
                    documentType="code"
                  />
                </Col>
              </Row>

              <h4>Larissa - Analysis Tools</h4>
              <Row className="mb-4">
                <Col md={4} className="mb-3">
                  <DocumentCard
                    title="Jitter Analysis Code"
                    description="MATLAB code for jitter analysis and statistical processing of network performance data."
                    documentPath="/Portfolio/03-Communication-and-Teamwork/Logbooks/Evidence/Larissa/Jitter MATLAB Code"
                    documentType="code"
                  />
                </Col>
              </Row>
            </Tab>
          </Tabs>
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
                        description="Project finalisation and deliverables review."
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
                        description="Project wrap-up and deliverables finalisation."
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
