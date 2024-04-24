import React from "react";
import { GoPlus } from "react-icons/go";

const Accordion = ({ item }) => {
  const [active, setActive] = React.useState(false);

  const handleActive = () => setActive(!active);

  const body = item.answer;

  console.log(active);

  return (
    <div className="container">
      <div className="accordion p-4 bg-[#2d2d2d] hover:bg-[#414141] mb-5">
        <div
          className={`${
            active ? "border-b border-stone-600 pb-3" : ""
          } flex justify-between items-center  `}
          onClick={handleActive}
        >
          <h4 className="question text-2xl">{item.question}</h4>
          <GoPlus
            className={`${
              active ? "rotate-45" : "rotate-0"
            } transition-all text-5xl`}
          />
        </div>
        <div
          className={`${
            active ? "max-h-[500px]" : "max-h-[0]"
          } overflow-hidden transition-all h-full flex flex-col gap-4`}
        >
          <div className="mt-5"></div>
          {item.answer.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
