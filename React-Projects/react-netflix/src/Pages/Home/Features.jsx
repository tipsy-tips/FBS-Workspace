import React from "react";
import { baselmgUrl } from "../../Helpers/functions-general";

const Features = ({ item }) => {
  return (
    <div className="features border-b-[10px] border-t-[10px] border-[#232323] bg-black py-20 ">
      <div className="container">
        <div className="grid grid-cols-2 grid-gap-5">
          <div className="content self-center text-white">
            <h2 className="text-5xl mb-4">{item.header}</h2>
            <p className="text-xl">{item.body}</p>
          </div>
          <div className="image justify-self-center">
            <img src={`${baselmgUrl}/${item.img}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
