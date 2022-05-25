import React from "react";
// components
import Card from "../components/alpha-card/Card";
import Text from "../components/alpha-text/Text";
import Heading from "../components/alpha-heading/Heading";
//MEDIA

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-header">
        <Heading text="Next level training!"></Heading>
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam"></Text>
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam tempor incididunt ut labore et dolore "></Text>
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam tempor incididunt ut labore et dolore "></Text>
      </div>
      <Card
        heading="Find the right program for you"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
        imageSource={require("../media/programs-img.jpg")}
      />
      <Card
        heading="diet"
        text="test"
        imageSource={require("../media/diet-img.jpg")}
      />
      <Card
        heading="gyms"
        text="test"
        imageSource={require("../media/gyms-img.jpg")}
      />
    </div>
  );
};

export default Home;
