import React from "react";
import "./ProgramsLeaflet.scss";
import MainButton from "../alpha-button/Button";

const ProgramsLeaflet = (props) => {
  return (
    <div className="leaflet-wrapper">
      <h2 className="leaflet-heading"> {props.heading} </h2>
      <span> {props.info1} </span> <br />
      <span> {props.info2} </span> <br />
      <p> {props.text} </p>
      <MainButton text="Get started"></MainButton>
    </div>
  );
};

export default ProgramsLeaflet;
