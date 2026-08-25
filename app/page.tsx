import Image from "next/image";
import {
  LuBookOpen,
  LuCalendarCheck2,
  LuCheck,
  LuClock3,
  LuGlobe2,
  LuGraduationCap,
  LuHeartHandshake,
  LuLanguages,
  LuMessageCircle,
  LuMonitorSmartphone,
  LuShieldCheck,
  LuSparkles,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import ButtonLink from "@/components/ui/ButtonLink";
import CourseCard from "@/components/ui/CourseCard";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqAccordion from "@/components/sections/home/FaqAccordion";
import Testimonials from "@/components/sections/home/Testimonials";
import { courses } from "@/constants/courses";
import { faqs } from "@/constants/faqs";
import { siteConfig } from "@/constants/common";

const trustPoints = [
  { label: "One-to-one live classes", icon: LuMonitorSmartphone },
  { label: "Male and female tutors", icon: LuGraduationCap },
  { label: "English and Urdu", icon: LuLanguages },
  { label: "Flexible weekly plans", icon: LuCalendarCheck2 },
] satisfies IconItem[];

const learningSteps = [
  {
    number: "01",
    title: "Choose your learning goal",
    description:
      "Explore our courses and select the path that best matches the student's level and goals.",
    icon: LuBookOpen,
  },
  {
    number: "02",
    title: "Meet your tutor",
    description:
      "Schedule a free trial to discuss your needs, preferred language, and suitable class timing.",
    icon: LuMessageCircle,
  },
  {
    number: "03",
    title: "Learn at a steady pace",
    description:
      "Continue with focused one-to-one lessons, personal feedback, and a consistent weekly routine.",
    icon: LuSparkles,
  },
] satisfies StepItem[];

const academyBenefits = [
  {
    title: "Personal attention",
    description: "Every lesson is adapted to the learner's pace, level, and goals.",
    icon: LuHeartHandshake,
  },
  {
    title: "Clear foundations",
    description: "Students build accuracy step by step before moving to advanced skills.",
    icon: LuShieldCheck,
  },
  {
    title: "Learning from home",
    description: "Join live lessons from anywhere with a simple, dependable online routine.",
    icon: LuGlobe2,
  },
  {
    title: "Consistent practice",
    description: "Weekly plans support regular progress without overwhelming the learner.",
    icon: LuClock3,
  },
] satisfies BenefitItem[];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Home() {
  const featuredCourses = courses.filter((course) => course.featured);

  return (
    <>
      <section className="relative isolate min-h-[700px] overflow-hidden border-b border-border sm:min-h-[760px]">
        <Image
          src="/images/hero-editorial.jpg"
          alt="A Quran resting on a carved wooden stand in a refined home study"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,15,18,0.98)_0%,rgba(5,15,18,0.90)_42%,rgba(5,15,18,0.28)_78%,rgba(5,15,18,0.18)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-canvas/80 via-transparent to-canvas/25" />
        <div className="site-container flex min-h-[700px] items-center py-20 sm:min-h-[760px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Personal Quran learning from home</p>
            <h1 className="text-pretty mt-5 font-display text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-8xl">
              Learn Quran with <span className="text-primary">clarity</span> and confidence.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              One-to-one online Quran classes for children and adults, guided by
              qualified male and female tutors in English or Urdu.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={siteConfig.whatsappTrialHref}
                showArrow
                ariaLabel="Schedule a free Quran class on WhatsApp"
              >
                Schedule a free trial
              </ButtonLink>
              <ButtonLink href="/courses" variant="secondary">
                Explore courses
              </ButtonLink>
            </div>
            <div className="mt-9 flex max-w-lg items-center gap-5 rounded-2xl border border-white/15 bg-canvas/55 px-5 py-4 backdrop-blur-md">
              <p className="font-display text-4xl font-semibold text-primary sm:text-5xl">
                6+
              </p>
              <div className="border-l border-white/15 pl-5">
                <p className="text-sm font-bold leading-6 text-ink">
                  Years of teaching experience
                </p>
                <p className="mt-0.5 text-xs leading-5 text-white/60">
                  Teaching Quran online to international students
                </p>
              </div>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/65">
              <LuCheck aria-hidden="true" className="h-4 w-4 text-accent" />
              No obligation after your trial class
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface" aria-label="Academy benefits">
        <div className="site-container grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
          {trustPoints.map((item) => (
            <div key={item.label} className="flex min-h-28 flex-col items-center justify-center gap-3 px-3 py-5 text-center sm:min-h-32">
              <item.icon aria-hidden="true" className="h-5 w-5 text-accent" />
              <p className="text-xs font-bold leading-5 text-primary sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Explore our courses"
                title="A learning path for every stage"
                description="From first letters to advanced recitation and memorization, each course is taught with personal guidance and steady progress in mind."
              />
              <ButtonLink href="/courses" variant="ghost" showArrow className="self-start md:self-auto">
                View all courses
              </ButtonLink>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course, index) => (
              <Reveal key={course.url} delay={index * 0.05}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-sage/60">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Three simple steps to begin"
              description="Getting started is straightforward. We help you choose a suitable path before regular lessons begin."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {learningSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06}>
                <article className="premium-card relative h-full p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                      <step.icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="font-display text-3xl font-semibold text-accent/55">{step.number}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Why Kanzul Quran"
              title="Focused teaching, grounded in care"
              description="We combine personal attention with a clear learning structure so students can build confidence without feeling rushed."
            />
            <ButtonLink href="/about" variant="secondary" showArrow className="mt-7">
              About our academy
            </ButtonLink>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {academyBenefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <article className="h-full rounded-3xl border border-border bg-surface p-6">
                  <benefit.icon aria-hidden="true" className="h-6 w-6 text-accent" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-primary">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{benefit.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="site-container pb-16 sm:pb-20 lg:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-border bg-brand px-6 py-10 text-white shadow-soft sm:px-10 sm:py-12 lg:px-14">
            <div className="islamic-pattern absolute inset-0 opacity-40" aria-hidden="true" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow text-primary">Simple monthly fees</p>
                <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                  Plans from $11 per month
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-white/75">
                  Choose one to five weekly 20-minute lessons. Every plan includes
                  personal one-to-one instruction and a free trial class.
                </p>
              </div>
              <ButtonLink href="/fee-structure" variant="secondary" showArrow className="border-white/20 bg-canvas text-primary hover:bg-surface">
                Compare fees
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-space border-t border-border bg-surface">
        <div className="site-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Common questions"
              title="Everything you need to know before starting"
              description="If your question is not answered here, message the academy and we will be happy to help."
            />
            <ButtonLink href={siteConfig.whatsappHref} variant="ghost" showArrow className="mt-6">
              Ask on WhatsApp
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.06}>
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="site-container py-16 sm:py-20">
        <Reveal>
          <div className="rounded-4xl border border-accent/25 bg-accent-soft/55 px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="eyebrow">Your first class is free</p>
            <h2 className="text-pretty mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold text-primary sm:text-5xl">
              Begin your Quran learning journey with personal guidance.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
              Tell us who the lessons are for and what you would like to learn.
              We&apos;ll help you choose the right next step.
            </p>
            <ButtonLink href={siteConfig.whatsappTrialHref} showArrow className="mt-8">
              Schedule your free trial
            </ButtonLink>
          </div>
        </Reveal>
      </section>
      <JsonLd data={faqSchema} />
    </>
  );
}

export type IconItem = {
  label: string;
  icon: IconType;
};

export type StepItem = {
  number: string;
  title: string;
  description: string;
  icon: IconType;
};

export type BenefitItem = {
  title: string;
  description: string;
  icon: IconType;
};
