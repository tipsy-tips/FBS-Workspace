import React from "react";
import {
  FaAudioDescription,
  FaPlay,
  FaPlusCircle,
  FaRegClosedCaptioning,
  FaThumbsUp,
  FaTimesCircle,
} from "react-icons/fa";
import { baselmgUrl } from "../../Helpers/functions-general";
import { LiaAudioDescriptionSolid } from "react-icons/lia";
import MovieRelatedCard from "./MovieRelatedCard";
import { movies } from "./data";
import Footer from "../../Partials/Footer";

const ModalMovieInfo = ({ setMovieModal, showMovieData }) => {
  const handleClose = () => setMovieModal(false);

  const getRelatedGenre = movies.filter(
    (movies) =>
      movies.genre === showMovieData.genre &&
      movies.title !== showMovieData.title
  );

  return (
    <div className="fixed top-0 left-0  isolate w-full h-full z-10">
      <div className="backdrop h-full w-full absolute top-0 left-0 bg-black/50 z-[-1]"></div>
      <main className="max-w-[1200px] max-h-[900px]  bg-[#181818] w-full  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z[10] rounded-md">
        <div className="modal__banner ">
          <div className="movie__info relative">
            <img
              src={`${baselmgUrl}/Movies/${showMovieData.image}`}
              alt=""
              className="opacity-80 brightness-75 w-[1200px] h-[300px] object-cover"
            />
            <button
              type="button"
              className="absolute top-4 right-4 text-[#141414]"
            >
              <FaTimesCircle
                className="text-white text-4xl"
                onClick={handleClose}
              />
            </button>

            <div className=" absolute left-[20px] bottom-[30px] z-10">
              <h2 className="text-4xl mb-5 text-white">
                {showMovieData.title}
              </h2>
              <ul className="flex items-center gap-2 text-white">
                <li>
                  <button className="py-1 px-3 text-[#141414] flex items-center gap-2 bg-white rounded-md text-sm">
                    <FaPlay /> Play
                  </button>
                </li>

                <li>
                  <button>
                    <FaPlusCircle />
                  </button>
                </li>
                <li>
                  <button>
                    <FaThumbsUp />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="p p-4 grid grid-cols-[3fr_1fr] gap-5 py-5">
            <div className="info text-white">
              <div className="duration mb-6">
                <p className="flex gap-2 items-center mb-2">
                  <span className="text-[#46d369]">
                    {showMovieData.match} Match
                  </span>
                  <span className="opacity-50">{showMovieData.year}</span>{" "}
                  <span className="opacity-50">{showMovieData.duration}</span>
                  <span className="px-1 border border-white text-xs">HD</span>
                  <span className="px-1 border border-white text-xs">CC</span>
                  <span className="px-1 border border-white text-xs">AD</span>
                </p>
                <p className="px-1 border text-xs border-white inline text-">
                  {showMovieData.rating}+
                </p>
              </div>

              <p>{showMovieData.description}</p>
            </div>

            <ul>
              <li className="text-stone-100 mb-3 text-sm">
                <span className="text-stone-500">Cast: </span>
                {showMovieData.cast}
              </li>

              <li className="text-stone-100 mb-3 text-sm">
                <span className="text-stone-500">Genres: </span>
                {showMovieData.genre}
              </li>

              <li className="text-stone-100 mb-3 text-sm">
                <span className="text-stone-500">This Movie is: </span>{" "}
                {showMovieData.type}
              </li>
            </ul>
          </div>
        </div>

        <h3 className="pl-4 my-3 text-white text-xl">More like this</h3>
        <div className="grid grid-cols-3 gap-4 max-h-[300px] pb-10 overflow-y-auto px-4">
          {getRelatedGenre.map((item, key) => (
            <MovieRelatedCard item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ModalMovieInfo;
