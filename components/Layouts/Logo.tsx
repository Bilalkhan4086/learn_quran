import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center max-sm:flex-col">
      <div className="flex items-center">
        <h2 className="text-purple text-xl font-medium uppercase">Kanzul</h2>
        <div className="h-4 border-l-2 mx-2 font-bold border-white">{""}</div>
      </div>
      <h2 className="text-white text-xl uppercase font-lighter">quran</h2>
    </Link>
  );
};

export default Logo;
