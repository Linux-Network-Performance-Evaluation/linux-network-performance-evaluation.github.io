import { Route, Routes } from 'react-router-dom'
import CommunicationTeamwork from './components/CommunicationTeamwork.jsx'
import DevelopmentQA from './components/DevelopmentQA.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navigation.jsx'
import PlanningControl from './components/PlanningControl.jsx'
import Poster from './components/Poster.jsx'
import ResearchUpskilling from './components/ResearchUpskilling.jsx'

function App() {

  return (
    <div>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research-upskilling" element={<ResearchUpskilling />} />
        <Route path="/planning-control" element={<PlanningControl />} />
        <Route path="/communication-teamwork" element={<CommunicationTeamwork />} />
        <Route path="/development-qa" element={<DevelopmentQA />} />
        <Route path="/poster" element={<Poster />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App