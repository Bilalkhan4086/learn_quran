"use client";
import Logo from "../Logo";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { WHATSAPP } from "@/constants/common";

const montFont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Navbar() {
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
              <Link
                href={"/fee-structure"}
                className="ml-6 max-[600px]:ml-2 py-1 cursor-pointer text-lg text-white w-24 uppercase hover:text-gray-300 "
              >
                Pricing
              </Link>

              <Link
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C%0AI%20want%20to%20schedule%20a%20demo.%0ACan%20you%20tell%20me%20the%20process%20for%20it%3F`}
                className="rounded-full cursor-pointer max-[600px]:ml-2  max-[600px]:text-sm ml-6 ring-1 uppercase  bg-purple px-4 ring-purple py-1 text-white hover:ring-purple hover:text-gray-300 "
              >
                Schedule <span className="max-[600px]:hidden">Class</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    </nav>
  );
}
