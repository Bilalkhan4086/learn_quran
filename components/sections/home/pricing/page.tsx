"use client";
import { FaCheckCircle as Tick } from "react-icons/fa";

const tiers = [
  {
    name: "Beginner",
    id: "tier-freelancer",
    href: "/fee-structure",
    priceMonthly: "$30",
    description: "Basic Qaida Reading and Learning with Tajweed:",
    features: [
      "Basic Qaida Mastery",
      "Customized for Kids and Females",
      "Efficient Quranic Learning Approach",
      // "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Intermediate",
    id: "tier-startup",
    href: "/fee-structure",
    priceMonthly: "$40",
    description: "Basic Quran Recitation and Learning with Tajweed:",
    features: [
      "Quranic Reading with Tajweed",
      "Arabic Alphabet Recognition ",
      "Personalized Guidance for Success",
    ],
    mostPopular: true,
  },
  {
    name: "Advanced",
    id: "tier-enterprise",
    href: "/fee-structure",
    priceMonthly: "$50",
    description: "Hifz Course With Tajweed:",
    features: [
      "Quran Memorization Course",
      "Daily Guided Lessons",
      "Personalized Online Coaching",
      // "1-hour, dedicated support response time",
      // "Marketing automations",
    ],
    mostPopular: false,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Pricing = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
              tierIdx === 0 ? "lg:rounded-r-none" : "",
              tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
              "flex flex-col justify-between rounded-3xl p-8 ring-2 mx-[1px] ring-gray-200 xl:p-10"
            )}
          >
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? "text-indigo-600" : "text-dullwhite",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full ring-2 ring-gray-200 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-dullwhite">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-dullwhite">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-200">
                  /month
                </span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-dullwhite"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Tick className="h-6 w-6 flex-none stroke-[1.75] stroke-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                  : "text-indigo-600 ring-2 ring-inset ring-indigo-200 hover:ring-indigo-300",
                "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              )}
            >
              Buy plan
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
