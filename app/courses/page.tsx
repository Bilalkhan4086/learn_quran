import type { Metadata } from "next";
import { LuBookOpenCheck, LuMessageCircle } from "react-icons/lu";
import ButtonLink from "@/components/ui/ButtonLink";
import CourseCard from "@/components/ui/CourseCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { courses } from "@/constants/courses";
import { siteConfig } from "@/constants/common";

export const metadata: Metadata = {
  title: "Online Quran Courses",
  description:
    "Explore one-to-one online Quran courses in Tajweed, Nazra, Hifz, Qiraat, selected Surah memorization, and essential Islamic knowledge.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Online Quran Courses | Kanzul Quran Academy",
    description:
      "Find a personal online Quran learning path for children and adults at every stage.",
    url: "/courses",
  },
};

export default function CoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-sage/55 py-16 sm:py-20">
        <div className="islamic-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <Reveal className="site-container relative text-center">
          <p className="eyebrow">Study with personal guidance</p>
          <h1 className="text-pretty mx-auto mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight text-primary sm:text-6xl">
            Find the Quran course that meets you at your level.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Every course is delivered live and one to one, with lessons shaped
            around the student&apos;s current ability, pace, and goals.
          </p>
        </Reveal>
      </section>

      <section className="section-space">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="Six learning paths"
              title="Explore all courses"
              description="Begin with Quran reading, improve your Tajweed, follow a memorization plan, or deepen your essential Islamic knowledge."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Reveal key={course.url} delay={(index % 3) * 0.05}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container pb-16 sm:pb-20 lg:pb-24">
        <Reveal>
          <div className="grid gap-8 overflow-hidden rounded-4xl border border-border bg-brand p-7 text-white shadow-soft sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div>
              <LuBookOpenCheck aria-hidden="true" className="h-7 w-7 text-primary" />
              <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
                Not sure which course is right?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/75">
                Tell us about the learner&apos;s experience and goals. The free trial
                helps us recommend a suitable starting point.
              </p>
            </div>
            <ButtonLink
              href={siteConfig.whatsappTrialHref}
              variant="secondary"
              className="border-white/20 bg-canvas text-primary hover:bg-surface"
            >
              <LuMessageCircle aria-hidden="true" className="h-4 w-4" />
              Ask on WhatsApp
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
