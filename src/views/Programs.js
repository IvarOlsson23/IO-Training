import React from "react";
//COMPONENTS
import Text from "../components/alpha-text/Text";
import Heading from "../components/alpha-heading/Heading";
import ProgramsLeaflet from "../components/programs-leaflet/ProgramsLeaflet";
const Programs = () => {
  return (
    <div className="programs-wrapper">
      <div className="programs-header">
        <Heading text="Find the best program for you"></Heading>
        <Text text="Deserunt ut velit deserunt amet ea ea dolor elit ipsum veniam exercitation. Elit nulla reprehenderit sint aliquip esse magna deserunt culpa ex eiusmod nulla dolor elit aliqua. Laboris consectetur cupidatat elit aute ex ut est."></Text>
      </div>
      <ProgramsLeaflet
        heading="8 weeks peaking phase"
        text="Deserunt ut velit deserunt amet ea ea dolor elit ipsum veniam exercitation."
        info1="Duration: 8 weaks"
        info2="Volume: Heavy"
      ></ProgramsLeaflet>
      <ProgramsLeaflet
        heading="Basic strength cycle"
        text="Deserunt ut velit deserunt amet ea ea dolor elit ipsum veniam exercitation."
        info1="Duration: 12 weaks"
        info2="Volume: Moderate"
      ></ProgramsLeaflet>
      <ProgramsLeaflet
        heading="4 weeks squats"
        text="Deserunt ut velit deserunt amet ea ea dolor elit ipsum veniam exercitation."
        info1="Duration: 4 weaks"
        info2="Volume: Moderate"
      ></ProgramsLeaflet>
    </div>
  );
};

export default Programs;
