import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Programs from "./views/Programs";
import Diet from "./views/Diet";
import Error from "./views/Error";

function App() {
  return (
    <div className="nav-container">
      <Router>
        <nav className="nav">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="programs">
            Programs
          </Link>
          <Link className="links" to="diet">
            Diet
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
