import React from "react";
import Text from "../components/alpha-text/Text";
import Heading from "../components/alpha-heading/Heading";
const Locations = () => {
  return (
    <div>
      <div className="locations-header">
        <Heading text="Where... where are we?"></Heading>
        <Text text="Storgatan 12, Göteborg"></Text>
        <Text text="Långgatan 825, Kapstaden, Sydafrika"></Text>
        <Text text="Nationalstigen 666, Anchorage, Alaska "></Text>
        <Heading text="Who is ship running this ship?"></Heading>
        <Text text="Ivar Olsson "></Text>
        <Text text="https://github.com/IvarOlsson23/IO-Training"></Text>
      </div>
    </div>
  );
};

export default Locations;
