export const faqs = [
  {
    question: "What happens in the free trial class?",
    answer:
      "The trial gives the student and tutor time to meet, discuss learning goals, assess the current level, and recommend a suitable course plan.",
  },
  {
    question: "Who can join the online Quran classes?",
    answer:
      "Classes are available for children and adults, including brothers and sisters. Course pages explain any audience-specific requirements.",
  },
  {
    question: "Are lessons taught one to one?",
    answer:
      "Yes. Lessons are delivered live in a one-to-one format so the tutor can adapt the pace and feedback to each student.",
  },
  {
    question: "Can I change my regular class time?",
    answer:
      "Class timings are agreed during enrollment. Please choose carefully because regular timing changes are not supported.",
  },
  {
    question: "Do you offer courses beyond Quran reading?",
    answer:
      "Yes. The academy also offers Tajweed, Hifz, Qiraat, selected Surah memorization, and essential Islamic knowledge courses.",
    link: { href: "/courses", label: "Explore all courses" },
  },
  {
    question: "What should I do if my tutor is not online?",
    answer:
      "Please contact the academy coordinator by phone or WhatsApp so the team can assist you promptly.",
  },
] satisfies FaqItem[];

export type FaqItem = {
  question: string;
  answer: string;
  link?: {
    href: string;
    label: string;
  };
};
