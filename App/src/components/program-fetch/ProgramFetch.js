import React, { useEffect, useState } from "react";
import "./ProgramFetch.scss";
import axios from "axios";

const ProgramFetch = () => {
  const [program, setProgram] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/program`).then((res) => {
      setProgram(res.data);
    });
  }, []);

  return (
    <div className="program-container">
      {program &&
        program.map((program, i) => {
          return (
            <div className="day" key={i}>
              <h3>{program.day}</h3>
              <h4>{program.exercise1}</h4>
              <p>{program.reps1}</p>
              <h4>{program.exercise2}</h4>
              <p>{program.reps2}</p>
              <h4>{program.exercise3}</h4>
              <p>{program.reps3}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ProgramFetch;
