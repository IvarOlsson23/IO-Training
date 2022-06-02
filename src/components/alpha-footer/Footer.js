import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  let navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-inside">
        <p>IO Training</p>
        <p>Since 2022</p>
      </div>
      <div className="footer-inside">
        <p
          onClick={() => {
            navigate("/locations");
          }}
        >
          Find us
        </p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Footer;
