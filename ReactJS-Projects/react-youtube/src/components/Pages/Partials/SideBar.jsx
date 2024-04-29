import React from "react";

import { GoHomeFill } from "react-icons/go";
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

const SideBar = () => {
  return (
    <div className="side__menu py-3 w-[300px] h-screen overflow-y-scroll bg-white">
      <ul className="flex w-[230px] py-3 mx-auto flex-col border-b border-gray-200">
        <li className="bg-[#f0f0f0] hover:bg-[#f2f2f2] py-1.5 rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={home} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px] font-bold">Home</h3>
          </div>
        </li>
        <li className="py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={shorts} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Shorts</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={subs} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Subscriptions</h3>
          </div>
        </li>
      </ul>
      <ul className="flex w-[230px] py-3 mx-auto flex-col border-b border-gray-200">
        <li className="py-1.5 rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <h3 className="text-[14px] font-bold">You</h3>
            <img src={caretRight} className="h-[18px] w-[18px]" alt="" />
          </div>
        </li>
        <li className="py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={history} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">History</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={playlists} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Playlists</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={watchLater} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Watchlater</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={likeVideos} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Liked videos</h3>
          </div>
        </li>
      </ul>
      <ul className="flex w-[230px] py-3 mx-auto flex-col border-b border-gray-200">
        <li className="py-1.5 rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <h3 className="text-[15px] font-bold">Explore</h3>
          </div>
        </li>
        <li className="py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={trending} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Trending</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={music} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Music</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={movies} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Movies</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={gaming} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Gaming</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={news} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">News</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={sports} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Sports</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={fashion} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Fashion & Beauty</h3>
          </div>
        </li>
      </ul>
      <ul className="flex w-[230px] py-3 mx-auto flex-col border-b border-gray-200">
        <li className="py-1.5 rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <h3 className="text-[15px] font-bold">More from Youtube</h3>
          </div>
        </li>
        <li className="py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={premium} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Youtube Premium</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={ytMusic} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Youtube Music</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={kids} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Youtube Kids</h3>
          </div>
        </li>
      </ul>
      <ul className="flex w-[230px] py-3 mx-auto flex-col border-b border-gray-200">
        <li className="py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={settings} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Settings</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={report} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Report History</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={help} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Help</h3>
          </div>
        </li>
        <li className=" py-1.5 hover:bg-[#f2f2f2] rounded-lg mx-2">
          <div className="flex gap-5 pl-4 items-center">
            <img src={feedback} className="h-[24px] w-[24px]" />
            <h3 className="text-[14px]">Send Feedback</h3>
          </div>
        </li>
      </ul>
      <ul className="flex w-[230px] py-3 px-4 mx-auto flex flex-wrap text-xs text-gray-500 font-bold">
        <li className="mb-1 mr-2">About</li>
        <li className="mb-1 mr-2">Press</li>
        <li className="mb-1 mr-2">Copyright</li>
        <li className="mb-1 mr-2">Contact us</li>
        <li className="mb-1 mr-2">Creators</li>
        <li className="mb-1 mr-2">Advertise</li>
        <li className="mb-1 mr-2">Developers</li>
      </ul>
      <ul className="flex w-[230px] py-3 px-4 mx-auto flex flex-wrap text-xs text-gray-500 font-bold">
        <li className="mb-1 mr-2">Terms</li>
        <li className="mb-1 mr-2">Privacy</li>
        <li className="mb-1 mr-2">Policy & Safety</li>
        <li className="mb-1 mr-2">How youtube works</li>
        <li className="mb-1 mr-2">Test new features</li>
      </ul>
      <ul className="flex w-[230px] py-3 px-4 mx-auto flex flex-wrap text-xs text-gray-500 font-bold">
        <li className="mb-1 mr-2">© 2024 Google LLC</li>
      </ul>
    </div>
  );
};

export default SideBar;
