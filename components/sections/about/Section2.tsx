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
    infoLink: "sms:923025827641",
    mediumText: "Message",
  },
  {
    icon: telephone,
    infoLink: "tel:+923025827641",
    mediumText: "Phone",
  },
  {
    icon: whatsapp,
    infoLink: "https://wa.me/923025827641",
    mediumText: "WhatsApp",
  },
  {
    icon: skype,
    infoLink: "https://join.skype.com/invite/sVgM94TdZN2f",
    mediumText: "Skype",
  },
  {
    icon: messenger,
    infoLink: "https://m.me/61566015578270",
    mediumText: "Messenger",
  },
];

const Section2 = () => {
  return (
    <div className="my-10">
      <h3 className="text-3xl text-purple text-center underline" id="contact">
        Our Contact
      </h3>
      <div className="max-w-[1000px] mx-auto">
        <div className="px-2 gap-5 my-10 grid xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-[560px]:grid-cols-1">
          {contactInfo.map((info, i) => (
            <Card key={i} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
