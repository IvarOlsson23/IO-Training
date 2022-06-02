import React from "react";
import Text from "../components/alpha-text/Text";
import Heading from "../components/alpha-heading/Heading";
const Technique = () => {
  return (
    <div>
      <div className="technique-header">
        <Heading text="Technique is very important"></Heading>
        <Heading text="Learning the snatch"></Heading>
        <Text text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"></Text>
        <Text
          text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        "
        ></Text>
        <div className="videos">
          <iframe
            width="320"
            height="315"
            src="https://www.youtube.com/embed/v-usczgtDQc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <Heading text="Squat safely"></Heading>
        <Text text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"></Text>
        <Text
          text="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        "
        ></Text>
        <div className="videos">
          <iframe
            width="320"
            height="315"
            src="https://www.youtube.com/embed/v-usczgtDQc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Technique;
