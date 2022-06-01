import React from "react";
import "./Button.scss";
import { useNavigate } from "react-router-dom";
const MainButton = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/programs");
        }}
        className="main-button"
      >
        {props.text}
      </button>
    </div>
  );
};

export default MainButton;
