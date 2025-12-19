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
  return (
    <div className="my-10">
      <h3 className="text-3xl text-purple text-center underline" id="contact">
        Our Contact
      </h3>
      <div className="max-w-[1000px] mx-auto">
        <div className="px-2 gap-5 my-10 grid xl:grid-cols-3 max-xl:grid-cols-3 max-md:grid-cols-2 max-[560px]:grid-cols-1">
          {contactInfo.map((info, i) => (
            <Card key={i} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
