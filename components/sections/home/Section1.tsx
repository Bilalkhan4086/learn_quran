import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <div className="text-white max-[350px]:pt-10  pt-12 mt-2">
      <h1 className="text-6xl text-center max-md:text-5xl max-[500px]:text-4xl my-3 text-purple font-medium">
        <span className="uppercase">Kanzul Quran</span>{" "}
        <span className="text-kaizenyellow">Online Academy</span>
      </h1>
      <h3 className="text-white text-center my-5 text-3xl  max-[500px]:text-xl max-md:text-2xl">
        we teach quran to{" "}
        <span className="text-kaizenred">
          you, your children, also females and males
        </span>
        .
      </h3>
      <Image
        className="m-auto my-10"
        src={"/images/qaida.webp"}
        alt="quran"
        width={800}
        height={800}
      />
      <div className="max-w-[1024px] flex flex-col gap-3 text-xl mx-auto my-10">
        <p>
          <span className="text-purple">Kanzul Quran Online Academy</span> is a
          platform dedicated to providing{" "}
          <span className="text-kaizenyellow">
            Islamic and Quranic education
          </span>{" "}
          to Muslim students worldwide. Our academy offers comprehensive online
          teachings, including{" "}
          <span className="text-kaizenyellow">
            daily supplications and Tajweed, crucial for every Muslim&apos;s
            spiritual growth.
          </span>
        </p>
        <p>
          <span className="text-kaizenred">Tajweed</span>, the correct
          pronunciation of Quranic letters, is a fundamental aspect of Quranic
          recitation. Our{" "}
          <span className="text-kaizenred">
            experienced male and female staff
          </span>{" "}
          ensure students learn and apply{" "}
          <span className="text-kaizenred">Tajweed principles</span> accurately.
        </p>
        <p>
          Through the guidance of{" "}
          <span className="text-kaizenblue">qualified instructors</span>,
          students,{" "}
          <span className="text-kaizenblue">
            including sisters, brothers and kids
          </span>
          , can memorize and recite daily supplications, seeking the blessings
          and mercy of Allah in every step of their lives.
        </p>
        <p>
          At{" "}
          <span className="text-kaizengreen">Kanzul Quran Online Academy</span>,
          we&apos;re committed to offering{" "}
          <span className="text-kaizengreen">specially designed courses</span>{" "}
          that cater to the needs of our diverse student community.
          <span className="text-kaizengreen">Join us</span>, and experience the
          privilege of learning the{" "}
          <span className="text-kaizengreen">Quran online</span>, benefiting
          from our services while enjoying the global reach of our educational
          platform, all by the Grace of{" "}
          <span className="text-purple">Allah Almighty</span>.
        </p>
      </div>
    </div>
  );
};

export default Section1;
