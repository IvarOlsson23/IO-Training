import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Programs from "./views/Programs";
import ProgramsEx from "./views/ProgramsEx";
import Diet from "./views/Diet";
import About from "./views/About";
import Technique from "./views/Technique";
import Error from "./views/Error";
import Login from "./views/Login";
import Footer from "../src/components/alpha-footer/Footer";
import Navbar from "../src/components/alpha-navigation/Navbar";

function App() {
  return (
    <div className="nav-container">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programsEx" element={<ProgramsEx />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/about" element={<About />} />
          <Route path="/technique" element={<Technique />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
