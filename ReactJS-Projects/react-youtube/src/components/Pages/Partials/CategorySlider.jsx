import React from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <PiCaretRightBold />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <PiCaretLeftBold />
    </div>
  );
}

const CategorySlider = () => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container px-5">
      <Slider {...settings}>
        <div>
          <h3>All</h3>
        </div>
        <div>
          <h3>Music</h3>
        </div>
        <div>
          <h3>Philippine Music</h3>
        </div>
        <div>
          <h3>Greatest hits albums</h3>
        </div>
        <div>
          <h3>Live</h3>
        </div>
        <div>
          <h3>The Hot 100</h3>
        </div>
        <div>
          <h3>Contemporary R&B</h3>
        </div>
        <div>
          <h3>NBA</h3>
        </div>
        <div>
          <h3>Soft Rock</h3>
        </div>
        <div>
          <h3>Chill-out music</h3>
        </div>
        <div>
          <h3>Deep House</h3>
        </div>
        <div>
          <h3>Reggae</h3>
        </div>
        <div>
          <h3>Contemporary Worship Music</h3>
        </div>
        <div>
          <h3>Electric guitar</h3>
        </div>
        <div>
          <h3>Rapping</h3>
        </div>
        <div>
          <h3>Recently uploaded</h3>
        </div>
        <div>
          <h3>New to you</h3>
        </div>
      </Slider>
    </div>
  );
};

export default CategorySlider;
