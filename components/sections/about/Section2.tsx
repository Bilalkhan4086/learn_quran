import React from "react";
import Card from "./Card";
import whatsapp from "@/public/images/whatsapp.png";
import telephone from "@/public/images/telephone.png";
import messenger from "@/public/images/messenger.png";
import message from "@/public/images/chat.png";
import skype from "@/public/images/skype.png";

const contactInfo = [
  {
    icon: message,
    infoLink: "sms:15551234567",
    mediumText: "Message",
  },
  {
    icon: telephone,
    infoLink: "tel:+15551234567",
    mediumText: "Phone",
  },
  {
    icon: whatsapp,
    infoLink: "https://wa.me/15551234567",
    mediumText: "WhatsApp",
  },
  {
    icon: skype,
    infoLink: "https://join.skype.com/invite/ABCDEFG123456",
    mediumText: "Skype",
  },
  {
    icon: messenger,
    infoLink: "https://m.me/PageUsernameOrID",
    mediumText: "Messenger",
  },
];

const Section2 = () => {
  return (
    <div className="my-10">
      <h3 className="text-3xl text-kaizenred text-center">Our Contact</h3>
      <div className="overflow-scroll px-2">
        <div className="flex gap-4 my-10 min-w-[1280px]">
          {contactInfo.map((info, i) => (
            <Card key={i} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
