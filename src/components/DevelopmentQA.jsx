import { useState } from "react";
import ReactDOM from "react-dom";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { DocumentCard } from "./DocumentViewer";
import ImageLightbox from "./ImageLightbox";

function DevelopmentQA() {
  const [activeKey, setActiveKey] = useState("ipv4");
  const [showImageLightbox, setShowImageLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: "", title: "" });

  const technologies = [
    "Linux (Fedora, Ubuntu, Kali)",
    "D-ITG Traffic Generator",
    "QEMU Virtualisation",
    "Python Scripting",
    "Network Configuration",
    "Statistical Analysis",
  ];

  // IPv4 datasets
  const ipv4_datasets = {
    Delay: {
      headers: [
        "Packet Size",
        "Ubuntu IPv4 TCP",
        "Ubuntu IPv4 UDP",
        "Fedora IPv4 TCP",
        "Fedora IPv4 UDP",
        "Kali IPv4 TCP",
        "Kali IPv4 UDP",
      ],
      rows: [
        [128, 0.0004279, 0.00012, 0.0004843, 0.0001502, 0.000519, 0.0003945],
        [256, 0.0003962, 0.0001304, 0.0004364, 0.0001836, 0.0005151, 0.000434],
        [384, 0.000847, 0.0001403, 0.0006376, 0.0002775, 0.0008891, 0.0004394],
        [512, 0.0008598, 0.000162, 0.0005569, 0.0002818, 0.0009368, 0.0004178],
        [640, 0.0009574, 0.0001958, 0.0005897, 0.0003092, 0.0010509, 0.0004103],
        [768, 0.0720054, 0.0049898, 0.0740079, 0.0050122, 0.0717309, 0.0050906],
        [896, 0.0766048, 0.0057942, 0.0739809, 0.005805, 0.0764994, 0.0058662],
        [1024, 0.0746885, 0.0063401, 0.075339, 0.0065336, 0.0754016, 0.0065946],
        [1152, 0.0806537, 0.0070989, 0.0761423, 0.0071592, 0.0784022, 0.007348],
        [
          1280, 0.0704087, 0.0081159, 0.0773127, 0.0080892, 0.0744448,
          0.0083416,
        ],
        [
          1408, 0.0587484, 0.0097223, 0.0646749, 0.0088167, 0.0753321,
          0.0090388,
        ],
        [1536, 0.063501, 0.0070705, 0.0606886, 0.0071181, 0.068224, 0.007302],
      ],
      unit: "ms",
    },
    Jitter: {
      headers: [
        "Packet Size",
        "Ubuntu IPv4 TCP",
        "Ubuntu IPv4 UDP",
        "Fedora IPv4 TCP",
        "Fedora IPv4 UDP",
        "Kali IPv4 TCP",
        "Kali IPv4 UDP",
      ],
      rows: [
        [128, 0.0000989, 0.000047, 0.0000988, 0.0000469, 0.0000985, 0.0000463],
        [256, 0.0000905, 0.0000471, 0.0000904, 0.000048, 0.0000904, 0.0000471],
        [384, 0.0000888, 0.0000445, 0.000087, 0.0000433, 0.0000878, 0.0000446],
        [512, 0.0000864, 0.0000365, 0.0000838, 0.0000345, 0.0000854, 0.0000347],
        [640, 0.0000869, 0.0000277, 0.0000848, 0.0000257, 0.0000863, 0.0000251],
        [768, 0.00012, 0.0002012, 0.0001202, 0.0002023, 0.00012, 0.000197],
        [896, 0.000141, 0.0003937, 0.000141, 0.0003925, 0.000141, 0.0003916],
        [1024, 0.0001614, 0.0005695, 0.0001614, 0.000574, 0.0001615, 0.0005695],
        [
          1152, 0.0001821, 0.0007269, 0.0001823, 0.0007304, 0.0001819,
          0.0007188,
        ],
        [1280, 0.0002025, 0.000874, 0.0002029, 0.0008782, 0.0002026, 0.0008546],
        [
          1408, 0.0002234, 0.0008382, 0.0002236, 0.0009996, 0.0002237,
          0.0009943,
        ],
        [1536, 0.0002436, 0.0009084, 0.000244, 0.0008972, 0.0002444, 0.0009116],
      ],
      unit: "ms",
    },
    Throughput: {
      headers: [
        "Packet Size",
        "Ubuntu IPv4 TCP",
        "Ubuntu IPv4 UDP",
        "Fedora IPv4 TCP",
        "Fedora IPv4 UDP",
        "Kali IPv4 TCP",
        "Kali IPv4 UDP",
      ],
      rows: [
        [
          128, 17261.85375, 17471.90733, 17247.45147, 17417.31811, 17245.82019,
          17456.93369,
        ],
        [
          256, 34747.96166, 34940.13057, 34816.86325, 34917.24538, 34804.32201,
          34942.6202,
        ],
        [
          384, 52560.3103, 52335.95658, 52670.85744, 52378.96891, 52601.00545,
          52154.57784,
        ],
        [
          512, 70081.83456, 69851.08409, 70046.29008, 69810.5335, 70083.51445,
          69797.02097,
        ],
        [
          640, 87960.00087, 87352.85481, 88086.86284, 87271.32898, 87896.87748,
          86995.93184,
        ],
        [
          768, 93570.53623, 91024.66865, 93563.80764, 91072.75214, 93581.59069,
          91091.66166,
        ],
        [
          896, 93587.57355, 92351.43959, 93583.91135, 92343.76106, 93572.37368,
          92280.24861,
        ],
        [
          1024, 93636.58398, 93285.36198, 93629.40534, 93237.29453, 93631.19046,
          93294.21305,
        ],
        [
          1152, 93657.3293, 93933.80182, 93630.95965, 93982.17507, 93644.15076,
          93997.2325,
        ],
        [
          1280, 93708.65022, 94637.98039, 93711.47111, 94554.32552, 93654.46107,
          94659.67336,
        ],
        [
          1408, 93734.54915, 95113.14574, 93698.79948, 95104.2897, 93704.91176,
          95043.68891,
        ],
        [
          1536, 93719.98697, 91822.65242, 93772.85034, 91758.07362, 93745.51959,
          91834.75422,
        ],
      ],
      unit: "bps",
    },
    "Packet Loss": {
      headers: [
        "Packet Size",
        "Ubuntu IPv4 TCP",
        "Ubuntu IPv4 UDP",
        "Fedora IPv4 TCP",
        "Fedora IPv4 UDP",
        "Kali IPv4 TCP",
        "Kali IPv4 UDP",
      ],
      rows: [
        [128, 0, 0.099, 0, 0.095, 0, 0.09],
        [256, 0, 0.055, 0, 0.06, 0, 0.06],
        [384, 0, 0.055, 0, 0.06, 0, 0.06],
        [512, 0, 0.12, 0, 0.108, 0, 0.108],
        [640, 0, 0.06, 0, 0.06, 0, 0.052],
        [768, 0, 0.121, 0, 0.106, 0, 0.05],
        [896, 0, 0.051, 0, 0.066, 0, 0.1],
        [1024, 0, 0.046, 0, 0.089, 0, 0.047],
        [1152, 0, 0.081, 0, 0.092, 0, 0.083],
        [1280, 0, 0.04, 0, 0.054, 0, 0.019],
        [1408, 0, 0.555, 0, 0.18, 0, 0.217],
        [1536, 0, 0.032, 0, 0.035, 0, 0.029],
      ],
      unit: "%",
    },
  };

  // IPv6 datasets
  const ipv6_datasets = {
    Delay: {
      headers: [
        "Packet Size",
        "Ubuntu IPv6 TCP",
        "Ubuntu IPv6 UDP",
        "Fedora IPv6 TCP",
        "Fedora IPv6 UDP",
        "Kali IPv6 TCP",
        "Kali IPv6 UDP",
      ],
      rows: [
        [128, 0.0004069, 0.0000405, 0.0005006, 0.0001383, 0.0005969, 0.0001305],
        [256, 0.0004279, 0.0001303, 0.0005152, 0.000163, 0.0005508, 0.0001651],
        [384, 0.0008508, 0.0001676, 0.0007442, 0.0001101, 0.0009236, 0.0001929],
        [512, 0.0008026, 0.0001982, 0.0006828, 0.0000657, 0.000649, 0.0001969],
        [640, 0.0008431, 0.000248, 0.000671, 0.0000749, 0.000839, 0.0002199],
        [768, 0.0689433, 0.0049348, 0.0688691, 0.0047572, 0.0696282, 0.0049292],
        [896, 0.078873, 0.0057024, 0.0744548, 0.005532, 0.0766718, 0.0057063],
        [1024, 0.081427, 0.0064242, 0.0747777, 0.0062883, 0.0778551, 0.0064381],
        [
          1152, 0.0799189, 0.0072028, 0.0737663, 0.0071164, 0.0754107,
          0.0072345,
        ],
        [
          1280, 0.0777853, 0.0080841, 0.0768856, 0.0079735, 0.0742953,
          0.0082635,
        ],
        [1408, 0.072229, 0.0088678, 0.0680818, 0.0086958, 0.0819091, 0.0089074],
        [1536, 0.0578138, 0.0071511, 0.0680265, 0.006978, 0.0591323, 0.0072446],
      ],
      unit: "ms",
    },
    Jitter: {
      headers: [
        "Packet Size",
        "Ubuntu IPv6 TCP",
        "Ubuntu IPv6 UDP",
        "Fedora IPv6 TCP",
        "Fedora IPv6 UDP",
        "Kali IPv6 TCP",
        "Kali IPv6 UDP",
      ],
      rows: [
        [128, 0.0000985, 0.000045, 0.0000985, 0.000046, 0.000097, 0.0000461],
        [256, 0.0000906, 0.0000471, 0.0000905, 0.0000476, 0.0000903, 0.000047],
        [384, 0.0000887, 0.0000443, 0.0000873, 0.0000434, 0.0000883, 0.0000443],
        [512, 0.0000864, 0.000036, 0.0000835, 0.0000348, 0.0000834, 0.0000341],
        [640, 0.0000866, 0.0000278, 0.0000846, 0.0000257, 0.0000859, 0.0000256],
        [768, 0.0001201, 0.0002009, 0.0001202, 0.0002029, 0.00012, 0.0002013],
        [896, 0.0001409, 0.0003895, 0.0001409, 0.0003914, 0.0001409, 0.0003911],
        [
          1024, 0.0001615, 0.0005576, 0.0001614, 0.0005663, 0.0001616,
          0.0005689,
        ],
        [
          1152, 0.0001819, 0.0007263, 0.0001823, 0.0007158, 0.0001822,
          0.0007296,
        ],
        [
          1280, 0.0002029, 0.0008604, 0.0002028, 0.0008684, 0.0002025,
          0.0008714,
        ],
        [
          1408, 0.0002228, 0.0010005, 0.0002235, 0.0009959, 0.0002236,
          0.0009917,
        ],
        [
          1536, 0.0002429, 0.0008701, 0.0002442, 0.0009134, 0.0002438,
          0.0009029,
        ],
      ],
      unit: "ms",
    },
    Throughput: {
      headers: [
        "Packet Size",
        "Ubuntu IPv6 TCP",
        "Ubuntu IPv6 UDP",
        "Fedora IPv6 TCP",
        "Fedora IPv6 UDP",
        "Kali IPv6 TCP",
        "Kali IPv6 UDP",
      ],
      rows: [
        [
          128, 17264.1327, 17432.89961, 17249.02424, 17441.29725, 17261.78322,
          17449.60437,
        ],
        [
          256, 34842.46211, 34920.77153, 34820.48713, 34937.99939, 34817.98518,
          34920.65891,
        ],
        [
          384, 52556.72056, 52334.19474, 52595.30784, 52338.84739, 52553.03333,
          52295.46418,
        ],
        [
          512, 70066.63153, 69824.52761, 70186.22856, 69802.44935, 70126.19083,
          69766.41877,
        ],
        [
          640, 87956.73591, 87249.90529, 88146.93726, 87241.74742, 88080.38277,
          87305.13495,
        ],
        [
          768, 93571.63416, 91119.65752, 93549.83061, 91065.55229, 93563.07573,
          91087.53875,
        ],
        [
          896, 93586.8715, 92350.63363, 93584.13296, 92352.91526, 93584.69672,
          92320.0093,
        ],
        [
          1024, 93639.61281, 93257.08305, 93662.78411, 93287.46072, 93629.48161,
          93239.20358,
        ],
        [
          1152, 93665.27714, 93955.26164, 93676.58196, 93980.70515, 93652.03828,
          94018.39185,
        ],
        [
          1280, 93636.82835, 94563.85667, 93688.44859, 94633.3827, 93688.7489,
          94569.70013,
        ],
        [
          1408, 93695.24101, 95038.99887, 93722.5765, 95100.76984, 93685.61888,
          95105.498,
        ],
        [
          1536, 93851.8148, 91749.92721, 93761.08089, 91815.56597, 93837.23922,
          91842.88404,
        ],
      ],
      unit: "bps",
    },
    "Packet Loss": {
      headers: [
        "Packet Size",
        "Ubuntu IPv6 TCP",
        "Ubuntu IPv6 UDP",
        "Fedora IPv6 TCP",
        "Fedora IPv6 UDP",
        "Kali IPv6 TCP",
        "Kali IPv6 UDP",
      ],
      rows: [
        [128, 0, 0.051, 0, 0.055, 0, 0.052],
        [256, 0, 0.06, 0, 0.12, 0, 0.064],
        [384, 0, 0.106, 0, 0.05, 0, 0.056],
        [512, 0, 0.056, 0, 0.059, 0, 0.053],
        [640, 0, 0.112, 0, 0.05, 0, 0.119],
        [768, 0, 0.05, 0, 0.111, 0, 0.06],
        [896, 0, 0.052, 0, 0.05, 0, 0.05],
        [1024, 0, 0.084, 0, 0.045, 0, 0.093],
        [1152, 0, 0.041, 0, 0.09, 0, 0.052],
        [1280, 0, 0.04, 0, 0.042, 0, 0.038],
        [1408, 0, 0.221, 0, 0.182, 0, 0.145],
        [1536, 0, 0.042, 0, 0.057, 0, 0.033],
      ],
      unit: "%",
    },
  };

  const formatValue = (value, unit) => {
    if (unit === "bps") {
      return (
        value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) + " bps"
      );
    } else if (unit === "%") {
      return value.toFixed(3) + "%";
    } else {
      return value.toFixed(6) + " ms";
    }
  };

  // Function to handle image clicks
  const handleImageClick = (imageSrc, imageTitle) => {
    setCurrentImage({ src: imageSrc, title: imageTitle });
    setShowImageLightbox(true);
  };

  const renderDataTable = (datasets, title) => {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">{title} Performance Data</h3>
        </div>
        <Tabs defaultActiveKey="Delay" className="mb-3">
          {Object.entries(datasets).map(([metric, data]) => (
            <Tab eventKey={metric} title={metric} key={metric}>
              <div className="mb-2 text-center">
                <small className="text-muted">
                  All values include units:{" "}
                  {data.unit === "bps"
                    ? "bits per second"
                    : data.unit === "%"
                    ? "percentage"
                    : "milliseconds"}
                </small>
              </div>
              <div className="table-container">
                <div className="table-responsive">
                  <Table striped hover size="sm" className="data-table">
                    <thead className="table-dark">
                      <tr>
                        {data.headers.map((header, index) => (
                          <th
                            key={index}
                            className={`text-center ${
                              header.includes("UDP") ? "udp-header" : ""
                            }`}
                          >
                            {index === 0 ? (
                              header
                            ) : (
                              <div>
                                <div>{header.split(" ")[0]}</div>
                                <small className="text-muted">
                                  {header.split(" ").slice(1).join(" ")}
                                </small>
                              </div>
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => {
                            const isUdpColumn =
                              cellIndex > 0 &&
                              data.headers[cellIndex].includes("UDP");
                            return (
                              <td
                                key={cellIndex}
                                className={`text-center ${
                                  isUdpColumn ? "udp-cell" : ""
                                }`}
                              >
                                {cellIndex === 0
                                  ? cell
                                  : formatValue(cell, data.unit)}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    );
  };

  return (
    <>
      <main>
        <Container>
          <section className="content-section">
            <Row>
              <Col>
                <h1 className="text-center mb-4">
                  Development & Quality Assurance
                </h1>
                <p>
                  This section covers our development methodologies, testing
                  frameworks, and quality assurance processes throughout the
                  project lifecycle.
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
                      Our development approach followed industry best practices
                      with emphasis on reproducibility and reliability.
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
                  Our project utilised a comprehensive set of technologies and
                  tools for network performance evaluation:
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
                      Setup and configuration of Linux systems as software
                      routers with proper network interfaces and routing
                      protocols.
                    </p>
                  </Col>
                  <Col lg={4} className="mb-3">
                    <h4>Performance Testing</h4>
                    <p>
                      Systematic evaluation of throughput, delay, jitter, and
                      packet loss across different packet sizes and protocols.
                    </p>
                  </Col>
                  <Col lg={4} className="mb-3">
                    <h4>Data Analysis</h4>
                    <p>
                      Statistical analysis of results with confidence intervals
                      and comparative performance metrics across distributions.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>

          <section className="content-section">
            <Row>
              <Col>
                <h2 className="text-center mb-4">
                  Network Performance Evaluation Results
                </h2>
                <p className="text-center mb-4">
                  Comprehensive performance data collected from our Linux
                  network evaluation tests. Data includes delay, jitter,
                  throughput, and packet loss measurements across different
                  packet sizes for Ubuntu, Fedora, and Kali Linux distributions
                  using both TCP and UDP protocols.
                </p>

                <Tabs
                  activeKey={activeKey}
                  onSelect={(k) => setActiveKey(k)}
                  className="mb-4 justify-content-center"
                >
                  <Tab eventKey="ipv4" title="IPv4 Results">
                    <Card className="shadow-sm">
                      <Card.Body>
                        {renderDataTable(ipv4_datasets, "IPv4")}
                      </Card.Body>
                    </Card>
                  </Tab>
                  <Tab eventKey="ipv6" title="IPv6 Results">
                    <Card className="shadow-sm">
                      <Card.Body>
                        {renderDataTable(ipv6_datasets, "IPv6")}
                      </Card.Body>
                    </Card>
                  </Tab>
                  <Tab eventKey="visualisations" title="Data Visualisations">
                    <Card className="shadow-sm">
                      <Card.Body>
                        <h3 className="mb-4">Performance Comparison Graphs</h3>
                        <p className="mb-4">
                          Visual representations of network performance data
                          showing comparative analysis across different Linux
                          distributions and protocol versions.
                        </p>

                        <Tabs
                          defaultActiveKey="ipv4-comparison"
                          id="graph-tabs"
                          className="mb-4"
                        >
                          <Tab eventKey="ipv4-comparison" title="IPv4 Analysis">
                            <h4 className="mb-3">
                              IPv4 Performance Comparisons
                            </h4>
                            <Row>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">Delay Comparison</h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv4_Comparison_Delay.png"
                                        alt="IPv4 Delay Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv4_Comparison_Delay.png",
                                            "IPv4 Delay Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">Jitter Comparison</h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv4_Comparison_Jitter.png"
                                        alt="IPv4 Jitter Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv4_Comparison_Jitter.png",
                                            "IPv4 Jitter Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">
                                      Throughput Comparison
                                    </h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv4_Comparison_Throughput.png"
                                        alt="IPv4 Throughput Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv4_Comparison_Throughput.png",
                                            "IPv4 Throughput Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">
                                      Packet Loss Comparison
                                    </h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv4_Comparison_Packet Loss.png"
                                        alt="IPv4 Packet Loss Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv4_Comparison_Packet Loss.png",
                                            "IPv4 Packet Loss Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          </Tab>

                          <Tab eventKey="ipv6-comparison" title="IPv6 Analysis">
                            <h4 className="mb-3">
                              IPv6 Performance Comparisons
                            </h4>
                            <Row>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">Delay Comparison</h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv6_Comparison_Delay.png"
                                        alt="IPv6 Delay Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv6_Comparison_Delay.png",
                                            "IPv6 Delay Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">Jitter Comparison</h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv6_Comparison_Jitter.png"
                                        alt="IPv6 Jitter Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv6_Comparison_Jitter.png",
                                            "IPv6 Jitter Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">
                                      Throughput Comparison
                                    </h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv6_Comparison_Throughput.png"
                                        alt="IPv6 Throughput Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv6_Comparison_Throughput.png",
                                            "IPv6 Throughput Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">
                                      Packet Loss Comparison
                                    </h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv6_Comparison_Packet Loss.png"
                                        alt="IPv6 Packet Loss Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv6_Comparison_Packet Loss.png",
                                            "IPv6 Packet Loss Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          </Tab>

                          <Tab
                            eventKey="protocol-comparison"
                            title="IPv4 vs IPv6"
                          >
                            <h4 className="mb-3">
                              IPv4 vs IPv6 Protocol Comparisons
                            </h4>
                            <Row>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">
                                      Delay: IPv4 vs IPv6
                                    </h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/Comparison_IPv4_vs_IPv6_Delay.png"
                                        alt="IPv4 vs IPv6 Delay Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/Comparison_IPv4_vs_IPv6_Delay.png",
                                            "IPv4 vs IPv6 Delay Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">
                                      Jitter: IPv4 vs IPv6
                                    </h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/Comparison_IPv4_vs_IPv6_Jitter.png"
                                        alt="IPv4 vs IPv6 Jitter Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/Comparison_IPv4_vs_IPv6_Jitter.png",
                                            "IPv4 vs IPv6 Jitter Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">
                                      Throughput: IPv4 vs IPv6
                                    </h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/Comparison_IPv4_vs_IPv6_Throughput.png"
                                        alt="IPv4 vs IPv6 Throughput Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/Comparison_IPv4_vs_IPv6_Throughput.png",
                                            "IPv4 vs IPv6 Throughput Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                              <Col md={6} className="mb-4">
                                <Card className="h-100">
                                  <Card.Header>
                                    <h6 className="mb-0">
                                      Packet Loss: IPv4 vs IPv6
                                    </h6>
                                  </Card.Header>
                                  <Card.Body className="text-center d-flex flex-column">
                                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                                      <img
                                        src="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/Comparison_IPv4_vs_IPv6_Packet Loss.png"
                                        alt="IPv4 vs IPv6 Packet Loss Comparison"
                                        className="img-fluid"
                                        style={{
                                          maxHeight: "400px",
                                          cursor: "pointer",
                                          transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.transform =
                                            "scale(1.02)")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.transform =
                                            "scale(1)")
                                        }
                                        onClick={() =>
                                          handleImageClick(
                                            "/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/Comparison_IPv4_vs_IPv6_Packet Loss.png",
                                            "IPv4 vs IPv6 Packet Loss Comparison"
                                          )
                                        }
                                      />
                                    </div>
                                    <div className="mt-auto">
                                      <p className="mt-2 text-muted mb-0">
                                        <small>
                                          Click to view in full size
                                        </small>
                                      </p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            </Row>
                          </Tab>

                          <Tab
                            eventKey="python-scripts"
                            title="Analysis Scripts"
                          >
                            <h4 className="mb-3">Data Analysis Scripts</h4>
                            <p className="mb-4">
                              Python scripts used to generate the performance
                              comparison graphs and statistical analysis.
                            </p>
                            <Row>
                              <Col md={4} className="mb-3">
                                <DocumentCard
                                  title="IPv4 Graphing Script"
                                  description="Python script for generating IPv4 performance comparison graphs and statistical visualisations."
                                  documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/graphing_ipv4.py"
                                />
                              </Col>
                              <Col md={4} className="mb-3">
                                <DocumentCard
                                  title="IPv6 Graphing Script"
                                  description="Python script for generating IPv6 performance comparison graphs and data visualisations."
                                  documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/graphing_ipv6.py"
                                />
                              </Col>
                              <Col md={4} className="mb-3">
                                <DocumentCard
                                  title="IPv4 vs IPv6 Comparison Script"
                                  description="Python script for generating comparative analysis graphs between IPv4 and IPv6 protocols."
                                  documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/graphing_compare_ipv4_ipv6.py"
                                />
                              </Col>
                            </Row>
                          </Tab>
                        </Tabs>
                      </Card.Body>
                    </Card>
                  </Tab>
                </Tabs>

                <Row className="mt-4">
                  <Col md={6} className="mb-3">
                    <Card className="accent-bg h-100">
                      <Card.Body>
                        <Card.Title className="h5">
                          Data Collection Methodology
                        </Card.Title>
                        <ul className="mb-0">
                          <li>95% confidence interval measurements</li>
                          <li>
                            Multiple test runs for statistical significance
                          </li>
                          <li>Controlled physical network environment</li>
                          <li>D-ITG and testing tools</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Card className="accent-bg h-100">
                      <Card.Body>
                        <Card.Title className="h5">
                          Key Metrics Measured
                        </Card.Title>
                        <ul className="mb-0">
                          <li>
                            <strong>Delay:</strong> End-to-end packet latency
                            (ms)
                          </li>
                          <li>
                            <strong>Jitter:</strong> Variation in packet delay
                            (ms)
                          </li>
                          <li>
                            <strong>Throughput:</strong> Data transfer rate
                            (bps)
                          </li>
                          <li>
                            <strong>Packet Loss:</strong> Percentage of lost
                            packets (%)
                          </li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>

          <section className="content-section">
            <Row>
              <Col>
                <h2>Testing Methodologies & Documentation</h2>
                <p>
                  Comprehensive testing methodologies, evaluation procedures,
                  and documentation for consistent and reliable network
                  performance testing across all Linux distributions.
                </p>

                <Tabs
                  defaultActiveKey="methodologies"
                  id="methodology-tabs"
                  className="mb-4"
                >
                  <Tab eventKey="methodologies" title="Testing Methodologies">
                    <h3>Distribution-Specific Methodologies</h3>
                    <p>
                      Detailed testing methodologies tailored for each Linux
                      distribution, ensuring consistent evaluation procedures
                      and accurate performance measurements.
                    </p>

                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Ubuntu Server Methodology"
                          description="Comprehensive testing methodology for Ubuntu Server including configuration procedures, testing protocols, and performance evaluation guidelines."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Methodology - Ubuntu Server.docx"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Fedora Server Methodology"
                          description="Detailed testing methodology for Fedora Server with specific configuration steps, evaluation procedures, and performance benchmarking protocols."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Methodology - Fedora Server.docx"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Kali Linux Methodology"
                          description="Specialised testing methodology for Kali Linux including security-focused configuration and network performance evaluation procedures."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Methodology - Kali Linux.docx"
                        />
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey="evaluation-guides" title="Evaluation Guides">
                    <h3>Testing Implementation Guides</h3>
                    <p>
                      Step-by-step guides and procedures for implementing
                      network performance evaluation testing across different
                      environments and configurations.
                    </p>

                    <Row className="mb-4">
                      <Col md={6} className="mb-3">
                        <DocumentCard
                          title="How to Run Evaluation Testing"
                          description="Complete guide for executing network performance evaluation tests including setup procedures, testing protocols, and data collection methods."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/How to run evaluation testing.docx"
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <DocumentCard
                          title="Chrony NTP Server Time Synchronisation"
                          description="Technical documentation for implementing Chrony NTP server for precise time synchronisation across testing environments."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Chrony NTP server time synchronisation.docx"
                        />
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey="data-analysis" title="Data Analysis Tools">
                    <h3>Data Processing & Analysis</h3>
                    <p>
                      Tools and scripts for processing raw test data, generating
                      comparative analysis, and creating visualisations of
                      network performance results.
                    </p>

                    <Row className="mb-4">
                      <Col md={6} className="mb-3">
                        <DocumentCard
                          title="Data Comparison Analysis"
                          description="Excel workbook containing comparative analysis of network performance data across different Linux distributions and configurations."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Compare Data.xlsx"
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <DocumentCard
                          title="Ubuntu-Fedora Sample Graphing"
                          description="Sample graphing and visualisation templates for comparing Ubuntu and Fedora performance metrics."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Ubuntu_Fedora_Sample_Graphing.xlsx"
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <DocumentCard
                          title="Clean Data Python Script"
                          description="Python script for data cleaning and preprocessing of network performance test results."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/clean_data.py"
                          documentType="code"
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <DocumentCard
                          title="Excel Processing Script"
                          description="Python script for automated Excel data processing and analysis generation."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/excel.py"
                          documentType="code"
                        />
                      </Col>
                    </Row>

                    <h4>Generated Performance Graphs</h4>
                    <p>
                      Automatically generated comparative visualisations showing
                      network performance differences across distributions and
                      protocols.
                    </p>
                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="IPv4 vs IPv6 Delay Comparison"
                          description="Comparative graph showing delay performance differences between IPv4 and IPv6 protocols."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/Comparison_IPv4_vs_IPv6_Delay.png"
                          documentType="image"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="IPv4 vs IPv6 Throughput Comparison"
                          description="Throughput performance comparison between IPv4 and IPv6 across different packet sizes."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/Comparison_IPv4_vs_IPv6_Throughput.png"
                          documentType="image"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="IPv4 Distribution Comparison"
                          description="Performance comparison graphs for IPv4 across Ubuntu, Fedora, and Kali Linux distributions."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Logs/Python-Graphs/IPv4_Comparison_Throughput.png"
                          documentType="image"
                        />
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey="configurations" title="System Configurations">
                    <h3>Network Configuration Files</h3>
                    <p>
                      Complete system and network configuration files for all
                      testing environments including time synchronisation,
                      network interfaces, and device rules.
                    </p>

                    <h4>Ubuntu Configuration</h4>
                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Ubuntu Sender Configuration"
                          description="Complete configuration setup for Ubuntu sender PC including network and automation scripts."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Configs/Ubuntu/pc1/home/sender/config_files.sh"
                          documentType="code"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Ubuntu Receiver Log Export"
                          description="Automated log export script for Ubuntu receiver configuration."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Configs/Ubuntu/pc2/home/receiver/export_logs.sh"
                          documentType="code"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Ubuntu Chrony Configuration"
                          description="Time synchronisation configuration for Ubuntu testing environment."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Configs/Ubuntu/pc1/etc/chrony/chrony.conf"
                          documentType="config"
                        />
                      </Col>
                    </Row>

                    <h4>Fedora Configuration</h4>
                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Fedora Sender Scripts"
                          description="Network testing scripts for Fedora sender configuration including IPv4 and IPv6 testing."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Configs/Fedora/pc1/home/sender/ipv4.sh"
                          documentType="code"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Fedora Network Configuration"
                          description="Netplan configuration for Fedora testing environment network setup."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Configs/Fedora/pc1/etc/netplan/99-netplan.yaml"
                          documentType="config"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Fedora USB Device Rules"
                          description="USB device configuration rules for consistent network interface naming."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Configs/Fedora/pc1/etc/udev/rules.d/70-persistent-usb-tether.rules"
                          documentType="config"
                        />
                      </Col>
                    </Row>

                    <h4>Kali Linux Configuration</h4>
                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Kali Sender Configuration"
                          description="Complete Kali Linux sender configuration including testing scripts and network setup."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Configs/Kali/pc1/home/sender/config_files.sh"
                          documentType="code"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Kali Router Configuration"
                          description="Router configuration files for Kali Linux testing environment."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Configs/Kali/router1/etc/chrony/chrony.conf"
                          documentType="config"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Kali Network Interface Rules"
                          description="Network interface configuration and device rules for Kali Linux environment."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Configs/Kali/pc2/etc/netplan/99-netplan.yaml"
                          documentType="config"
                        />
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey="packages" title="Package Management">
                    <h3>Automated Package Installation</h3>
                    <p>
                      Automated scripts for package installation and environment
                      setup across different Linux distributions to ensure
                      consistent testing environments.
                    </p>

                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Ubuntu Package Installer"
                          description="Automated script for installing all required packages and dependencies for Ubuntu testing environment."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Packages/Ubuntu/download_ubuntu_packages.sh"
                          documentType="code"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Fedora Package Installer"
                          description="Comprehensive package installation script for setting up Fedora testing environment with all required tools."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Packages/Fedora/download_fedora_packages.sh"
                          documentType="code"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Kali Package Installer"
                          description="Specialised package installation script for Kali Linux including security and networking tools required for testing."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Evaluation-Testing/Packages/Kali/download_kali_packages.sh"
                          documentType="code"
                        />
                      </Col>
                    </Row>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </section>

          <section className="content-section">
            <Row>
              <Col>
                <h2>Project Poster</h2>
                <p>
                  Academic poster presentation summarising the project
                  methodology, findings, and outcomes for conference
                  presentation and project showcase.
                </p>

                <Row className="mb-4">
                  <Col md={6} className="mb-3">
                    <DocumentCard
                      title="Project Poster (Final Version)"
                      description="Final version of the academic poster presenting project methodology, results, and conclusions with all updates."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/poster_v4.png"
                      documentType="image"
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <DocumentCard
                      title="Project Portfolio QR Code"
                      description="QR code linking to digital project resources and portfolio website for easy access."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/qr_code.svg"
                      documentType="image"
                    />
                  </Col>
                </Row>

                <h3>Poster Version History</h3>
                <Row className="mb-4">
                  <Col md={6} className="mb-3">
                    <DocumentCard
                      title="Project Poster Version 3"
                      description="Third iteration of the project poster with further refinements and updated content."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Version-History/poster_v3.png"
                      documentType="image"
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <DocumentCard
                      title="Project Poster Version 2"
                      description="Second iteration of the project poster with refined content and improved design."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Version-History/poster_v2.png"
                      documentType="image"
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <DocumentCard
                      title="Project Poster Version 1"
                      description="Initial version of the project poster showing early design and content organisation."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Version-History/poster_v1.png"
                      documentType="image"
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    {/* Empty column for balanced layout */}
                  </Col>
                </Row>

                <h3>Poster Content Sections</h3>
                <p>
                  Individual sections that comprise the complete poster
                  presentation, detailing different aspects of the project.
                </p>

                <Row className="mb-4">
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Background"
                      description="Project background and context setting the foundation for the network performance evaluation study."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/01 Background.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Rationale"
                      description="Justification and reasoning behind the project approach and methodology selection."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/02 Rationale.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Objectives"
                      description="Clear project objectives and goals defining the scope and expected outcomes."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/03 Objectives.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Project Impact"
                      description="Analysis of project impact and significance within the field of network performance evaluation."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/04 Project Impact.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Goals"
                      description="Specific project goals and measurable outcomes targeted for achievement."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/05 Goals.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Project Management Methodology"
                      description="Description of project management approach and methodologies employed throughout the project lifecycle."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/06 Project Management Methodology.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Artefacts"
                      description="Overview of key project deliverables and artifacts produced during the development process."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/07 Artefacts.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Quality Assurance"
                      description="Quality assurance processes and procedures ensuring project reliability and accuracy."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/08 Quality Assurance.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Key Challenges"
                      description="Identification and analysis of major challenges encountered during project execution."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/09 Key Challenges.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Lessons Learnt"
                      description="Key insights and lessons learned throughout the project development and testing phases."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/10 Lessons Learnt.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="References"
                      description="Academic references and sources supporting the project methodology and findings."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/11 References.docx"
                    />
                  </Col>
                  <Col md={4} className="mb-3">
                    <DocumentCard
                      title="Acknowledgements"
                      description="Recognition of contributors, supporters, and resources that facilitated project completion."
                      documentPath="/Portfolio/04-Development-and-Quality-Assurance/Poster/Sections/12 Acknowledgements.docx"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>

          <section className="content-section">
            <Row>
              <Col>
                <h2>Quality Assurance Documentation</h2>
                <p>
                  Comprehensive quality assurance processes and documentation to
                  ensure project reliability, accuracy, and adherence to best
                  practices.
                </p>

                <Tabs
                  defaultActiveKey="qa-reports"
                  id="qa-tabs"
                  className="mb-4"
                >
                  <Tab eventKey="qa-reports" title="QA Reports">
                    <h3>Quality Assurance Reports</h3>
                    <p>
                      Comprehensive quality assurance reporting and metrics
                      tracking project quality standards and process compliance.
                    </p>

                    <Row className="mb-4">
                      <Col md={6} className="mb-3">
                        <DocumentCard
                          title="QA Metric Report"
                          description="Comprehensive quality assurance metrics report documenting testing coverage, defect rates, and quality indicators."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/QA Metric Report.docx"
                        />
                      </Col>
                      <Col md={6} className="mb-3">
                        <DocumentCard
                          title="QA Phase Entry-Exit Log"
                          description="Detailed log documenting quality assurance phase entry and exit criteria, ensuring systematic QA process execution."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/QA Phase Entry-Exit Log.docx"
                        />
                      </Col>
                    </Row>

                    <h4>Completed QA Checklists</h4>
                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Completed Ubuntu Checklists"
                          description="Collection of all completed quality assurance checklists for Ubuntu configuration and testing."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Completed Checklists/Completed Ubuntu Checklists.pdf"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Completed Fedora Checklists"
                          description="Comprehensive set of completed quality assurance checklists for Fedora environment setup and validation."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Completed Checklists/Completed Fedora Checklists.pdf"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Completed Kali Checklists"
                          description="Full collection of completed quality assurance checklists for Kali Linux configuration and testing verification."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Completed Checklists/Completed Kali Checklists.pdf"
                        />
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey="peer-review" title="Peer Review">
                    <h3>Peer Review Checklists</h3>
                    <p>
                      Systematic peer review documentation ensuring
                      configuration accuracy and methodology consistency across
                      all Linux distributions.
                    </p>

                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Ubuntu Configuration Peer Review"
                          description="Comprehensive peer review checklist for Ubuntu router configuration verification and validation."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Peer Review/Peer Review Checklist - Ubuntu Configuration v1.1.pdf"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Fedora Configuration Peer Review"
                          description="Detailed peer review documentation for Fedora router setup and configuration validation."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Peer Review/Peer Review Checklist - Fedora Configuration v1.0.pdf"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Kali Configuration Peer Review"
                          description="Systematic review checklist for Kali Linux router configuration and testing setup verification."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Peer Review/Peer Review Checklist - Kali Configuration v1.0.pdf"
                        />
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey="router-config" title="Router Configuration">
                    <h3>Router Configuration Checklists</h3>
                    <p>
                      Standardised configuration checklists ensuring consistent
                      router setup across all Linux distributions for reliable
                      performance testing.
                    </p>

                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Ubuntu Router Configuration"
                          description="Step-by-step configuration checklist for Ubuntu router setup including network interface configuration and routing table setup."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Router Configuration/Router Configuration Checklist - Ubuntu v1.1.pdf"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Fedora Router Configuration"
                          description="Comprehensive configuration guide for Fedora router setup with detailed network configuration steps."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Router Configuration/Router Configuration Checklist - Fedora v1.0.pdf"
                        />
                      </Col>
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Kali Router Configuration"
                          description="Specialised configuration checklist for Kali Linux router setup and network interface management."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Router Configuration/Router Configuration Checklist - Kali v1.0.pdf"
                        />
                      </Col>
                    </Row>

                    <h4>Version History</h4>
                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Ubuntu Router Config v1.0"
                          description="Initial version of Ubuntu router configuration checklist showing the evolution of QA processes."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Router Configuration/Version-History/Router Configuration Checklist - Ubuntu v1.0.pdf"
                        />
                      </Col>
                    </Row>

                    <h4>Peer Review Version History</h4>
                    <Row className="mb-4">
                      <Col md={4} className="mb-3">
                        <DocumentCard
                          title="Ubuntu Peer Review v1.0"
                          description="Initial version of Ubuntu configuration peer review checklist showing QA process development."
                          documentPath="/Portfolio/04-Development-and-Quality-Assurance/Quality-Assurance/Peer Review/Version-History/Peer Review Checklist - Ubuntu Configuration v1.0.pdf"
                        />
                      </Col>
                    </Row>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </section>
        </Container>
      </main>

      {/* ImageLightbox for zooming graphs - moved outside main for full overlay */}
      {showImageLightbox &&
        ReactDOM.createPortal(
          <ImageLightbox
            isOpen={showImageLightbox}
            onClose={() => setShowImageLightbox(false)}
            imageUrl={currentImage.src}
            altText={currentImage.title}
          />,
          document.body
        )}
    </>
  );
}

export default DevelopmentQA;
