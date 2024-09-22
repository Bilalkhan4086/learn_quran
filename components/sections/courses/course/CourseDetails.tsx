import { WHATSAPP } from "@/constants/common";
import Link from "next/link";
import React from "react";

interface CourseDetailsProps {
  courseName: string;
}

const CourseDetails = ({ courseName }: CourseDetailsProps) => {
  return (
    <div className="my-5 max-lg:p-6 p-20 flex flex-col text-black bg-kaizenblue w-full">
      <div className="mx-auto mb-6">
        <h3 className="uppercase text-xl text-center font-semibold">
          {courseName}
        </h3>
        <div className="mt-4">
          <Link
            href={`https://wa.me/${WHATSAPP}?text=Hi%2C%0AI%20want%20to%20schedule%20a%20demo.%0ACan%20you%20tell%20me%20the%20process%20for%20it%3F`}
            className="bg-kaizenred uppercase hover:bg-kaizenyellow mt-4 text-black py-2 px-8 m-auto"
          >
            Free Demo Classes
          </Link>
        </div>
      </div>
      <div className="flex justify-around">
        <div>
          <h4 className="text-lg">Course Details</h4>
          <ul>
            <li>
              <span className="font-semibold">Duration:</span> 30 Minutes
            </li>
            <li>
              <span className="font-semibold">Languages:</span> English, Urdu
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
