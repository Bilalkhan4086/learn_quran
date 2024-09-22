import React from "react";
import Card from "./card";
import { female_courses, male_courses } from "@/constants/courses";

const Section1 = () => {
  return (
    <div>
      <h2 className="text-black mb-10 bg-kaizenyellow text-[42px] font-semibold 
      text-center max-md:text-[30px]">
        Our Courses 
      </h2>
      {/* <h3 className="my-4 text-[22px] text-center max-md:text-[18px] text-kaizenblue">
        Our Courses 
      </h3> */}
      <div className="gap-5 my-6 grid grid-cols-3 max-md:grid-cols-2 
      max-sm:grid-cols-1 mx-1 max-sm:mx-[15%]">
        {male_courses.map((course, i) => {
          return (
            <Card
              key={i}
              image={"/images/Qurann.webp"}
              heading={course.heading}
              description={course.description}
            />
          );
        })}
      </div>

    </div>
  );
};

export default Section1;
