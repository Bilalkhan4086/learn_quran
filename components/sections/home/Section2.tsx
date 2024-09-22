import React from "react";
import Image from "next/image";
import Pricing from "./pricing/page";

const bgColor: Record<string, string> = {
  red: "bg-kaizenred",
  yellow: "bg-kaizenyellow",
  green: "bg-kaizengreen",
  blue: "bg-kaizenblue",
};

const Section2 = () => {
  return (
    <div className="text-white relative text-center mt-2 mb-20">
      <h3 className="text-5xl text-blue max-md:text-2xl my-3 font-normal ">
        Featured Courses
      </h3>
      <h4 className="font-normal max-[500px]:text-xl max-md:text-2xl text-3xl">
        <span>
          These are our most{" "}
          <span className="text-blue">subscribed courses</span>.
        </span>
      </h4>
      <Pricing />
    </div>
  );
};

export default Section2;
