import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className="nav">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav
        className={sidebar ? "nav-menu active" : "nav-menu"}
        onClick={showSidebar}
      >
        <Link className="links" to="/home">
          Home
        </Link>
        <Link className="links" to="programs">
          Programs
        </Link>
        <Link className="links" to="diet">
          Diet
        </Link>
        <Link className="links" to="about">
          About
        </Link>
        <Link className="links" to="Technique">
          Technique
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
