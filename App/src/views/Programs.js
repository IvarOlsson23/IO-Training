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
        <Text
          text="Our weightlifting training programs are currently used by 92,234 athletes around the world! Use the filter to find a program, or browse all available below.
        "
        ></Text>
        <Text
          text="Deserunt ut velit deserunt amet ea ea dolor elit ipsum veniam exercitation. Elit nulla reprehenderit sint aliquip esse magna deserunt culpa ex eiusmod nulla dolor elit aliqua. Laboris consectetur cupidatat elit aute ex ut est.
        "
        ></Text>
        <Text
          text="Deserunt ut velit deserunt amet ea ea dolor elit ipsum veniam exercitation. Elit nulla reprehenderit sint aliquip esse magna deserunt culpa ex eiusmod nulla dolor elit aliqua. Laboris consectetur cupidatat elit aute ex ut est.
        "
        ></Text>
      </div>
      <ProgramsLeaflet
        heading="8 weeks peaking phase"
        text="9 weeks of snatch and clean & jerk complexes leading into a peak for max snatch and clean & jerk, with a focus on strengthening the back and the pull.
        Nice and simple cycle with moderate volume and high (although flexible) intensity, and all accessory work prescribed to work on stability.
        "
        info1="Duration: 8 weaks"
        info2="Volume: Heavy"
      ></ProgramsLeaflet>
      <ProgramsLeaflet
        heading="Basic strength cycle"
        text="This 9-week cycle uses different competition and strength lifts with each exposure for the first 6 weeks, and then focuses on heavy single competition lifts for the final weeks to prepare for competition or max snatch and clean & jerk testing."
        info1="Duration: 9 weaks"
        info2="Volume: Moderate"
      ></ProgramsLeaflet>
      <ProgramsLeaflet
        heading="4 weeks squats"
        text="This is a cycle emphasizing leg strength, but not neglecting pulling strength or snatch and clean & jerk performance. You'll be squatting every day, but the volume will be relatively low."
        info1="Duration: 4 weaks"
        info2="Volume: Moderate"
      ></ProgramsLeaflet>
    </div>
  );
};

export default Programs;
