import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home.js";
import Header from "./components/Header.js";
import ViralNation from "./pages/Projects/ViralNation.js"
import YoutubeAnalyzer from "./pages/Projects/YoutubeAnalyzer.js"
import ProjectTemplate from "./pages/ProjectTemplate.js"

export default function App() {
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/creator-os" element={<ViralNation />} />
          <Route path="/projects/youtubeanalyzer" element={<YoutubeAnalyzer />} />
          <Route path="/projects/projecttemplate" element={<ProjectTemplate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
