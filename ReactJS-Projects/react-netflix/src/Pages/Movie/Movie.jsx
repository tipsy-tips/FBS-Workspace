import React from "react";
import { baselmgUrl } from "../../Helpers/functions-general";
import { Link } from "react-router-dom";
import { GoBell, GoSearch } from "react-icons/go";
import { PiCaretDownFill, PiInfo, PiPlayFill } from "react-icons/pi";
import SliderMovie from "./SliderMovie";
import ModalMovieInfo from "./ModalMovieInfo";
import { movies } from "./data";

const Movie = () => {
  const [showMovieModal, setMovieModal] = React.useState(false);

  const [showMovieData, setMovieData] = React.useState(null);

  return (
    <div>
      <div className="bg-[#141414] text-white">
        <div className="banner bg-[url('/public/images/Movies/inception-banner.jpg')] h-screen bg-cover relative isolate">
          <div className="bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,00.2)]">
            <div className="backdrop bg-black/30 absolute top-0 left-0 h-full w-full -z-10" />
            <div className="container ">
              <div className="header py-4 px-2 ">
                <div className="flex justify-between items-center text-white">
                  <div className="flex items-center justify-center gap-10 ">
                    <img
                      src={`${baselmgUrl}home/logo.png`}
                      alt=""
                      className="w-[130px] h-[50px] object-cover"
                    />
                    <nav className="">
                      <ul className="flex items-center gap-5 ">
                        <li>
                          <Link to="#">Home</Link>
                        </li>
                        <li>
                          <Link to="#">TV Shows</Link>
                        </li>
                        <li>
                          <Link to="#">Movies</Link>
                        </li>
                        <li>
                          <Link to="#">New & Popular</Link>
                        </li>
                        <li>
                          <Link to="#">My List</Link>
                        </li>
                        <li>
                          <Link to="#">Browse by language</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="">
                    <ul className="flex items-center justify-center gap-5">
                      <li>
                        <button>
                          <GoSearch className="text-2xl" />
                        </button>
                      </li>
                      <li>
                        <button>
                          <GoBell className="text-2xl" />
                        </button>
                      </li>
                      <li>
                        <button className="flex items-center gap-2">
                          <img
                            src="https://placeholder.com/30"
                            alt=""
                            className="rounded-md"
                          />
                          <PiCaretDownFill className="text-2xl" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[5%] bottom-[30%]  text-white">
          <h1 className="text-[70px] mb-5">{}</h1>
          <ul className="flex items-center gap-5">
            <li>
              <button className="px-5 py-1.5 rounded-md bg-white text-black font-Bold flex items-center gap-3">
                <PiPlayFill className="text-3xl " />
                Trailer
              </button>
            </li>
            <li>
              <button className="px-5 py-1.5 rounded-md bg-[#656c65] flex items-center gap-3">
                <PiInfo className="text-3xl" />
                More Info
              </button>
            </li>
          </ul>
        </div>
        <div className="slider-wrapper py-20 overflow-hidden">
          <SliderMovie
            setMovieModal={setMovieModal}
            movies={movies}
            setMovieData={setMovieData}
            grouping="Trending"
            sliderHeader={"Trending Now"}
          />
          <SliderMovie
            setMovieModal={setMovieModal}
            movies={movies}
            setMovieData={setMovieData}
            grouping="Asian"
            sliderHeader={"Asian Movies"}
          />
        </div>
      </div>

      {showMovieModal && (
        <ModalMovieInfo
          setMovieModal={setMovieModal}
          movies={movies}
          showMovieData={showMovieData}
        />
      )}
    </div>
  );
};

export default Movie;
