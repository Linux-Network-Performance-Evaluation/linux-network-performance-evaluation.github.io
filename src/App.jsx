import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

// Lazy load heavy components
const CommunicationTeamwork = lazy(() =>
  import("./components/CommunicationTeamwork")
);
const DevelopmentQA = lazy(() => import("./components/DevelopmentQA"));
const FileStructure = lazy(() => import("./components/FileStructure"));
const PlanningControl = lazy(() => import("./components/PlanningControl"));
const Poster = lazy(() => import("./components/Poster"));
const ResearchUpskilling = lazy(() =>
  import("./components/ResearchUpskilling")
);

// Loading component
const LoadingSpinner = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ minHeight: "50vh" }}
  >
    <div className="text-center">
      <Spinner animation="border" role="status" className="mb-3">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p>Loading content...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <Header />

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research-upskilling" element={<ResearchUpskilling />} />
          <Route path="/planning-control" element={<PlanningControl />} />
          <Route
            path="/communication-teamwork"
            element={<CommunicationTeamwork />}
          />
          <Route path="/development-qa" element={<DevelopmentQA />} />
          <Route path="/poster" element={<Poster />} />
          <Route path="/file-structure" element={<FileStructure />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
