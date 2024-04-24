import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import Logo from "../Logo";
import Image from "next/image";

const navigation = {
  company: [
    { name: "About us", href: "#" },
    { name: "contact", href: "#" },
  ],
  featuers: [
    { name: "dynamic organization chart", href: "#" },
    { name: "Time Tracker", href: "#" },
    { name: "dental job descriptions", href: "#" },
    { name: "send signed documents", href: "#" },
    { name: "Cloud Drive", href: "#" },
    { name: "Video training management", href: "#" },
    { name: "testing modules", href: "#" },
    { name: "compliance tracker", href: "#" },
    { name: "paygrade system", href: "#" },
    { name: "gamification", href: "#" },
    { name: "profit bonus system", href: "#" },
    { name: "Performance Reviews", href: "#" },
    { name: "360 Reviews", href: "#" },
    { name: "Department Reviews", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: FaTwitter,
    },
    {
      name: "YouTube",
      href: "#",
      icon: FaYoutube,
    },
  ],
};

export default function Example() {
  return (
    <div
      className=" border-t-[1px] border-t-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:px-8 lg:pt-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 max-[570px]:space-y-4">
            <Logo />
            <p className="uppercase text-lg max-[570px]:text-[16px] leading-6 text-gray-300">
              Dental Business systems. Integrated.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-10 w-10 max-[570px]:h-8 max-[570px]:w-8" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 max-[570px]:mt-8 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-[4.5rem]">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm uppercase font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm uppercase leading-normal text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 -ml-4 md:mt-0">
                <h3 className="text-sm uppercase font-semibold ml-4 leading-6 text-white">
                  Features
                </h3>
                <ul
                  role="list"
                  className="mt-6 flex flex-col flex-wrap min-[520px]:h-48"
                >
                  {navigation.featuers.map((item) => (
                    <li className="ml-4 min-w-[240px]" key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm  leading-normal uppercase text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t  bg-[#222332] border-white/10 py-8 ">
        <div className="flex max-[570px]:flex-col mx-auto max-w-7xl">
          <p className="text-xs  max-[570px]:mx-auto max-sm:px-4 max-md:text-[10px] px-8 flex-1 uppercase leading-5 tracking-widest text-gray-300">
            2023 Kaizen Teams LLC, All rights reserved.
          </p>
          <div className="flex  max-[570px]:mt-3 px-4 max-sm:px-0 justify-end flex-1 text-xs max-md:text-[10px] uppercase cursor-pointer tracking-widest leading-5">
            <div className="flex justify-around w-full lg:w-[70%]">
              <p className="hover:text-gray-50 text-gray-300">Terms</p>
              <p className="hover:text-gray-50 text-gray-300">Privacy Policy</p>
              <p className="hover:text-gray-50 text-gray-300">
                Cancellation Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
