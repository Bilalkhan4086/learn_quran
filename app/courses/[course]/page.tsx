import Section1 from "@/components/sections/courses/course/Section1";
import { coursesDetails } from "@/constants/courses";
import React from "react";

export async function generateStaticParams() {
  return coursesDetails.map((course) => ({
    params: {
      course: course.heading
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .split(" ")
        .join("_"),
    },
  }));
}

const Course = ({ params }: any) => {
  const { course } = params;
  const filteredCourse = coursesDetails.filter((courseDetail) => {
    return courseDetail.url === course;
  });

  if (filteredCourse.length === 0) {
    return (
      <div className="max-w-7xl relative px-4 m-auto">
        <h1 className="my-72 ml-10">Course not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl relative px-4 m-auto">
      <Section1 courseDetail={filteredCourse[0]} />
    </div>
  );
};

export default Course;
