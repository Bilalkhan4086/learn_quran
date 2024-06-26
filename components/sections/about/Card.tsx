import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ info }: any) => {
  return (
    <div className="max-w-[240px] flex flex-col items-center ring-1 ring-white p-4 rounded-lg">
      <Image src={info.icon} alt="whatsapp" width={50} height={50} />
      <h4 className="text-lg font-semibold my-5">{info.mediumText}</h4>
      <h5 className="text-sm font-medium mb-5">
        Please feel free to contact or ask any query.
      </h5>
      <Link
        href={info?.infoLink}
        className="bg-kaizengreen text-center hover:bg-green-200 text-black py-2 w-full"
      >
        Reach us
      </Link>
    </div>
  );
};

export default Card;
