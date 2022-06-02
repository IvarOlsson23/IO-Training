import React from "react";
import "./Card.scss";
import MainButton from "../alpha-button/Button";

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <img className="card-image" src={props.imageSource} alt=""></img>
      <div className="card-inside">
        <h2> {props.heading} </h2>
        <p> {props.text} </p>
        <MainButton text="Read more"></MainButton>
      </div>
    </div>
  );
};

export default Card;
