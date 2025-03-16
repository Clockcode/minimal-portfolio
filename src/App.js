import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import ViralNation from "./pages/Projects/ViralNation"
import YoutubeAnalyzer from "./pages/Projects/YoutubeAnalyzer"
export default function App() {
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/viralnation" element={<ViralNation />} />
          <Route path="/projects/youtubeanalyzer" element={<YoutubeAnalyzer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
