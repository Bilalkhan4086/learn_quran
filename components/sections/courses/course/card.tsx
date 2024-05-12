import React from "react";

const Card = () => {
  return (
    <div className="my-5 max-lg:p-6 p-20 ring-1 ring-gray-100">
      <h3 className="text-[24px]">What Will I Learn?</h3>

      <ul className="flex justify-between  max-[1100px]:justify-center flex-wrap">
        {[1, 2, 3, 4, 5].map((_, i) => {
          return (
            <>
              <li className="max-w-[440px] ml-4 list-disc my-2" key={i}>
                Which titles are used by Allah Almighty to address the
                believers?
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
