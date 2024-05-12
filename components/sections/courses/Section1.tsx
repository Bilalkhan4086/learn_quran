import React from "react";
import Card from "./card";

const Section1 = () => {
  return (
    <div>
      <h2 className="text-black mb-10 bg-kaizenyellow text-[42px] font-semibold text-center max-md:text-[30px]">
        Courses We Offer
      </h2>
      <h3 className="my-4 text-[22px] text-center max-md:text-[18px] text-kaizenblue">
        Courses For Brothers
      </h3>
      <div className="flex gap-5 my-6 overflow-scroll">
        {[1, 2, 3, 4, 5].map((_, i) => {
          return <Card key={i} image={"/images/Qurann.webp"} />;
        })}
      </div>
      <h3 className="my-4 text-[22px] text-center max-md:text-[18px] text-kaizenred">
        Courses For Sisters
      </h3>
      <div className="flex gap-5 my-6 overflow-scroll">
        {[1, 2, 3, 4, 5].map((_, i) => {
          return <Card key={i} image={"/images/female.jpeg"} />;
        })}
      </div>
      <h3 className="my-4 text-[22px] text-center max-md:text-[18px] text-kaizengreen">
        Courses For Kids
      </h3>
      <div className="flex gap-5 my-6 overflow-scroll">
        {[1, 2, 3, 4, 5].map((_, i) => {
          return <Card key={i} image={"/images/quran-teacher-on-skype.jpeg"} />;
        })}
      </div>
    </div>
  );
};

export default Section1;
