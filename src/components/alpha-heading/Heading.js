import React from "react";
import "./Heading.scss";

const Heading = (props) => {
  return (
    <div className="heading">
      <h2> {props.text} </h2>
    </div>
  );
};

export default Heading;
