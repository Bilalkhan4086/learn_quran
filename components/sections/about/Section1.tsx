import Image from "next/image";
import React from "react";
import Quran from "@/public/images/Qurann.webp";

const Section1 = () => {
  return (
    <div className="flex items-center max-xl:flex-col-reverse">
      <div className="flex-1 px-4 max-w-[900px] max-xl:py-6">
        <h2 className="text-3xl underline text-kaizengreen mb-6">About Us</h2>
        <p>
          Learning Quran online Academy is online islamic school that has been
          providing Quran and basic level Islamic teaching services Global since
          2001. We are providing online Quran teaching service to kids and
          adults, male and female across the globe we organise one-to-one live
          interactive Quran classes.and all teacher expert in proper quran
          pronunciation.Our Quran learning courses are specially designed for
          you and your kids. Under the guidance of qualified Quran Tutors, we
          will provide you step by step Quran Learning with the rules of Tajweed
          and essential Islamic knowledge. Are you looking for an online Quran
          tutor for yourself or for your children, let’s learn Quran with online
          Quran tutor in one-to-one Quran class at the comfort of your home.
        </p>
      </div>
      <div className="flex-1 px-4">
        <Image src={Quran} alt="quran" />
      </div>
    </div>
  );
};

export default Section1;
