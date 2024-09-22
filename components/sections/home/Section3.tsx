import { faqs } from "@/constants/faqs";
import React from "react";

const Section3 = () => {
  return (
    <>
      <div className=" pt-16 pb-20 bg-blue-200">
        <div className="flex flex-col lg:flex-row justify-between  gap-10">
          <div className="left-div ">
            <h2 className="font-medium text-3xl text-kaizenred lg:text-4xl mb-4 ">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="right-div">
            {faqs.map((obj) => (
              <>
                <h5
                  key={obj.question}
                  className="font-bold mb-3 text-kaizenred"
                >
                  {obj.question}
                </h5>
                  <p className="ml-4 mb-3 text-orange-50" dangerouslySetInnerHTML={{ __html: obj.answer }} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
