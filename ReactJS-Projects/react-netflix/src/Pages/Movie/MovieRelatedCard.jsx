import React from "react";
import { FaPlay, FaPlusCircle } from "react-icons/fa";
import { baselmgUrl } from "../../Helpers/functions-general";

const MovieRelatedCard = ({ item }) => {
  return (
    <div className="card group">
      <div className="relative">
        <span className="absolute top-2 right-2 text-xs z-10 text-white font-Bold drop-shadow">
          {item.duration}
        </span>
        <button className="group-hover:opacity-100 transition-opacity cursor-pointer-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0  z-10">
          <FaPlay className="text-3xl text-white" />
        </button>
        <img
          src={`${baselmgUrl}/Movies/${item.image}`}
          alt=""
          className="w-full h-[150px] object-cover opacity-80"
        />
      </div>

      <div className="cardInfo max-h-[150px] p-2 text-white">
        <div className="flex justify-between items-center mb-3">
          <ul className="flex justify-center items-center gap-2">
            <li className="p-0.5 border border-white text-xs">
              <span>15+</span>
            </li>
            <li className="p-0.5 border border-white text-[10px]">
              <span>HD</span>
            </li>
            <li className="flex">
              <span className="text-xs">{item.year}</span>
            </li>
          </ul>
          <button>
            <FaPlusCircle />
          </button>
        </div>
        <p className="text-sm">{item.description}</p>
      </div>
    </div>
  );
};

export default MovieRelatedCard;
