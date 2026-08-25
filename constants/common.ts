export const WHATSAPP = 923239154146;

const trialMessage =
  "Assalamu Alaikum, I would like to schedule a free Quran class. Please share the next steps.";

export const siteConfig = {
  name: "Kanzul Quran Online Academy",
  shortName: "Kanzul Quran",
  description:
    "One-to-one online Quran classes for children and adults with qualified male and female tutors.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kanzulquran.com",
  phoneDisplay: "+92 323 915 4146",
  phoneHref: "tel:+923239154146",
  smsHref: "sms:923239154146",
  whatsappHref: `https://wa.me/${WHATSAPP}`,
  whatsappTrialHref: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(trialMessage)}`,
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61566015578270",
    instagram: "https://www.instagram.com/kanzulquranonlineacadmey/",
    youtube: "https://www.youtube.com/@KanzulQuranOnlineAcademy",
  },
} as const;
