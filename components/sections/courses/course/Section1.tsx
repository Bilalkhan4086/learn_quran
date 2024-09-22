import React from "react";
import Card from "./card";
import CourseDetails from "./CourseDetails";
import Link from "next/link";
import { WHATSAPP } from "@/constants/common";

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
        <Link
          href={`https://wa.me/${WHATSAPP}?text=Hi%2C%0AI%20want%20to%20schedule%20a%20demo.%0ACan%20you%20tell%20me%20the%20process%20for%20it%3F`}
          className="uppercase bg-kaizenyellow hover:bg-kaizenred mt-4 text-black py-2 px-20 mx-auto"
        >
          Book Now
        </Link>
      </div>

      <Card listOfQuestions={courseDetail?.questions} />
      <CourseDetails courseName={courseDetail?.heading} />
    </div>
  );
};

export default Section1;
