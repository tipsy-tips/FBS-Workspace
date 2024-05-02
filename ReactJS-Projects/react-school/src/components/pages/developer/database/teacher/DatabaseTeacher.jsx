import React from "react";
import { AiOutlineMail, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

const DatabaseTeacher = ({ showInfo, setShowInfo }) => {
  const handleShowInfo = () => setShowInfo(!showInfo);
  return (
    <div
      className={`information absolute transition-all top-0 border-l border-line min-h-[calc(100vh-65px)] w-1/4 ${
        showInfo ? "right-0" : "-right-1/4 overflow-hidden"
      }`}
    >
      <div className="relative p-10">
        <div className="text-center mb-8">
          <h3 className="text-stone-400">SC111000</h3>
          <img
            src="https://placeholder.com/80"
            alt=""
            className="size-[120px] mx-auto rounded-full mb-4"
          />
          <h3 className="mb-1">Sir June</h3>
          <small className="opacity-60">Science 7 Teacher</small>
          <ul className="flex gap-5  mt-5 justify-center items-center">
            <li>
              <button className="tooltip text-xl" data-tooltip="Account">
                <AiOutlineUser />
              </button>
            </li>
            <li>
              <button className="tooltip text-xl" data-tooltip="Message">
                <AiOutlineMessage />
              </button>
            </li>
            <li>
              <button className="tooltip text-xl" data-tooltip="Email">
                <AiOutlineMail />
              </button>
            </li>
          </ul>
        </div>
        <h5 className="mb-3">About</h5>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          perferendis obcaecati hic eius laboriosam tempore!
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="info-box">
            <h4>Age</h4>
            <p className="text-xs">22</p>
          </div>
          <div className="info-box">
            <h4>Gender</h4>
            <p className="text-xs">Male</p>
          </div>
          <div className="info-box">
            <h4>Birthday</h4>
            <p className="text-xs">June 28, 2002</p>
          </div>
          <div className="info-box">
            <h4>Adress</h4>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <div className="absolute p-2 -left-[30px] top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={handleShowInfo}
          className="bg-secondary rounded-full size-[40px] flex justify-center items-center"
        >
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default DatabaseTeacher;
