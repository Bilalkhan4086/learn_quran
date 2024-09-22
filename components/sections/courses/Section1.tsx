import React from "react";
import Card from "./card";
import { courses } from "@/constants/courses";

const Section1 = () => {
  return (
    <div>
      <h2 className="text-black mb-10 bg-kaizenyellow text-[42px] font-semibold text-center max-md:text-[30px]">
<<<<<<< Updated upstream
        Courses We Offer
      </h2>
      <h3 className="my-4 text-[22px] text-center max-md:text-[18px] text-kaizenblue">
        Courses For Brothers
      </h3>
      <div className="flex gap-5 my-6 overflow-scroll">
        {male_courses.map((course, i) => {
=======
        Our Courses
      </h2>
      <div
        className="gap-5 m-6 max-sm:m-20 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1
      "
      >
        {courses.map((course, i) => {
>>>>>>> Stashed changes
          return (
            <Card
              key={i}
              image={"/images/Qurann.webp"}
              heading={course.heading}
              description={course.description}
              url={course.url}
            />
          );
        })}
      </div>
<<<<<<< Updated upstream
      <h3 className="my-4 text-[22px] text-center max-md:text-[18px] text-kaizenred">
        Courses For Sisters
      </h3>
      <div className="flex gap-5 my-6 overflow-scroll">
        {female_courses.map((course, i) => {
          return (
            <Card
              key={i}
              image={"/images/female.jpeg"}
              heading={course.heading}
              description={course.description}
            />
          );
        })}
      </div>
=======
>>>>>>> Stashed changes
    </div>
  );
};

export default Section1;
