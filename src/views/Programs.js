import React from "react";
//COMPONENTS
import Text from "../components/alpha-text/Text";
import Heading from "../components/alpha-heading/Heading";
import ProgramFetch from "../components/program-fetch/ProgramFetch";
const Programs = () => {
  return (
    <div className="programs-wrapper">
      <div className="programs-header">
        <Heading text="1 weak, peak phase"></Heading>
        <Text text="Deserunt ut velit deserunt amet ea ea dolor elit ipsum veniam exercitation. Elit nulla reprehenderit sint aliquip esse magna deserunt culpa ex eiusmod nulla dolor elit aliqua. Laboris consectetur cupidatat elit aute ex ut est."></Text>
        <ProgramFetch></ProgramFetch>
      </div>
    </div>
  );
};

export default Programs;
