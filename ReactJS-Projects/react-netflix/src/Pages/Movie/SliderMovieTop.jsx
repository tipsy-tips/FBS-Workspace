import React from "react";
import Slider from "react-slick";
import "../../index.css";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { baselmgUrl } from "../../Helpers/functions-general";

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      // style={{ ...style, display: "flex", background: "green"}}
      onClick={onClick}
    >
      <PiCaretRightBold />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "flex", background: "green"}}
      onClick={onClick}
    >
      <PiCaretLeftBold />
    </div>
  );
}

const SliderMovieTop = ({
  setMovieModal,
  movies,
  setMovieData,
  grouping,
  sliderHeader,
}) => {
  const handleMovieModal = (data) => {
    setMovieModal(true);
    setMovieData(data);
  };

  const getGroupings = movies.filter((movie) => movie.grouping === grouping);

  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-container">
      <div className="container">
        <div className="relative mb-5">
          <h3 className="text-2xl mb-2">{sliderHeader}</h3>
          <Slider {...settings}>
            {getGroupings.map((movie) => (
              <div className="thumbnail px-2">
                <button
                  className="relative"
                  onClick={() => handleMovieModal(movie)}
                >
                  <div className="topImg grid grid-cols-2 ">
                    <img
                      src={`${baselmgUrl}/Movies/Numbering/${movie.top}`}
                      alt=""
                      className="self-center w-full h-full object-cover object-left"
                    />
                    <img
                      src={`${baselmgUrl}/Movies/${movie.image}`}
                      alt=""
                      className="rounded-md w-[380px] h-[200px] bg-cover object-cover z-10"
                    />
                  </div>
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderMovieTop;