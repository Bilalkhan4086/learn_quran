"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu, LuMessageCircle, LuX } from "react-icons/lu";
import Logo from "../Logo";
import { navbar } from "@/constants/navbar";
import { siteConfig } from "@/constants/common";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    document.body.style.overflow = "hidden";
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-canvas/95 backdrop-blur-xl">
      <nav className="site-container flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navbar.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={`flex min-h-11 cursor-pointer items-center rounded-full px-4 text-sm font-bold transition-colors duration-200 ${
                isActive(item.link)
                  ? "bg-sage text-primary"
                  : "text-muted hover:bg-primary/5 hover:text-primary"
              }`}
              aria-current={isActive(item.link) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.whatsappTrialHref}
            className="hidden min-h-11 cursor-pointer items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white shadow-soft transition-colors duration-200 hover:bg-brand-light sm:inline-flex"
            aria-label="Schedule a free class on WhatsApp"
          >
            <LuMessageCircle aria-hidden="true" className="h-4 w-4" />
            Free trial
          </a>
          <button
            ref={triggerRef}
            type="button"
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-border bg-surface text-primary transition-colors hover:bg-sage lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div
          className="mobile-overlay fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] bg-canvas/80 px-4 py-4 backdrop-blur-sm lg:hidden"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div
            ref={panelRef}
            id="mobile-navigation"
            className="mobile-panel mx-auto max-w-lg rounded-3xl border border-border bg-surface p-4 shadow-soft"
          >
                <div className="flex flex-col gap-1">
                  {navbar.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className={`flex min-h-12 cursor-pointer items-center rounded-2xl px-4 font-bold transition-colors ${
                        isActive(item.link)
                          ? "bg-sage text-primary"
                          : "text-muted hover:bg-primary/5 hover:text-primary"
                      }`}
                      aria-current={isActive(item.link) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href={siteConfig.whatsappTrialHref}
                    className="mt-3 inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-2xl bg-brand px-5 font-bold text-white hover:bg-brand-light"
                  >
                    <LuMessageCircle aria-hidden="true" className="h-5 w-5" />
                    Schedule a free trial
                  </a>
                </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
