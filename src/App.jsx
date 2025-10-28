import { Route, Routes } from "react-router-dom";
import CommunicationTeamwork from "./components/CommunicationTeamwork";
import DevelopmentQA from "./components/DevelopmentQA";
import FileStructure from "./components/FileStructure";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import PlanningControl from "./components/PlanningControl";
import Poster from "./components/Poster";
import ResearchUpskilling from "./components/ResearchUpskilling";

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <Header />

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

      <Footer />
    </div>
  );
}

export default App;
