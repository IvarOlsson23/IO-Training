import React from "react";
import Text from "../components/alpha-text/Text";
import Heading from "../components/alpha-heading/Heading";
import DietFetch from "../components/DietFetch.js/DietFetch";

const Diet = () => {
  return (
    <div className="diet-wrapper">
      <div className="diet-header">
        <Heading text="Food for strength"></Heading>
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam"></Text>
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam tempor incididunt ut labore et dolore "></Text>
        <DietFetch></DietFetch>
      </div>
    </div>
  );
};

export default Diet;
