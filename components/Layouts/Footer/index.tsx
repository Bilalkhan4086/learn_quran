import Link from "next/link";
import { LuArrowUpRight, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import Logo from "../Logo";
import { navbar } from "@/constants/navbar";
import { siteConfig } from "@/constants/common";

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "YouTube", href: siteConfig.social.youtube },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface text-white">
      <div className="islamic-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="site-container relative py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div className="max-w-md">
            <Logo inverse />
            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              Personal online Quran learning for children and adults, guided by
              qualified tutors from the comfort of home.
            </p>
            <a
              href={siteConfig.whatsappTrialHref}
              className="mt-6 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-canvas transition-colors hover:bg-primary-light"
            >
              Schedule a free trial
              <LuArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {navbar.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className="inline-flex min-h-11 cursor-pointer items-center text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#contact"
                  className="inline-flex min-h-11 cursor-pointer items-center text-sm text-white/70 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex min-h-11 cursor-pointer items-center gap-3 hover:text-white"
                >
                  <LuPhone aria-hidden="true" className="h-4 w-4 text-primary" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex min-h-11 items-center gap-3">
                <LuMapPin aria-hidden="true" className="h-4 w-4 text-primary" />
                Serving students worldwide
              </li>
              <li>
                <a
                  href={siteConfig.smsHref}
                  className="flex min-h-11 cursor-pointer items-center gap-3 hover:text-white"
                >
                  <LuMail aria-hidden="true" className="h-4 w-4 text-primary" />
                  Send an SMS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kanzul Quran Online Academy. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex min-h-11 cursor-pointer items-center gap-1 transition-colors hover:text-white"
              >
                {item.label}
                <LuArrowUpRight aria-hidden="true" className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
