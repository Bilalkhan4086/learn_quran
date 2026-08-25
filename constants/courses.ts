export const courses = [
  {
    url: "tajweed_ul_quran_course",
    heading: "Tajweed ul Quran",
    eyebrow: "Precise recitation",
    shortDescription:
      "Learn the essential rules of Tajweed and recite with greater accuracy, clarity, and confidence.",
    description:
      "Build a strong foundation in Quranic recitation through guided practice in pronunciation, articulation, and the core rules of Tajweed. Lessons adapt to your current level and provide focused feedback from an experienced tutor.",
    image: "/images/tajweed-course.jpg",
    imageAlt: "Open Quran prepared for a Tajweed lesson",
    audience: "All levels",
    outcomes: [
      "Recognize and apply essential Tajweed rules",
      "Improve the pronunciation of Arabic letters",
      "Recite with clearer rhythm and articulation",
      "Identify and correct common recitation mistakes",
      "Build confidence through guided practice",
    ],
    featured: true,
  },
  {
    url: "nazra_quran",
    heading: "Nazra Quran",
    eyebrow: "Fluent reading",
    shortDescription:
      "Develop fluent Quran reading through Arabic-letter recognition, pronunciation, and guided recitation.",
    description:
      "Designed for beginners and developing readers, the Nazra Quran course builds fluency one step at a time. Students practise Arabic letters, joining forms, pronunciation, and verse-by-verse reading with direct tutor support.",
    image: "/images/nazra-course.jpg",
    imageAlt: "Quran open for a guided reading lesson",
    audience: "Beginners of all ages",
    outcomes: [
      "Recognize Arabic letters and their joined forms",
      "Read Quranic words with greater fluency",
      "Apply correct pronunciation while reading",
      "Follow the structure and pauses of Quranic verses",
      "Develop a consistent recitation practice",
    ],
    featured: true,
  },
  {
    url: "hifz_ul_quran",
    heading: "Hifz ul Quran",
    eyebrow: "Structured memorization",
    shortDescription:
      "Memorize the Quran with a personalised routine, regular revision, and supportive one-to-one guidance.",
    description:
      "The Hifz ul Quran course provides a steady, personalised path for memorization. Tutors help students set an achievable pace, strengthen retention through revision, and maintain accurate recitation throughout their journey.",
    image: "/images/hifz-course.jpg",
    imageAlt: "Quran and study materials for memorization practice",
    audience: "Children and adults",
    outcomes: [
      "Follow a realistic personal memorization plan",
      "Use repetition techniques that support retention",
      "Balance new memorization with daily revision",
      "Maintain accurate Tajweed while memorizing",
      "Build consistency and confidence over time",
    ],
    featured: true,
  },
  {
    url: "barkat_ul_quran",
    heading: "Barkaat ul Quran",
    eyebrow: "Selected Surahs",
    shortDescription:
      "Memorize selected Surahs while strengthening recitation and building a deeper spiritual connection.",
    description:
      "Barkaat ul Quran offers a focused route into memorization through selected Surahs. Students choose suitable Surahs with their tutor and work through recitation, memorization, and revision at a comfortable pace.",
    image: "/images/barkaat-ul-quran.jpg",
    imageAlt: "A collection of Qurans with ornate covers",
    audience: "All ages",
    outcomes: [
      "Select suitable Surahs for a personal learning goal",
      "Memorize in manageable, guided portions",
      "Strengthen recall through structured revision",
      "Improve accuracy and fluency while reciting",
      "Create a sustainable memorization habit",
    ],
    featured: false,
  },
  {
    url: "fard_obligatory_knowledge",
    heading: "Fard Knowledge",
    eyebrow: "Essential Islamic learning",
    shortDescription:
      "Learn the essential beliefs, worship practices, and everyday knowledge every Muslim needs.",
    description:
      "This practical course covers foundational Islamic knowledge, including purification, Salah, beliefs, and everyday conduct. Lessons focus on clear understanding and confident application in daily life.",
    image: "/images/obligatory-knowledge.jpg",
    imageAlt: "Islamic study books arranged for a lesson",
    audience: "Children and adults",
    outcomes: [
      "Understand foundational Islamic beliefs",
      "Learn the correct steps of purification",
      "Review the essential elements of Salah",
      "Apply Islamic manners in everyday life",
      "Ask practical questions in a private setting",
    ],
    featured: false,
  },
  {
    url: "qiraat_course",
    heading: "Qiraat Course",
    eyebrow: "Advanced recitation",
    shortDescription:
      "Explore traditional styles of Quranic recitation with focused guidance for experienced readers.",
    description:
      "For brothers with an established Tajweed foundation, this course introduces the characteristics and nuances of traditional Qiraat. Guided exercises develop careful listening, pronunciation, rhythm, and recitation control.",
    image: "/images/qiraat-course.jpg",
    imageAlt: "Quran prepared for advanced recitation study",
    audience: "Brothers with Tajweed experience",
    outcomes: [
      "Understand the foundation of different Qiraat",
      "Recognize variations in pronunciation and rhythm",
      "Practise recitation through focused exercises",
      "Receive personalised correction and feedback",
      "Deepen an existing knowledge of Tajweed",
    ],
    featured: false,
  },
] satisfies Course[];

export const getCourseByUrl = (url: string) =>
  courses.find((course) => course.url === url);

export type Course = {
  url: string;
  heading: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  audience: string;
  outcomes: string[];
  featured: boolean;
};
