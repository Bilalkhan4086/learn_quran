import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ image }: any) => {
  return (
    <Link
      href={"/courses/tafseer"}
      className="max-w-[340px] min-w-[320px] rounded-xl bg-gray-900"
    >
      <Image src={image} alt={"card"} height={500} width={500} />
      <div className="p-2">
        <h5 className="text-center">Tafseer</h5>
        <p className="text-[12px] text-gray-400">
          No doubt the knowledge of Quran is the best of all knowledge and it is
          necessary for Muslims to not only learn the re...
        </p>
      </div>
    </Link>
  );
};

export default Card;
