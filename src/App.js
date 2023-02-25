import "./App.css"
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import ViralNationProject from "./Pages/Projects/ViralNationProject";
import AccessForm from "./Components/AccessForm";
export default function App () {
 return (
   <div className="App">
     <BrowserRouter>
       <Header />
       <Routes>
         <Route
           path="projects/viralnationproject"
           element={<ViralNationProject />}
         />
         <Route
           path="accessForm"
           element={<AccessForm />}
         />
         <Route path="/" element={<Home />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}
