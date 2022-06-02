import React from "react";
import "./Card.scss";
import MainButton from "../alpha-button/Button";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  let navigate = useNavigate();
  return (
    <div className="card-wrapper">
      <img className="card-image" src={props.imageSource} alt=""></img>
      <div className="card-inside">
        <h2> {props.heading} </h2>
        <p> {props.text} </p>
        <div
          onClick={() => {
            navigate("/programs");
          }}
        >
          <MainButton text="Read more"></MainButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
