import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import Logo from "../Logo";

const navigation = {
  company: [
    { name: "courses", href: "/courses" },
    { name: "contact", href: "/about#contact" },
    { name: "About us", href: "/about" },
    { name: "Fee structure", href: "/fee-structure" },
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
        <div className="flex justify-between">
          <div className="space-y-8 ">
            <Logo />
            <p className="uppercase text-lg max-[570px]:text-[16px] leading-6 text-gray-300">
              Where you learn to recite Quran.
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
          <div className="">
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
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t  bg-[#222332] border-white/10 py-8 ">
        <div className="flex max-[570px]:flex-col mx-auto max-w-7xl">
          <p className="text-xs  max-[570px]:mx-auto max-sm:px-4 max-md:text-[10px] px-8 flex-1 uppercase leading-5 tracking-widest text-gray-300">
            2023 Kanzul QURAN LLC, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
