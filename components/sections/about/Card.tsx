import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ info }: any) => {
  const getAltText = (mediumText: string) => {
    switch (mediumText.toLowerCase()) {
      case "message":
        return "Contact Kanzul Quran Online Academy via SMS message";
      case "phone":
        return "Call Kanzul Quran Online Academy for online Quran classes";
      case "whatsapp":
        return "WhatsApp Kanzul Quran Online Academy for Quran learning";
      default:
        return `Contact Kanzul Quran Online Academy via ${mediumText}`;
    }
  };

  const getDescription = (mediumText: string) => {
    switch (mediumText.toLowerCase()) {
      case "message":
        return "Send us a message to learn more about our online Quran classes, Tajweed courses, and Islamic education programs. Get instant responses about course details, pricing, and free trial classes.";
      case "phone":
        return "Call us directly to speak with our Quran teaching experts. Discuss your learning goals, schedule a free trial class, or get answers about our online Quran academy courses for kids and adults.";
      case "whatsapp":
        return "Chat with us on WhatsApp for quick responses about online Quran learning, course enrollment, and scheduling. Perfect for parents looking for Quran classes for their children or adults seeking Quran teachers online.";
      default:
        return "Contact Kanzul Quran Online Academy to start your online Quran learning journey today.";
    }
  };

  return (
    <div className="max-w-[240px] max-[560px]:max-w-[100%] mx-auto flex flex-col items-center ring-1 ring-white p-4 rounded-lg">
      <Image 
        src={info.icon} 
        alt={getAltText(info.mediumText)} 
        width={50} 
        height={50} 
      />
      <h4 className="text-lg font-semibold my-5 text-white">
        {info.mediumText}
      </h4>
      <h5 className="text-sm font-medium mb-5 text-white text-center">
        {getDescription(info.mediumText)}
      </h5>
      <Link
        href={info?.infoLink}
        className="bg-kaizengreen text-center hover:bg-green-200 text-black py-2 w-full"
        aria-label={`Contact Kanzul Quran Online Academy via ${info.mediumText}`}
      >
        Reach us
      </Link>
    </div>
  );
};

export default Card;
