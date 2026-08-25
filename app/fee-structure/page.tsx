import type { Metadata } from "next";
import { LuCheck, LuClock3, LuMessageCircle, LuShieldCheck } from "react-icons/lu";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/constants/common";
import { pricingPlans } from "@/constants/pricing";

export const metadata: Metadata = {
  title: "Online Quran Class Fees",
  description:
    "Compare monthly fees for one-to-one online Quran classes, with one to five weekly 20-minute lessons and a free trial class.",
  alternates: { canonical: "/fee-structure" },
  openGraph: {
    title: "Online Quran Class Fees | Kanzul Quran Academy",
    description: "Simple monthly plans for one-to-one online Quran learning.",
    url: "/fee-structure",
  },
};

const planBenefits = [
  "One-to-one live instruction",
  "20-minute personal lessons",
  "English or Urdu support",
  "One free trial class",
];

export default function FeeStructurePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-sage/55 py-16 sm:py-20">
        <div className="islamic-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <Reveal className="site-container relative text-center">
          <p className="eyebrow">Clear and flexible pricing</p>
          <h1 className="text-pretty mx-auto mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight text-primary sm:text-6xl">
            Choose a weekly rhythm that works for you.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Every plan includes live one-to-one lessons and a free trial class.
            Select one to five lesson days each week.
          </p>
        </Reveal>
      </section>

      <section className="section-space">
        <div className="site-container">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: LuClock3, title: "20 minutes", text: "Focused personal lesson" },
                { icon: LuShieldCheck, title: "Free trial", text: "Meet before committing" },
                { icon: LuMessageCircle, title: "Personal help", text: "Plan guidance on WhatsApp" },
              ].map((item) => (
                <div key={item.title} className="premium-card flex items-center gap-4 p-5 sm:block sm:p-6">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-accent-soft text-primary">
                    <item.icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div className="sm:mt-4">
                    <h2 className="font-display text-xl font-semibold text-primary">{item.title}</h2>
                    <p className="mt-1 text-sm text-muted">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:hidden">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.daysPerWeek} delay={index * 0.04}>
                <article className={`premium-card relative overflow-hidden p-6 ${plan.recommended ? "border-accent/60" : ""}`}>
                  {plan.recommended ? (
                    <p className="absolute right-0 top-0 rounded-bl-2xl bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-canvas">
                      Popular
                    </p>
                  ) : null}
                  <p className="eyebrow">Weekly plan</p>
                  <h2 className="mt-2 font-display text-3xl font-semibold text-primary">
                    {plan.daysPerWeek} {plan.daysPerWeek === 1 ? "day" : "days"} a week
                  </h2>
                  <p className="mt-2 text-sm text-muted">One 20-minute lesson on each selected day</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 border-y border-border py-5 text-center">
                    <Price value={`$${plan.usd}`} label="USD" />
                    <Price value={`£${plan.gbp}`} label="GBP" />
                    <Price value={plan.pkr.toLocaleString()} label="PKR" />
                  </div>
                  <ul className="mt-5 space-y-3">
                    {planBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm text-muted">
                        <LuCheck aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href={siteConfig.whatsappTrialHref} className="mt-6 w-full">
                    Choose this plan
                  </ButtonLink>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 hidden md:block">
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Monthly online Quran class fees by weekly lesson frequency
                </caption>
                <thead className="bg-brand text-white">
                  <tr>
                    <th scope="col" className="px-6 py-5 text-sm font-bold">Weekly schedule</th>
                    <th scope="col" className="px-6 py-5 text-sm font-bold">Lesson length</th>
                    <th scope="col" className="px-6 py-5 text-sm font-bold">USD / month</th>
                    <th scope="col" className="px-6 py-5 text-sm font-bold">GBP / month</th>
                    <th scope="col" className="px-6 py-5 text-sm font-bold">PKR / month</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {pricingPlans.map((plan) => (
                    <tr key={plan.daysPerWeek} className={plan.recommended ? "bg-accent-soft/35" : "hover:bg-sage/45"}>
                      <th scope="row" className="px-6 py-5 font-bold text-primary">
                        <span>{plan.daysPerWeek} {plan.daysPerWeek === 1 ? "day" : "days"} a week</span>
                        {plan.recommended ? (
                          <span className="ml-3 rounded-full bg-primary px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-canvas">
                            Popular
                          </span>
                        ) : null}
                      </th>
                      <td className="px-6 py-5 text-muted">20 minutes</td>
                      <td className="px-6 py-5 font-bold text-primary">${plan.usd}</td>
                      <td className="px-6 py-5 font-bold text-primary">£{plan.gbp}</td>
                      <td className="px-6 py-5 font-bold text-primary">{plan.pkr.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-10 rounded-4xl border border-border bg-brand px-6 py-10 text-center text-white shadow-soft sm:px-10 sm:py-12">
              <p className="eyebrow text-primary">Need help choosing?</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Start with a free trial class.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
                Discuss the student&apos;s goals and preferred schedule before selecting a regular monthly plan.
              </p>
              <ButtonLink href={siteConfig.whatsappTrialHref} variant="secondary" showArrow className="mt-7 border-white/20 bg-canvas text-primary hover:bg-surface">
                Message us on WhatsApp
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Price({ value, label }: PriceProps) {
  return (
    <div>
      <p className="font-display text-xl font-semibold text-primary">{value}</p>
      <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-wider text-muted">{label}</p>
    </div>
  );
}

export type PriceProps = {
  value: string;
  label: string;
};
