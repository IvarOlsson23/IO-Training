import React from "react";
//COMPONENTS
import Text from "../components/alpha-text/Text";
import Heading from "../components/alpha-heading/Heading";
import ProgramFetch from "../components/program-fetch/ProgramFetch";
const ProgramsEx = () => {
  return (
    <div className="programs-ex-wrapper">
      <div className="programs-ex-header">
        <Heading text="8 weeks peaking phase"></Heading>
        <Text text="8 weeks of snatch and clean & jerk complexes leading into a peak for max snatch and clean & jerk, with a focus on strengthening the back and the pull."></Text>
        <Text text="Nice and simple cycle with moderate volume and high (although flexible) intensity, and all accessory work prescribed to work on stability. This is a cycle emphasizing leg strength, but not neglecting pulling strength or snatch and clean & jerk performance. You'll be squatting every day, but the volume will be relatively low."></Text>
        <Text text="%s following an RM are of that day's RM, not your lifetime best. "></Text>
      </div>
      <ProgramFetch></ProgramFetch>
    </div>
  );
};

export default ProgramsEx;
