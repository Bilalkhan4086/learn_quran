import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LuCheck,
  LuClock3,
  LuLanguages,
  LuMonitor,
  LuUser,
} from "react-icons/lu";
import ButtonLink from "@/components/ui/ButtonLink";
import CourseCard from "@/components/ui/CourseCard";
import JsonLd from "@/components/ui/JsonLd";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { courses, getCourseByUrl } from "@/constants/courses";
import { siteConfig } from "@/constants/common";

export function generateStaticParams() {
  return courses.map((course) => ({ course: course.url }));
}

export function generateMetadata({ params }: CoursePageProps): Metadata {
  const course = getCourseByUrl(params.course);
  if (!course) return { title: "Course not found" };

  return {
    title: `${course.heading} Online Course`,
    description: course.shortDescription,
    alternates: { canonical: `/courses/${course.url}` },
    openGraph: {
      title: `${course.heading} Online Course | Kanzul Quran Academy`,
      description: course.shortDescription,
      url: `/courses/${course.url}`,
      images: [{ url: course.image }],
    },
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourseByUrl(params.course);
  if (!course) notFound();

  const relatedCourses = courses
    .filter((item) => item.url !== course.url)
    .slice(0, 3);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.heading,
    description: course.description,
    url: `${siteConfig.url}/courses/${course.url}`,
    image: `${siteConfig.url}${course.image}`,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT20M",
      inLanguage: ["en", "ur"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Courses",
        item: `${siteConfig.url}/courses`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.heading,
        item: `${siteConfig.url}/courses/${course.url}`,
      },
    ],
  };

  return (
    <>
      <section className="border-b border-border bg-sage/45 py-8 sm:py-10">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="min-h-11 cursor-pointer hover:text-primary hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/courses" className="min-h-11 cursor-pointer hover:text-primary hover:underline">
                  Courses
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-primary" aria-current="page">
                {course.heading}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="section-space overflow-hidden">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">{course.eyebrow}</p>
            <h1 className="text-pretty mt-4 font-display text-5xl font-semibold leading-tight text-primary sm:text-6xl">
              {course.heading}
            </h1>
            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">{course.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.whatsappTrialHref} showArrow>
                Schedule a free trial
              </ButtonLink>
              <ButtonLink href="/fee-structure" variant="secondary">
                View fees
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl border border-border bg-sage shadow-soft">
              <Image
                src={course.image}
                alt={course.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover saturate-[0.78]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/65 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-8">
        <div className="site-container grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {[
            { icon: LuClock3, label: "Lesson length", value: "20 minutes" },
            { icon: LuLanguages, label: "Languages", value: "English, Urdu" },
            { icon: LuMonitor, label: "Format", value: "Live online" },
            { icon: LuUser, label: "Designed for", value: course.audience },
          ].map((fact) => (
            <div key={fact.label} className="bg-surface p-5 sm:p-6">
              <fact.icon aria-hidden="true" className="h-5 w-5 text-accent" />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted">{fact.label}</p>
              <p className="mt-1 text-sm font-bold text-primary">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Course outcomes"
              title="What you will learn"
              description="Lessons are adjusted to your level, while these outcomes guide the overall learning journey."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {course.outcomes.map((outcome) => (
                <li key={outcome} className="premium-card flex min-h-28 items-start gap-4 p-5 sm:p-6">
                  <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-accent-soft text-primary">
                    <LuCheck aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold leading-7 text-ink">{outcome}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-sage/55">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="Continue exploring"
              title="Related courses"
              description="Compare other learning paths before choosing your free trial."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedCourses.map((related, index) => (
              <Reveal key={related.url} delay={index * 0.05}>
                <CourseCard course={related} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-16 sm:py-20">
        <Reveal>
          <div className="rounded-4xl border border-border bg-brand px-6 py-12 text-center text-white shadow-soft sm:px-10 sm:py-16">
            <p className="eyebrow text-primary">Start with a conversation</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
              See whether {course.heading} is right for you.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
              Meet a tutor, discuss your goals, and receive a suitable recommendation during a free trial class.
            </p>
            <ButtonLink href={siteConfig.whatsappTrialHref} variant="secondary" showArrow className="mt-8 border-white/20 bg-canvas text-primary hover:bg-surface">
              Schedule your free trial
            </ButtonLink>
          </div>
        </Reveal>
      </section>
      <JsonLd data={courseSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}

export type CoursePageProps = {
  params: { course: string };
};
