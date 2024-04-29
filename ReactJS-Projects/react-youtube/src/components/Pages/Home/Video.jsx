import React from "react";

const Video = () => {
  return (
    <div className="h-fit mb-8">
      <div className="playback relative mb-3">
        <img
          src="https://placeholder.com/400"
          className="w-[350px] h-[180px] object-cover rounded-lg"
          alt=""
        />
        <h4 className="absolute bottom-1 right-2 z-10 bg-black/50 px-1 rounded-md text-white text-xs">
          5:32:12
        </h4>
      </div>
      <div className="flex gap-3">
        <div className="">
          <img
            src="https://placeholder.com/100"
            alt=""
            className="w-[40px] h-[40px] rounded-full"
          />
        </div>
        <div>
          <h2 className="font-semibold text">Lorem ipsum dolor sit amet.</h2>
          <h3 className="text-gray-700 text-[14px]">MUSIC SKY</h3>
          <h2 className="text-sm text-gray-700">
            <span>20k views</span> <span className="dot"></span>{" "}
            <span>Streamed 22hrs ago</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Video;
