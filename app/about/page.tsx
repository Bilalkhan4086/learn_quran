import type { Metadata } from "next";
import Image from "next/image";
import { LuAward, LuGlobe2, LuHeartHandshake, LuMail, LuMessageCircle, LuPhone, LuUsers } from "react-icons/lu";
import type { IconType } from "react-icons";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { coreValues } from "@/constants/coreValues";
import { siteConfig } from "@/constants/common";

export const metadata: Metadata = {
  title: "About Our Online Quran Academy",
  description:
    "Learn about Kanzul Quran Online Academy's one-to-one teaching approach, course values, and support for children and adults worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Kanzul Quran Online Academy",
    description: "Personal Quran learning grounded in clarity, care, and steady progress.",
    url: "/about",
  },
};

const teachingPrinciples = [
  {
    icon: LuUsers,
    title: "One-to-one teaching",
    description: "Each student receives focused attention and lessons suited to their pace.",
  },
  {
    icon: LuHeartHandshake,
    title: "Patient guidance",
    description: "Tutors support steady progress through clear correction and encouragement.",
  },
  {
    icon: LuGlobe2,
    title: "Worldwide access",
    description: "Children and adults can join live classes from the comfort of home.",
  },
] satisfies Principle[];

const contactMethods = [
  {
    icon: LuMessageCircle,
    title: "WhatsApp",
    description: "The quickest way to ask about courses, fees, or a free trial.",
    href: siteConfig.whatsappHref,
    action: "Chat on WhatsApp",
  },
  {
    icon: LuPhone,
    title: "Phone",
    description: "Speak directly with the academy about your learning needs.",
    href: siteConfig.phoneHref,
    action: "Call the academy",
  },
  {
    icon: LuMail,
    title: "SMS",
    description: "Send a text message and the team will respond when available.",
    href: siteConfig.smsHref,
    action: "Send an SMS",
  },
] satisfies ContactMethod[];

export default function AboutPage() {
  return (
    <>
      <section className="section-space overflow-hidden">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">About Kanzul Quran</p>
            <h1 className="text-pretty mt-4 font-display text-5xl font-semibold leading-tight text-primary sm:text-6xl">
              Personal Quran education, delivered with patience and purpose.
            </h1>
            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              Kanzul Quran Online Academy provides live Quran and essential Islamic
              learning for children and adults around the world. Our one-to-one
              approach gives every student the time, correction, and encouragement
              needed to progress with confidence.
            </p>
            <p className="mt-4 leading-8 text-muted">
              Qualified male and female tutors guide students through Quran reading,
              Tajweed, memorization, Qiraat, and foundational Islamic knowledge in
              English or Urdu.
            </p>
            <ButtonLink href={siteConfig.whatsappTrialHref} showArrow className="mt-8">
              Meet a tutor for free
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative mx-auto aspect-[4/3] max-w-2xl overflow-hidden rounded-4xl border border-border bg-sage shadow-soft">
              <Image
                src="/images/tutor-editorial.jpg"
                alt="Online Quran tutor preparing a lesson at her laptop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/45 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space border-y border-border bg-sage/55">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="Our teaching approach"
              title="A calm environment for meaningful progress"
              description="Learning becomes more effective when the student feels supported, understands each step, and has room to practise."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {teachingPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.05}>
                <article className="premium-card h-full p-7 text-center sm:p-8">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-primary">
                    <principle.icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-semibold text-primary">{principle.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{principle.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="What we value"
              title="Learning that supports faith and daily life"
              description="Our curriculum connects accurate recitation with essential knowledge, good character, and consistent practice."
            />
            <LuAward aria-hidden="true" className="mt-8 h-10 w-10 text-accent" />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {coreValues.map((value, index) => (
              <Reveal key={value.heading} delay={(index % 2) * 0.04}>
                <article className="h-full rounded-3xl border border-border bg-surface p-6">
                  <span className="text-xs font-bold tracking-[0.16em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold text-primary">{value.heading}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-space scroll-mt-24 border-t border-border bg-surface">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="Contact the academy"
              title="We are here to help you get started"
              description="Ask about course suitability, lesson timings, monthly fees, or arranging a free trial class."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <Reveal key={method.title} delay={index * 0.05}>
                <article className="premium-card flex h-full flex-col items-center p-7 text-center sm:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white">
                    <method.icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-primary">{method.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">{method.description}</p>
                  <ButtonLink href={method.href} variant="secondary" showArrow className="mt-6 w-full">
                    {method.action}
                  </ButtonLink>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export type Principle = {
  icon: IconType;
  title: string;
  description: string;
};

export type ContactMethod = {
  icon: IconType;
  title: string;
  description: string;
  href: string;
  action: string;
};
