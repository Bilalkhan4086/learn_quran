import React from "react";
import Card from "./card";
import CourseDetails from "./CourseDetails";

const Section1 = ({ courseName }: any) => {
  return (
    <div className="flex flex-col items-center my-6">
      <div className="py-16 my-4 flex flex-col justify-center px-24 max-lg:py-6 max-lg:px-4 bg-kaizengreen text-black font-medium">
        <h4 className="text-[30px]">
          {courseName[0]?.toUpperCase() + courseName.slice(1)} Course
        </h4>
        <p>
          No doubt the knowledge of Quran is the best of all knowledge and it is
          necessary for Muslims to not only learn the recitation of Holy Quran
          but also get to know the commandments and rulings of Sharia mentioned
          in it. Dawat-e-Islami has introduced a very beautiful Faizan-e-Tafseer
          course (Quran Interpretation) so that you get to know about the events
          of Prophets, bounties of Almighty and much more in a detailed manner.
        </p>
        <button className="uppercase bg-kaizenyellow hover:bg-kaizenred mt-4 text-black py-2 px-20 mx-auto">
          Book Now
        </button>
      </div>

      <Card />
      <CourseDetails />
    </div>
  );
};

export default Section1;
