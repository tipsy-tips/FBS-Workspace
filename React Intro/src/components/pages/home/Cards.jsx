import React from "react";
import { Link } from "react-router-dom";
import { baseImgUrl } from "../../helpers/functions-general";

const Cards = ({ item }) => {
  return (
    <div
      className={`flex h-full mb-10 ${
        item.isImgContent ? "" : "flex-row-reverse"
      } ${item.bg}`}
    >
      <img
        className="flex-auto w-[50%] object-cover"
        src={`${baseImgUrl}/${item.img}`}
        alt=""
      />
      <div className="content h-full flex-auto w-[50%] flex gap-5 flex-col text-center justify-center self-center p-10">
        <h2>{item.title}</h2>
        <p className="text-xl max-w-[600px] mx-auto">{item.content}</p>
        <Link to={`${item.link}`} className="btn btn-outline w-10 mx-auto">
          {item.linkLabel}
        </Link>
      </div>
    </div>
  );
};

export default Cards;
