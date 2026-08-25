import { siteConfig } from "@/constants/common";
import { courses } from "@/constants/courses";
import { faqs } from "@/constants/faqs";
import { pricingPlans } from "@/constants/pricing";

const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();

export function createLlmsText() {
  const courseLinks = courses
    .map(
      (course) =>
        `- [${course.heading}](${absoluteUrl(`/courses/${course.url}`)}): ${course.shortDescription}`,
    )
    .join("\n");

  return `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} provides live, one-to-one Quran and essential Islamic education for children and adults worldwide. Lessons are 20 minutes long, available in English or Urdu, and taught by male and female tutors. A free trial class is available before enrollment.

## Essential pages

- [Home](${absoluteUrl("/")}): Academy overview, learning process, benefits, testimonials, and common questions.
- [Courses](${absoluteUrl("/courses")}): Overview of every available learning path.
- [Fees](${absoluteUrl("/fee-structure")}): Monthly prices for one to five lessons per week.
- [About and contact](${absoluteUrl("/about")}): Teaching approach, academy values, and contact options.

## Courses

${courseLinks}

## Reference

- [Complete LLM reference](${absoluteUrl("/llms-full.txt")}): Course details, learning outcomes, fees, FAQs, and contact information in one plain-text document.
- [XML sitemap](${absoluteUrl("/sitemap.xml")}): Complete list of indexable website pages.

## Optional

- [Facebook](${siteConfig.social.facebook}): Official academy Facebook profile.
- [Instagram](${siteConfig.social.instagram}): Official academy Instagram profile.
- [YouTube](${siteConfig.social.youtube}): Official academy YouTube channel.
`;
}

export function createLlmsFullText() {
  const courseDetails = courses
    .map(
      (course) => `## ${course.heading}

URL: ${absoluteUrl(`/courses/${course.url}`)}
Audience: ${course.audience}

${course.description}

Learning outcomes:
${course.outcomes.map((outcome) => `- ${outcome}`).join("\n")}`,
    )
    .join("\n\n");

  const fees = pricingPlans
    .map(
      (plan) =>
        `- ${plan.daysPerWeek} ${plan.daysPerWeek === 1 ? "day" : "days"} per week: USD $${plan.usd}, GBP £${plan.gbp}, PKR ${plan.pkr.toLocaleString("en-US")} per month`,
    )
    .join("\n");

  const questions = faqs
    .map((faq) => `### ${faq.question}\n\n${faq.answer}`)
    .join("\n\n");

  return `# ${siteConfig.name}: Complete Reference

> ${siteConfig.description}

Website: ${siteConfig.url}
Service area: Worldwide
Teaching format: Live, one-to-one online lessons
Lesson length: 20 minutes
Languages: English and Urdu
Tutors: Qualified male and female tutors
Students: Children and adults
Trial: One free trial class with no obligation

# Courses

${courseDetails}

# Monthly fees

All plans include one-to-one live instruction, 20-minute personal lessons, English or Urdu support, and one free trial class.

${fees}

Regular class timings are agreed during enrollment and should be chosen carefully because regular timing changes are not supported.

# Frequently asked questions

${questions}

# Contact

- Phone: ${siteConfig.phoneDisplay}
- WhatsApp: ${siteConfig.whatsappHref}
- Free-trial request: ${siteConfig.whatsappTrialHref}
- About and contact page: ${absoluteUrl("/about")}

# Official social profiles

- Facebook: ${siteConfig.social.facebook}
- Instagram: ${siteConfig.social.instagram}
- YouTube: ${siteConfig.social.youtube}
`;
}

