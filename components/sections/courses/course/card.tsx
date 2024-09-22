import React from "react";

interface CardProps {
  listOfQuestions: string[];
}

const Card = ({ listOfQuestions }: CardProps) => {
  return (
    <div className="my-5 max-lg:p-6 p-20 ring-1 ring-gray-100 ">
      <h3 className="text-[24px] text-white">What Will I Learn?</h3>

      <ul className="flex justify-between  max-[1100px]:justify-center flex-wrap">
        {listOfQuestions?.map((question, i) => {
          return (
            <>
              <li
                className="max-w-[440px] ml-4 list-disc my-2 text-white"
                key={i}
              >
                {question}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
