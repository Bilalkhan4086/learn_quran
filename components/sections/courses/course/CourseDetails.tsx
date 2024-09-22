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
            href={"/fee-structure"}
            className="bg-kaizenred uppercase hover:bg-kaizenyellow mt-4 text-black py-2 px-20 m-auto"
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
