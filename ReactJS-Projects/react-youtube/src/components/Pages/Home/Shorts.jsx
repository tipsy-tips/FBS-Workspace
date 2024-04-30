import React from "react";

import { BiCaretRight } from "react-icons/bi";
import { FaCaretRight } from "react-icons/fa";
import { PiCaretDown, PiCaretRight } from "react-icons/pi";

const Shorts = ({ item }) => {
  return (
    <div className="">
      <div className="h-fit w-[230px] mb-3">
        <img
          src={item.thumbnail}
          alt=""
          className="w-[230px] h-[400px] rounded-xl"
        />
        <div className="mt-4">
          <div>
            <h2 className="font-bold">{item.title}</h2>
            <h4 className="text-gray-500">{item.views} views</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorts;
