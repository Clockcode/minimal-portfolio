import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ViralNation from "./pages/Projects/ViralNation"
import YoutubeAnalyzer from "./pages/Projects/YoutubeAnalyzer"
import ProjectTemplate from "./pages/ProjectTemplate"

export default function App() {
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/creator-os" element={<ViralNation />} />
          <Route path="/projects/youtubeanalyzer" element={<YoutubeAnalyzer />} />
          <Route path="/projects/projecttemplate" element={<ProjectTemplate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
