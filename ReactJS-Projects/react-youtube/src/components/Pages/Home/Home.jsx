import React from "react";
import Header from "../Partials/Header";
import SideBar from "../Partials/SideBar";
import CategorySlider from "../Partials/CategorySlider";
import Video from "./Video";
import Shorts from "./Shorts";
import { videos, shorts } from "./videoData";
import shortsIcon from "../../../../public/assets/images/Icons/red-shorts.svg";
import { PiCaretDown } from "react-icons/pi";

const Home = () => {
  return (
    <div className="h-screen fixed bg-white">
      <Header />
      <div className="grid grid-cols-[0fr_1fr]">
        <SideBar />
        <div className="">
          <div className="mb-5">
            <CategorySlider />
          </div>
          <div className="p-5 h-screen overflow-x-scroll">
            <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
              {videos.map((item, index) => (
                <Video key={index} item={item} />
              ))}
            </div>
            <div className="flex mt-10 gap-5 mb-5">
              <img src={shortsIcon} alt="" className="size-[28px]" />
              <h3 className="font-bold text-xl">Shorts</h3>
            </div>
            <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(230px,1fr))] ">
              {shorts.map((item, index) => (
                <Shorts key={index} item={item} />
              ))}
            </div>
            <div className="mb-10 relative flex justify-center before:content-[''] before:w-full before:h-[1px] before:bg-[#d2d2d2] before:absolute before:top-5 before:z-0  ">
              <button className="px-32 py-2 bg-transparent hover:bg-[#d2d2d2] rounded-full flex items-center gap-3 font-semibold text-sm bg-white text-black border border-gray-200 z-10 isolate">
                Show more <PiCaretDown className="text-black text-lg" />
              </button>
            </div>
            <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] pb-20">
              {videos.map((item, index) => (
                <Video key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
