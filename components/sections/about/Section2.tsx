import React from "react";
import Card from "./Card";
import whatsapp from "@/public/images/whatsapp.png";
import telephone from "@/public/images/telephone.png";
import message from "@/public/images/chat.png";

const contactInfo = [
  {
    icon: message,
    infoLink: "sms:923239154146",
    mediumText: "Message",
  },
  {
    icon: telephone,
    infoLink: "tel:+923239154146",
    mediumText: "Phone",
  },
  {
    icon: whatsapp,
    infoLink: "https://wa.me/923239154146",
    mediumText: "WhatsApp",
  },
  
];

const Section2 = () => {
  // Structured data for SEO and AI search engines
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Kanzul Quran Online Academy",
    "alternateName": "Kanzul Quran",
    "description": "Online Islamic school providing Quran and Islamic teaching services globally. Learn Quran online with expert tutors through one-to-one interactive classes for kids, adults, males, and females.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://kanzulquran.com",
    "telephone": "+923239154146",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923239154146",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Urdu", "Arabic"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61566015578270",
      "https://www.instagram.com/kanzulquranonlineacadmey/",
      "https://www.youtube.com/@KanzulQuranOnlineAcademy"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Online Quran learning courses including Tajweed, Nazra, Hifz, Qiraat, and Fard Knowledge courses",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl text-purple text-center underline" id="contact">
        Contact Kanzul Quran Online Academy - Learn Quran Online
      </h1>
      <p className="text-center text-white mt-4 mb-6 max-w-3xl mx-auto px-4">
        Get in touch with Kanzul Quran Online Academy to start your journey of learning Quran online. 
        Whether you&apos;re looking for online Quran classes for kids, online Quran classes for adults, 
        or seeking a qualified Quran teacher online, our team is here to help. Contact us via phone, 
        WhatsApp, or message to schedule your free trial class and begin learning the Quran with proper 
        Tajweed and pronunciation from experienced online Quran tutors.
      </p>
      <div className="max-w-[1000px] mx-auto">
        <div className="px-2 gap-5 my-10 grid xl:grid-cols-3 max-xl:grid-cols-3 max-md:grid-cols-2 max-[560px]:grid-cols-1">
          {contactInfo.map((info, i) => (
            <Card key={i} info={info} />
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </div>
  );
};

export default Section2;
