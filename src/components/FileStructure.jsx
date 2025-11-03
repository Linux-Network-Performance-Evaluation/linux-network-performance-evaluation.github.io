import { Container, Row, Col } from "react-bootstrap";

function FileStructure() {
  return (
    <main>
      <Container>
        <section className="content-section">
          <Row>
            <Col>
              <h1 className="text-center mb-4">Complete File Structure</h1>
              <p className="text-center mb-5">
                This document provides a comprehensive overview of the entire
                file structure for the R&D Project, including all files and
                directories.
              </p>
              <div className="text-center mb-4">
                <small className="text-muted">
                  <em>Last Updated: October 30, 2025</em>
                  <br />
                  <strong>Total Files: 950+</strong>
                </small>
              </div>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>Root Directory</h2>
              <pre className="file-structure-pre">
                {`Portfolio/
├── .gitignore
├── desktop.ini
├── README.md
└── Team-Portfolio-Submission.pdf`}
              </pre>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>01-Research-and-Upskilling/</h2>
              <pre className="file-structure-pre">
                {`01-Research-and-Upskilling/
├── 01. Skills Matrix.xlsx
├── Upskilling/
│   ├── 02. Upskilling Management Plan.docx
│   ├── D-ITG-2.8.1-manual.pdf
│   ├── Ubuntu CLI Cheat Sheet 2025.pdf
│   └── QEMU/
│       ├── macOS/
│       │   ├── fedora.sh
│       │   ├── kali.sh
│       │   └── ubuntu.sh
│       └── Windows-Linux/
│           ├── fedora.sh
│           ├── kali.sh
│           └── ubuntu.sh`}
              </pre>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>02-Planning-and-Control/</h2>
              <pre className="file-structure-pre">
                {`02-Planning-and-Control/
├── Deliverable Acceptance Form.docx
├── Handover Plan.docx
├── Project Brief.docx
├── Status Report v1.5.docx
├── Status Report v1.6.docx
├── Mid-Term Review/
│   ├── Linux Network Evaluation (Physical) Mid-Term Status Report.pdf
│   ├── Status Report.pptx
│   ├── Status Report v1.4.docx
│   ├── Status Report v1.5.docx
│   └── Version-History/
│       ├── Status Report v1.0.docx
│       ├── Status Report v1.1.docx
│       ├── Status Report v1.2.docx
│       └── Status Report v1.3.docx
└── Proposal/
    ├── Planning-Documents/
    │   ├── Current/
    │   │   ├── 08. Work Breakdown Structure v3.1.docx
    │   │   ├── 08. Work Breakdown Structure Diagram v3.png
    │   │   ├── 09. Gantt Chart v3.mpp
    │   │   ├── 15. Risk Register v3.xlsx
    │   │   ├── 16. Issue Log v3.1.docx
    │   │   ├── 21. Quality Assurance Plan v4.docx
    │   │   └── Network Diagram.png
    │   └── Version-History/
    │       ├── v1.0-Initial-Proposal/
    │       │   ├── 01. Scope Statement v1.docx
    │       │   ├── 02. Stakeholder Register.docx
    │       │   ├── 03. Communication Management Plan.docx
    │       │   ├── 04. Stakeholder Management Plan.docx
    │       │   ├── 05. Network Diagram v1.png
    │       │   ├── 07. Milestone Report v1.docx
    │       │   ├── 08. Work Breakdown Structure v1.docx
    │       │   ├── 08. Work Breakdown Structure Diagram v1.png
    │       │   ├── 09. Gantt Chart.mpp
    │       │   ├── 10. Project Charter.docx
    │       │   ├── 11. Requirement Traceability Matrix v1.xlsx
    │       │   ├── 12. Team Contract.docx
    │       │   ├── 13. Client Contract.docx
    │       │   ├── 14. Team Schedule Table v1.xlsx
    │       │   ├── 15. Risk Register v1.xlsx
    │       │   ├── 16. Issue Log v1.docx
    │       │   ├── 17. Change Management Plan.docx
    │       │   ├── 21. Quality Assurance Plan v1.docx
    │       │   ├── 21. Quality Assurance Diagram.png
    │       │   └── Gantt-Chart-v1/
    │       │       ├── 20. Gantt Chart v1.0.mpp
    │       │       ├── 20. Gantt Chart v1.1.mpp
    │       │       ├── 20. Gantt Chart v1.2.mpp
    │       │       └── 20. Gantt Chart v1.3.mpp
    │       ├── v2.0-Post-Feedback/
    │       │   ├── 01. Scope Statement v2.docx
    │       │   ├── 07. Milestone Report Version 2.docx
    │       │   ├── 08. Work Breakdown Structure v2.docx
    │       │   ├── 08. Work Breakdown Structure Diagram v2.png
    │       │   ├── 09. Gantt Chart v2.mpp
    │       │   ├── 11. Requirement Traceability Matrix v2.xlsx
    │       │   ├── 14. Team Schedule Table v2.xlsx
    │       │   ├── 15. Risk Register v2.xlsx
    │       │   ├── 16. Issue Log v2.docx
    │       │   ├── 21. Quality Assurance Plan v2.docx
    │       │   ├── 22. Conflict Resolution Plan.docx
    │       │   └── Network Diagram.ai
    │       └── v3.0-Refinements/
    │           ├── 08. Work Breakdown Structure v3.0.docx
    │           ├── 16. Issue Log v3.docx
    │           └── 21. Quality Assurance Plan v3.docx
    ├── Proposal-Document/
    │   ├── Proposal_v2.4.docx
    │   ├── Proposal_v2.4.pdf
    │   ├── Proposal_v2.5.docx
    │   └── Version-History/
    │       ├── Proposal_v0.1.docx
    │       ├── Proposal_v1.0.docx
    │       ├── Proposal_v1.01.docx
    │       ├── Proposal_v1.02.docx
    │       ├── Proposal_v1.03.docx
    │       ├── Proposal_v1.04.docx
    │       ├── Proposal_v1.05.docx
    │       ├── Proposal_v1.1.docx
    │       ├── Proposal_v1.2.docx
    │       ├── Proposal_v1.3.docx
    │       ├── Proposal_v1.4.docx
    │       ├── Proposal_v1.5.docx
    │       ├── Proposal_v1.6.docx
    │       ├── Proposal_v1.7.docx
    │       ├── Proposal_v1.8.docx
    │       ├── Proposal_v1.9.docx
    │       ├── Proposal_v2.0.docx
    │       ├── Proposal_v2.1.docx
    │       ├── Proposal_v2.2.docx
    │       ├── Proposal_v2.2_Submission.pdf
    │       ├── Proposal_v2.3.docx
    │       └── Proposal_v2.3.pdf
    └── Proposal-Presentation/
        ├── Proposal Powerpoint.pptx
        └── Version-History/
            └── First Draft Powerpoint.pptx`}
              </pre>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>03-Communication-and-Teamwork/</h2>
              <pre className="file-structure-pre">
                {`03-Communication-and-Teamwork/
├── Attendance.xlsx
├── Client Contract.docx
├── Client Feedback Form.docx
├── Client Feedback Form_signed.pdf
├── Group Details.xlsx
├── Timetables.xlsx
├── Logbooks/
│   ├── Logbook - Charmi Patel v2.pdf
│   ├── Logbook - Kylie Afable v2.xlsx
│   ├── Logbook - Nathan Quai Hoi v2.pdf
│   ├── Logbook - Thomas Robinson v2.pdf
│   ├── Logbook - Win Phyo v2.pdf
│   ├── Logbook - Zafar Azad v2.pdf
│   └── Evidence/
│       ├── Charmi/
│       ├── Kylie/
│       ├── Larissa/
│       │   └── Jitter MATLAB Code
│       ├── Nathan/
│       │   └── dat-converter.py
│       ├── Thomas/
│       │   ├── D-ITG.pdf
│       │   ├── Network IPs.pdf
│       │   ├── download_ubuntu_packages.sh
│       │   ├── export_logs.sh
│       │   ├── gpu-driver-fix.png
│       │   ├── ip_addresses.txt
│       │   ├── ipv4.sh
│       │   ├── ipv4_old.sh
│       │   ├── ipv4_tcp.sh
│       │   ├── ipv6.sh
│       │   ├── ipv6_old.sh
│       │   ├── linux-1.png
│       │   ├── linux-2.png
│       │   ├── logins.png
│       │   ├── methodology.txt
│       │   └── packetsizes.txt
│       ├── Win/
│       │   └── create_script.sh
│       └── Zafar/
└── Meetings/
    ├── Agendas/
    │   ├── Project_Status_Meeting_AgendaV2.doc
    │   ├── Team-Client Kick-off Meeting Agenda.docx
    │   ├── Team-Client Kick-off Meeting Agenda.pdf
    │   ├── Team-Client Meeting Agenda 01-05-25.docx
    │   ├── Team-Client Meeting Agenda 01-05-25.pdf
    │   ├── Team-Client Meeting Agenda 22-05-25.docx
    │   ├── Team-Client Meeting Agenda 22-05-25.pdf
    │   ├── Team-Client Meeting Agenda 27-03-25.docx
    │   └── Team-Client Meeting Agenda 27-03-25.pdf
    └── Minutes/
        ├── Mentor-Client-Meetings/
        │   ├── Meeting Minutes 2025-03-20 (Client Kick-off).docx
        │   ├── Meeting Minutes 2025-03-27 (Mentor).docx
        │   ├── Meeting Minutes 2025-04-03 (Client).docx
        │   ├── Meeting Minutes 2025-05-01 (Client).docx
        │   ├── Meeting Minutes 2025-05-22 (Client).docx
        │   ├── Meeting Minutes 2025-05-29 (Mentor).docx
        │   ├── Meeting Minutes 2025-06-05 (Client).docx
        │   ├── Meeting Minutes 2025-06-19 (Client).docx
        │   ├── Meeting Minutes 2025-07-31 (Client).docx
        │   ├── Meeting Minutes 2025-08-14 (Client).docx
        │   ├── Meeting Minutes 2025-09-04 (Client).docx
        │   ├── Meeting Minutes 2025-10-02 (Client).docx
        │   ├── Meeting Minutes 2025-10-16 (Client).docx
        │   └── Meeting Minutes 2025-10-18 (Client).docx
        └── Team-Meetings/
            ├── Meeting Minutes 2025-03-18 (Team Kick-off).docx
            ├── Meeting Minutes 2025-03-20 (Team).docx
            ├── Meeting Minutes 2025-03-31 (Team).docx
            ├── Meeting Minutes 2025-04-03 (Team).docx
            ├── Meeting Minutes 2025-04-04 (Team).docx
            ├── Meeting Minutes 2025-04-07 (Team).docx
            ├── Meeting Minutes 2025-04-15 (Team).docx
            ├── Meeting Minutes 2025-04-22 (Team).docx
            ├── Meeting Minutes 2025-04-30 (Team).docx
            ├── Meeting Minutes 2025-05-08 (Team).docx
            ├── Meeting Minutes 2025-05-15 (Team).docx
            ├── Meeting Minutes 2025-05-28 (Team).docx
            ├── Meeting Minutes 2025-06-18 (Team).docx
            ├── Meeting Minutes 2025-08-14 (Team).docx
            ├── Meeting Minutes 2025-08-28 (Team).docx
            ├── Meeting Minutes 2025-09-17 (Team).docx
            ├── Meeting Minutes 2025-09-25 (Team).docx
            ├── Meeting Minutes 2025-10-02 (Team).docx
            ├── Meeting Minutes 2025-10-15 (Team).docx
            ├── Meeting Minutes 2025-10-16 (Team).docx
            ├── Meeting Minutes 2025-10-27 (Team).docx
            └── Meeting Minutes 2025-10-28 (Team).docx`}
              </pre>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>04-Development-and-Quality-Assurance/</h2>
              <div className="mb-4">
                <h3>Evaluation-Testing</h3>
                <pre className="file-structure-pre">
                  {`04-Development-and-Quality-Assurance/
├── Evaluation-Testing/
│   ├── Chrony NTP server time synchronisation.docx
│   ├── How to run evaluation testing.docx
│   ├── Methodology - Fedora Server.docx
│   ├── Methodology - Kali Linux.docx
│   ├── Methodology - Ubuntu Server.docx
│   ├── Configs/
│   │   ├── config_files.sh
│   │   ├── Fedora/
│   │   │   ├── pc1/
│   │   │   │   ├── etc/
│   │   │   │   │   ├── chrony.conf
│   │   │   │   │   ├── netplan/
│   │   │   │   │   │   └── 99-netplan.yaml
│   │   │   │   │   └── udev/
│   │   │   │   │       └── rules.d/
│   │   │   │   │           └── 70-persistent-usb-tether.rules
│   │   │   │   └── home/
│   │   │   │       └── sender/
│   │   │   │           ├── config_files.sh
│   │   │   │           ├── ipv4.sh
│   │   │   │           └── ipv6.sh
│   │   │   ├── pc2/
│   │   │   │   ├── etc/
│   │   │   │   │   ├── chrony.conf
│   │   │   │   │   ├── netplan/
│   │   │   │   │   │   └── 99-netplan.yaml
│   │   │   │   │   └── udev/
│   │   │   │   │       └── rules.d/
│   │   │   │   │           └── 70-persistent-usb-tether.rules
│   │   │   │   └── home/
│   │   │   │       └── receiver/
│   │   │   │           └── export_logs.sh
│   │   │   ├── router1/
│   │   │   │   ├── etc/
│   │   │   │   │   ├── chrony.conf
│   │   │   │   │   ├── netplan/
│   │   │   │   │   │   └── 99-netplan.yaml
│   │   │   │   │   └── udev/
│   │   │   │   │       └── rules.d/
│   │   │   │   │           └── 70-persistent-usb-tether.rules
│   │   │   └── router2/
│   │   │       └── etc/
│   │   │           ├── chrony.conf
│   │   │           ├── netplan/
│   │   │           │   └── 99-netplan.yaml
│   │   │           └── udev/
│   │   │               └── rules.d/
│   │   │                   └── 70-persistent-usb-tether.rules
│   │   ├── Kali/
│   │   │   ├── pc1/
│   │   │   │   ├── etc/
│   │   │   │   │   ├── chrony/
│   │   │   │   │   │   └── chrony.conf
│   │   │   │   │   ├── netplan/
│   │   │   │   │   │   └── 99-netplan.yaml
│   │   │   │   │   └── udev/
│   │   │   │   │       └── rules.d/
│   │   │   │   │           └── 70-persistent-usb-tether.rules
│   │   │   │   └── home/
│   │   │   │       └── sender/
│   │   │   │           ├── config_files.sh
│   │   │   │           ├── ipv4.sh
│   │   │   │           └── ipv6.sh
│   │   │   ├── pc2/
│   │   │   │   ├── etc/
│   │   │   │   │   ├── chrony/
│   │   │   │   │   │   └── chrony.conf
│   │   │   │   │   ├── netplan/
│   │   │   │   │   │   └── 99-netplan.yaml
│   │   │   │   │   └── udev/
│   │   │   │   │       └── rules.d/
│   │   │   │   │           └── 70-persistent-usb-tether.rules
│   │   │   │   └── home/
│   │   │   │       └── receiver/
│   │   │   │           └── export_logs.sh
│   │   │   ├── router1/
│   │   │   │   └── etc/
│   │   │   │       ├── chrony/
│   │   │   │       │   └── chrony.conf
│   │   │   │       ├── netplan/
│   │   │   │       │   └── 99-netplan.yaml
│   │   │   │       └── udev/
│   │   │   │           └── rules.d/
│   │   │   │               └── 70-persistent-usb-tether.rules
│   │   │   └── router2/
│   │   │       └── etc/
│   │   │           ├── chrony/
│   │   │           │   └── chrony.conf
│   │   │           ├── netplan/
│   │   │           │   └── 99-netplan.yaml
│   │   │           └── udev/
│   │   │               └── rules.d/
│   │   │                   └── 70-persistent-usb-tether.rules
│   │   └── Ubuntu/
│   │       ├── pc1/
│   │       │   ├── etc/
│   │       │   │   ├── chrony/
│   │       │   │   │   └── chrony.conf
│   │       │   │   ├── netplan/
│   │       │   │   │   └── 50-cloud-init.yaml
│   │       │   │   └── udev/
│   │       │   │       └── rules.d/
│   │       │   │           └── 70-persistent-usb-tether.rules
│   │       │   └── home/
│   │       │       └── sender/
│   │       │           ├── config_files.sh
│   │       │           ├── ipv4.sh
│   │       │           └── ipv6.sh
│   │       ├── pc2/
│   │       │   ├── etc/
│   │       │   │   ├── chrony/
│   │       │   │   │   └── chrony.conf
│   │       │   │   ├── netplan/
│   │       │   │   │   └── 50-cloud-init.yaml
│   │       │   │   └── udev/
│   │       │   │       └── rules.d/
│   │       │   │           └── 70-persistent-usb-tether.rules
│   │       │   └── home/
│   │       │       └── receiver/
│   │       │           └── export_logs.sh
│   │       ├── router1/
│   │       │   └── etc/
│   │       │       ├── chrony/
│   │       │       │   └── chrony.conf
│   │       │       ├── netplan/
│   │       │       │   └── 50-cloud-init.yaml
│   │       │       └── udev/
│   │       │           └── rules.d/
│   │       │               └── 70-persistent-usb-tether.rules
│   │       └── router2/
│   │           └── etc/
│   │               ├── chrony/
│   │               │   └── chrony.conf
│   │               ├── netplan/
│   │               │   └── 50-cloud-init.yaml
│   │               └── udev/
│   │                   └── rules.d/
│   │                       └── 70-persistent-usb-tether.rules`}
                </pre>
              </div>

              <div className="mb-4">
                <h3>Logs and Data Analysis</h3>
                <pre className="file-structure-pre">
                  {`   ├── Logs/
│   │   ├── Compare Data.xlsx
│   │   ├── Compare Data - Copy.xlsx
│   │   ├── Ubuntu_Fedora_Sample_Graphing.xlsx
│   │   ├── clean_data.py
│   │   ├── excel.py
│   │   ├── export_logs.sh
│   │   ├── rename.sh
│   │   ├── Fedora/
│   │   │   ├── Fedora_Data.xlsx
│   │   │   ├── ipv4_tcp_128.txt
│   │   │   ├── ipv4_tcp_256.txt
│   │   │   ├── ipv4_tcp_384.txt
│   │   │   ├── ipv4_tcp_512.txt
│   │   │   ├── ipv4_tcp_640.txt
│   │   │   ├── ipv4_tcp_768.txt
│   │   │   ├── ipv4_tcp_896.txt
│   │   │   ├── ipv4_tcp_1024.txt
│   │   │   ├── ipv4_tcp_1152.txt
│   │   │   ├── ipv4_tcp_1280.txt
│   │   │   ├── ipv4_tcp_1408.txt
│   │   │   ├── ipv4_tcp_1536.txt
│   │   │   ├── ipv4_udp_128.txt
│   │   │   ├── ipv4_udp_256.txt
│   │   │   ├── ipv4_udp_384.txt
│   │   │   ├── ipv4_udp_512.txt
│   │   │   ├── ipv4_udp_640.txt
│   │   │   ├── ipv4_udp_768.txt
│   │   │   ├── ipv4_udp_896.txt
│   │   │   ├── ipv4_udp_1024.txt
│   │   │   ├── ipv4_udp_1152.txt
│   │   │   ├── ipv4_udp_1280.txt
│   │   │   ├── ipv4_udp_1408.txt
│   │   │   ├── ipv4_udp_1536.txt
│   │   │   ├── ipv6_tcp_128.txt
│   │   │   ├── ipv6_tcp_256.txt
│   │   │   ├── ipv6_tcp_384.txt
│   │   │   ├── ipv6_tcp_512.txt
│   │   │   ├── ipv6_tcp_640.txt
│   │   │   ├── ipv6_tcp_768.txt
│   │   │   ├── ipv6_tcp_896.txt
│   │   │   ├── ipv6_tcp_1024.txt
│   │   │   ├── ipv6_tcp_1152.txt
│   │   │   ├── ipv6_tcp_1280.txt
│   │   │   ├── ipv6_tcp_1408.txt
│   │   │   ├── ipv6_tcp_1536.txt
│   │   │   ├── ipv6_udp_128.txt
│   │   │   ├── ipv6_udp_256.txt
│   │   │   ├── ipv6_udp_384.txt
│   │   │   ├── ipv6_udp_512.txt
│   │   │   ├── ipv6_udp_640.txt
│   │   │   ├── ipv6_udp_768.txt
│   │   │   ├── ipv6_udp_896.txt
│   │   │   ├── ipv6_udp_1024.txt
│   │   │   ├── ipv6_udp_1152.txt
│   │   │   ├── ipv6_udp_1280.txt
│   │   │   ├── ipv6_udp_1408.txt
│   │   │   └── ipv6_udp_1536.txt
│   │   ├── Kali/
│   │   │   ├── Kali_Data.xlsx
│   │   │   ├── ipv4_tcp_128.txt
│   │   │   ├── ipv4_tcp_256.txt
│   │   │   ├── ipv4_tcp_384.txt
│   │   │   ├── ipv4_tcp_512.txt
│   │   │   ├── ipv4_tcp_640.txt
│   │   │   ├── ipv4_tcp_768.txt
│   │   │   ├── ipv4_tcp_896.txt
│   │   │   ├── ipv4_tcp_1024.txt
│   │   │   ├── ipv4_tcp_1152.txt
│   │   │   ├── ipv4_tcp_1280.txt
│   │   │   ├── ipv4_tcp_1408.txt
│   │   │   ├── ipv4_tcp_1536.txt
│   │   │   ├── ipv4_udp_128.txt
│   │   │   ├── ipv4_udp_256.txt
│   │   │   ├── ipv4_udp_384.txt
│   │   │   ├── ipv4_udp_512.txt
│   │   │   ├── ipv4_udp_640.txt
│   │   │   ├── ipv4_udp_768.txt
│   │   │   ├── ipv4_udp_896.txt
│   │   │   ├── ipv4_udp_1024.txt
│   │   │   ├── ipv4_udp_1152.txt
│   │   │   ├── ipv4_udp_1280.txt
│   │   │   ├── ipv4_udp_1408.txt
│   │   │   ├── ipv4_udp_1536.txt
│   │   │   ├── ipv6_tcp_128.txt
│   │   │   ├── ipv6_tcp_256.txt
│   │   │   ├── ipv6_tcp_384.txt
│   │   │   ├── ipv6_tcp_512.txt
│   │   │   ├── ipv6_tcp_640.txt
│   │   │   ├── ipv6_tcp_768.txt
│   │   │   ├── ipv6_tcp_896.txt
│   │   │   ├── ipv6_tcp_1024.txt
│   │   │   ├── ipv6_tcp_1152.txt
│   │   │   ├── ipv6_tcp_1280.txt
│   │   │   ├── ipv6_tcp_1408.txt
│   │   │   ├── ipv6_tcp_1536.txt
│   │   │   ├── ipv6_udp_128.txt
│   │   │   ├── ipv6_udp_256.txt
│   │   │   ├── ipv6_udp_384.txt
│   │   │   ├── ipv6_udp_512.txt
│   │   │   ├── ipv6_udp_640.txt
│   │   │   ├── ipv6_udp_768.txt
│   │   │   ├── ipv6_udp_896.txt
│   │   │   ├── ipv6_udp_1024.txt
│   │   │   ├── ipv6_udp_1152.txt
│   │   │   ├── ipv6_udp_1280.txt
│   │   │   ├── ipv6_udp_1408.txt
│   │   │   └── ipv6_udp_1536.txt
│   │   ├── Python-Graphs/
│   │   │   ├── Comparison_IPv4_vs_IPv6_Delay.png
│   │   │   ├── Comparison_IPv4_vs_IPv6_Jitter.png
│   │   │   ├── Comparison_IPv4_vs_IPv6_Packet Loss.png
│   │   │   ├── Comparison_IPv4_vs_IPv6_Throughput.png
│   │   │   ├── IPv4_Comparison_Delay.png
│   │   │   ├── IPv4_Comparison_Jitter.png
│   │   │   ├── IPv4_Comparison_Packet Loss.png
│   │   │   ├── IPv4_Comparison_Throughput.png
│   │   │   ├── IPv6_Comparison_Delay.png
│   │   │   ├── IPv6_Comparison_Jitter.png
│   │   │   ├── IPv6_Comparison_Packet Loss.png
│   │   │   ├── IPv6_Comparison_Throughput.png
│   │   │   ├── graphing_compare_ipv4_ipv6.py
│   │   │   ├── graphing_ipv4.py
│   │   │   └── graphing_ipv6.py
│   │   └── Ubuntu/
│   │       ├── Ubuntu_Data.xlsx
│   │       ├── ipv4_tcp_128.txt
│   │       ├── ipv4_tcp_256.txt
│   │       ├── ipv4_tcp_384.txt
│   │       ├── ipv4_tcp_512.txt
│   │       ├── ipv4_tcp_640.txt
│   │       ├── ipv4_tcp_768.txt
│   │       ├── ipv4_tcp_896.txt
│   │       ├── ipv4_tcp_1024.txt
│   │       ├── ipv4_tcp_1152.txt
│   │       ├── ipv4_tcp_1280.txt
│   │       ├── ipv4_tcp_1408.txt
│   │       ├── ipv4_tcp_1536.txt
│   │       ├── ipv4_udp_128.txt
│   │       ├── ipv4_udp_256.txt
│   │       ├── ipv4_udp_384.txt
│   │       ├── ipv4_udp_512.txt
│   │       ├── ipv4_udp_640.txt
│   │       ├── ipv4_udp_768.txt
│   │       ├── ipv4_udp_896.txt
│   │       ├── ipv4_udp_1024.txt
│   │       ├── ipv4_udp_1152.txt
│   │       ├── ipv4_udp_1280.txt
│   │       ├── ipv4_udp_1408.txt
│   │       ├── ipv4_udp_1536.txt
│   │       ├── ipv6_tcp_128.txt
│   │       ├── ipv6_tcp_256.txt
│   │       ├── ipv6_tcp_384.txt
│   │       ├── ipv6_tcp_512.txt
│   │       ├── ipv6_tcp_640.txt
│   │       ├── ipv6_tcp_768.txt
│   │       ├── ipv6_tcp_896.txt
│   │       ├── ipv6_tcp_1024.txt
│   │       ├── ipv6_tcp_1152.txt
│   │       ├── ipv6_tcp_1280.txt
│   │       ├── ipv6_tcp_1408.txt
│   │       ├── ipv6_tcp_1536.txt
│   │       ├── ipv6_udp_128.txt
│   │       ├── ipv6_udp_256.txt
│   │       ├── ipv6_udp_384.txt
│   │       ├── ipv6_udp_512.txt
│   │       ├── ipv6_udp_640.txt
│   │       ├── ipv6_udp_768.txt
│   │       ├── ipv6_udp_896.txt
│   │       ├── ipv6_udp_1024.txt
│   │       ├── ipv6_udp_1152.txt
│   │       ├── ipv6_udp_1280.txt
│   │       ├── ipv6_udp_1408.txt
│   │       └── ipv6_udp_1536.txt`}
                </pre>
              </div>

              <div className="mb-4">
                <h3>Package Management and Quality Assurance</h3>
                <pre className="file-structure-pre">
                  {`   └── Packages/
│       ├── Fedora/
│       │   └── download_fedora_packages.sh
│       ├── Kali/
│       │   └── download_kali_packages.sh
│       └── Ubuntu/
│           └── download_ubuntu_packages.sh`}
                </pre>
              </div>

              <div className="mb-4">
                <h3>Poster and Quality Assurance</h3>
                <pre className="file-structure-pre">
                  {`├── Poster/
│   ├── AUT-logo-black.jpg
│   ├── poster_v1.png
│   ├── poster_v2.png
│   ├── poster_v3.png
│   ├── qr_code.svg
│   └── Sections/
│       ├── 01 Background.docx
│       ├── 02 Rationale.docx
│       ├── 03 Objectives.docx
│       ├── 04 Project Impact.docx
│       ├── 05 Goals.docx
│       ├── 06 Project Management Methodology.docx
│       ├── 07 Artefacts.docx
│       ├── 08 Quality Assurance.docx
│       ├── 09 Key Challenges.docx
│       ├── 10 Lessons Learnt.docx
│       ├── 11 References.docx
│       └── 12 Acknowledgements.docx
└── Quality-Assurance/
    ├── Peer Review/
    │   ├── Peer Review Checklist - Fedora Configuration v1.0.pdf
    │   ├── Peer Review Checklist - Kali Configuration v1.0.pdf
    │   ├── Peer Review Checklist - Ubuntu Configuration v1.1.pdf
    │   └── Version-History/
    │       └── Peer Review Checklist - Ubuntu Configuration v1.0.pdf
    └── Router Configuration/
        ├── Router Configuration Checklist - Fedora v1.0.pdf
        ├── Router Configuration Checklist - Kali v1.0.pdf
        ├── Router Configuration Checklist - Ubuntu v1.1.pdf
        └── Version-History/
            └── Router Configuration Checklist - Ubuntu v1.0.pdf`}
                </pre>
              </div>
            </Col>
          </Row>
        </section>

        <section className="content-section">
          <Row>
            <Col>
              <h2>Summary</h2>
              <div className="file-structure-summary">
                <p>
                  This R&D Project portfolio contains a comprehensive collection
                  of documentation, testing files, configurations, and project
                  management artifacts organised into four main categories:
                </p>
                <ol>
                  <li>
                    <strong>Research and Upskilling</strong> - Skills matrices,
                    training materials, and virtualisation scripts
                  </li>
                  <li>
                    <strong>Planning and Control</strong> - Project proposals,
                    planning documents, and mid-term review materials
                  </li>
                  <li>
                    <strong>Communication and Teamwork</strong> - Meeting
                    records, logbooks, client communications, and team evidence
                  </li>
                  <li>
                    <strong>Development and Quality Assurance</strong> - Testing
                    methodologies, configuration files, evaluation logs, data
                    analysis tools, and quality assurance checklists
                  </li>
                </ol>
                <div className="mt-3">
                  <strong>Total File Count:</strong> 950+ files across all
                  directories and subdirectories.
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}

export default FileStructure;
