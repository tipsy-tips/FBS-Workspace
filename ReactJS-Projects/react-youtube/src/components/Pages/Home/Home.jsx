import React from "react";
import Header from "../Partials/Header";
import SideBar from "../Partials/SideBar";
import Slider from "react-slick";
import CategorySlider from "../Partials/CategorySlider";
import Video from "./Video";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-[0fr_1fr]">
        <SideBar />
        <div className="p-5">
          <div className="mb-5">
            <CategorySlider />
          </div>
          <div className="grid grid-cols-5 gap-5 auto-rows-max">
            <Video />
            <Video />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
