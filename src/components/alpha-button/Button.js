import React from "react";
import "./Button.scss";

const MainButton = (props) => {
  return (
    <div>
      <button className="main-button">{props.text}</button>
    </div>
  );
};

export default MainButton;
