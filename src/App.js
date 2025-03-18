import { useEffect } from "react";
import {
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import ReactGA from 'react-ga4';
import Home from "./pages/Home";
import Header from "./components/Header";
import ViralNation from "./pages/Projects/ViralNation"
import YoutubeAnalyzer from "./pages/Projects/YoutubeAnalyzer"
import InProgress from "./pages/InProgress"
const TRACKING_ID = "G-HKTJHZYM4L"; // your Measurement ID

export default function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, [])
  return (
    <div className="bg-gray-100">
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects/creator-os" element={<ViralNation />} />
          <Route exact path="/projects/youtubeanalyzer" element={<YoutubeAnalyzer />} />
          <Route path="/projects/in-progress" element={<InProgress />} />
        </Routes>
    </div>
  );
}
