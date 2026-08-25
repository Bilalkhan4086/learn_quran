"use client";

import { useState } from "react";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";
import type { FaqItem } from "@/constants/faqs";

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div key={item.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left font-bold text-primary transition-colors hover:bg-sage/60 sm:px-7"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <LuChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 flex-none text-accent transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>
              {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="faq-panel overflow-hidden"
                  >
                    <div className="px-5 pb-6 pr-12 text-sm leading-7 text-muted sm:px-7 sm:pr-16">
                      <p>{item.answer}</p>
                      {item.link ? (
                        <Link
                          href={item.link.href}
                          className="mt-3 inline-flex min-h-11 cursor-pointer items-center font-bold text-primary underline decoration-accent/60 decoration-2 underline-offset-4 hover:decoration-accent"
                        >
                          {item.link.label}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                ) : null}
            </div>
          );
        })}
    </div>
  );
}

export type FaqAccordionProps = {
  items: FaqItem[];
};
