import "./App.css";
import "inter-ui/inter.css";
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
export default function App () {
 return (
   <div className="App">
     <BrowserRouter>
       <Header />
       <div className="container">
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/work" element={<Work />} />
           <Route path="/articles" element={<Articles />} />
           <Route path="/about" element={<About />} />
         </Routes>
       </div>
     </BrowserRouter>
   </div>
 );
}
