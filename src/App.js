import "./App.css"
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import HomePage from "./Pages/Home";
import Header from "./Components/Header";
import ViralNation from "./Pages/Projects/ViralNation"
import YoutubeAnalyzer from "./Pages/Projects/YoutubeAnalyzer"
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/viralnation" element={<ViralNation />} />
            <Route path="/projects/youtubeanalyzer" element={<YoutubeAnalyzer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
