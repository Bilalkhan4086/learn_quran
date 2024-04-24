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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Home");

  const handleChangeTab = (label: string) => {
    setActiveTab(label);
  };
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
            <div className="hidden md:ml-6 md:flex md:items-center">
              <button
                onClick={() => {
                  handleClickLink("/pricing");
                }}
                type="button"
                className="ml-6 py-1 cursor-pointer text-white w-24 uppercase hover:text-gray-300 "
              >
                Pricing
              </button>
              <button
                onClick={() => {
                  handleClickLink("https://staging.sparrowteams.com/");
                }}
                type="button"
                className="rounded-full cursor-pointer ml-6 w-28 ring-1 px-2 uppercase ring-white py-1 text-white hover:ring-gray-300 hover:text-gray-300 "
              >
                Log in
              </button>
              <button
                onClick={() => {
                  handleClickLink("https://staging.sparrowteams.com/");
                }}
                type="button"
                className="rounded-full cursor-pointer ml-6 ring-1 w-28 uppercase  bg-purple px-2 ring-purple py-1 text-white hover:ring-purple hover:text-gray-300 "
              >
                TRY DEMO
              </button>
              {/* Profile dropdown */}
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              {/* Mobile menu button */}
              <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-dullgraybg hover:text-gray-500 ">
                <span className="sr-only">Open main menu</span>
                {true ? (
                  <Cross color={"white"} className="block h-6 w-6" />
                ) : (
                  <Burger color={"white"} className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
            {navbar.map((tab, i) => (
              <a
                key={i}
                href={tab.link}
                onClick={() => {
                  handleChangeTab(tab.label);
                }}
                className={`block  ${
                  activeTab === tab.label
                    ? "border-purple border-l-4 text-purple bg-indigo-50 "
                    : " text-white"
                }  py-2 pl-3 hover:border-l-4 hover:border-gray-400 hover:text-dullgraybg hover:bg-indigo-50 pr-4 text-base font-medium `}
              >
                {tab.label}
              </a>
            ))}
          </div>
          <div className="border-t border-gray-200 w-full flex flex-col pb-3 pt-4">
            <button className="text-white ring-white ring-1 mb-2 w-[95%] mx-auto py-3">
              Sign in
            </button>
            <button className="bg-white text-dullgraybg w-[95%] mx-auto py-3">
              Sign up
            </button>
          </div>
          {/* <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-md font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <Bell classes="h-6 w-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div> */}
        </div>
      </>
    </nav>
  );
}
