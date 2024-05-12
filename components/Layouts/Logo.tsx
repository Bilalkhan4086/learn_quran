import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center max-[600px]:flex-col">
      <div className="flex items-center">
        <h2 className="text-purple text-xl uppercase font-normal">taealam</h2>
        <div className="h-4 border-l-2 mx-2 font-bold border-white">{""}</div>
      </div>
      <h2 className="text-white text-xl uppercase font-lighter">alquran</h2>
    </div>
  );
};

export default Logo;
