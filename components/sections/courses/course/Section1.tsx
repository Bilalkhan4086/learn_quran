import React from "react";
import Card from "./card";
import CourseDetails from "./CourseDetails";

interface CourseDetailProps {
  heading: string;
  description: string;
  questions: string[];
  url: string;
}

const Section1 = ({ courseDetail }: { courseDetail: CourseDetailProps }) => {
  return (
    <div className="flex flex-col items-center my-6">
      <div className="py-16 my-4 flex flex-col justify-center px-24 max-lg:py-6 max-lg:px-4 bg-kaizengreen text-black font-medium">
        <h4 className="text-[30px]">{courseDetail?.heading}</h4>
        <p>{courseDetail?.description}</p>
        <button className="uppercase bg-kaizenyellow hover:bg-kaizenred mt-4 text-black py-2 px-20 mx-auto">
          Book Now
        </button>
      </div>

      <Card listOfQuestions={courseDetail?.questions} />
      <CourseDetails courseName={courseDetail?.heading} />
    </div>
  );
};

export default Section1;
