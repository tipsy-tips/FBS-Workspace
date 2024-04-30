import React from "react";

const Video = ({ item }) => {
  return (
    <div className="size-fit mb-2">
      <div className="playback relative mb-3">
        <img
          src={item.thumbnail}
          className="w-[350px] h-[180px] object-cover rounded-lg"
          alt=""
        />
        <h4 className="absolute bottom-1 right-2 z-10 bg-black/50 px-1 rounded-md text-white text-xs">
          {item.duration}
        </h4>
      </div>
      <div className="flex gap-3">
        <div className="">
          <img
            src={item.avatar}
            alt=""
            className="max-w-[40px] max-h-[40px] object-cover rounded-full"
          />
        </div>
        <div>
          <h2 className="font-semibold text">{item.title}</h2>
          <h3 className="text-gray-700 text-[14px]">{item.user}</h3>
          <h2 className="text-sm text-gray-700">
            <span>{item.views} views</span> <span className="dot"></span>{" "}
            <span>Streamed {item.date}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Video;
