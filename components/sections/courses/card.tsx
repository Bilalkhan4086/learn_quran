import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ url, image, heading, description }: any) => {
  return (
    <Link
      href={`/courses/${url}`}
      className="max-w-[400px] mx-auto rounded-xl overflow-hidden bg-gray-900"
    >
      <Image src={image} alt={"card"} height={500} width={600} />
      <div className="p-2">
        <h5 className="text-center text-kaizenred">{heading}</h5>
        <p className="text-[12px] text-gray-400">
          {description?.slice(0, 117)}
          {description?.length > 117 && "..."}
        </p>
      </div>
    </Link>
  );
};

export default Card;
