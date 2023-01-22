import "./App.css"
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Work from "./Pages/Work";
import Articles from "./Pages/Articles";
import About from "./Pages/About";
import ViralNationProject from "./Pages/Projects/ViralNationProject";
export default function App () {
 return (
   <div className="App">
     <BrowserRouter>
       <Header />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/work" element={<Work />} />
           <Route path="/articles" element={<Articles />} />
           <Route path="/about" element={<About />} />
           <Route path="/projects/viralnationproject" element={<ViralNationProject />} />
         </Routes>
     </BrowserRouter>
   </div>
 );
}
