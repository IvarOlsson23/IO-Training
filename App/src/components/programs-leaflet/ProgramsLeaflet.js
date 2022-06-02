import React from "react";
import "./ProgramsLeaflet.scss";
import MainButton from "../alpha-button/Button";
import { useNavigate } from "react-router-dom";
const ProgramsLeaflet = (props) => {
  let navigate = useNavigate();
  return (
    <div className="leaflet-wrapper">
      <h2 className="leaflet-heading"> {props.heading} </h2>
      <span> {props.info1} </span> <br />
      <span> {props.info2} </span> <br />
      <p> {props.text} </p>
      <div
        onClick={() => {
          navigate("/programsEx");
        }}
      >
        <MainButton text="Get started"></MainButton>
      </div>
    </div>
  );
};

export default ProgramsLeaflet;
