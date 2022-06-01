import React, { useEffect, useState } from "react";
import "./DietFetch.scss";
import axios from "axios";

const DietFetch = () => {
  const [diet, setDiet] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/diets`).then((res) => {
      setDiet(res.data);
    });
  }, []);

  return (
    <div className="diet-container">
      {diet &&
        diet.map((diet, i) => {
          return (
            <div className="day" key={i}>
              <h3>{diet.day}</h3>
              <p> {diet.meal1} </p>
              <p> {diet.meal2} </p>
              <p> {diet.meal3} </p>
              <p> {diet.meal4} </p>
            </div>
          );
        })}
    </div>
  );
};

export default DietFetch;
