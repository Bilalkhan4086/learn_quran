import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl relative my-20 px-4 mx-auto min-h-[65vh]">
      <Section1 />
      <Section2 />
    </div>
  );
};

export default About;
