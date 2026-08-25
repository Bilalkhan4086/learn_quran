"use client";

import { useRef } from "react";
import { LuArrowLeft, LuArrowRight, LuQuote } from "react-icons/lu";

const testimonials = [
  {
    quote:
      "The one-to-one format helps my child stay focused, and the tutor explains each lesson with patience.",
    role: "Parent",
    course: "Nazra Quran",
  },
  {
    quote:
      "I appreciate how clearly my recitation mistakes are explained. I now know what to practise between lessons.",
    role: "Adult student",
    course: "Tajweed ul Quran",
  },
  {
    quote:
      "The revision routine gives my child a steady structure without making memorization feel overwhelming.",
    role: "Parent",
    course: "Hifz ul Quran",
  },
  {
    quote:
      "I feel more confident reading aloud because the lessons move at a pace that is comfortable for me.",
    role: "Student",
    course: "Nazra Quran",
  },
  {
    quote:
      "Both of my children learn differently, and their tutor adjusts the approach for each of them.",
    role: "Parent of two learners",
    course: "Quran reading",
  },
  {
    quote:
      "Online lessons made it possible for me to return to Quran learning alongside a busy weekly schedule.",
    role: "Adult student",
    course: "Tajweed ul Quran",
  },
  {
    quote:
      "The free trial helped us understand the teaching style and choose the right course before committing.",
    role: "Parent",
    course: "Beginner programme",
  },
  {
    quote:
      "Lessons are calm, focused, and practical. The personal feedback has made my recitation more consistent.",
    role: "Student",
    course: "Tajweed ul Quran",
  },
  {
    quote:
      "We value the clear communication and the care taken to keep our teenager motivated from week to week.",
    role: "Parent",
    course: "Hifz ul Quran",
  },
  {
    quote:
      "Breaking each memorization goal into smaller portions has helped me revise more confidently.",
    role: "Student",
    course: "Barkaat ul Quran",
  },
] satisfies Testimonial[];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const moveTrack = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.86, 440),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section className="section-space overflow-hidden border-y border-border bg-surface">
      <div className="site-container">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Student and parent stories</p>
            <h2 className="text-pretty mt-3 font-display text-4xl font-semibold leading-tight text-primary sm:text-5xl">
              Learning experiences shared by our community
            </h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Personal teaching, patient correction, and a steady routine make a
              meaningful difference for learners and their families.
            </p>
          </div>
          <div className="flex items-center gap-3" aria-label="Testimonial navigation">
            <button
              type="button"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-border bg-canvas text-primary transition-colors hover:border-primary/60 hover:bg-sage"
              aria-label="Show previous testimonials"
              onClick={() => moveTrack(-1)}
            >
              <LuArrowLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-border bg-canvas text-primary transition-colors hover:border-primary/60 hover:bg-sage"
              aria-label="Show next testimonials"
              onClick={() => moveTrack(1)}
            >
              <LuArrowRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="hide-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
          role="region"
          aria-label="Ten testimonials from students and parents"
          tabIndex={0}
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.role}-${testimonial.course}-${index}`}
              className="premium-card flex min-h-80 w-[86vw] max-w-[410px] flex-none snap-start flex-col p-7 sm:w-[390px] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-soft text-primary">
                  <LuQuote aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="font-display text-lg text-muted/55">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <blockquote className="mt-7 flex-1 font-display text-xl leading-8 text-ink sm:text-2xl sm:leading-9">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-bold text-primary">{testimonial.role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                  {testimonial.course}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export type Testimonial = {
  quote: string;
  role: string;
  course: string;
};
