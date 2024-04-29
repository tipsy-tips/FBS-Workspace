import React from "react";
import { FaCaretRight, FaMicrophone } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineVideoCall } from "react-icons/md";
import { PiBell, PiCaretRight, PiMagnifyingGlassLight } from "react-icons/pi";
import shorts from "../../../../public/assets/images/Icons/shorts.svg";
import subs from "../../../../public/assets/images/Icons/subs.svg";
import caretRight from "../../../../public/assets/images/Icons/caretRight.svg";
import feedback from "../../../../public/assets/images/Icons/feedback.svg";
import gaming from "../../../../public/assets/images/Icons/gaming.svg";
import help from "../../../../public/assets/images/Icons/help.svg";
import history from "../../../../public/assets/images/Icons/history.svg";
import home from "../../../../public/assets/images/Icons/home.svg";
import kids from "../../../../public/assets/images/Icons/kids.svg";
import likeVideos from "../../../../public/assets/images/Icons/likedvideos.svg";
import movies from "../../../../public/assets/images/Icons/movies.svg";
import music from "../../../../public/assets/images/Icons/music.svg";
import news from "../../../../public/assets/images/Icons/news.svg";
import playlists from "../../../../public/assets/images/Icons/playlists.svg";
import sports from "../../../../public/assets/images/Icons/sports.svg";
import premium from "../../../../public/assets/images/Icons/premium.svg";
import fashion from "../../../../public/assets/images/Icons/fashion.svg";
import report from "../../../../public/assets/images/Icons/report.svg";
import settings from "../../../../public/assets/images/Icons/settings.svg";
import trending from "../../../../public/assets/images/Icons/trending.svg";
import watchLater from "../../../../public/assets/images/Icons/watchlater.svg";
import ytMusic from "../../../../public/assets/images/Icons/yt-music.svg";

const Header = () => {
  return (
    <div>
      <div className="top-nav px-5">
        <header className="py-1 flex gap-5 justify-between">
          <div className="logo-burger flex items-center gap-5">
            <div className="burger__menu space-y-1">
              <span className="block h-0.5 w-5 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-5 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-5 animate-pulse bg-gray-600"></span>
            </div>
            <div className="">
              <img
                src="public\assets\images\youtubelogo.svg"
                alt=""
                className="w-[100px] h-[50px]"
              />
            </div>
          </div>
          <div className="search__bar flex items-center">
            <label className="pl-5 h-[40px] min-w-[400px] rounded-l-full flex items-center gap-2 bg-transparent border border-gray-300 ">
              <input
                type="text"
                className="grow bg-transparent outline-none text-black"
                placeholder="Search"
              />
            </label>
            <div className="h-[40px] w-full flex px-5 items-center bg-[#f8f8f8] hover:bg-[#d9d9d9] rounded-r-full border-y border-gray-400">
              <PiMagnifyingGlassLight className="text-2xl  text-black" />
            </div>

            <div className="ml-5 bg-[#f2f2f2] hover:bg-[#d9d9d9] flex items-center rounded-full p-3 min-h-[40px] min-w-[40px]">
              <FaMicrophone className="text-xl text-black" />
            </div>
          </div>
          <div className="self-center">
            <ul className="flex items-center justify-center gap-2">
              <li className="bg-transparent hover:bg-[#e5e5e5] flex items-center rounded-full p-2 h-[40px] w-[40px]">
                <MdOutlineVideoCall className="text-3xl text-black" />
              </li>
              <li className="bg-transparent hover:bg-[#e5e5e5] flex items-center rounded-full p-2 h-[40px] w-[40px]">
                <PiBell className="text-3xl text-black" />
              </li>
              <li>
                <div className="profile w-[40px] h-[40px] ml-3">
                  <img
                    src="https://placeholder.com/400"
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
