import Section1 from "@/components/sections/courses/course/Section1";
import React from "react";

const Course = ({ params }: any) => {
  const { course } = params;
  return (
    <div className="max-w-7xl relative px-4 m-auto">
      <Section1 courseName={course?.split("_")?.join(" ")} />
    </div>
  );
};

export default Course;
