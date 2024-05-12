"use client";
import { useState } from "react";
import { FaBars as Burger } from "react-icons/fa6";
import { RxCross2 as Cross } from "react-icons/rx";
import { navbar } from "@/constants/navbar";
import Logo from "../Logo";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

const montFont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Navbar() {
  const router = useRouter();
  const handleClickLink = (_link: string) => {
    router.push(_link);
  };
  return (
    <nav className="bg-transparent shadow">
      <>
        <div
          className={`${montFont.className} mx-auto max-w-7xl px-4 md:px-6 lg:px-8`}
        >
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Logo />
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8"></div>
            </div>
            <div className=" md:ml-6 flex items-center md:items-center">
              <button
                onClick={() => {
                  handleClickLink("/fee-structure");
                }}
                type="button"
                className="ml-6 max-[600px]:ml-2 py-1 cursor-pointer max-[600px]:text-sm text-white w-24 uppercase hover:text-gray-300 "
              >
                Pricing
              </button>

              <button
                onClick={() => {
                  handleClickLink("");
                }}
                type="button"
                className="rounded-full cursor-pointer max-[600px]:ml-2  max-[600px]:text-sm ml-6 ring-1 uppercase  bg-purple px-4 ring-purple py-1 text-white hover:ring-purple hover:text-gray-300 "
              >
                Schedule <span className="max-[600px]:hidden">Class</span>
              </button>
              {/* Profile dropdown */}
            </div>
          </div>
        </div>
      </>
    </nav>
  );
}
